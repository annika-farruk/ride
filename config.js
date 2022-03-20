import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
