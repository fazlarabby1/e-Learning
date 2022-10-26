import React, { } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config'
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUSer = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password);
    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const providerLogin = (provider) =>{
        return signInWithPopup(auth , provider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return () => unSubscribe();
    })

    const authInfo = {
        user,
        createUSer,
        logIn,
        logOut,
        providerLogin
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;