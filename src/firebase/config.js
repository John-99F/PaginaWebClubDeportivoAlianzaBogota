import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLlUhS-RZtGKxcsu_ESitfUDboVev_NyI",
  authDomain: "pagina-club-alianza-bogota.firebaseapp.com",
  projectId: "pagina-club-alianza-bogota",
  storageBucket: "pagina-club-alianza-bogota.firebasestorage.app",
  messagingSenderId: "710184432356",
  appId: "1:710184432356:web:f8020eb3273494db6032f1",
  measurementId: "G-DBCNFHKNF5"
};

const app = initializeApp(firebaseConfig);

// 🔥 servicios
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);