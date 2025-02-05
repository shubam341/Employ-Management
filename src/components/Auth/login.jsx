// eslint-disable-next-line no-unused-vars
import React from 'react';

const Login=()=>{
    return ( 
   <div className='flex h-screen width-screen items-center justify-center'>
    <div className='border-3 border-red-600'>
        <form  className='flex flex-col items-center justify-center'>
            <input  className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-10 px-4  rounded-full placeholder:text-white'type="email" placeholder='Enter your email' />
            <input className='text-black outline-none bg-transparent border-2  border-emerald-600 text-xl py-4 px-5  rounded-full mt-5 placeholder:text-white' type="passwrd" placeholder ='Enter password' />
            <button className='text-white border-none outline-none border-2  bg-emerald-600 text-xl py-4 px-5  rounded-full mt-10 placeholder:text-white'>Login</button>
        </form>
    </div>
   </div>
    )
}
export default Login