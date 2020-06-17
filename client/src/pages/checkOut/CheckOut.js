import React from 'react';
import './CheckOut.styles.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
    selectCartItems, 
    // selectCartHidden, 
    selectCartTotal 
} from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
})

const CheckOut = (props) => {
    const items = props.cartItems.map(item => (
        <CheckoutItem key={item.id} {...item} />
    ));
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {items}
            <div className='total'>
                <span> TOTAL : ${props.total}</span>
            </div>
            <div className='test-warning'>
                * Please use the following test credit card for payment:
                 <br />
                 4242 4242 4242 4242 - Exp: 01/22 - CVV: 123 *
           </div>
            <StripeCheckoutButton price={props.total} />
        </div>
    )
}

export default connect(mapStateToProps)(CheckOut);