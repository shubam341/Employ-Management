// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// import AdminDashboard from './components/Dashboard/AdminDashboard';
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Login from './components/Auth/login.jsx'
import { getLocalStorage } from './utils/localstorage.jsx';

const App =()=>{
  
    useEffect(()=>{
        // setLocalStorage()
        getLocalStorage()
},
)

    return ( 
    <>
    <Login/>
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
    )
}
export default App;