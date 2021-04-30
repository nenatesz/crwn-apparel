import { takeLatest, all, call, put} from 'redux-saga/effects';
import { auth, createUserProfileDocument, getCurrentUser, googleProvider} from '../../firebase/firebase.utils';
import { signinFailure, signinSuccess, signoutFailure, signoutSuccess, signupFailure, signupSuccess } from './user.actions';
import userActionTypes from './user.types';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get()
        yield put(signinSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    }catch(error){
        yield put(signinFailure(error))
    }
}


export function* signInWithGoogle(){
    try{
        const userInfo = yield auth.signInWithPopup(googleProvider);
        // destructuring the user object
        const {user} = userInfo
        yield call(getSnapshotFromUserAuth, user)

        

    }catch(error){
        yield put(signinFailure(error))
    }
};


export function* signInWithEmail({payload: {email, password}}) {
    try{
        const userInfo = yield auth.signInWithEmailAndPassword(email, password);
        const { user } = userInfo;
        yield getSnapshotFromUserAuth(user);
    }catch (error){
        yield put(signinFailure(error))
    };
};

export function* isUserAutenticated(){
   try{
       const userAuth = yield getCurrentUser()
       if(!userAuth){
           return;   
       }
       yield getSnapshotFromUserAuth(userAuth);
    }catch(error){
    yield put(signinFailure(error))
   }
};

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signoutSuccess())
    }catch(error){
        yield put(signoutFailure(error))
    }

};

export function* signUp({payload: {email, password, displayName}}){
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signupSuccess({user, additionalData: {displayName}}))
    }catch(error){
        yield put(signupFailure(error))
    }
};

export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onGoogleSigInStart() {
   yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle )
};

export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
};

export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAutenticated);
};

export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGNOUT_START, signOut);
};

export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGNUP_START, signUp);
};

export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signInAfterSignUp)
}




export function* userSagas() {
    yield all([
        call(onGoogleSigInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
};


