import firebase from "firebase";
// Initialize Firebase
let config = {
  apiKey: "AIzaSyD6ZtUODexxFLECxGbcMzDaeUWHFqPxPgE",
  authDomain: "app1-85bda.firebaseapp.com",
  projectId: "app1-85bda",
  storageBucket: "app1-85bda.appspot.com",
  messagingSenderId: "867598162876",
  appId: "1:867598162876:web:b1a6383b8c35120b4fa9b9",
  measurementId: "G-LHPRJZZFTG",
};
const firebaseApp = firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
