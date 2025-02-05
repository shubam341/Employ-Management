// eslint-disable-next-line no-unused-vars
import React from 'react';


const TaskList=()=>{
    return(
        <div className='flex mt-10  justify-between gap-5 screen'>
<div className=' text-white rounded-xl w-[45%]  py-6 px-9 bg-pink-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font medium'>New Task</h3>
</div>
 
<div className=' text-white rounded-xl w-[45%]  py-6 px-9 bg-blue-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font medium'>Complete Task</h3>
</div>

<div className=' text-white rounded-xl w-[45%]  py-6 px-9 bg-green-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font medium'>Accepted Task</h3>
</div>

<div className=' text-white rounded-xl w-[45%]  py-6 px-9 bg-yellow-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font medium'>Failed Task</h3>
</div>

        </div>
    )
}

export default TaskList