// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// import { getLocalStorage, setLocalStorage } from '../utils/localstorage';

const AuthContext =({children} )=>{
    // useEffect(()=>{
    //     setLocalStorage()
    //     getLocalStorage()
    // })
    return (
        <div>{children}</div>
    )
}
export default AuthContext