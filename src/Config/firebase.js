// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, onMessage, getToken } from "firebase/messaging";

import song from "../Assets/Sound/CoinDrop-Notification.mp3"


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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);
const configMessage = getMessaging(app);
auth.languageCode = 'id';

export {app,analytics,auth,db, storage}
export const fetchToken = async (setTokenId) => {
  try {
    const token = await getToken(configMessage, { vapidKey: firebaseConfig.token_option });
    if (token) {
      // console.log(token, "this is push notif token");
      setTokenId(token);
    } else {
      console.log("no push notif token for now");
    }
  } catch (error) {}
};

export const onMessageListener = (toast) => {
	onMessage(configMessage, (payload) => {
		const notif = new Audio(song)
		notif.play();
		const { data } = payload
		const { title, description } = data
		toast({
			title: title,
			description: description,
			position: 'top-right',
			isClosable: true,
		})
	});
};