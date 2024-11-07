// constants/firebaseConfig.js
// import firebase from 'firebase/app';
// import 'firebase/storage';
// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';
import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhSUKvJEQQ8umBO31rFkFDQKO21odx2HE",
  authDomain: "Ye-learningapp-75f96.firebaseapp.com",
  projectId: "e-learningapp-75f96",
  storageBucket: "e-learningapp-75f96.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:911055463481:android:814d85de559b65067559e8"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Storage
// const storage = getStorage(app);

// export { storage };

// Khởi tạo Firebase App nếu chưa được khởi tạo
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const storage = getStorage(app);

export { storage };
