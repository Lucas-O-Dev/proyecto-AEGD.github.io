import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth,  PhoneAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD0HON9hSYePH1gTZivGbjedh4QyLPpNfA",
  authDomain: "proyecto-aegd.firebaseapp.com",
  projectId: "proyecto-aegd",
  storageBucket: "proyecto-aegd.appspot.com",
  messagingSenderId: "16911335662",
  appId: "1:16911335662:web:6dbdcf1eb44aa0639e33ff",
  measurementId: "G-J5X6Z4LCLS"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene la referencia a Firestore
const db = getFirestore(app);

export { db, PhoneAuthProvider };

// Exporta los servicios de Firebase que necesitas
export const auth = getAuth(app);
export const storage = getStorage(app);