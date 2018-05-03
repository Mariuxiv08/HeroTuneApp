import * as firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyBEJgqILEHrXEduM4QfaIYhfFDDhydCniE",
    authDomain: "hero-app-b8aa4.firebaseapp.com",
    databaseURL: "https://hero-app-b8aa4.firebaseio.com",
    projectId: "hero-app-b8aa4",
    storageBucket: "hero-app-b8aa4.appspot.com",
    messagingSenderId: "266048697012"

};

export default firebase.initializeApp(config);
