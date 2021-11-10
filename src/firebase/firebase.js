import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
