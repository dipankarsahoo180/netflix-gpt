// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT3yR5TH1KJZTK1E-TYuM8C9kCPsINdQk",
  authDomain: "netflixgpt-78ee3.firebaseapp.com",
  projectId: "netflixgpt-78ee3",
  storageBucket: "netflixgpt-78ee3.appspot.com",
  messagingSenderId: "842561923365",
  appId: "1:842561923365:web:54265b1efd29263a1652cc",
  measurementId: "G-2W16RTV8FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
