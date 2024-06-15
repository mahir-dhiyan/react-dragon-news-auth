// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK3pjktq-e8CeB1hglYvJ1CaopT6sX3UQ",
  authDomain: "react-dragon-news-auth-c0f5e.firebaseapp.com",
  projectId: "react-dragon-news-auth-c0f5e",
  storageBucket: "react-dragon-news-auth-c0f5e.appspot.com",
  messagingSenderId: "210226068350",
  appId: "1:210226068350:web:fa67492a92f582ebe1d12f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;