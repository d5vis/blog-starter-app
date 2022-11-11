// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBXXTDPo6ISu0wBN0Tq6cPGj_kq97HlA9g",

  authDomain: "blog-d5vis.firebaseapp.com",

  projectId: "blog-d5vis",

  storageBucket: "blog-d5vis.appspot.com",

  messagingSenderId: "309777248893",

  appId: "1:309777248893:web:65ff7eb714d4bc3f64b714",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
