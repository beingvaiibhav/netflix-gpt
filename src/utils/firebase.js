// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAudJ41W9RMg_YpVsh912oPDTM5QakgcaA",
  authDomain: "netflixgpt-15cd3.firebaseapp.com",
  projectId: "netflixgpt-15cd3",
  storageBucket: "netflixgpt-15cd3.appspot.com",
  messagingSenderId: "461769931602",
  appId: "1:461769931602:web:3ec66557399f5f60a3588b",
  measurementId: "G-9PNBZDYLNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();