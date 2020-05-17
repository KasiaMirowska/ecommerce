export const addMultiSameToCart = (cartItems, newItem) => {
    //checking if we have duplicates:
    const existingItem = cartItems.find(item => item.id === newItem.id);
    //we need to create a new array with adjusted object property to make sure that react will rerender
    if(existingItem) {
        return cartItems.map(item => {
            if(item.id === newItem.id) {
                return ({
                    ...item,
                    quantity: item.quantity+1,
                })
        } else {
            return item;
        }
        })
    }
    return [...cartItems, {...newItem, quantity: 1}]
    //if no duplicates we still need to add the new item to the cart
}

export const removeItem = (cartItems, itemToRemove)=> {
    const existingItem = cartItems.find(item => item.id === itemToRemove.id)

    if(existingItem.quantity === 1) {
        return cartItems.filter(item => item.id !== existingItem.id)
        
    }
    
    return cartItems.map( item => {
        if(item.id === itemToRemove.id) {
            return ({
                ...item,
                quantity: item.quantity -1,
            })
        } else {
            return item;
        }
        
    })
}