/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskkList=({data})=>{
 
    return(
        <div  id='tasklist'className='h-[55%] overflow-x-auto w-full py-5 flex items-center justify-start gap-5 flex-nowrap mt-10'>
           
           {data.tasks.map((elem,idx)=>{
              if(elem.active){
                return   <AcceptTask key={idx} data={elem}/>
              }
              if(elem.newTask){
                return  <NewTask key={idx} data={elem}/>
              }
              
              if(elem.completed){
                return  <CompleteTask key={idx} data={elem} />
              }

                
              if(elem.failed){
                return <FailedTask key={idx} data={elem} />
              }

           })}
           

         
           
    
        </div>


    )
}
export default TaskkList