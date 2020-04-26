import  UserActionTypes  from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
})

export const googleSignInStart = () => {
    return ({
        type: UserActionTypes.GOOGLE_SIGNIN_START,
    })
}

export const googleSignInSuccess = (user) => {
    return ({
        type: UserActionTypes.GOOGLE_SIGNIN_SUCCESS,
        payload: user
    })
}

export const googleSignInFailure = (error) => {
    return ({
        type: UserActionTypes.GOOGLE_SIGNIN_FAILURE,
        payload: error,
    })
}

export const emailSignInStart = emailAndPassword => {
    return ({
        type: UserActionTypes.EMAIL_SIGNIN_START,
        payload: emailAndPassword
    })
}

export const emailSignInSuccess = emailAndPassword => {
    return ({
        type: UserActionTypes.EMAIL_SIGNIN_SUCCESS,
        payload: emailAndPassword,
    })
}

export const emailSignInFailure = (error) => {
    return ({
        type: UserActionTypes.EMAIL_SIGNIN_FAILURE,
        payload: error,
    })
}