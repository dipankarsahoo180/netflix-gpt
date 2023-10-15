import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSingInFrom, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState('Authentication Required');
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleButtonClick = (evt) => {
    console.log(email, password);
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message);
    if (message) return;
    //Sign in Sign Up Logic;
    signInSignUpUser(email.current.value, password.current.value);
  }

  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.log('error occured:: ', errorCode, errorMessage);
      });
  }

  const signUpUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.log('error occured:: ', errorCode, errorMessage);
      });
  }

  const signInSignUpUser = (email, password) => {
    if (isSingInFrom) {
      signInUser(email, password);
      navigate('/browse')
    }
    else {
      signUpUser(email, password)
      navigate('/browse')
    }
  }

  const toggleSignInFrom = () => {
    setIsSignInFrom(!isSingInFrom)
  }

  return (
    <div className='login-page'>
      <Header></Header>
      <div className='absolute bg-black my-24 ml-[35%] text-white p-6 rounded-lg w-3/12 bg-opacity-80 max-md:w-1/2 max-md:ml-[24%]'>
        <h1 className='font-bold my-2 text-3xl w-full'>{isSingInFrom ? 'Sign in' : 'Sign up'}</h1>
        <form className='w-full' onSubmit={(e) => e.preventDefault()}>
          {
            isSingInFrom ? "" : <input type='text' placeholder='Full Name' className='p-2 my-2 bg-gray-700 w-full'></input>
          }
          <input ref={email} type='text' placeholder='Email' className='p-2 my-2 bg-gray-700 w-full'></input>
          <input ref={password} type='password' placeholder='Password' className='p-2 my-2 bg-gray-700 w-full'></input>
          <p className='text-red-700 font-bold'>{errorMessage}</p>
          <button className='p-2 my-4 bg-red-700 rounded-sm w-full' onClick={handleButtonClick}>{isSingInFrom ? 'Sign in' : 'Sign up'}</button>
        </form>
        {
          isSingInFrom ? <p onClick={toggleSignInFrom} className='py-4'>New to Netflix? <span className='cursor-pointer'>Sign up Now!</span></p> :
            <p onClick={toggleSignInFrom} className='py-4'>Already a member? <span className='cursor-pointer'>Sign in!</span></p>
        }

      </div>
    </div>
  )
}

export default Login