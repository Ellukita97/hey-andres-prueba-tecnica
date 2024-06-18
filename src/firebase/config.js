// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4BfuClJEcXU3ZhM_u3UDHohN4g9GgjE4",
    authDomain: "prueba-tecnica-hey-andres.firebaseapp.com",
    projectId: "prueba-tecnica-hey-andres",
    storageBucket: "prueba-tecnica-hey-andres.appspot.com",
    messagingSenderId: "992898094028",
    appId: "1:992898094028:web:dc073e47d1cc80be7f0369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)