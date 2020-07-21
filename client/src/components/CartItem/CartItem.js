import React from 'react';
import './CartItem.styles.scss';


const CartItem = (props) => {
    const {imageUrl, price, name, quantity} = props;
    
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item'/>
            <div className='item-details'>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </div>
        </div>
    )
  
}

export default React.memo(CartItem);