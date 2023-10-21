/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { logo } from "../utils/constants";

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

   return (
      <div className="absolute py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
         <img className="w-44" src={logo} alt="Logo" />
         {user ? (
            <div className="flex">
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
