import express from 'express'
import {registerUser, loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', userAuth, userCredits)

export default userRouter


// port for register http://localhost:4000/api/user/register
// port for login http://localhost:4000/api/user/login

// port for user credits http://localhost:4000/api/user/credits