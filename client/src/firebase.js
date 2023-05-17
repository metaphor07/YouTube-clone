import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCb7Vs-CcYP7AiOl4ugf1tMc9WpmFgPjCI",
  authDomain: "video-1e16b.firebaseapp.com",
  projectId: "video-1e16b",
  storageBucket: "video-1e16b.appspot.com",
  messagingSenderId: "23559337409",
  appId: "1:23559337409:web:31df417a5ea2394cf42b40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
