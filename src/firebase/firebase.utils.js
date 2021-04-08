import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBtcyOTsUewmBn6tENZDTy7HD6PmcrcgNA",
    authDomain: "crwn-db-4ee1c.firebaseapp.com",
    databaseURL: "https://crwn-db.firebaseio.com",
    projectId: "crwn-db-4ee1c",
    storageBucket: "crwn-db-4ee1c.appspot.com",
    messagingSenderId: "630813907088",
    appId: "1:630813907088:web:89d0b54c0bc9b89d02a015",
    measurementId: "G-MFEXXR86DF"  
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// To setup google authentication utility

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;
