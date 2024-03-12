import mongoose from "mongoose";

const post_schema = new mongoose.Schema(
    {
        userId:
        {
            type:String,
            required:true
        },
        firstname:String,
        lastName:String,
        location:String,
        description:String,
        userImage:String,
        postImage:String,

        likes:{
             type:Map,
             of:Boolean
        },
        comments:
        {
            type:Array,
            default:[]
        }
    },
    {timestamps:true}
)

const Post= mongoose.model("Post", post_schema)
export default Post