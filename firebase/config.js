import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

 const firebaseConfig = {
   apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxx",
   authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxx",
   projectId: "xxxxxxxxxx",
   storageBucket: "xxxxxxxxxxxxxxxxx",
   messagingSenderId: "xxxxxxxxxxxxxxx",
   appId: "xxxxxxxxxxxxxxx"
 };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };