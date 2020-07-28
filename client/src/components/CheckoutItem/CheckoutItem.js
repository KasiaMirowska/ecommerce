import React from 'react';
import './CheckoutItem.styles.scss';
import { connect } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItem(item))
});

export const CheckoutItem = (props) => {
    
    const { imageUrl, name, quantity, price, clearItemFromCart, addItem, removeItem } = props;

    //as props we need to pass cartItems but also the item itself in order to be able to add or remove another items to cart
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='checkout item' />
            </div>
            <span className='name'>{name}</span>

            <span className='quantity'>
                <div className='arrow' id='decrease' onClick={()=> removeItem(props)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' id='increase' onClick={()=> addItem(props)}>&#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(props)}>&#10005;</div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(CheckoutItem);