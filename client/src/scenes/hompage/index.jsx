import React from 'react'
import Navbar from '../navbar'
import Userwidgets from '../widgets/userwidgets'
import {  useSelector } from 'react-redux'
import Postwidget from '../widgets/postwidget'
import Feedwidgets from '../widgets/feedwidgets'
export default function HomePage() {

  const {_id, profilePhoto}= useSelector((state)=> state.user)



  return (
    <div  className='bg-neutral-300  '>
      <Navbar/>
      <section className='flex h-full'>

    <Userwidgets userId={_id}   profilePhoto={profilePhoto}/>
<div className='flex-col '>

    <Postwidget userId={_id} profilePhoto={profilePhoto}/>
     <Feedwidgets  userId={_id} />
</div>

      </section>
    </div>
  )
}
