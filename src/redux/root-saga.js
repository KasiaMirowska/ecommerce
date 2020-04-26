import {all, call} from 'redux-saga/effects';
import {fetchCollectionsStart} from '../redux/shop/shop-sagas';
import {userSagas} from '../redux/user/user-sagas';

export default function* rootSaga() {
    yield all(
        [
            call(fetchCollectionsStart),
            call(userSagas)
        ]
    )
}
// ALL takes an array of sagas to run at the same time instead of waiting for each to finish if written like in this: 
//yeild fetchCollectionsStart()
//yeild fetchCollectionsStart()
//yeild fetchCollectionsStart()