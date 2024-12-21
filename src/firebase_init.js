// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsQQ34RM2-7U4nEGuzOL5fGmgRtQROehs",
  authDomain: "auth-moha-milon-9645a.firebaseapp.com",
  projectId: "auth-moha-milon-9645a",
  storageBucket: "auth-moha-milon-9645a.firebasestorage.app",
  messagingSenderId: "785269838251",
  appId: "1:785269838251:web:021b7096c68365e21202ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);