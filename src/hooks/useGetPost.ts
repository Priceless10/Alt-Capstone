import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../firebase-config"

export const useGetPost = ()=>{
    let post: any = null
    const getPost = async ()=>{
        const postCollectionRef = collection(db, "posts")
        const querySnap = await getDocs(postCollectionRef)
        post = querySnap.docs.map((doc)=> doc.data())
        console.log(post)
        return { post }
    }
    return { getPost}
}