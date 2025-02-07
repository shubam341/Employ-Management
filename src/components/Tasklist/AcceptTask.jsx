
// eslint-disable-next-line no-unused-vars
import React from 'react';

const AcceptTask=()=>{
    return(

            <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl'>
              <div className=' text-white flex justify-between items-center'>
              <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>High</h3>
              <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className=' text-white mt-5 text-2xl font-semibold'>Make a youtube video</h2>
               <p className=' mt-2 text-white text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, eveniet cum officia expedita dolores ipsam.</p>
           <div className='felx  space-x-4 justify-between mt-4'>
            <button className='bg-green-500   py-1 px-1 text-sm'>Mark as Completed</button>
            <button className='bg-red-500  py-1 px-3 text-sm'>Mark as failed</button>
           </div>
            </div>
           
    )
}
export default AcceptTask