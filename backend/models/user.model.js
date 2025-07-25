const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
    fullname:{

    
    firstname:{
        type:String,
        required:true,
        minlength:[3,'first name must be at least 3 characters']



    },
    lastname:{
type:String,
        required:true,
        minlength:[3,'last name must be at least 3 characters']
    }
},
email:{
type:String,
required:true,
unique:true,
minlength:[5,'Email must be atleast 5 characters long']

},
password:{
    type:String,
    required:true,
    select:false,
   
},
socketId:{
    type:String
}

})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.statics.hashedPassword=async function(password){
    return await bcrypt.hash(password,10)
}

const userModel=mongoose.model('user',userSchema)
module.exports=userModel