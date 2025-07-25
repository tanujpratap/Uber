const dotenv=require('dotenv').config();
const express=require('express')
const cors=require('cors');
const userRoutes=require('./routes/user.routes')
const captainRoutes=require('./routes/captain.routes')
const app=express()
const connectToDb=require('./db/db')
const cookieParser=require('cookie-parser');
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
connectToDb();

app.use('/users',userRoutes)
app.use('/captains',captainRoutes)
module.exports=app;