import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa69yCQ7LGYhB3GLw9xRTSiubvFT_4IU4",
  authDomain: "audlearn-2024.firebaseapp.com",
  projectId: "audlearn-2024",
  storageBucket: "audlearn-2024.appspot.com",
  messagingSenderId: "499186635472",
  appId: "1:499186635472:web:81b09b5a52d6c5d76584d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
