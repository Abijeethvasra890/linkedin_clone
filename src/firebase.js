import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1_5DoZ22RV6-Z2N5cInnxGgl24OY61BM",
    authDomain: "linkedin-clone-1ef30.firebaseapp.com",
    projectId: "linkedin-clone-1ef30",
    storageBucket: "linkedin-clone-1ef30.appspot.com",
    messagingSenderId: "1084362160070",
    appId: "1:1084362160070:web:0ef4bb911c176e2c8124c7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}