import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
   const [isSignInFrom, setIsSignInFrom] = useState(true);
   const [errorMessage, setErrorMessage] = useState("Authentication Required");
   const dispatch = useDispatch();
   const email = useRef(null);
   const password = useRef(null);
   const displayUserName = useRef(null);
   const handleButtonClick = (evt) => {
      const message = checkValidData(
         email.current.value,
         password.current.value
      );
      setErrorMessage(message);
      if (message) return;
      //Sign in Sign Up Logic;
      signInSignUpUser(
         displayUserName?.current?.value,
         email.current.value,
         password.current.value
      );
   };

   const signInUser = (name, email, password) => {
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            return user;
         })
         .then((user) => {
            updateUserProfile(name, user);
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            console.log("error occured:: ", errorCode, errorMessage);
         });
   };

   const signUpUser = (name, email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            return user;
         })
         .then((user) => {
            updateUserProfile(name, user);
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            console.log("error occured:: ", errorCode, errorMessage);
         });
   };

   const signInSignUpUser = (name, email, password) => {
      if (isSignInFrom) {
         signInUser(name, email, password);
      } else {
         signUpUser(name, email, password);
      }
   };

   const toggleSignInFrom = () => {
      setIsSignInFrom(!isSignInFrom);
   };

   const updateUserProfile = (displayUserName, user) => {
      updateProfile(user, {
         displayName: displayUserName,
         photoURL: "https://avatars.githubusercontent.com/u/56668329?v=4",
      })
         .then(() => {
            // Profile updated!
            dispatch(addUser(JSON.parse(JSON.stringify(auth.currentUser)))); //auth.currentUser is the updated user information
         })
         .catch((error) => {
            // An error occurred
            // ...
         });
   };

   return (
      <div className="login-page">
         <Header></Header>
         <div className="absolute bg-black my-24 ml-[35%] text-white p-6 rounded-lg w-3/12 bg-opacity-80 max-md:w-1/2 max-md:ml-[24%]">
            <h1 className="font-bold my-2 text-3xl w-full">
               {isSignInFrom ? "Sign in" : "Sign up"}
            </h1>
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
               {isSignInFrom ? (
                  ""
               ) : (
                  <input
                     type="text"
                     ref={displayUserName}
                     placeholder="Full Name"
                     className="p-2 my-2 bg-gray-700 w-full"
                  ></input>
               )}
               <input
                  ref={email}
                  type="text"
                  placeholder="Email"
                  className="p-2 my-2 bg-gray-700 w-full"
               ></input>
               <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="p-2 my-2 bg-gray-700 w-full"
               ></input>
               <p className="text-red-700 font-bold">{errorMessage}</p>
               <button
                  className="p-2 my-4 bg-red-700 rounded-sm w-full"
                  onClick={handleButtonClick}
               >
                  {isSignInFrom ? "Sign in" : "Sign up"}
               </button>
            </form>
            {isSignInFrom ? (
               <p onClick={toggleSignInFrom} className="py-4">
                  New to Netflix?{" "}
                  <span className="cursor-pointer">Sign up Now!</span>
               </p>
            ) : (
               <p onClick={toggleSignInFrom} className="py-4">
                  Already a member?{" "}
                  <span className="cursor-pointer">Sign in!</span>
               </p>
            )}
         </div>
      </div>
   );
};

export default Login;
