import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1WDWH9nIqiAwqokMNyL87_39heKybGVc",
  authDomain: "moneyy-e7444.firebaseapp.com",
  projectId: "moneyy-e7444",
  storageBucket: "moneyy-e7444.appspot.com",
  messagingSenderId: "166426316595",
  appId: "1:166426316595:web:19c641095f0402c57b3846"
};

// Initialize Firebase
let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}
  
const auth = firebase.auth();
const provider = new GoogleAuthProvider();

export { auth, provider };

