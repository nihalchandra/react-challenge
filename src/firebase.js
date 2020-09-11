import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyL37ygqJ-vWwR5L7Hoj8_hSK4W-n1AFE",
  authDomain: "clone-aaf3c.firebaseapp.com",
  databaseURL: "https://clone-aaf3c.firebaseio.com",
  projectId: "clone-aaf3c",
  storageBucket: "clone-aaf3c.appspot.com",
  messagingSenderId: "567868392488",
  appId: "1:567868392488:web:7df546412a8e3bc941e11d",
  measurementId: "G-EFTNK12EZV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
