import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAlk1glvirG2TH46j9InlyR7yd41aBEpX4",
  authDomain: "react-http-cf04d.firebaseapp.com",
  databaseURL: "https://react-http-cf04d-default-rtdb.firebaseio.com",
  projectId: "react-http-cf04d",
  storageBucket: "react-http-cf04d.appspot.com",
  messagingSenderId: "157136709289",
  appId: "1:157136709289:web:f0bc66686222b2a7f0ebb8"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
