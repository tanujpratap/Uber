const userModel=require('../models/user.model')
const userService=require('../services/user.service')
const {validationResult}=require('express-validator')
const cookieParser=require('cookie-parser')
const blacklistTokenModel=require('../models/blacklistToken.model')
module.exports.registerUser=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname, email,password}=req.body;
   const  isUserAlreadyExist=await userModel.findOne({email})
   if(isUserAlreadyExist){
    return res.status(400).json({message:'user already exist'})
   }

const hashedPassword=await userModel.hashedPassword(password)
const user=await userService.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword
})
const token=user.generateAuthToken()
res.status(201).json({token,user});

}

module.exports.loginUser=async(req,res)=>{
      const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const{email,password}=req.body;
    const user=await userModel.findOne({email}).select('+password');
    if(!user){
        res.status(401).json({message:'Invalid email or password'})
    }
    const ismatch=await user.comparePassword(password)
    if(!ismatch){
res.status(401).json({message:'Invalid email or password'})

    }
    const token=user.generateAuthToken()
   res.cookie('token',token);
res.status(201).json({token,user});


}


module.exports.getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser=async(req,res,next)=>{
res.clearCookie('token');
const token=req.cookies.token||req.headers.authorization.split(' ')[1];
await blacklistTokenModel.create({token});
res.status(200).json({message:'Logged Out'})
}