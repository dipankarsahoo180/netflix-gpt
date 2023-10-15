/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';


const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])
  
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(addUser(JSON.parse(JSON.stringify(user))));
        console.warn('state changed and user is ',user)
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, [])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body