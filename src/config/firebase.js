
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDhq3Rzio4kK2fh96LVOqRWjB1thkwXRmE",
  authDomain: "firstproject01-90870.firebaseapp.com",
  projectId: "firstproject01-90870",
  storageBucket: "firstproject01-90870.appspot.com",
  messagingSenderId: "373685022366",
  appId: "1:373685022366:web:a1e6d41a6d03f238e1958f",
  measurementId: "G-PJDNBF44D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)
export const loginWithGoogle = new GoogleAuthProvider()