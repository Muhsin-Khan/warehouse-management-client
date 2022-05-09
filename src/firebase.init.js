// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5NyxyrZXkxRw9lxVlkV7kTyX9_lOgmJU",
  authDomain: "tech-bhandar.firebaseapp.com",
  projectId: "tech-bhandar",
  storageBucket: "tech-bhandar.appspot.com",
  messagingSenderId: "411271798591",
  appId: "1:411271798591:web:d9d01a2d46e685ded13d8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const  auth = getAuth(app);

export default auth;