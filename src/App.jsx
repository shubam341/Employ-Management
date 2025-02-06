// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState, useSyncExternalStore } from 'react';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Login from './components/Auth/login.jsx'
import { AuthContext } from './pages/AuthProvider.jsx';

// import { setLocalStorage,getLocalStorage } from './utils/localstorage.jsx';



const App =()=>{
  
    // For data storage 
//     useEffect(()=>{
//         setLocalStorage()
//         getLocalStorage()
// },
// )


//for handling login page
const [user,setUser]=useState(null)
const [loggedInUserData,setloggedInUserData]=useState(null)

const authData=useContext(AuthContext)

// useEffect(()=>{
//    if(authData){
//     const loggedInUser=localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//         setUser(loggedInUser.role)
//     }
//    }
// },[authData]);

const handleLogin=(email,password)=>{
    if(email=='admin@gmail.coma'&& password=='123'){
     setUser('admin')
     localStorage.setItem('loggedInUser',JSON.stringyfy({role:'admin'}))
    
}else if(authData){
    const employee=  authData.employees.find((e)=>email==e.email&&e.password==password)
    if(employee){
    setUser('employee')
    localStorage.setItem('loggedInUser',JSON.stringyfy({role:'employee'}))
}
}
else{
    alert("Invalid Credentials")
}
}





    return (     <>
   {!user ? <Login handleLogin={handleLogin} /> : null}
{user === "employee" && <EmployeeDashboard />}
{user === "admin" && <AdminDashboard />}

    </>
    )
}
export default App;