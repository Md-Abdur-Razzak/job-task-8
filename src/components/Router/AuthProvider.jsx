import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";

export const MyAuth =createContext(null) 
const AuthProvider = ({children}) => {
    const [user,setCurrentUser]=useState('')
    const userserRegistraton = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
   
    const singWithEmailAndPassword = (email,password)=>{
       
        return signInWithEmailAndPassword(auth,email,password)
    }


    const googleAthntocation = () =>{
        
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
    }

useEffect(()=>{
    const unsubcribe= onAuthStateChanged(auth,(user)=>{
        
      setCurrentUser(user)
     
    })
    return ()=>{
        unsubcribe ()
    }
},[])

const logOutUser = ()=>{
   
    return signOut(auth)
}
    const passingData = {
        userserRegistraton,
        singWithEmailAndPassword,
        user,
        logOutUser,
        googleAthntocation

    }
    return (
        <MyAuth.Provider value={passingData}>
            {children}
        </MyAuth.Provider>
    );
};

export default AuthProvider;