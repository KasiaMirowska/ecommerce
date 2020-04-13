import React from 'react';
import './Header.styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../CartIcon/CartIcon';
import Cart from '../CartDropdown/Cart';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

//higher order components are functions that take components as arguments

//state comes from rootReducer
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     cart: selectCartHidden(state),
// });
//or we can write it a bit simpler:
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cart: selectCartHidden,
});


const Header = ({ currentUser , cart}) => {
    return (
        <header className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/contact' className='option'>
                    CONTACT
                </Link>

                {currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>}
                
                <CartIcon />
            </div>
            {cart? null : <Cart /> }
           
        </header>
    )
};

export default connect(mapStateToProps)(Header);