// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC03hQ7WkmwIyKWO9xradLsX-sz3NGe9Co",
  authDomain: "web-kelas-rpll.firebaseapp.com",
  projectId: "web-kelas-rpll",
  storageBucket: "web-kelas-rpll.appspot.com",
  messagingSenderId: "924695559059",
  appId: "1:924695559059:web:7eb5a0cd8159f0f2234666",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();