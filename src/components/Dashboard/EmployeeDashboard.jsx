// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../others/Header';
import TaskList from '../others/TaskList';
import TaskkList from '../Tasklist/TaskkList';

const EmployeeDashboard=()=>{
    return(
        <div className='p-15 bg-[#1C1C1C] h-screen'>
            <Header/>
            <TaskList/>
            <TaskkList/>
        </div>
    )
}

export default EmployeeDashboard