import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyBEJgqILEHrXEduM4QfaIYhfFDDhydCniE",
  authDomain: "hero-app-b8aa4.firebaseapp.com",
  databaseURL: "https://hero-app-b8aa4.firebaseio.com",
  storageBucket: "",
};

export default firebase.initializeApp(config);
