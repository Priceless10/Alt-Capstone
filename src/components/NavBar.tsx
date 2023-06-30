import {signOut} from "firebase/auth"
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NavBar = () => {
  const {dispatch} = useContext(AuthContext)
   const navigate = useNavigate()
  const handleSignOut = async()=>{
    try {
      await signOut(auth)
      dispatch({
        type: "SIGN_OUT"
      })
      navigate("/signin")
    } catch(error: any){
      console.log(error.message)
    }
  }

  return (
    <nav className="absolute top-[100%] bg-white right-[0%] z-50 border boder-gray-900 shadow shadow-gray-200 p-6 rounded-md flex flex-col gap-4 w-[250px] justify-between items-start">
      <ul className="flex flex-col gap-6">
        <li>Profile
            <ul className="flex flex-col gap-2 text-sm font-normal ml-3 mt-3">
                <li>Account</li>
                <li>Settings</li>
            </ul>
        </li>
        <li>
          Overview
          <ul className="flex flex-col gap-2 text-sm font-normal ml-3 mt-3">
            <li>Feed</li>
            <li>Bookmarks</li>
            <li>Stats</li>
          </ul>
        </li>
      </ul>
      <button onClick={handleSignOut} className="text-red-500">Log out</button>
    </nav>
  );
};
