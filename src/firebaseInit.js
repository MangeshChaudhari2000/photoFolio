// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVZe_bRw1B2h2J-wBFAoph3iPelQ0ZsAk",
    authDomain: "photofolio-dd9dd.firebaseapp.com",
    projectId: "photofolio-dd9dd",
    storageBucket: "photofolio-dd9dd.appspot.com",
    messagingSenderId: "749674700917",
    appId: "1:749674700917:web:2cd3c9c50dc9c74667183c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);