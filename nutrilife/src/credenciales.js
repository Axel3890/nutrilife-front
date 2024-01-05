// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGEmf2860g7rC_fjNHflIJA7JdmpJzeyM",
  authDomain: "nutri-lifeaxel.firebaseapp.com",
  projectId: "nutri-lifeaxel",
  storageBucket: "nutri-lifeaxel.appspot.com",
  messagingSenderId: "756232260969",
  appId: "1:756232260969:web:ed6c0cfd73f5f251e9c1f8"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);

export default appfirebase;