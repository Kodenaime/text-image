import express from 'express'
import {registerUser, loginUser} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

export default userRouter


// port for register http://localhost:4000/api/user/register
// port for login http://localhost:4000/api/user/login