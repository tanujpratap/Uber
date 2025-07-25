const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
    const jwt=require('jsonwebtoken')

const captainSchema=new mongoose.Schema({
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
lowercase:true,

match:[/^|S+@|S+|.|S+S/,'Please enter a valisd email']

},
password:{
    type:String,
    required:true,
    select:false,
   
},
socketId:{
    type:String
},
status:{
    type:String,
    enum:['active','inactive'],
    default:'inactive',

},
vehicle:{
    color:{
        type:String,
        required:true,
        minlength:[3,'Color must be atleast 3 character long']
    },
    plate:{
        type:String,
        required:true,
        minlength:[3,'plate must be atleast 3 character long']


    },
    capacity:{
        type:Number,
        required:true,
        min:[1,'capacity must be atleast 1']

    },
    vehicleType:{
        type:String,
        required:true,
        enum:['car','auto','bike']
    },
    location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
    }

}

})

captainSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}

captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}
captainSchema.statics.hashedPassword=async function(password){
    return await bcrypt.hash(password,10)
}
const captainModel=mongoose.model('captain',captainSchema)
module.exports=captainModel;