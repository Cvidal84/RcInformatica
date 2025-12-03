// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "rcinformatica-d8c51.firebaseapp.com",
  projectId: "rcinformatica-d8c51",
  storageBucket: "rcinformatica-d8c51.appspot.com",
  messagingSenderId: "TU_MESSAGING_SENDER_ID_AQUI",
  appId: "TU_APP_ID_AQUI",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
