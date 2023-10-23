/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
   const navigate = useNavigate();
   const user = useSelector((store) => store?.userReducer);
   const handleSignOut = () => {
      signOut(auth)
         .then(() => {
            // Sign-out successful.
         })
         .catch((error) => {
            // An error happened.
         });
   };
   const searchHomeToggle = useSelector((store) => store?.gpt?.showGptSearch)
      ? "Home"
      : "GPT Search";
   const dispatch = useDispatch();

   React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            dispatch(addUser(JSON.parse(JSON.stringify(user))));
            navigate("/browse");
         } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
         }
      });
      //unsubscribe when component unmounts
      return () => unsubscribe();
   }, []);

   const handleGptSearchClick = () => {
      // Toggle GPT Search button
      dispatch(toggleGptSearchView());
   };

   return (
      <div className="absolute py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
         <img className="w-44" src={logo} alt="Logo" />
         {user ? (
            <div className="flex">
               <button
                  className="mx-4 mr-8 text-white font-bold"
                  onClick={handleGptSearchClick}
               >
                  {searchHomeToggle}
               </button>
               <img
                  className="w-10 h-10 mt-4 rounded-3xl"
                  src={user?.photoURL}
                  alt="user icon"
               ></img>
               <button
                  className="mx-2 text-white font-bold"
                  onClick={handleSignOut}
               >
                  Sign Out
               </button>
            </div>
         ) : (
            ""
         )}
      </div>
   );
};

export default Header;
