// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCSMGyjRMfM5C2QELezr2KCwCqZFVz4SVo",
    authDomain: "linkedin-clone-97df7.firebaseapp.com",
    projectId: "linkedin-clone-97df7",
    storageBucket: "linkedin-clone-97df7.firebasestorage.app",
    messagingSenderId: "253151314065",
    appId: "1:253151314065:web:3bd773882955077af57f30"
};

const firebaseApp=initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;