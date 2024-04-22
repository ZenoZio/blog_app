// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-7c6e8.firebaseapp.com",
  projectId: "blog-app-7c6e8",
  storageBucket: "blog-app-7c6e8.appspot.com",
  messagingSenderId: "929596693745",
  appId: "1:929596693745:web:3da842c730155384f4dd50",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
