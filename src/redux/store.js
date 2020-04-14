import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'; //allows browser to cache our store
import rootReducer from './root-reducer';
//middlaware is an array hence to keep it scalable we write the following:

const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store);  
export default {store, persistor};