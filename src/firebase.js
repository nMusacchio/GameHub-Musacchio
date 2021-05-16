import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyC2GXTX_ZEM1Ab69xs1Vaek6G8sBKlHLVc",
    authDomain: "gamehub-a0c4a.firebaseapp.com",
    projectId: "gamehub-a0c4a",
    storageBucket: "gamehub-a0c4a.appspot.com",
    messagingSenderId: "451749946810",
    appId: "1:451749946810:web:445aedd071804c1dc2a983"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);

