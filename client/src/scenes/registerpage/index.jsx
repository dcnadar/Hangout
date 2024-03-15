import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
  


export default function Register() {

const {register, handleSubmit, reset, formState:{errors, isSubmitting}}= useForm()
const navigate= useNavigate()
const [filename, setfilename]=useState('')
useEffect(()=>{
  console.log(filename)
},[filename])
const onsubmit= async (data)=>
{
        try{
          const formData = new FormData();
          formData.append('image', data.image[0])
          formData.append('username', data.username)
          formData.append('firstname', data.firstname)
          formData.append('lastname', data.lastname)
          formData.append('email', data.email)
          formData.append('password', data.password)
          formData.append('location', data.location)
          formData.append('occupation',data.occupation)

          const response= await axios.post('http://localhost:3000/auth/register', formData)
          console.log('this is the respose', response)
          if(response)
          {
                navigate('/')
          }

        }
        catch(err)
        {
          console.log('this is the error')
            console.log(err)
        }
}

  return (
    <div className='bg-[#111111]' >
<nav className='flex justify-center py-4'>
    <div className='text-sky-500 font-semibold text-4xl '> Create an Account</div>
  </nav>
      <div className='flex top-0  left-0  h-[calc(100vh-4rem)] overflow-auto justify-center items-center'>
        <div className='w-[45vw] p-4  text-gray-400 rounded-lg  bg-zinc-800 '>
        {  isSubmitting && <div className='text-slate-500 text-center'>Submitting... </div>}

        <form  onSubmit={handleSubmit(onsubmit)}  >
      <div className='flex-row lg:flex  justify-between  '>
      <input type="text"  placeholder='First Name' {...register("firstname", {required:{value:true , messsage:"required"}})} className="border my-4 w-full border-zinc-600 p-2 bg-zinc-800 lg:w-[350px]  inline  h-10 rounded-md" />
      <input type="text"    placeholder='Last Name' {...register("lastname")} className="border my-4 w-full lg:w-[350px] inline p-2 border-zinc-600  bg-zinc-800 h-10 rounded-md" />
      </div>



      <input type="text"    placeholder=' Username'{...register ("username", {required:{value:true, message:"please enter the username"},minLength:{value:6, message:"username should be atleast 7 alphabet"}, pattern:{value:/^[a-z0-9_]+$/, message:"must contain lowercase alphabet and '_' allowed"}})} className="border  bg-zinc-800 p-2 border-zinc-600 w-full my-4  h-10 rounded-md" />

{/* validation of the username using the error in the reacthook form */}
      {errors.username && <div className=' text-red-600 text-sm'> {errors.username.message}</div>}

      <input type="text"    placeholder='occupation' {...register("occupation")} className="border bg-zinc-800 p-2 border-zinc-600 w-full  my-4  h-10 rounded-md" />

      {/* <label htmlFor="image" className="mb-2 font-semibold">Image</label> */}
      <div className="border p-2 mb-4 h-16  rounded-md border-zinc-600 relative" >
        <div className='p-1 border border-dashed rounded-md border-blue-500 h-11'>

        <input type="file"   accept="image/*" {...register("image")} onChange={(e)=> setfilename(e.target.files[0].name)} className="opacity-0 absolute" />
        <p className="text-center text-start">{filename || `Click to Add the image`}</p>
        </div>
      </div>




      <input type="text"   placeholder='email' {...register("email", {required:{value:true,  message:'enter the valid email'}})} className="border w-full p-2 bg-zinc-800  border-zinc-600 my-4  h-10 rounded-md" />
      
      {errors.email && <div className=' text-red-600 text-sm'> {errors.email.message}</div>}


      <input type="text"   placeholder='password' {...register("password", {required:{value: true , message:"password is required"}, minLength:{value:6, message:"should be atleast 8 alphabet"}, pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/,message:"must contain uppercase ,lowercase ,number and special key"}})} className="border w-full p-2 border-zinc-600 bg-zinc-800 my-4  h-10 rounded-md" />

      {errors.password && <div className=' text-red-600 text-sm'> {error.password.message}</div>}



      <button type="submit" className="bg-sky-500 w-full mb-2 rounded-md text-white p-2">Submit</button>
       <Link to="/">already have the account</Link>
    </form>
        </div>
      </div>
    </div>
  )
}
