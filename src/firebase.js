// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDle-Exl5Kg9hRc6x4sO5GVdm8aAJatSpo",
  authDomain: "voting-app-913f4.firebaseapp.com",
  projectId: "voting-app-913f4",
  storageBucket: "voting-app-913f4.appspot.com",
  messagingSenderId: "617814911220",
  appId: "1:617814911220:web:20e94ef3da43c2878696a1",
  measurementId: "G-127B2HS1YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
