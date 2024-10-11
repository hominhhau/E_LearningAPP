// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this import
import { getFirestore } from "firebase/firestore"; // Add this import 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAY25xMBf2YSCaM2UazF--xSF6RAzjsJts",
    authDomain: "e-learning-a46b7.firebaseapp.com",
    projectId: "e-learning-a46b7",
    storageBucket: "e-learning-a46b7.appspot.com",
    messagingSenderId: "367304508134",
    appId: "1:367304508134:web:614e49d9c54e9078a9b127",
    measurementId: "G-27SRR6GRRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const FIREBASE_APP =  initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);