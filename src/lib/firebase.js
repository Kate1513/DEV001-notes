// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBftUpgP7JD7w2eCMQU1a5d_jZDe9MAWsE",
  authDomain: "daily-notes-9bfd1.firebaseapp.com",
  projectId: "daily-notes-9bfd1",
  storageBucket: "daily-notes-9bfd1.appspot.com",
  messagingSenderId: "578306779688",
  appId: "1:578306779688:web:11de73c1c7700310cee31d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();