import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
//middlaware is an array hence to keep it scalable we write the following:

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;