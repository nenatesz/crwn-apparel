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

// this code gets a snapshot of the user data and creates a new user in the database (ie for new users). this is done using the auth details gotten from signing in with google.
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
        }catch(error){
            console.log('error creating user', error.message);
        }

        
    }

    console.log(snapshot)
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// To setup google authentication utility

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;
