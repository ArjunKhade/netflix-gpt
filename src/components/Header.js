import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE, USER_AVATAR } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLangugae } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleGptSearch = () => {
    //handle on GPT search button clicked
    dispatch(toggleGptSearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/")
      }
    });
    //unsubsribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

const handleLangChange = (e) => {
   dispatch(changeLangugae(e?.target?.value));
}

  return (
    <div className=" z-10 flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44" alt="logo" src={LOGO} />

      {true && (
        <div className="flex items-center">
          { showGPTSearch &&
            <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLangChange}> 
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.value} value={lang.Value}>{lang.Label}</option>
            ))}
            </select>
          }

          <button
            onClick={handleGptSearch}
            className="text-white p-2 mr-2 rounded bg-purple-800"
          >
            {showGPTSearch? "Home Page" : "GPT Search"}
          </button>
          <img className="w-10 h-10 rounded" alt="usericon" src={USER_AVATAR} />
          <button
            onClick={handleSignOut}
            className="ml-4 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-200 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
