import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAALujOuCMUPQeMV0h9W-OMe5hAbZ0TnSA",
    authDomain: "android-project-225e0.firebaseapp.com",
    projectId: "android-project-225e0",
    storageBucket: "android-project-225e0.appspot.com",
    messagingSenderId: "701723600696",
    appId: "1:701723600696:web:f9da89095a8d6c8937c3cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);