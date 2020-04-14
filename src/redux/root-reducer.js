//  object representing the state of the whole application, overall reducer combining all other reducers

import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';//tells persist to use local storage in the browser
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // an array of reducers we want to persist, no need to persist user casue it's already handled by firebase auth
}
const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer)