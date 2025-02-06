// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../others/Header';
import TaskList from '../others/TaskList';
import TaskkList from '../Tasklist/TaskkList';

// eslint-disable-next-line react/prop-types
const EmployeeDashboard=({data})=>{
    
    return(
        <div className='p-15 bg-[#1C1C1C] h-screen'>
          
                       <Header data={data}/>
            <TaskList data={data}/>
            <TaskkList data={data}/>
        </div>
    )
}

export default EmployeeDashboard