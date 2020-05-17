import CartActionTypes from './cart.types';

//payload is an optional argument, here no need causer of toggle
export const toggleCartHidden = () => {
    return ({
        type: CartActionTypes.TOOGLE_CART_HIDDEN
    })
}

export const addItemToCart = (item) => {
    return ({
        type: CartActionTypes.ADD_ITEM,
        payload: item,
    })
}
export const removeItem = (item) => {
    return ({
        type: CartActionTypes.REMOVE_ITEM,
        payload: item,
   })
}

export const clearItemFromCart = (item) => {
    return ({
         type: CartActionTypes.CLEAR_ITEM,
         payload: item,
    })
}

export const clearCart = items => ({
    type: CartActionTypes.CLEAR_CART,
    payload: items
})