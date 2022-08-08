import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBcOFaaCiaIF-P1zafqbCD7cuBiKA8MfY",
  authDomain: "signup-component.firebaseapp.com",
  projectId: "signup-component",
  storageBucket: "signup-component.appspot.com",
  messagingSenderId: "1073978661565",
  appId: "1:1073978661565:web:900de519473f2c1b66b5d4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default auth;
