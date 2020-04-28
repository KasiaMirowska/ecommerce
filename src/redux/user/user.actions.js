import  UserActionTypes  from './user.types';

export const googleSignInStart = () => {
    return ({
        type: UserActionTypes.GOOGLE_SIGNIN_START,
    })
}

export const signInSuccess = (user) => {
    return ({
        type: UserActionTypes.SIGNIN_SUCCESS,
        payload: user
    })
}

export const signInFailure = (error) => {
    return ({
        type: UserActionTypes.SIGNIN_FAILURE,
        payload: error,
    })
}

export const emailSignInStart = emailAndPassword => {
    return ({
        type: UserActionTypes.EMAIL_SIGNIN_START,
        payload: emailAndPassword
    })
}

export const checkUserSession = () => {
    return ({
        type: UserActionTypes.CHECK_USER_SESSION,
    })
}