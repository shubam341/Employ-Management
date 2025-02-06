// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react'

export const AuthContext=createContext()

const AuthProvider=({children})=>{
    return (
        <div>
      <AuthContext.Provider value={"Shubam"}>
        {children}
      </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider