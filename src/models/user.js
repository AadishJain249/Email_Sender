// mongo schema
const mongo=require('mongoose')
const userSchema=new mongo.Schema(
    {
        userID:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            unique:true,
            required:true,
            trim:true,
            lowercase:true,
            
               },
        PhoneNO:{
            type:Number,
        },
    }
)
const User=mongo.model('User',userSchema
)
module.exports=User