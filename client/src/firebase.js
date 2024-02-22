// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-6654c.firebaseapp.com",
  projectId: "blog-mern-6654c",
  storageBucket: "blog-mern-6654c.appspot.com",
  messagingSenderId: "758204510631",
  appId: "1:758204510631:web:9d5e6bcff9ec45a6d40682",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
