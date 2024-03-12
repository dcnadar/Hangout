import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const user_schema = new mongoose.Schema(
    {
        firstname:{
            type: String,
            required:true,
            min:2,
            max:50
        },
        lastname:{
            type: String,
            required:true,
            min:2,
            max:50
        },
        username:{
            type: String,
            required:true
        },
        email:{
            type: String,
            required:true,
            unique:true
        },
        password:{
            type: String,
            required:true,
            unique:true,
            max:50
        },
        profilePhoto:{
            type:String,
            default:'',

        },
        friends:
        {
            type:Array,
            default:[]
        },
        location:String,
        occupation:String,
        gender:String,
        viewedProfile: Number,
        impression:Number
    },
    {timestamps:true}
)


user_schema.methods.isPasswordCorrect= async function (password)
{
   return  await bcrypt.compare(password, this.password) 
}
user_schema.methods.createAcessToken = async function()
{ 

    return jwt.sign({
        _id:this._id,
        username:this.username,
    },`${process.env.ACCESS_TOKEN_SECRET}`,{expiresIn: `${process.env.ACCESS_TOKEN_EXPIRY}`})
}

  const  User = mongoose.model("User", user_schema )
  export default User;