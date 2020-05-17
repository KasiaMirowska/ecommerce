import React, {useState} from 'react';
import './Login.styles.scss';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => {
    return ({
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
    })
}


const Login = ({emailSignInStart, googleSignInStart, onLoginSuccess}) => {
    const [userInfo, setUserInfo] = useState({email: '', password: ''})

    const {email, password} = userInfo;

    const handleSubmit = async(e) => {
        e.preventDefault();
        emailSignInStart(email, password); 
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;

        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    }

        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                   
                    <FormInput name='email' value={email} onChange={handleChange} label='Email' required />

                    <FormInput name='password' value={password} onChange={handleChange} label='Password' required />
                    
                    <div className='buttons'>
                    <CustomButton type='submit'  required >LOG IN</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignedIn >LOG IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

export default connect(null, mapDispatchToProps)(Login);