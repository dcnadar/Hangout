import { useState } from 'react'
import HomePage from './scenes/hompage'
import LoginPage from './scenes/loginpage'
import Register from './scenes/registerpage'
import ProfilePage from './scenes/profilepage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.css'

function App() {

  const isauth= Boolean(useSelector((state)=> state.token))

const routes= createBrowserRouter(
[
  
  {
    path:'/',
    element:<LoginPage/>
  },
  {
    path:'/register',
    element:<Register/>
  },

  {
    path:'/home',
    element:isauth ?<HomePage/>: <LoginPage/>
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
    </RouterProvider>

    </>
  )
}

export default App
