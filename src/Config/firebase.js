// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmM8nIPrwMAZQniYb7E1wRt5Ak1RnBB0E",
  authDomain: "edrus-lms.firebaseapp.com",
  projectId: "edrus-lms",
  storageBucket: "edrus-lms.appspot.com",
  messagingSenderId: "972797310737",
  appId: "1:972797310737:web:f6521a3db5452b41597eb0",
  measurementId: "G-1GXTXGDYG5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const storage = getStorage(app);
