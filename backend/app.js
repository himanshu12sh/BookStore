import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from "./database/db.js";
import bookRoute from "./route/bookRoute.js";
import userRouter from "./route/userRouter.js";
dotenv.config()

const app=express()
const port=process.env.PORT||3000
const DATABASE=process.env.DATABSE_URL

app.use(cors())
app.use(express.json())
connectDB(DATABASE)

app.use('/api',bookRoute)
app.use('/user',userRouter)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})


