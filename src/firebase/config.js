import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAzGuD1GBTfWzM_AVYmWbl1mlTgObYWER8",

  authDomain: "examen-react-76be3.firebaseapp.com",

  projectId: "examen-react-76be3",

  storageBucket: "examen-react-76be3.firebasestorage.app",

  messagingSenderId: "548708317818",

  appId: "1:548708317818:web:1b202ed0b4a1efa11dd9c3"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;