//creating selectors allows us to store/cache the section of a state so that it's not constatnly rerendered even when not changed => improves performance


import {createSelector} from 'reselect';
// there are INPUTSelectors that dont use anything, and OUTPUTselectors that use INPUTselectors and createSelector method to build themselves
//inputSelector just deconstructs the state : 
export const selectCart = state => state.cart;
//always add word select as a naming convention to the state property that we select in order to keep it clear

//OUTPUTselector uses createSelector that takes 2 arguments: an array of INPUT SELECTORS and a function that returns the wanted slice of the state. THis function takes inputSelector's returned output as arguments
export const selectCartItems = createSelector(
    [selectCart],
    cart => {
        return cart.cartItems //because state.cart is what selectCart is targeting
    })

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumualtedQuantity, item) => accumualtedQuantity + item.quantity, 0)
)