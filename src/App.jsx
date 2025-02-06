// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
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


const authData=useContext(AuthContext)


const handleLogin=(email,password)=>{
    if(email=='admin@gmail.com'&& password=='123'){
     setUser('admin')
     
    
}else if(authData && authData.employees.find((e)=>email==e.email&&e.password==password)){
    setUser('employee')
   
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