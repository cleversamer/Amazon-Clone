import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";

const config = {
  apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  authDomain: "samer-amaz.firebaseapp.com",
  projectId: "samer-amaz",
  storageBucket: "samer-amaz.appspot.com",
  messagingSenderId: "167025370472",
  appId: "1:167025370472:web:9eb86e13f64309add662dd",
};

initializeApp(config);

const db = getFirestore();

const itemsRef = collection(db, "items");

const navItemsRef = collection(db, "navItems");

export const navItemsQuery = query(navItemsRef, orderBy("timestamp", "asc"));

export const itemsQuery = query(itemsRef, orderBy("timestamp", "asc"));
