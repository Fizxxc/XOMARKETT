import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACkIZUx50LbxfgvW606eLaD6XhwNxIOuM",
  authDomain: "memberr-card.firebaseapp.com",
  databaseURL: "https://memberr-card-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "memberr-card",
  storageBucket: "memberr-card.firebasestorage.app",
  messagingSenderId: "532758260849",
  appId: "1:532758260849:web:309f8d8db5df773e64ffd0",
  measurementId: "G-CRH5Z9NQ6S"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export { ref, set, push, onValue, remove, createUserWithEmailAndPassword, signInWithEmailAndPassword };