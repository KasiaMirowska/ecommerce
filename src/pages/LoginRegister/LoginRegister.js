import React from 'react';
import './LoginRegister.styles.scss';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';


export default function LoginRegister() {
    return (
        <div className='login-register'>
            <Login />
            <Register />
        </div>
    )
}