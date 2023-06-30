import React, { useContext } from "react";
import {
  useGooglePopUp,
  useEmailAndPassword,
} from "../../hooks";
import { AuthContext } from "../../context/AuthContext";
import { AuthComponent } from "./Auth"


const Signup = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { popUp } = useGooglePopUp();
  const { emailAndPassword } = useEmailAndPassword();

  // handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailAndPassword(
      state.user.email,
      state.user.password,
      `${[state.user.displayName.first, state.user.displayName.last].join(" ")}`
    );

  };

  return (
    <div className="lg:flex lg:h-[1024px]">
    <AuthComponent />
      <div className="my-10 lg:my-20 lg:w-1/2">
        <h2 className="text-3xl font-semibold text-center">
         Sign Up for an account
        </h2>
        <br />
        <form onSubmit={handleSubmit}>
          <section className="flex flex-wrap justify-between mx-auto w-[320px] md:w-[520px]">
            <div className="w-full md:w-[49%]">
              <label htmlFor="first-name" className="text-lg ">
                First name
              </label>
              <br />
              <input
                onChange={(e) =>
                  dispatch({ type: "SET_FNAME", payload: e.target.value })
                }
                className="w-full py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
                type="text"
                name="firstname"
                id="first-name"
                placeholder="Jane"
                autoComplete="on"
              />
            </div>
            <div className="w-full md:w-[49%] mt-3 md:mt-0">
              <label htmlFor="last-name" className="text-lg ">
                Last name
              </label>
              <br />
              <input
                onChange={(e) =>
                  dispatch({ type: "SET_LNAME", payload: e.target.value })
                }
                className="w-full py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
                type="text"
                name="lastname"
                id="last-name"
                placeholder="Doe"
                autoComplete="on"
              />
            </div>
          </section>
          <br />
          <section className="flex flex-wrap justify-between mx-auto w-[320px] md:w-[520px]">
          <label htmlFor="email" className="text-lg w-[320px] ">
            Email address
          </label>
          <br />
          <input
            className="w-[320px] md:w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="email"
            name="email"
            id="email"
            placeholder="janedoe@mail.com"
            autoComplete="on"
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="password" className="text-lg mt-3 ">
            Password
          </label>
          <br />

          <input
            className="block mx-auto  w-[320px] md:w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="password"
            name="email"
            id="password"
            placeholder="********"
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="confirm-password" className="text-lg mt-3">
            Confirm Password
          </label>
          <br />

          <input
            className="w-[320px] md:w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="password"
            name="email"
            id="confirm-password"
            placeholder="********"
          />
          <br />
          <br />
          <button className="w-[320px] md:w-[520px] mt-5 text-center bg-blue-700 text-white font-bold py-[10px] px-[14px] rounded-md">
            Create account
          </button>
          </section>
        </form>
        <section className="my-6 flex flex-wrap justify-between mx-auto w-[320px] md:w-[520px]">
          <button
            onClick={popUp}
            className="w-[320px] md:w-[520px] mx-auto text-center bg-white text-black border border-gray-200 shadow-sm shadow-gray-200 font-semibold py-[10px] px-[14px] rounded-md"
          >
            Continue with google
          </button>
        </section>
      </div>
    </div>
  );
};

export default Signup;
