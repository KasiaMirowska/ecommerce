import { takeLatest, call, put } from 'redux-saga/effects';
import ShopActionTypes from '../shop/shop.types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from '../shop/shop.actions';


export function* fetchCollectionsAsync() {
    yield console.log('im fired!!!!!')
    
    try {
        console.log('about to start')
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot) //using yield call to make sure it will get finished before following action gets triggered, call takes as arguments function and its parameters  
        //sagas use method PUT to trigger actions (instead of dispatch)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
