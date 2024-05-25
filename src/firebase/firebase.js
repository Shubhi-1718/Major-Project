// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwFHYVykS3qisP1Zu81_x28BQctS8uobo",
  authDomain: "blog-8932c.firebaseapp.com",
  projectId: "blog-8932c",
  storageBucket: "blog-8932c.appspot.com",
  messagingSenderId: "1098449444519",
  appId: "1:1098449444519:web:75fa4a0ebd12f0ca804582",
  measurementId: "G-Q8JR9PCH0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
export const facebookprovider = new FacebookAuthProvider();

