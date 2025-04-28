
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0bb7bwmKsQII6dXe1GfTcwlEF0axyZ-A",
    authDomain: "prepwise-ccde9.firebaseapp.com",
    projectId: "prepwise-ccde9",
    storageBucket: "prepwise-ccde9.firebasestorage.app",
    messagingSenderId: "678350349574",
    appId: "1:678350349574:web:1453261199cdc027266a87",
    measurementId: "G-8NKW3CQ6M9"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);