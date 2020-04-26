import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.util';
import {googleSignInSuccess, googleSignInFailure} from '../user/user.actions';
import { connect } from 'react-redux';

function* signInWithGoogle() {
    //api call here to sign in instead of in App.js:
    try {
        const userRef = yield auth.signInWithPopup(googleProvider)
        const user = yield call(createUserProfileDocument, userRef.user)
        const userSnapshot = yield user.get()
        //put method puts received data back into redux flow
        yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
       
    } catch (err) {
        yield put(googleSignInFailure(err))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* userSagas () {
    yield all([
        call(onGoogleSignInStart)
    ])
}