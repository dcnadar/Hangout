import React, { useState } from 'react'

export default function Postwidget(prop) {
const[visiblily, setvisibility]= useState(false)

    const profilePhoto= prop.profilePhoto;
    console.log(prop)



  return (

    <div className='absolute left-[28vw] top-[12vh]'>
  

        <div className='m-3 p-4 rounded-xl bg-white w-[45vw]'>
            <form action="">

     <div>
              <div className='flex    gap-5 items-center'>
                <img src={profilePhoto} alt="" className='w-14 h-14 rounded-full object-cover' />
                <input type="text" placeholder="     what's on your mind" className=' w-full  text-gray-600   h-12 rounded-3xl mr-3 bg-neutral-300'/>
            </div>
        </div>

        {visiblily  &&      <div className='border-1 mt-4 bg-neutral-300 rounded-md w-full p-1 h-[70px]'>
               <div className='border-2 border-dashed rounded-lg     border-gray-700  h-[60px]'>
                        <span className='ml-6 text-center' >Add image here</span>    
                     <input type="file"  className=' w-full h-full opacity-0' />
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

            <button type="submit" className="bg-sky-500    hover:bg-sky-700  w-18 mb-2 rounded-lg text-white p-2">Signin</button>

            </div>

        </div>
            </form>
    </div>
    </div>
  )
}
