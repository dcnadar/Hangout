import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { setLogin } from '../../states'
import { useDispatch } from 'react-redux'



export default function LoginPage() {

const {register, handleSubmit, reset, formState:{errors, isSubmitting}}= useForm()
const dispatch = useDispatch()
const navigate= useNavigate()

const onsubmit= async (data)=>
{
        try{
           
          

          axios.defaults.withCredentials= true;

          const response= await axios.post('http://localhost:3000/auth/login', data)
          console.log('this is the respose', response)
          if(response)

          {
                  
                 console.log(response)
                 console.log(response.userData)
                 console.log(response.data.Accesstoken ,'this is access token')
                 dispatch(
                  setLogin({
                    user:response.data.userData,
                    token:response.data.Accesstoken,
                  })
                 );
                 console.log('now the home route should work')

                
                navigate('/home')
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
      <div className='flex top-0  left-0  h-[100vh] overflow-auto justify-center items-center'>
        <div className='w-[30vw] p-4  text-gray-400 rounded-lg  bg-zinc-800 '>
        <div className='text-sky-500 font-semibold text-center mb-8 text-4xl '> Log In</div>
        <div className='text-gray-400 '> Welcome to Hangout! </div>
        {  isSubmitting && <div className='text-slate-500 text-center'>Submitting... </div>}

        <form  onSubmit={handleSubmit(onsubmit)}  >


      <input type="text"    placeholder=' Username'{...register ("key", {required:true})} className="border  bg-zinc-800 p-2 border-zinc-600 w-full my-4  h-10 rounded-md" />

{/* validation of the username using the error in the reacthook form */}
      {errors.username && <div className=' text-red-600 text-sm'> {errors.username.message}</div>}

      <input type="text"   placeholder='password' {...register("password", {required:{value: true , message:"password is required"}, minLength:{value:6, message:"should be atleast 8 alphabet"}, pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/,message:"must contain uppercase ,lowercase ,number and special key"}})} className="border w-full p-2 border-zinc-600 bg-zinc-800 my-4  h-10 rounded-md" />

      {errors.password && <div className=' text-red-600 text-sm'> {errors.password.message}</div>}




      <button type="submit" className="bg-sky-500 w-full mb-2 rounded-md text-white p-2">Signin</button>
      <Link className=' my-2 block'>Forget password</Link>
      <Link to='/register' className='text-blue-300 block underline'>Don't have an account? Sign Up here </Link>
    </form>
        </div>
      </div>
    </div>
  )
}
