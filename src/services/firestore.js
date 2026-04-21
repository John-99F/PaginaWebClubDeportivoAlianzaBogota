import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFile = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `admin/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};
export const getCollection = async (name) => {
  const snapshot = await getDocs(collection(db, name));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getDocument = async (collectionName, docName) => {
  const ref = doc(db, collectionName, docName);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
};

export const createDoc = async (collectionName, data) => {
  await addDoc(collection(db, collectionName), data);
};

export const updateDocById = async (collectionName, id, data) => {
  const ref = doc(db, collectionName, id);
  await updateDoc(ref, data);
};

export const deleteDocById = async (collectionName, id) => {
  await deleteDoc(doc(db, collectionName, id));
};