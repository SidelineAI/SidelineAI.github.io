// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0k6beGp9OMSxt32TJjoh0PwOk4n9mWeY",
    authDomain: "sideline-3a36f.firebaseapp.com",
    projectId: "sideline-3a36f",
    storageBucket: "sideline-3a36f.appspot.com",
    messagingSenderId: "25425736252",
    appId: "1:25425736252:web:2f60e5102986ffe3810939",
    measurementId: "G-2W7NYB17C5"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
