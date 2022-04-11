import { initializeApp } from "firebase";

const config = {
  apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  authDomain: "samer-amaz.firebaseapp.com",
  projectId: "samer-amaz",
  storageBucket: "samer-amaz.appspot.com",
  messagingSenderId: "167025370472",
  appId: "1:167025370472:web:9eb86e13f64309add662dd",
};

const app = initializeApp(config);

const db = app.firestore();

export default db;
