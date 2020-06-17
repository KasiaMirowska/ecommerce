import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './Cart.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import { withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const mapStateToProps = createStructuredSelector({
    // cartItems: state.cart.cartItems,
        cartItems: selectCartItems,
    })

const Cart = (props) => {
    //connect passes dispatch as a prop to component even if we do not provide a second argument to connect, see:
    console.log(props, 'IN CART')
    const items = props.cartItems.map(item => (
        <CartItem key={item.id} {...item} />
    ));
    
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {props.cartItems.length > 0?
                    items
                    :
                    <p className='empty-message'>Your cart is empty</p>}
                <CustomButton onClick={() => {
                    props.history.push('/checkout');
                    props.dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    );

};

export default withRouter(connect(mapStateToProps)(Cart));