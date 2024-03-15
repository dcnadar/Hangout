import { useState } from 'react'
import HomePage from './scenes/hompage'
import LoginPage from './scenes/loginpage'
import Navbar from './scenes/navbar'
import Register from './scenes/registerpage'
import ProfilePage from './scenes/profilepage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'

function App() {
const routes= createBrowserRouter(
[
  
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/',
    element:<ProfilePage/>
  },
  {
    path:'/register',
    element:<Register/>
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
    <div className='border-2 border-solid  border-red-600'>hnji kya hal </div>
    </RouterProvider>

    </>
  )
}

export default App
// border-2 border-solid  border-red-600