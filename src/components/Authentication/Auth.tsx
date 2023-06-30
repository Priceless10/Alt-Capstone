// import { Login, Register } from "../components/Authentication";
import { Link } from "react-router-dom";

export const AuthComponent = () => {


  return (

    <div className="hidden lg:block lg:w-1/2">
      <section className="relative z-20 bg-cyan-500 border-cyan-500 w-full flex items-center justify-center border-2 lg:w-full px-5 h-[500px] lg:h-full">
        <div className="lg:absolute lg:top-[30%]">
          <h2 className="text-3xl font-bold mb-8 text-center -tracking-tighter">
            CHATTER
          </h2>
          <p className="text-lg">
            Unleash the power of Words, Connect with Like-minded Readers and
            Writers
          </p>
        </div>
      </section>
    </div>
  );
};