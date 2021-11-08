import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyAo5nKkegNG-SdEVOaYrjjlQK3E_drPA88",
  authDomain: "disney-6-11.firebaseapp.com",
  projectId: "disney-6-11",
  storageBucket: "disney-6-11.appspot.com",
  messagingSenderId: "185738672269",
  appId: "1:185738672269:web:587502d6f7349f83aa4ac4"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export default db;
