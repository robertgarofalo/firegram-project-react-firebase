import firebase from 'firebase/app';
import 'firebase/storage/';
import 'firebase/firestore/';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLTuAecN_6FmCy2ugfUFQZZfsLOFvoU_s",
    authDomain: "robbygcodes-firegram.firebaseapp.com",
    projectId: "robbygcodes-firegram",
    storageBucket: "robbygcodes-firegram.appspot.com",
    messagingSenderId: "512819136109",
    appId: "1:512819136109:web:12191ec9e800bea3de2164"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };