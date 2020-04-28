import React from 'react';
import './LoginRegister.styles.scss';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import {withRouter} from 'react-router-dom';

const LoginRegister = (props) => {
   
    const handleLogin = () => {
        const {location, history} = props;
        const destination = (location.state || {}).state || '/';
        history.push(destination);
    }

    return (
        <div className='login-register'>
            <Login onLoginSuccess={handleLogin}/>
            <Register />
        </div>
    )
}

export default withRouter(LoginRegister)