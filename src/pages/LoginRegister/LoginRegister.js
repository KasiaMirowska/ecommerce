import React from 'react';
import './LoginRegister.styles.scss';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import {withRouter} from 'react-router-dom';

const LoginRegister = (props) => {
   
    const handleLogin = () => {
        const {location, history} = props;
        console.log(location, history.location, 'LOCATION???????' )
        const destination = (location || {}).state || '/';
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