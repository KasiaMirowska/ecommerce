import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'

export default function Header() {
    return (
        <header className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/signin' className='option'>
                    SIGN IN
                </Link>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/contact' className='option'>
                    CONTACT
                </Link>
            </div>
        </header>
    )
}