import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext =createContext();

const auth= getAuth(app);



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


    const [user,setUser]=useState(null);

    const providerLogin =provider=>{
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state changed',currentUser);
            setUser(currentUser)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo={user,toggleMode,mode,bgMode,providerLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;