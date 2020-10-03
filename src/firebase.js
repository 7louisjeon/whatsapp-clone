import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKpzNMJ-7h4x5GmKLFMz7ClhTxjaEa5Rs",
  authDomain: "whatsapp-mern-8b519.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-8b519.firebaseio.com",
  projectId: "whatsapp-mern-8b519",
  storageBucket: "whatsapp-mern-8b519.appspot.com",
  messagingSenderId: "726991260521",
  appId: "1:726991260521:web:fe0650474c3d507012cbf8",
  measurementId: "G-SBY4VH7QXN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
