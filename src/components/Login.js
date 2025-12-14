import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm ] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/274d310a-9543-4b32-87f3-147b372abc00/web/IN-en-20251201-TRIFECTA-perspective_baf6d3bc-eece-4a63-bcbb-e0a2f5d9d9ec_large.jpg"
          alt="background"
        />
      </div>

      <form className="w-3/12 absolute my-44 mx-auto right-0 left-0 p-12 bg-black rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 text-white">
         {isSignInForm ? "Sign In" : "Sign Up"} 
          </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="bg-gray-600 p-4 m-2 w-full"
        ></input>
         {!isSignInForm && (
         <input
          type="text"
          placeholder="Name"
          className="p-4 m-2 w-full bg-gray-600"
        ></input>
         )}
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-600"
        ></input>
        <button className="p-4 m-2 bg-red-700 w-full text-white">
         {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer text-white"onClick={toggleSignInForm} >
         {isSignInForm ? "New to Netflix? Sign Up Now" :"Already registered Sign In now"} 
          </p>
      </form>
    </div>
  );
};

export default Login;
