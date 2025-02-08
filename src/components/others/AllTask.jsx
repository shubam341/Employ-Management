/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../pages/AuthProvider';

const AllTask=()=>{

    const authData=useContext(AuthContext)
  
    return (
<div id='tasklist' className='bg-[#1c1c1c] p-5 rounded text-white mt-5 '>
<div className='bg-red-400 py-2  px-4 flex mb-2 justify-between rounded'>
   <h2 className='text-lg font-medium  w-1/5 '>Employee Name</h2>
   <h3 className='text-lg font-medium  w-1/5 '>New Task</h3>
   <h5 className='text-lg font-medium  w-1/5 '>Active Task</h5>
   <h5 className='text-lg font-medium  w-1/5 '>Completed</h5>
   <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
</div>
   
   <div className=' '>
   {authData.employees.map(function(elem,idx){

return  <div key={idx} className=' border-2 border-emerald-500 py-2  px-4 flex mb-2 justify-between rounded'>
<h2 className='text-lg  w-1/5  text-white'>{elem.name}</h2>
<h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCount.newtask}</h3>
<h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount. active}</h5>
<h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCount.completed}</h5>
<h5 className= 'text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
</div>

})}
   </div>

   </div>

    )
}
export default AllTask