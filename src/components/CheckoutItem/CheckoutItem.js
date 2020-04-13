import React from 'react';
import './CheckoutItem.styles.scss';


const CheckoutItem = (props) => {
    console.log(props)
    //as props we need to pass cartItems but also the item itself in order to be able to add or remove another items to cart
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={props.imageUrl} alt='checkout item' />
            </div>
    <span className='name'>{props.name}</span>
            <span className='quantity'>{props.quantity}</span>
            <span className='price'>{props.price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;