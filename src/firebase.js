import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0oduCR2cWrXdWKVw49a0Wi1NlBpYCjR4",
  authDomain: "chatapp-80244.firebaseapp.com",
  projectId: "chatapp-80244",
  storageBucket: "chatapp-80244.appspot.com",
  messagingSenderId: "852402614890",
  appId: "1:852402614890:web:3ca20deb5e067ad94e5013"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()