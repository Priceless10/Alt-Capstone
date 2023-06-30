import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useSignInWithEmail = ()=> {

    const { state } = useContext(AuthContext)
    const navigate = useNavigate();
    const signInWithEmail = async(email: string, password: string)=>{
        
        try {

            await setPersistence(auth, browserLocalPersistence)
            const userCredential = await signInWithEmailAndPassword(auth, state.user.email, state.user.password);
            const user = userCredential.user;
            navigate("/")
        } catch(error: string | any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }
    }
    return {signInWithEmail}
}