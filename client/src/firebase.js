// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-mern-7f6f7.firebaseapp.com",
  projectId: "estate-mern-7f6f7",
  storageBucket: "estate-mern-7f6f7.appspot.com",
  messagingSenderId: "662331707598",
  appId: "1:662331707598:web:5fba20e314282c5120c09f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);