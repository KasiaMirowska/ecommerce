import shopActionTypes from './shop.types';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.util'

//thunk is action creator/function that returns dispatch. Istead of a funcion that returns action object we will return another function that returns dispatch

export const fetchCollectionsStart = () => {
    return ({
        type: shopActionTypes.FETCH_COLLECTIONS_START,
    }) 
}

export const fetchCollectionsSuccess = collectionsMap => {
    return ({
        type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }) 
}

export const fetchCollectionsFailure = errorMessage => {
    return ({
        type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage,
    })
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart());

        collectionRef
        .get()
        .then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap)) 
        }) 
        .catch(err => {
            return dispatch(fetchCollectionsFailure(err.message))
        })
    }
}
