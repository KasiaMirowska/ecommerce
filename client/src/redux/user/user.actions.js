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

export const signOutStart = () => {
    return ({
        type: UserActionTypes.SIGN_OUT_START,
    })
}

export const signOutSuccess = () => {
    return ({
        type: UserActionTypes.SIGN_OUT_SUCCESS,
    })
}

export const signOutFailure = (error) => {
    return ({
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: error,
    })
}

export const signUpStart = (userInfo) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userInfo
})

export const signUpSuccess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
})

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE ,
    payload: error
})