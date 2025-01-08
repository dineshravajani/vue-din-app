// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSj7ue0dnyWmmH2hoAiSx-q1x83PGt2U8",
  authDomain: "authvue-50442.firebaseapp.com",
  projectId: "authvue-50442",
  storageBucket: "authvue-50442.firebasestorage.app",
  messagingSenderId: "908474447434",
  appId: "1:908474447434:web:2bd952ef65ab761ee898b3",
  measurementId: "G-LBPSC0GF2S"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//
const DB = getFirestore();
const AUTH = getAuth();
export { DB, AUTH }