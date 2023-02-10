import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtfZfpAYVTFOaiivEwp2XKBfKjAS8Il90",
  authDomain: "tryit-3715b.firebaseapp.com",
  projectId: "tryit-3715b",
  storageBucket: "tryit-3715b.appspot.com",
  messagingSenderId: "326672074963",
  appId: "1:326672074963:web:c0e2c8ee17e6b7d1a4ac26",
  measurementId: "G-2FZ7FSG0LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
