// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDInbSdlBmLq5WF3L1UenFoYWuf0PjRsJc",
  authDomain: "tasker-f21fa.firebaseapp.com",
  projectId: "tasker-f21fa",
  storageBucket: "tasker-f21fa.appspot.com",
  messagingSenderId: "956066988788",
  appId: "1:956066988788:web:5c3b8a8da5575b3ea654a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth