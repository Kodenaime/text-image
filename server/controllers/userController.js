import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { useFlutterwave } from 'flutterwave-react-v3';

import transactionModel from '../models/transactionModel.js'


const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password) {
            return res.json({success: false, message: 'Missing Details'})
        } 

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email, 
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({success: true, token, user: {name: user.name}})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email})

        if(!user) {
            return res.json({success:false, message: 'User does not exist'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch) {
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

            res.json({success: true, token, user: {name: user.name}})

        } else {
            return res.json({success:false, message: 'Invalid Credentials'})
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


const userCredits = async (req, res) => {
    try {
        const{userId} = req.body

        const user = await userModel.findById(userId)
        res.json({success: true, credits: user.creditBalance, user: {name: user.name}})

    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}


const payInstance = new useFlutterwave({
    public_id: process.env.FLUTTERWAVE_PUBLIC_KEY,
    secret_key: process.env.FLUTTERWAVE_SECRET_KEY
});

const paymentFlw = async(req, res) => {
    try {
        
        const {userId, planId} = req.body
        const userData = await userModel.findById(userId)

        if(!userId || !planId) {
            return res.json({success: false, message: "Missing Details"})
        }

        let credits, plan, amount, date

        switch (planId) {
            case 'Single':
                plan = 'Single'
                credits = 10
                amount = 1000                
                break;

            case 'Basic':
                plan = 'Basic'
                credits = 20
                amount = 2000                
                break;

            case 'Advanced':
                plan = 'Advanced'
                credits = 50
                amount = 5000                
                break;

            case 'Premium':
                plan = 'Premium'
                credits = 100
                amount = 10000                
                break;

            case 'Business':
                plan = 'Business'
                credits = 210
                amount = 20000                
                break;

            case 'Organisation':
                plan = 'Organisation'
                credits = 350
                amount = 30000                
                break;

            default:
                return res.json({success: false, message: "Plan not Found"});
        }

        date = Date.now();

        const transactionData = {
            userId, plan, amount, credits, date
        }
        const newTransaction = await transactionModel.create(transactionData)
        const options = {
            amount: amount,
            currency: process.env.CURRENCY,
            receipt: newTransaction._id
        }
        await payInstance.orders.create(options, (error, order) => {

            if (error) {
                console.log(error);
                return res.json({success: false, message: error})
            } 
            res.json({success: true, order})
        })

            

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

export {registerUser, loginUser, userCredits, paymentFlw}