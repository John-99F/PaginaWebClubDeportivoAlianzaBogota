import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { getCollection, getDocument } from "./firestore";


export const testConnection = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "test"));
    const res = await getCollection("hero")
    console.log("res: ", res)
    const prueba = await getDocument("footer","redes_sociales");
    console.log("pruebas: ",prueba.instagram)
    console.log("🔥 Conexión exitosa", querySnapshot);
  } catch (error) {
    console.error("❌ Error Firebase:", error);
  }
};