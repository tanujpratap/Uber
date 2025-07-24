const dotenv=require('dotenv').config();
const express=require('express')
const cors=require('cors');
const userRoutes=require('./routes/user.routes')
const app=express()
const connectToDb=require('./db/db')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectToDb();

app.use('/users',userRoutes)

module.exports=app;