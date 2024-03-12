import { useState } from 'react'
import HomePage from './scenes/hompage'
import LoginPage from './scenes/loginpage'
import Navbar from './scenes/navbar'
import ProfilePage from './scenes/profilepage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'

function App() {
const routes= createBrowserRouter(
[
  
  {
    path:'/',
    element:<LoginPage/>
  },
  {
    path:'/home',
    element:<HomePage/>
  },
  {
    path:'/profile/:userId',
    element:<ProfilePage/>
  },


]
)

  return (
    <>
    <RouterProvider router={routes}>


    <div className='border-2 border-solid  border-red-600'>hnji kya hal h     </div>
    </RouterProvider>

    </>
  )
}

export default App
// border-2 border-solid  border-red-600