/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState, useSyncExternalStore } from 'react';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Login from './components/Auth/login.jsx'
import { AuthContext } from './pages/AuthProvider.jsx';

// import { setLocalStorage,getLocalStorage } from './utils/localstorage.jsx';



const App =()=>{

//for handling login page
const [user,setUser]=useState(null)
const [loggedInUserData,setloggedInUserData]=useState(null)
const [userData,setUserData]=useContext(AuthContext);

useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      if (userData.role === 'employee') {
        setloggedInUserData(userData.data);
      }
    }
  }, []);

const handleLogin=(email,password)=>{
    if(email=='admin@gmail.com'&& password=='123'){
        const adminData = { role: 'admin' };
        setUser(adminData.role);
     localStorage.setItem('loggedInUser',JSON.stringify(adminData ))
    
}else if(userData){
    const employee=  userData.find((e)=>email==e.email&&e.password==password)
    if(employee){
        const employeeData = { role: 'employee', data: employee };
        setUser(employeeData.role);
    setloggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify(employeeData))
     return;
}


    alert("Invalid Credentials")
}
}





return (     <>
    {!user ? <Login handleLogin={handleLogin} /> : null}
    {user === "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null}
    {user === "admin" && <AdminDashboard  changeUser={setUser}/>}
 
     </>
     )
 }
export default App;