import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9NePF0SQec8JgeGKxbGUoVUFVD06mB_w",
    authDomain: "food-delivery-app-2e87a.firebaseapp.com",
    projectId: "food-delivery-app-2e87a",
    storageBucket: "food-delivery-app-2e87a.appspot.com",
    messagingSenderId: "352105802312",
    appId: "1:352105802312:web:08a1009f60a92e45e8c67d",
    measurementId: "G-6XNFKG0920",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function createNewUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

function signInExistingUser(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

function userStateObserver() {
    onAuthStateChanged(auth, function(user) {
        if (user) {
            return true;
        } else {
            return false;
        }
      });
}

export {
    auth,
    db,
    createNewUser,
    signInExistingUser,
    userStateObserver
}