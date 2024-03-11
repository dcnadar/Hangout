import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import user from "../models/user.js"
import { ApiError } from "../ApiError.js";
dotenv.config()

import cloudinary from 'cloudinary'
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret:process.env.API_SECRET
  });

export default  async function  register(req,res)
 {
    try
    {    const filepath= req.file.path
         console.log(req.file)
         if(!filepath)
         {
            throw new ApiError(500,'filepath did not exist')
         }

         const imageurl=   await cloudinary.uploader.upload(filepath,{resource_type:"auto"})
         if(!imageurl)
         {
            throw new ApiError(500,'cannot able to upload on cloudinary')
         }
           res.send(imageurl)

    
    
    }
    catch(err)
    { 
        console.log('this is the error ', err)
        return res.send(err)

    }
}
