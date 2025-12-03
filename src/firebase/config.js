// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Qa23-ZoKfXuD-M6FV_Sd-way2FVcQmY",
  authDomain: "rcinformatica-d8c51.firebaseapp.com",
  projectId: "rcinformatica-d8c51",
  storageBucket: "rcinformatica-d8c51.firebasestorage.app",
  messagingSenderId: "660728428452",
  appId: "1:660728428452:web:9c30f3d897e9de0a6bb331",
  measurementId: "G-MB3R80RC2W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
