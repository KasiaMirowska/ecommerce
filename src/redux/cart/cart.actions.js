import CartActionTypes from './cart.types';

//payload is an optional argument, here no need causer of toggle
export const toggleCartHidden = () => {
    return ({
        type: CartActionTypes.TOOGLE_CART_HIDDEN
    })
}