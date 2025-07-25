const mongoose=require('mongoose')
const blacklistTokenSchema=new mongoose.Schema({
    token:{
        type:String,
        requirred:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400 //24hrs in seconds
    }
})
module.exports=mongoose.model('BlackListToken',blacklistTokenSchema)