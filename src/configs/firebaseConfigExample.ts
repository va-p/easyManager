import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
//const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

import { getStorage, ref } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "Repace to your config",
  authDomain: "Repace to your config",
  projectId: "Repace to your config",
  storageBucket: "Repace to your config",
  messagingSenderId: "Repace to your config",
  appId: "Repace to your config"
}; 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const imagesRef = ref(storage, 'products/');

export { db, imagesRef };


