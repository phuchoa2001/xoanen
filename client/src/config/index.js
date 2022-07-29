import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBxA0C1L2tw5hBYqVO6BcFwIyBPBgxBybg",
    authDomain: "xoanen-29b44.firebaseapp.com",
    projectId: "xoanen-29b44",
    storageBucket: "xoanen-29b44.appspot.com",
    messagingSenderId: "213041923093",
    appId: "1:213041923093:web:d8290eaf02b38310e0ba1c",
    measurementId: "G-VC7YPXQNGX"
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);