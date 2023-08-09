import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgsr-UFKYYvYUzV27rFdOrjcIF2GGJxeQ",
  authDomain: "discord-clone-udemy-cd36f.firebaseapp.com",
  projectId: "discord-clone-udemy-cd36f",
  storageBucket: "discord-clone-udemy-cd36f.appspot.com",
  messagingSenderId: "748863703388",
  appId: "1:748863703388:web:8bec7f49f756c127711999"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };