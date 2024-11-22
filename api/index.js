import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config()
const app=express()
mongoose.connect(process.env.MONGOOS_LINK).then(()=>{
  console.log('Connected to MongoDB')
}).catch(()=>{
  console.log(err)
})
app.use(express.json())
app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)

app.listen(3000,()=>{
  console.log("server is running on port 3000",)
})
//0boI1w9U5I2bjb5o