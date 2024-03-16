
import axios from 'axios';
import { useEffect, useState } from 'react';

export default  function  UserWidgets (props) {
 
  const [user, setuser]= useState({})
  useEffect(()=>
  {
  (async()=>
  {
    const token = document.cookie.split('=')[1];
  const config = {
    headers: {
         'Authorization': `Bearer ${token}`
       }
     };

     const response =  await  axios.get(`http://localhost:3000/users/${props.userId}`, config)
       console.log(response.data)
       setuser(response.data)

  })()
  },[])
if(!user)
{
  return null
}

const{firstname, lastname,occupation,friends, location, profilePhoto, impression, viewedProfile}= user
const x=0

  return (
 <div >

      <div className='w-[23vw] bg-white rounded-2xl   p-1 mt-8 ml-12 '>

<div className='ml-2 m-4 text-sm  border-3'>


        <div className='position  my-5 flex justify-between '>
       
           <div className='flex  justify-center text-gray-700 items-center gap-10 '>
                  <img src={profilePhoto} alt="" className='w-14 h-14 rounded-full inline  object-cover' />


                  <div className='flex-row'>
                             <div >
                                  {firstname}  {lastname}
                              </div>
                              <div>
                                  {friends} 0 friends
                             </div>
                  </div>

     
                 </div>
           <img src="../src/public/assets/friendadd.svg"  className='mr-4' alt="hnji" />
         </div>


         <div className='border-m border-solid border border-gray-300'></div>
         <div className='my-5 text-gray-700' >

              <div className='flex gap-10 mb-1'>
                <img src="./src/public/assets/location.svg" alt="hnji" />
                <div>
                  {location}
                </div>
              </div>
              <div className='flex gap-10'>
                <img src="./src/public/assets/occupation.svg" alt="hnji" />
                <div>
                  {occupation}
                </div>
              </div>
         </div>


         <div className='border-m border-solid border border-gray-300'></div>


         <div className='my-5'>
          <div className='flex justify-between my-1 text-gray-500'>
            <div>who's viewed your profile</div>
            <div  className='mr-4'>{viewedProfile}</div>
          </div>
      
          <div className='flex justify-between  mb-1 text-gray-500'>
            <div>Impressions of your post</div>
            <div className='mr-4'>{impression}</div>
          </div>
      
         </div>

   <div className='border-m border-solid border border-gray-300'></div>

         <div className='my-6'>
          <div className='text-gray-700'>
            Social profile
          </div>

          <div className='position  my-4 flex justify-between '>
       
       <div className='flex  justify-center text-gray-700 items-center gap-10 '>
              <img src='./src/public/assets/linkedin.png' alt="hnji" />


              <div className='flex-row'>
                         <div >
                          Linkedin
                          </div>
                          <div className='text-gray-400'>
                           Network Platform
                         </div>
              </div>

 
             </div>
       <img src="../src/public/assets/edit.svg"  className='mr-4' alt="hnji" />
     </div>



          <div className='position   my-4 flex justify-between '>
       
       <div className='flex  justify-center text-gray-700 items-center gap-10 '>
              <img src='./src/public/assets/twitter.png' alt="hnji" />


              <div className='flex-row'>
                         <div  >
                           Twitter
                          </div>
                          <div className='text-gray-400'>
                         Social Media
                         </div>
              </div>

 
             </div>
       <img src="../src/public/assets/edit.svg"  className='mr-4' alt="hnji" />
     </div>




         </div>




</div>

    </div>
 </div>

  );
}
