// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "smartproductivity-6a222.firebaseapp.com",
  projectId: "smartproductivity-6a222",
  storageBucket: "smartproductivity-6a222.appspot.com",
  messagingSenderId: "102443061616",
  appId: "1:102443061616:web:fd77cc9be5dad27a7c3fb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);