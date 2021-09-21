// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3sc5XMi5ctygmclrhhDhHTCQECnV-C2g",
  authDomain: "memeoverflow.firebaseapp.com",
  projectId: "memeoverflow",
  storageBucket: "memeoverflow.appspot.com",
  messagingSenderId: "1028504904288",
  appId: "1:1028504904288:web:0aa9605dfdfc0408e35905",
  measurementId: "G-73E28HX62N"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()

export default db; 