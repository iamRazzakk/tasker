/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateProfileUser = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL,
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser);
            setLoading(false)
        });
        return () => {
            unSubscribe()
        };
    }, []);
    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        googleSingIn,
        logOut,
        updateProfileUser,
        githubSingIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;