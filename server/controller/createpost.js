import Post from '../models/post.js'
import { ApiError } from '../ApiError.js'
import User from '../models/user.js'


export const createPost = async (req,res)=>
{
    try
    {   
        const {userId, description, profilePhoto}= req.body
        const filepath= req.file.path

         if(!filepath)
         {
                throw new ApiError(500,'filepath did not exist')
         }

        const imageurl=   await cloudinary.uploader.upload(filepath,{resource_type:"auto"})

        
        if(!imageurl)
              {
                     throw new ApiError(500,'cannot able to upload on cloudinary')
              }
 
 // remove the photos from the local storage
          fs.unlink(filepath, (err) => 
          {
                 if (err) console.log('Error deleting file:', err)
          }) 

        const user = await User.findById(userId)
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
        // all the post are send to the frondend one
          res.status(201).json(post)

    }
    catch(err)
    {
       res.status(409).json({message:err.message})
    }

}


export const getFeedPosts = async (req,res)=>
{
    try{
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