import mongoose from "mongoose";

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

  const  User = mongoose.model("User", user_schema )
  export default User;