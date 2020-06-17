import React, { useState } from 'react';
import './Register.styles.scss';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';


const mapDispatchToProps = dispatch => ({
    registerNewUser: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName })),
})

const Register = ({ registerNewUser }) => {
    const [userInfo, setUserInfo] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userInfo;

   const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password entries do not match!')
            return;
        }

        registerNewUser(email, password, displayName)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />

                <CustomButton type='submit'>REGISTER</CustomButton>
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Register)