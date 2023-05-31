import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqj8R105vZwIlBVT0essDg--XH1dli8Ys",
  authDomain: "scrimba-react-firebase.firebaseapp.com",
  projectId: "scrimba-react-firebase",
  storageBucket: "scrimba-react-firebase.appspot.com",
  messagingSenderId: "614162901014",
  appId: "1:614162901014:web:acd4863189971f9327ed37"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");