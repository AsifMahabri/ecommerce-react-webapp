
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkZUNDFuDVLiP2QdT00oL9fn3WyC67tUU",
  authDomain: "react-authentication-6c4a0.firebaseapp.com",
  projectId: "react-authentication-6c4a0",
  storageBucket: "react-authentication-6c4a0.appspot.com",
  messagingSenderId: "164240132287",
  appId: "1:164240132287:web:52e4a7bbf997e6b84d5e0a",
  measurementId: "G-XFYF3TF9KE"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;