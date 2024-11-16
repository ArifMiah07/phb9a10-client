// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv-kc2dYe4St1n3HRYDrDoICWsk8is-Qk",
  authDomain: "eco-wonderland.firebaseapp.com",
  projectId: "eco-wonderland",
  storageBucket: "eco-wonderland.firebasestorage.app",
  messagingSenderId: "32491332555",
  appId: "1:32491332555:web:6fd0870dc362311d514c4e",
  measurementId: "G-7NFYM3B3HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);