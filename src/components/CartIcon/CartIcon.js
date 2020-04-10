import React from 'react';
import './CartIcon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const CartIcon =({toggleCartHidden})=> {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )

}

export default connect(null, mapDispatchToProps)(CartIcon);