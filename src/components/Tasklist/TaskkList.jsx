/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskkList=({data})=>{
  console.log(data)
    return(
        <div  id='tasklist'className='h-[55%] overflow-x-auto w-full py-5 flex items-center justify-start gap-5 flex-nowrap mt-10'>
            <AcceptTask/>
          <NewTask/>

         <CompleteTask/>
         <FailedTask/>  
    
        </div>


    )
}
export default TaskkList