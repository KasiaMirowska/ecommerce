//  object representing the state of the whole application, overall reducer combining all other reducers

import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';


export default combineReducers({
    user: userReducer,
    cart: cartReducer,
})

