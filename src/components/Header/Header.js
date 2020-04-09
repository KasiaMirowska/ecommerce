import React from 'react';
import './Header.styles.scss';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.util';
//higher order components are functions that take components as arguments

//state here is rootReducer
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
});


const Header = ({currentUser}) => {
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

                {currentUser? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                : 
                <Link className='option' to='/signin'>SIGN IN</Link>}


            </div>
        </header>
    )
};

export default connect(mapStateToProps)(Header);