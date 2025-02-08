
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const CreateTask =()=>{
    const [taskTitle,setTaskTitle]=useState('')
    const [taskDescription,setTaskDescription]=useState('')
    const [taskDate,setTaskDate]=useState('')
    const [asignTo,setAsignTO]=useState('')
    const [category,setCategory]=useState('')
     const[newTask,setNewTask]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault()
      setNewTask({taskTitle,taskDescription,taskDate,category,ctive:false,newTask:true,failed:false,complets:false})
      const data=JSON.parse(localStorage.getItem('employees'))
      
      data.forEach(function(elem){
       if(asignTo==elem.name){
      elem.tasks.push(newTask)
      console.log(elem)
       }
      })
      localStorage.setItem('employees',JSON.stringify(data))

      setTaskTitle('')
      setAsignTO('')
      setCategory('')
      setTaskDescription('')
      setTaskDate('')

        
    }
    return (
        <div id='tasklist' className='p-5 bg-[#1c1c1c] mt-7 rounded' >
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} 

        className='flex flex-wrap w-full  items-start justify-between'>
            
            <div className='w-1/2 '>
            <div>
            <h3 className=' text-sm text-gray-300  mb-0.5'>Task title</h3>
            <input 
             value={taskTitle}
             onChange={(e)=>{
                setTaskTitle(e.target.value)
             }}
            className=' text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] text-white border-gray-400 mb-4 ' type="text" placeholder='Make UI Design' />
            </div>

            <div>
             <h3 className='text-gray-300 text-sm mb-0.5  '>Date</h3>
             <input
                 value={taskDate}
                onChange={(e)=>{
                   setTaskDate(e.target.value)
                }}
             className='bg--transparent text-white text-sm py-1 px-2 w-4/5 rounded outline-none  border-[1px] border-gray-400 mb-4 ' type="date" /> <br />
             </div>

             <div>
             <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
             <input
                 value={asignTo}
                onChange={(e)=>{
                   setAsignTO(e.target.value)
                }}
             className='bg--transparent text-sm py-1 px-2 w-4/5 rounded outline-none  text-white border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' /> <br />
             </div>
           
           <div>
           <h3 className='text-gray-300 text-sm mb-0.5'>Category</h3>
             <input
              value={category}
              onChange={(e)=>{
                 setCategory(e.target.value)
              }}
             className='bg--transparent text-sm py-1 px-2 w-4/5 rounded outline-none text-white border-[1px] border-gray-400 mb-4' type="text" placeholder='Design , Dev, etc' />
             </div>
            </div>
           

            <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5 w-full '> Description</h3>
            <textarea   
             value={taskDescription}
             onChange={(e)=>{
                setTaskDescription(e.target.value)
             }}
            className='bg--transparent text-sm text-white py-1 px-2 w-full rounded outline-none  border-[1px] border-gray-400'  name="" id="" cols="30" rows="10"></textarea>
           

            

        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
        </form>
    </div>
    )
}
export default CreateTask