import React from 'react'

export default function Navbar() {
  return (
  <div  className='bg-neutral-100'>
        
   <div className='flex justify-between ' >

     <div className=' p-6 ml-20 flex text-center   justify-between w-[400px] items-center'>
          <img src="https://static-assets.clubhouseapi.com/static/img/img_hand_wave.3454a59f2b06.svg"  className='w-[50px]  ' alt="" />
           <div  className=" items-center justify-between flex bg-neutral-300 rounded-lg   "  > 
                <input type="text" placeholder='Search....' className=" bg-neutral-300 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  placeholder-gray-500 dark:text-white "/>
                <img src="../src/public/assets/search.svg"   className='pe-3 mr-3 invert-0 w-7'  alt="this is search" />
            </div>
      </div>



      <div className='flex items-center justify-evenly w-[400px] mr-20  '>
          <img src="../src/public/assets/nightmode.svg"   className=' invert-0 w-12'  alt="hnji" />
          <img src="../src/public/assets/message.svg" alt="" />
          <img src="../src/public/assets/bell.svg" alt="" />
          

        <button id="hs-dropdown-hover-event"  type="button" className="hs-dropdown-toggle h-10 py-3 px-4 inline-flex w-28 h-16 items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-neutral-300 text-gray-800 shadow-sm hover:bg-gray-50 ">
    Actions
          <svg className={`hs-dropdown-open:rotate-180 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
           </svg>
        </button>

      

  </div>

   </div>
   
   
    </div>
  )
}
