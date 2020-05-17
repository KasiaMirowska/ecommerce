import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'; //allows browser to cache our store
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {fetchCollectionsStart} from '../redux/shop/shop-sagas';
import rootSaga from './root-saga';
//middlaware is an array hence to keep it scalable we write the following:

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

 sagaMiddleware.run(rootSaga) //we created root saga to run multiple sagas when component mounts instead of typing run method for each saga separatly
export const persistor = persistStore(store);  
export default {store, persistor};