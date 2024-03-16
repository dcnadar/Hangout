import React from 'react'
import {  useSelector } from 'react-redux'
export default function Navbar() {

  const name= useSelector((state)=> state.user.firstname)
  return (
  <div >
        
   <div className='flex p-2  bg-white justify-between ' >

     <div className=' p-6 ml-20 flex text-center   justify-between w-[400px] h-12 items-center'>
          <img src="https://static-assets.clubhouseapi.com/static/img/img_hand_wave.3454a59f2b06.svg"  className='w-[50px]  ' alt="" />
           <div  className=" items-center justify-between flex bg-neutral-200 rounded-lg   "  > 
                <input type="text" placeholder='Search....' className=" bg-neutral-200 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5 h-9 placeholder-gray-500 dark:text-white "/>
                <img src="../src/public/assets/search.svg"   className='pe-3 mr-3 invert-0 w-7 h-9'  alt="this is search" />
            </div>
      </div>



      <div className='flex items-center justify-evenly w-[400px] mr-20  '>
          <img src="../src/public/assets/nightmode.svg"   className=' invert-0 w-12'  alt="hnji" />
          <img src="../src/public/assets/message.svg" alt="" />
          <img src="../src/public/assets/bell.svg" alt="" />
          

        <button id="hs-dropdown-hover-event"  type="button" className="hs-dropdown-toggle h-9 py-3 px-4 inline-flex w-28 h-16 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-neutral-200 text-gray-800 shadow-sm hover:bg-gray-50 ">
    {name}
          <svg className={`hs-dropdown-open:rotate-180 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
           </svg>
        </button>

      

  </div>

   </div>
   
   
    </div>
  )
}
