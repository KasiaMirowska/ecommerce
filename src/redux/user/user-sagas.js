import { takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { auth, googleProvider, createUserProfileDocument, mDatabase } from '../../firebase/firebase.util';
import {signInSuccess, signInFailure} from '../user/user.actions';

function* getSnapshotFromUserAuth(userAuth) {
    try {
        const user = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield user.get();
        //put method puts received data back into redux flow
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch(err) {
        yield put(signInFailure(err))
    }
}

function* signInWithGoogle() {
    //api call here to sign in instead of in App.js:
    try {
        const userRef = yield auth.signInWithPopup(googleProvider);
        const {user} = userRef;
        yield getSnapshotFromUserAuth(user)
    
       
       
    } catch (err) {
        yield put(signInFailure(err))
    }
}

//we're receiving action.payload here
function* signInWithEmail({payload: {email, password}}) {
    try{
        const userRef = yield auth.signInWithEmailAndPassword(email, password);
        // const user = yield call(createUserProfileDocument, userRef.user);
        // const userSnapshot = yield user.get();
        //refactored to limit repeating code
        const {user} = userRef;
        yield getSnapshotFromUserAuth(user)
        // yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));

    }catch(err) {
        yield put(signInFailure(err))
    }
}


export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
}

export function* userSagas () {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}