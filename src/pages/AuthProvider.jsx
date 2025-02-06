// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react'; //  Import React & createContext properly
import { getLocalStorage } from '../utils/localstorage';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(); //  No issue now

 

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const[userData,setUserData]=useState(null)
      
    useEffect(()=>{
        const {employees,admin}=getLocalStorage()
      setUserData({employees,admin})
     
     
    },[]
)

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider ;