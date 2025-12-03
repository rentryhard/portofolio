// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLhOgHdSva-OiuJD8C66V1SZdJx51y3yE",
  authDomain: "portofolio-13d61.firebaseapp.com",
  databaseURL: "https://portofolio-13d61-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portofolio-13d61",
  storageBucket: "portofolio-13d61.firebasestorage.app",
  messagingSenderId: "457715294726",
  appId: "1:457715294726:web:3e00cf72ba00d04b57d987",
  measurementId: "G-491PCGZKLF"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
