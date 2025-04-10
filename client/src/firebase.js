// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyC-E-qK1I5sVJq52JdYorxMlif8hPhJAL8", // ✅ Correct
    authDomain: "real-estate-4b02b.firebaseapp.com",
    projectId: "real-estate-4b02b",
    storageBucket: "real-estate-4b02b.appspot.com",
    messagingSenderId: "46246375556",
    appId: "1:46246375556:web:5d06049b7e5e8ec4b112d1"
  };
  

// Initialize Firebase
 console.log("Loaded API Key:", import.meta.env.VITE_FIREBASE_API_KEY);



export const app = initializeApp(firebaseConfig);