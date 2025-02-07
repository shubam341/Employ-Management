/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';



const TaskList=({data})=>{

   const tasks = data?.tasks || [];

   // Calculate the number of tasks for each status
   const activeTaskCount = tasks.filter(task => task.active).length;
   const newTaskCount = tasks.filter(task => task.newtask).length;
   const completedTaskCount = tasks.filter(task => task.completed).length;
   const failedTaskCount = tasks.filter(task => task.failed).length;

    return(
        <div className='flex mt-10  justify-between gap-5 screen'>
<div className='  rounded-xl w-[45%]  py-6 px-9 bg-pink-400'>
   <h2 className='text-3xl font-semibold'>{newTaskCount}</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
</div>
 
<div className='  rounded-xl w-[45%]  py-6 px-9 bg-blue-400'>
   <h2 className='text-3xl font-semibold'>{completedTaskCount}</h2>
   <h3 className='text-xl font-medium'>Complete Task</h3>
</div>

<div className='  rounded-xl w-[45%]  py-6 px-9 bg-green-400'>
   <h2 className='text-3xl font-semibold'>{activeTaskCount}</h2>
   <h3 className='text-xl font-medium'>Accepted Task</h3>
</div>

<div className='  rounded-xl w-[45%]  py-6 px-9 bg-yellow-400'>
   <h2 className='text-3xl font-semibold'>{ failedTaskCount}</h2>
   <h3 className='text-xl font-medium'>Failed Task</h3>
</div>

        </div>
    )
}

export default TaskList