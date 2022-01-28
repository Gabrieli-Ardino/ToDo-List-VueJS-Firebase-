import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCganQFIg-hAKir5meilM8DLyBMe5ri71w",
    authDomain: "todo-list-vuejs-df1d2.firebaseapp.com",
    projectId: "todo-list-vuejs-df1d2",
    storageBucket: "todo-list-vuejs-df1d2.appspot.com",
    messagingSenderId: "159076394063",
    appId: "1:159076394063:web:d2eeb01c1f045687e5b63a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const profileCollection = db.collection("profile");
const tasksCollection = db.collection("tasks");

export {db, auth, profileCollection, tasksCollection};
