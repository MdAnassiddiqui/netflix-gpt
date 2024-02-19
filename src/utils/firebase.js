// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-e-5cltxbTOPBLdNNycTlOk0GEjuytR8",
  authDomain: "netflix-gpt-aa5a7.firebaseapp.com",
  projectId: "netflix-gpt-aa5a7",
  storageBucket: "netflix-gpt-aa5a7.appspot.com",
  messagingSenderId: "668864428220",
  appId: "1:668864428220:web:1836a5b2c773f038baf8b9",
  measurementId: "G-RPYG7F3Y9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();