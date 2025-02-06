// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// import AdminDashboard from './components/Dashboard/AdminDashboard';
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Login from './components/Auth/login.jsx'

// import { setLocalStorage,getLocalStorage } from './utils/localstorage.jsx';



const App =()=>{
  
    // For data storage 
//     useEffect(()=>{
//         setLocalStorage()
//         getLocalStorage()
// },
// )

//for handling login page
const [user,setuser]=useState(null)

const handleLogin=(email,password)=>{
    if(email=='admin@gmail.com'&& password=='123'){
console.log("This is admin")
}else if(email=='user@megmail.com'&& password=='123'){
    console.log("This is User")
}
else{
    alert("Invalid Credentials")
}
}





    return (     <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
    )
}
export default App;