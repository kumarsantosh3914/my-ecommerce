// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdpcOCSCsPbY3BJBUgfb1nTzh0DR8ip3U",
  authDomain: "movie-f8e46.firebaseapp.com",
  projectId: "movie-f8e46",
  storageBucket: "movie-f8e46.appspot.com",
  messagingSenderId: "348945511460",
  appId: "1:348945511460:web:97b97201dee5e1563794b1",
  measurementId: "G-KBGS5R00XW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
