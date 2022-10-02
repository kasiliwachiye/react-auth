import { initializeApp } from "firebase/app";
// step 1: import getAuth
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD5GyS2Tp0h0g1BDDGPRSTwuHrJ24873tU",
    authDomain: "react-auth-47.firebaseapp.com",
    projectId: "react-auth-47",
    storageBucket: "react-auth-47.appspot.com",
    messagingSenderId: "600703138840",
    appId: "1:600703138840:web:597899107080414e8a176d",
    measurementId: "G-J6HE1D1EWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// step 2: export getAuth as a constant auth
export const auth = getAuth();