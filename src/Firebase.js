// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwbp5Dg_xTYaKEzm6NNbE3lznPskZHp9M",
  authDomain: "sofiya-7a763.firebaseapp.com",
  projectId: "sofiya-7a763",
  storageBucket: "sofiya-7a763.appspot.com",
  messagingSenderId: "667703490977",
  appId: "1:667703490977:web:0b3bd80190bd7660c8f3e0",
  measurementId: "G-FYBS3Q8P8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAuth();
export {app,auth}