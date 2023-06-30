import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import { auth, db, storage } from "../firebase-config"
import { useNavigate } from "react-router-dom"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

interface ArticleProps {
    title: string,
    coverPhoto: File | undefined,
    content: string

}

export const useCreatePost = () => {
    const navigate = useNavigate()

    const createPost = async ({title, content, coverPhoto}: ArticleProps) => {

        try {
            const postCollectionRef = doc(collection(db, "posts"))
            if (coverPhoto !== undefined){
                const storageRef = ref(storage, `postImages/${coverPhoto.name}`)
                const uploadImage = uploadBytes(storageRef, coverPhoto)
                const downloadURL = await getDownloadURL((await uploadImage).ref)
                
                await setDoc(postCollectionRef, {title, content, coverPhoto: downloadURL, author: { name: auth.currentUser?.displayName, uid: auth.currentUser?.uid, photoURL: auth.currentUser?.photoURL }, date: Timestamp.fromDate(new Date()), })
            } else await setDoc(postCollectionRef, {title, content, coverPhoto: "", author: { name: auth.currentUser?.displayName, uid: auth.currentUser?.uid, photoURL: auth.currentUser?.photoURL }, date: Timestamp.fromDate(new Date()), })
            
            
            navigate("/")
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return { createPost }
}