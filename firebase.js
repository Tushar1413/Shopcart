// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';



// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCAenMGlZmV7-lCyCwenO3IqGaO_t4fo6A",
//     authDomain: "ritik-kart.firebaseapp.com",
//     projectId: "ritik-kart",
//     storageBucket: "ritik-kart.appspot.com",
//     messagingSenderId: "941889432059",
//     appId: "1:941889432059:web:4edbc2f2800c8a4752835e",
//     measurementId: "G-QRD5R479CL"
//   };
  
//   const firebaseApp= firebase.initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();
//   const auth= firebase.auth();

//   export {db,auth};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvph2gbKbfO-hCFuj9bCV_GVhGZozTpWw",
  authDomain: "shopcart1413.firebaseapp.com",
  projectId: "shopcart1413",
  storageBucket: "shopcart1413.appspot.com",
  messagingSenderId: "308668218134",
  appId: "1:308668218134:web:d99fb4b5939a8971b1ee37",
  measurementId: "G-CDSE8R53E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);