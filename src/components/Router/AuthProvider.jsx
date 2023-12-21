import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

// //google Auntication
//     const googleAthntocation = () =>{
//         setLoder(true)
//         const provider = new GoogleAuthProvider()
//         return signInWithPopup(auth,provider)
//     }

useEffect(()=>{
    const unsubcribe= onAuthStateChanged(auth,(user)=>{
        console.log('currentUser',user);
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
        logOutUser

    }
    return (
        <MyAuth.Provider value={passingData}>
            {children}
        </MyAuth.Provider>
    );
};

export default AuthProvider;