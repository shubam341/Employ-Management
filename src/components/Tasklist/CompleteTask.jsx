/* eslint-disable no-unused-vars */
import React from 'react'
const CompleteTask=(data)=>{
    return(
        <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
        <div className=' text-white flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className=' text-white mt-5 text-2xl font-semibold'>{data.title}</h2>
         <p className=' mt-2 text-white text-sm'>{data.description}.</p>
         <div className='mt-2'>
            <button className='w-full'>Complete</button>
         </div>
      </div>

    )
}
export default CompleteTask