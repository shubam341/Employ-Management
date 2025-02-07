// eslint-disable-next-line no-unused-vars
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
const authData=useContext(AuthContext);

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
     localStorage.setItem('loggedInUser',JSON.stringify({adminData }))
    
}else if(authData){
    const employee=  authData.employees.find((e)=>email==e.email&&e.password==password)
    if(employee){
        const employeeData = { role: 'employee', data: employee };
        setUser(employeeData.role);
    setloggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({employeeData,data:employee}))
     return;
}


    alert("Invalid Credentials")
}
}





return (     <>
    {!user ? <Login handleLogin={handleLogin} /> : null}
    {user === "employee" ? <EmployeeDashboard data={loggedInUserData} /> : null}
    {user === "admin" && <AdminDashboard />}
 
     </>
     )
 }
export default App;