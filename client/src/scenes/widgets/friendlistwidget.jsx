import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

export default function Friendlistwidget() {
    const token= useSelector(state=>state.token)
    
    const userId= useSelector(state=> state.user._id)
    const [friendlist, setfriendlist]= useState([])

    const config = {
        headers: {
             'Authorization': `Bearer ${token}`
           }

         }
    useEffect(()=>
    {
    (async ()=>
    {
        try
        {
            console.log('hnji yeh abhi frienlistwidget pr a gayas')
          const x= await axios.get(`http://localhost:3000/users/${userId}/friends`, config)
          console.log('this is the response getting from the userfriend finding ', x)
        }
        catch(err)
        {
            console.log('this is the error', err)
        }
    })()
    })
    

  return (
    <div  >
        <div className='my-8 rounded-xl p-5 ml-4 mr-10 w-[300px] h-[40vh] bg-white block '>
          Frindlist

          <div>

          </div>

        </div>
      
    </div>
  )
}
