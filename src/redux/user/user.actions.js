import userActionTypes  from "./user.types";


export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});


export const googleSigninStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START
});

export const signinSuccess = (user) => ({
    type: userActionTypes.SIGNIN_SUCCESS,
    payload: user
});

export const signinFailure = (error) => ({
    type: userActionTypes.SIGNIN_FAILURE,
    payload: error
});


export const emailSigninStart = (emailandpassword) => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailandpassword
});

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
});

export const signoutStart = () => ({
    type: userActionTypes.SIGNOUT_START
});

export const signoutSuccess = () => ({
    type: userActionTypes.SIGNOUT_SUCCESS
});

export const signoutFailure = (error) => ({
    type: userActionTypes.SIGNOUT_FAILURE,
    payload: error
});

export const signupStart = (displaynamepasswordemail) => ({
    type: userActionTypes.SIGNUP_START,
    payload: displaynamepasswordemail
});

export const signupSuccess = ({user, additionalData}) => ({
    type: userActionTypes.SIGNUP_SUCCESS,
    payload: {user, additionalData}
});

export const signupFailure = (error) => ({
    type: userActionTypes.SIGNUP_FAILURE,
    payload: error
})
