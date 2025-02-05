// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../others/Header';
import TaskList from '../others/TaskList';

const EmployeeDashboard=()=>{
    return(
        <div className='p-15 bg-[#1C1C1C] h-screen'>
            <Header/>
            <TaskList/>
        </div>
    )
}

export default EmployeeDashboard