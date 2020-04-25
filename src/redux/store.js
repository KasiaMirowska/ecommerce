import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'; //allows browser to cache our store
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
//middlaware is an array hence to keep it scalable we write the following:

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store);  
export default {store, persistor};