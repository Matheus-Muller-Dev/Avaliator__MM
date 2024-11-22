import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBigD49qfw4JrQlFID5MwooEUSUeXF3W40",
    authDomain: "avaliador-7d185.firebaseapp.com",
    projectId: "avaliador-7d185",
    storageBucket: "avaliador-7d185.appspot.com",
    messagingSenderId: "174581300292",
    appId: "1:174581300292:web:1befd5c6e8ad80e6031011",
    measurementId: "G-BFGYNYKNTH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };