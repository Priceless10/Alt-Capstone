import { auth } from "../firebase-config";
import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, updateCurrentUser, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase-config";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useEmailAndPassword = ()=> {
  const navigate = useNavigate()

    const { state } = useContext(AuthContext)

    const emailAndPassword = async(email: string, password: any, name: string,)=>{
        try {
          await setPersistence(auth, browserLocalPersistence)
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(auth.currentUser!, { displayName: name} )
            console.log(user);
            await setDoc(doc(db,"users", user.uid), {name: name , email: user.email, avatar: user.photoURL, uid: user.uid})
            navigate("/feed-interest")

          } catch(error: string | any) {
            console.log(email)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if (errorCode === 'auth/weak-password') {
              console.log('The password is too weak.');
            } else if (errorCode === 'auth/email-already-in-use') {
              console.log('The email is already in use.');
            } else if (errorCode === 'auth/invalid-email') {
              console.log('The email is invalid.');
            } else {
              console.log(errorMessage);
            }
          }
    }

    return { emailAndPassword }


    
}