import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import axios from 'axios'
import {  setPosts } from '../../states'
import ShowPostwidget from './showPostwidget'

export default function Feedwidgets(prop) {
      const dispatch= useDispatch()
      const userId= prop.userId
      const posts= useSelector(state=> state.posts)
const token= useSelector(state=> state.token)
console.log('this is the token', token)
const config = {
    headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'multipart/form-data'
       }
     }; 

     useEffect(()=>{
        
        ;(async()=>{
            try {
                const response =  await  axios.get(`http://localhost:3000/posts`, config)
                console.log('this is the response we get', response.data)
                dispatch(setPosts({posts:response.data}))

            } catch (error) {
                console.log('this is error found', error)
                
            }

        })()
     },[ dispatch])


     


console.log('this is the all post', posts )
  return (
    <div className=' mt-2 ml-3  '>
    {posts.map((e)=>
    {
        console.log(e)
        return (<ShowPostwidget    

        key={e._id}
        postId={e._id}
        userId= {e.userId}
        location={e.location}
        description={e.description}
        name={`${e.firstname} ${e.lastname?e.lastname:''}`}
        picturePath={e.postImage}
        userPicturePath={e.userImage}
        likes={e.likes}
        comments={e.comments}
        />)
    })}
    </div>
  )
}
