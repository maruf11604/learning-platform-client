import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
    const [loading, setLoading]=useState(true)

    const providerLogin =provider=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);

    }
    const logOut=()=>{
        setLoading(true)
        signOut(auth);
    }

    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)

    }

    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state changed',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo={user,updateUserProfile,loading,toggleMode,mode,bgMode,providerLogin,createUser,logOut,signIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;