// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBBlRCYEYYzki_ZDlycZJcoZy04ROjeHo",
  authDomain: "capstone-final-8452a.firebaseapp.com",
  projectId: "capstone-final-8452a",
  storageBucket: "capstone-final-8452a.appspot.com",
  messagingSenderId: "1038364239266",
  appId: "1:1038364239266:web:e5d4703a4678faf79c3efb",
  measurementId: "G-KZZ4GQ73QH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
export const storage = getStorage();
export const auth = getAuth(app)