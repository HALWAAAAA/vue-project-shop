// firebase.js
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  setDoc, 
  deleteDoc,
  updateDoc 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vue-project-shop.firebaseapp.com",
  projectId: "vue-project-shop",
  storageBucket: "vue-project-shop.firebasestorage.app",
  messagingSenderId: "99627004489",
  appId: "1:99627004489:web:93192314e68244c2b20598",
  measurementId: "G-Z8KSE2THJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Експортуємо всі необхідні функції
export { db, collection, getDocs, doc, getDoc, setDoc, deleteDoc, updateDoc };

