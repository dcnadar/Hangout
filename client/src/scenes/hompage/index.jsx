import React from 'react'
import Navbar from '../navbar'
import Userwidgets from '../widgets/userwidgets'
import {  useSelector } from 'react-redux'
import Postwidget from '../widgets/postwidget'
export default function HomePage() {

  const {_id, profilePhoto}= useSelector((state)=> state.user)



  return (
    <div  className='bg-neutral-300'>
      <Navbar/>
      <section className=' h-screen'>
    <Userwidgets userId={_id}   profilePhoto={profilePhoto}/>
    <Postwidget userId={_id} profilePhoto={profilePhoto}/>
      </section>
    </div>
  )
}
