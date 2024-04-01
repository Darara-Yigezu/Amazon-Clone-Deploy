// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1I0qVy8IpgSH_Aaa3h0nocInEgJN8dfY",
  authDomain: "clone-5685d.firebaseapp.com",
  projectId: "clone-5685d",
  storageBucket: "clone-5685d.appspot.com",
  messagingSenderId: "869880251781",
  appId: "1:869880251781:web:6a07bf791a9432cdad70ec"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=app.firestore()