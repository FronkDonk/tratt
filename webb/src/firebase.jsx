import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClgvGSj2dNIVrAGYna1xA5PWqcbMTj0bs",
  authDomain: "webbslutprojekt-development.firebaseapp.com",
  databaseURL: "https://webbslutprojekt-development-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webbslutprojekt-development",
  storageBucket: "webbslutprojekt-development.appspot.com",
  messagingSenderId: "163992628336",
  appId: "1:163992628336:web:4466a2c773d64bb72158b5"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
