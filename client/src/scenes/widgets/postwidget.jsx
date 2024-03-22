import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import axios from 'axios'



export default function Postwidget(prop) {
const[visiblily, setvisibility]= useState(false)
const[description, setdescription]= useState()
const[filedata, setfildata]= useState('')



const token= useSelector((state)=> state.token)
    const profilePhoto= prop.profilePhoto;
    const userId= prop.userId
    

const handleSubmit= async (e)=>
{
  e.preventDefault()
  
  const formData=  new FormData()
  formData.append("userId",userId)
  formData.append("image", filedata)
  formData.append("description",description )
console.log('this is the filedata', filedata)

  console.log('this is the form data ', formData)
  console.log('this is the description ', description)

  
      console.log('this is the token ', token)

   const config = {
    headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'multipart/form-data'
       }
     };
     console.log('this is the config', config)

  try {
     const response =  await  axios.post(`http://localhost:3000/posts`,formData, config)
       console.log('this is the response we get', response)
  } catch (error) {
    console.log('this is error found', error)
    
  }
     
}

  return (
  

    <div className='inline-block  align-top mt-8 ml-3 '>
  

        <div className=' p-4 rounded-xl bg-white w-[45vw]'>
            <form onSubmit={handleSubmit}>

     <div>
              <div className='flex    gap-5 items-center'>
                <img src={profilePhoto} alt="" className='w-14 h-14 rounded-full object-cover' />
                <input type="text" placeholder="     what's on your mind"  name='description'  onChange={(e)=> setdescription(e.target.value)}         className=' w-full  text-gray-600   h-12 rounded-3xl mr-3 bg-neutral-300'/>
            </div>
        </div>

        {visiblily  &&      <div className='border-1 mt-4 bg-neutral-300 rounded-md w-full p-1 h-[70px]'>
               <div className='border-2 border-dashed rounded-lg     border-gray-700  h-[60px]'>
                        <span className='ml-6 text-center' >Add image here</span>    
                     <input type="file"   accept="image/*"  name="image" onChange={(e)=> setfildata(e.target.files[0])}  className=' w-full h-full opacity-0' />
               </div>
        </div>  }
       

        <div className='flex   justify-evenly    items-center  mt-5'>


          <div className='flex gap-1 text-sm items-centre justify-center text-gray-700'>
        <img src="./src/public/assets/image.svg" onClick={()=>setvisibility(!visiblily)} />
        <span>Image</span>
            </div>  
          <div className='flex gap-1 text-sm items-centre justify-center text-gray-700'>
        <img src="./src/public/assets/clip.svg"  alt="" />
        <span>Clip</span>
            </div>  
          <div className='flex gap-1 text-sm items-centre justify-center text-gray-700'>
        <img src="./src/public/assets/attachment.svg"  alt="" />
        <span>Attachment</span>
            </div>  
          <div className='flex gap-1 text-sm items-centre justify-center text-gray-700'>
        <img src="./src/public/assets/audio.svg"  alt="" />
        <span>Audio</span>
            </div>  


            <div>

            <button type="submit"   className="bg-sky-500      hover:bg-sky-700  w-18 mb-2 rounded-lg text-white p-2">Signin</button>

            </div>

        </div>
            </form>
    </div>
    </div>
  )
}
