const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel=require('../models/captain.model')

const captainService=require('../services/captain.service')
const{validationResult}=require('express-validator')

module.exports.registerCaptain=async(req,res,next)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
const{fullname,email,password,vehicle}=req.body;
const isCaptainAlreadyExist=await captainModel.findOne({email})
if(isCaptainAlreadyExist){
    return res.status(400).json({message:'Captain already exist'})
}
const hashedPassword=await captainModel.hashedPassword(password);

const captain=await captainService.createCaptain({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword,
    color:vehicle.color,
    plate:vehicle.plate,
    capacity:vehicle.capacity,
    vehicleType:vehicle.vehicleType
})
const token=captain.generateAuthToken();
res.status(201).json({token,captain})
}

module.exports.loginCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
    const{email,password}=req.body;
    const captain=await captainModel.findOne({email}).select('+password');
    if(!captain){
        res.status(401).json({message:'invalid email or password'})

    }
    const ismatch=await captain.comparePassword(password)
    if(!ismatch){
        res.status(401).json({message:'invalid email or password'})
    }

    const token=captain.generateAuthToken();
    res.cookie('token',token)
    res.status(201).json({token,captain});
}


module.exports.getCaptainProfile=async(req,res,next)=>{
    res.status(200).json(req.captain);
}

module.exports.logoutCaptain=async(req,res,next)=>{
res.clearCookie('token');
const token=req.cookies.token||req.headers.authorization.split(' ')[1];
await blacklistTokenModel.create({token});
res.status(200).json({message:'logged out'})
}