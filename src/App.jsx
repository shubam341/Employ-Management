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

// useEffect(()=>{
//    if(authData){
//     const loggedInUser=localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//         setUser(loggedInUser.role)
//     }
//    }
// },[authData]);

const handleLogin=(email,password)=>{
    if(email=='admin@gmail.com'&& password=='123'){
     setUser('admin')
     localStorage.setItem('loggedInUser',JSON.stringify({role:'admin' }))
    
}else if(authData){
    const employee=  authData.employees.find((e)=>email==e.email&&e.password==password)
    if(employee){
    setUser('employee')
    setloggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
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