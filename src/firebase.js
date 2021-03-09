import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNTqNq0OER7zZSz90ztKBB_hG9H_dDccE",
  authDomain: "linkedin-clone-by-jb.firebaseapp.com",
  projectId: "linkedin-clone-by-jb",
  storageBucket: "linkedin-clone-by-jb.appspot.com",
  messagingSenderId: "750355749622",
  appId: "1:750355749622:web:7290aaf0a138989db4aad7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
