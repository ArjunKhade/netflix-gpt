// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-d0a85.firebaseapp.com",
  projectId: "netflixgpt-d0a85",
  storageBucket: "netflixgpt-d0a85.firebasestorage.app",
  messagingSenderId: "619227927554",
  appId: "1:619227927554:web:7143ee3388dad458e5831b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();