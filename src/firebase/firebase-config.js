import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6E_WLMzJkrtpsENRCfmRj8p-qonrWqO0",
  authDomain: "heliosearchy.firebaseapp.com",
  projectId: "heliosearchy",
  storageBucket: "heliosearchy.appspot.com",
  messagingSenderId: "42327985741",
  appId: "1:42327985741:web:b81819d1a0b38e6ce45604",
  measurementId: "G-PYQ0MR3J33",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
