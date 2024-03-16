import React from 'react'
import Navbar from '../navbar'
import Userwidgets from '../widgets/userwidgets'
import {  useSelector } from 'react-redux'
export default function HomePage() {

  const {_id, profilePhoto}= useSelector((state)=> state.user)



  return (
    <div  className='bg-neutral-300'>
      <Navbar/>
      <section className='bg-neutral-300 h-screen'>
        
        <div>

    <Userwidgets userId={_id}   profilePhoto={profilePhoto}/>
        </div>
      </section>
    </div>
  )
}
