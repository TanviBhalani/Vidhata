import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT8pQuxD2W9M5MCsv0iWP_A31h1lfPK3M",
  authDomain: "vidhata-9d056.firebaseapp.com",
  projectId: "vidhata-9d056",
  storageBucket: "vidhata-9d056.firebasestorage.app",
  messagingSenderId: "474751705224",
  appId: "1:474751705224:web:7a57ef55cb614a4ab77f3d",
};

const app = initializeApp(firebaseConfig);

// 🔥 Firestore
export const db = getFirestore(app);
