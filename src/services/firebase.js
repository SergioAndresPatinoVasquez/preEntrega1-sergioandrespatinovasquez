// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGSHofswlRyHI_0FFmL4ybmxZFOot94RM",
  authDomain: "coder-firabase.firebaseapp.com",
  projectId: "coder-firabase",
  storageBucket: "coder-firabase.appspot.com",
  messagingSenderId: "20942867205",
  appId: "1:20942867205:web:dbe8b5e08e0855bcc3056c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);