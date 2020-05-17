import React from 'react';
import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => {
    return ({
        //when pulling just a part of state (here just quantity), we're creating a selector
        itemCount: selectCartItemsCount(state)
    })
}

const CartIcon = ({ toggleCartHidden, itemCount }) => {

    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);