import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbJCJm8eAvjM_AdJvYqNlHrEFJ-qhDGo8",
    authDomain: "whatsapp-clone-no2.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-no2.firebaseio.com",
    projectId: "whatsapp-clone-no2",
    storageBucket: "whatsapp-clone-no2.appspot.com",
    messagingSenderId: "873516692872",
    appId: "1:873516692872:web:255de30c706e1934caf63d",
    measurementId: "G-12347KY9E1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;