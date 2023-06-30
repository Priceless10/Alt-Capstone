import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


export const useGooglePopUp = ()=>{

    const navigate = useNavigate()

    
    const popUp = async () => {

        const provider = new GoogleAuthProvider();

            try {
                const result = await signInWithPopup(auth, provider)
                console.log("success")
                const credential: { accessToken: string } | any = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user)
                
                await setDoc(doc(db,"users", `${[user.displayName!.toLowerCase().split("-")]}`), { name: user.displayName, email: user.email, avatar: user.photoURL, uid: user.uid})

                console.log(user)
                navigate("/")
            }catch(error: string | any) {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                const email = error.customData;
                const credential = GoogleAuthProvider.credentialFromError(error);
            }

    
}
    return { popUp }
}
