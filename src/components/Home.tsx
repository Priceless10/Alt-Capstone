import React from 'react'
import Header from './Header'
import { PostFeed } from './PostFeed'
import {reducer}  from "../store/reducer";
import { AuthContext, initialState } from "../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useReducer } from "react";


export const Home = ()=> {
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                dispatch({type: "SIGN_IN", payload: user})
            } else {
                navigate("/signin")
                dispatch({type: "SIGN_OUT"})
            }
        })
        unsubscribe()
    }, [])

  return (
    <div>
        <Header />
        <PostFeed />
    </div>
  )
}
