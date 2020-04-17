import React from 'react';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './Header.styles';
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
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact' >
                    CONTACT
                </OptionLink>

                {currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>}
                
                <CartIcon />
            </OptionsContainer>
            {cart? null : <Cart /> }
           
        </HeaderContainer>
    )
};

export default connect(mapStateToProps)(Header);