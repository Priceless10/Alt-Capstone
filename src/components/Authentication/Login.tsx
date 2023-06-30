import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useGooglePopUp, useSignInWithEmail } from "../../hooks";
import {AuthComponent} from "./Auth"



const Login = () => {
  const { state, dispatch} = useContext(AuthContext)
  const { popUp } = useGooglePopUp();
  const { signInWithEmail } = useSignInWithEmail()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmail(state.user.email, state.user.password)

      }
  return (
    <div className="relative w-full flex h-[700px] md:h-[1024px]">
    <AuthComponent />
      <div className="absolute top-[10%] w-full lg:w-1/2 lg:top-[15%] flex flex-col items-center lg:relative">
        <h2 className="text-3xl font-semibold text-center">Welcome back</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-lg ">
            Email address
          </label>
          <br />
          <input
            className="w-[300px] md:w-[502px] py-[10px] px-[14px] border border-cyan-100 mt-2 rounded-md shadow-sm shadow-cyan-100"
            type="email"
            name="email"
            id="email"
            placeholder="janedoe@mail.com"
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
          />
          <br />
          <br />
          <label htmlFor="password" className="text-lg ">
            Password
          </label>
          <br />

          <input
            className="w-[300px] md:w-[520px] py-[10px] px-[14px] border border-cyan-100 mt-2 rounded-md shadow-sm shadow-cyan-100"
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
          />
          <br />
          <br />
          <button className="w-[300px] md:w-[520px] text-center bg-blue-700 text-white font-bold py-[10px] px-[14px] rounded-md">
            Log in
          </button>
        </form>
        <section className="my-6">
          <button
            onClick={popUp}
            className="w-[300px] mx-auto md:w-[520px] text-center bg-white text-black border border-gray-200 shadow-sm shadow-gray-200 font-semibold py-[10px] px-[14px] rounded-md"
          >
            Continue with google
          </button>
        </section>
      </div>
    </div>
  );
};


export default Login;
