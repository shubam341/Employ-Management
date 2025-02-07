/* eslint-disable no-unused-vars */
import React from "react";
 const FailedTask=()=>{
    return(
<div className=' flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl'>
              <div className=' text-white flex justify-between items-center'>
              <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>High</h3>
              <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className=' text-white mt-5 text-2xl font-semibold'>Make a youtube video</h2>
               <p className=' mt-2 text-white text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, eveniet cum officia expedita dolores ipsam.</p>
           
            <div className='mt-2'>
            <button className='w-full'>Failed</button>
         </div>
         </div>
    )
 }
 export default FailedTask