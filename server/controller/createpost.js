import Post from '../models/post.js'
import { ApiError } from '../ApiError.js'
import User from '../models/user.js'
import cloudinary from 'cloudinary'
import fs from 'fs'


export const createPost = async (req,res)=>
{
    try
    {    console.log('hn bhia ueh abhi createpost pr aa gaya h ')
        const {userId, description, profilePhoto}= req.body
        console.log( 'this is the req.body', req.body)
        console.log('hnji yeh line 13 h bhai', req.file.path);

        const filepath= req.file.path
           
        console.log('this is the filepath', filepath)
         if( filepath === undefined)
         {
                throw new ApiError(500,'filepath did not exist')
         }
       console.log('hnji yaha pr hu 21');

        
          const imageurl=   await cloudinary.uploader.upload(filepath,{resource_type:"auto"})


            console.log('this is the imageurl', imageurl.url)
            if(!imageurl)
              {
                     throw new ApiError(500,'cannot able to upload on cloudinary')
              }
 
 // remove the photos from the local storage
          fs.unlink(filepath, (err) => 
          {
                 if (err) console.log('Error deleting file:', err)
          }) 
console.log('hnji ab m 39 pr hu');
      console.log('this is the userid', userId)

    const user = await User.findById(userId)
    console.log('this is the user', user)

        
        const newpost= new Post(
            {
                userId,
                firstname:user.firstname,
                lastname:user.lastname,
                location:user.location,
                description,
                userImage: user.profilePhoto,
                postImage:imageurl.url,
                likes:{},
                comments:[]
            }
          )
          
         await newpost.save()

        const post= await Post.find();
        console.log(post, 'this is the all post')
        // all the post are send to the frondend one
          res.status(201).json(post)

    }
    catch(err)
    {
        console.log(err)
       res.status(409).json(err)
    }

}


export const getFeedPosts = async (req,res)=>
{
    try{
        console.log('we are now in the getfeed post  controller');
        
        const post= await Post.find()
       res.status(201).json(post)

    }
    catch(err)
    {
        res.status(409).json({message:err.message}) 
    }
}

export const getUserPosts = async (req,res)=>
{
    try{

        const {userId}= req.params
        const post=  await Post.findById(userId)
       res.status(201).json(post)
    }
    catch(err)
    {
        res.status(409).json({message:err.message}) 
    }

}


export const likePost = async (req,res)=>
{
    try{

        const {id}= req.params
        const {userId }= req.body
        const post= await Post.findById(id)
        const islike= Post.likes.get(userId)
        if(!islike)
        {
            post.likes.set(userId,true)
        }
        else
        {
            post.likes.delete(userId)

        }

        const updatedpost=  await Post.findByIdAndUpdate(id,
            {
                likes:post.likes
            },
            {
                new:true
            })
            //remember updated the updatepost.
       res.status(201).json(updatedpost)

    }
    catch(err)
    {
        res.status(409).json({message:err.message}) 
    }
}