// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Login=({handleLogin})=>{

      
      const [email,setEmail]=useState('')
      const [password,setPassword]=useState('')
    
      const submitHandler=(e)=>{
        e.preventDefault()

     handleLogin(email,password)   
   setEmail("")
    setPassword("")
   
    }
    return ( 
   <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 rounded-xl border-emerald-600 p-20'>
    <h2 className="text-5xl  bg-transparent  border-none outline-none font-bold text-center   text-emerald-600  mb-8">Login</h2>

        <form 
        onSubmit={(e)=>{
           submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
             required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'type="email" placeholder='Enter your email' />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required className=' text-white outline-none bg-transparent border-2  border-emerald-600 text-xl py-3 px-5  rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder ='Enter password' />
            <button className='mt-5 text-white border-none outline-none border-2  bg-emerald-600 text-xl py-3 px-5  rounded-full  placeholder:text-white'>Login</button>
        </form>
    </div>
   </div>
    )
}
export default Login