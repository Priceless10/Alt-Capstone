import { AuthContext, initialState } from "./AuthContext";
import { UserDetails } from "../types/user";
import {reducer}  from "../store/reducer";
import { useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";



export const AuthContextProvider = ({ children }:{children : React.ReactNode }) => {


    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                dispatch({type: "SIGN_IN", payload: user})
            } else {
                dispatch({type: "SIGN_OUT"})
            }
        })
        unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}