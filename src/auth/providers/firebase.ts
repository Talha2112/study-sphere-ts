// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV3X5dLQzDhlcTzBJ2LhRgtXHz4wBVLu8",
  authDomain: "study-sphere-219ac.firebaseapp.com",
  projectId: "study-sphere-219ac",
  storageBucket: "study-sphere-219ac.appspot.com",
  messagingSenderId: "37271875587",
  appId: "1:37271875587:web:1efdccf93fd424299cde36",
  measurementId: "G-D07LXH1ZMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
