/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../pages/AuthProvider';

const AllTask=()=>{

    const authData=useContext(AuthContext)
  
    return (
<div id='tasklist' className='bg-[#1c1c1c] h-screen flex flex-col p-5 rounded text-white mt-5 '>
<div className='bg-red-400 py-2  px-4 flex mb-2 justify-between rounded'>
   <h2 className='w-1/5 '>Employee Name</h2>
   <h3 className='w-1/5 '>New Task</h3>
   <h5 className='w-1/5 '>Active Task</h5>
   <h5 className='w-1/5 '>Completed</h5>
   <h5 className='w-1/5 '>Failed</h5>
</div>
   
   <div className=' flex-1 overflow-y-auto'>
   {authData.employees.map(function(elem){

return  <div className=' border-2 border-emerald-500 py-2  px-4 flex mb-2 justify-between rounded'>
<h2 className='w-1/5  text-white'>{elem.name}</h2>
<h3 className='w-1/5 text-blue-600'>{elem.taskCount.active}</h3>
<h5 className='w-1/5 text-yellow-400'>Status</h5>
<h5 className='w-1/5 text-white'>Status</h5>
<h5 className='w-1/5 text-red-600'>Failed</h5>
</div>

})}
   </div>

   </div>

    )
}
export default AllTask