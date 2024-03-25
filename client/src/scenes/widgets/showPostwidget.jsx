import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setFriends } from '../../states'

export default function ShowPostwidget({postId,userId,location,description,name,picturePath,userPicturePath,likes,comments})
 {
       const dispatch= useDispatch()
   const user= useSelector(state=> state.user)
   const token=useSelector(state=>state.token)
   const friend= useSelector(state=>state.user.friends)
   const [isfriend , setisfriend ]= useState()
   const config = {
    headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'multipart/form-data'
       }
     }; 

   
   const handleclick= async ()=>
   {
    try {

      
       const response =  await  axios.patch(`http://localhost:3000/users/${user._id}/${userId}`)
         console.log('this is the response we get', response.data)
         await  dispatch(setFriends({friends: response.data}))


         if(friend.includes(userId))
         {
           setisfriend(true)
         }
         else{
          setisfriend(false)
         }




  
    } catch (error) {
      console.log('this is error found', error)
      
    }

   }
    console.log(name,'this is the name')

    const unfollow="../src/public/assets/follow.svg" 
    const follow="../src/public/assets/friendAdded.svg"


  return (
    <div className='inline-block my-3'>
      

  

  <div className=' p-4 rounded-xl bg-white w-[45vw]'>
<div className='flex justify-between mb-3 items-center'>

        <div className='flex    gap-5 items-center'>
          <img src={userPicturePath} alt="" className='w-14 h-14  rounded-full object-cover' />
          <div className='text-gray-600'>
          <div>{name}</div>
          <div>{location}</div>

          </div>


      </div>
          <img src={isfriend?follow:unfollow}  onClick={handleclick} className='w-8  h-8 cursor-pointer items-center' alt="" />

</div>

<div className='mb-3'>
    {description}
</div>


    <img src={picturePath}  className='rounded-lg h-[70vh] w-full object-cover mb-4' alt="" />


    <div className='flex justify-between'> 

           <div className='flex gap-8'>
        <img src="../src/public/assets/like.svg" className='w-6 h-6' alt="comment" /> {likes.length||12}
        <img src="../src/public/assets/comment.svg"className='w-6 h-6' alt="comment" />{comments.length}

           </div>
        <img src="../src/public/assets/share.svg" className='w-6 h-6' alt="share" />
    </div>

<div>
</div>



</div>
    </div>
  )
}
