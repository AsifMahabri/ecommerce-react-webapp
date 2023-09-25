import { createContext, useContext, useEffect, useState, } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const UserAuthContext = createContext();

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState("");
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout (){
        return signOut (auth)
    }
    function googleSignIn() {
        const GoogleAuthProvider = new.target();
        return signInWithPopup(auth, GoogleAuthProvider);
    }
    
    
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
}, []);

    return <UserAuthContext.Provider value={{user,signUp, login, logout, googleSignIn }}>{children}</UserAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(UserAuthContext);
}

export default UserAuthContext;