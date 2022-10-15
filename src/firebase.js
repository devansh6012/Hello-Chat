import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBJ9CWJ6gEiAEYomrLrrn-N_ojCfFSTrA",
  authDomain: "chat-8a4f8.firebaseapp.com",
  projectId: "chat-8a4f8",
  storageBucket: "chat-8a4f8.appspot.com",
  messagingSenderId: "281870729223",
  appId: "1:281870729223:web:7614891b33ecde0865eaa2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()