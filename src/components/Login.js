import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateDate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClicked = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    //validate form
    const message = validateDate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Signed up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...

              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/274d310a-9543-4b32-87f3-147b372abc00/web/IN-en-20251201-TRIFECTA-perspective_baf6d3bc-eece-4a63-bcbb-e0a2f5d9d9ec_large.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-44 mx-auto right-0 left-0 p-12 bg-black rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-full bg-gray-600"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="bg-gray-600 p-4 m-2 w-full"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-gray-600"
        ></input>
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 m-2 bg-red-700 w-full text-white"
          onClick={handleButtonClicked}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer text-white"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
