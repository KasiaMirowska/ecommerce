import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './Cart.styles.scss';
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';


const mapStateToProps = (state) => {
    // cartItems: state.cart.cartItems,
    return ({
        cartItems: selectCartItems(state),
    })
    
};

const Cart = (props) => {
    const items = props.cartItems.map(item => (
        <CartItem key={item.id} {...item} />
    ));

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {items}
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div> 
        </div>
    );

};

export default connect(mapStateToProps)(Cart);