/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../others/Header';
import TaskList from '../others/TaskList';
import TaskkList from '../Tasklist/TaskkList';


const EmployeeDashboard=({props})=>{
    
    return(
        <div className='p-15 bg-[#1C1C1C] h-screen'>
          
                       <Header changeUser={props.changeUser} data={props.data}/>
            <TaskList data={props.data}/>
            <TaskkList data={props.data}/>
        </div>
    )
}

export default EmployeeDashboard