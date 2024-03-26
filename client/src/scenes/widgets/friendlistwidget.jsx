import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setFriends } from '../../states'

export default function Friendlistwidget() {
    const token= useSelector(state=>state.token)
    const dispatch= useDispatch()

    const userId= useSelector(state=> state.user._id)
    const friends= useSelector(state=>state.user.friends)
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
            setfriendlist(x.data)
        }
        catch(err)
        {
            console.log('this is the error', err)
        }
    })()
    },[friends])
const handleclick=  async(e)=>
{

    const response =  await  axios.patch(`http://localhost:3000/users/${userId}/${e}`)
    console.log(response)
    await  dispatch(setFriends({friends: response.data}))


}

  return (
    <div  >
        <div className='my-8 rounded-xl p-5 ml-4 mr-10 w-[300px] bg-white block '>
           <div className='text-gray-600 text-lg  font-medium'>Friendlist</div>
          {friendlist.map((e)=>
          {
              return(
              
              <div key={e._id}>
                <div className='flex align-middle items-center justify-between  my-2'>
                    <div className='flex gap-2'>

                    <img src={e.profilePhoto} className='rounded-full w-10 h-10' alt="hnji h " />
                    <div  className='text-slate-700 text-sm'>
                        <div> {e.firstname} {e.lastname}</div>
                        <div className='text-xs'>{e.occupation?e.occupation:doctor}</div>
                    </div>
                    </div>
                 <img src="../src/public/assets/friendremove.svg"   onClick={()=> handleclick(e._id)}  alt="" />


                </div>
                
                
                
                
                
                
                
                

                </div>
                
                
                
                
                
                
                
                )




          })}





        </div>
      
    </div>
  )
}
