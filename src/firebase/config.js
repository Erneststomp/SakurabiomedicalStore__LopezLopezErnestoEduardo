// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp2qGRAQSP-jfQADESKrb7lWBbmt_xIAU",
  authDomain: "reactjs-11a6f.firebaseapp.com",
  projectId: "reactjs-11a6f",
  storageBucket: "reactjs-11a6f.appspot.com",
  messagingSenderId: "628353653771",
  appId: "1:628353653771:web:0659a015cc8d775922bb0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)