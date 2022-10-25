import React, { useState } from 'react';
import { createContext } from 'react';

export const AuthContext =createContext();





const AuthProvider = ({children}) => {

    const [mode,setMode]=useState('text-dark');
    const [bgMode,setBgMode]=useState('bg-light');
    

    const toggleMode=()=>{
        if(mode==='text-dark' && bgMode==='bg-light'){
            setMode('text-light');
            setBgMode('bg-dark');
            
        }
        else if(mode==='text-light' && bgMode==='bg-dark'){
            setMode('text-dark');
            setBgMode('bg-light');
            
        }
    }


    const user={displayName:'batas'}
    const authInfo={user,toggleMode,mode,bgMode}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;