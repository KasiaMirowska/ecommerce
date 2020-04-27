import React from 'react';
import './Login.styles.scss';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {auth } from '../../firebase/firebase.util';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => {
    return ({
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
    })
}


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const {email, password} =this.state;
        const {emailSignInStart} =this.props;
        emailSignInStart(email, password);
        console.log(this.props)
        this.props.onLoginSuccess()
       
    }

    handleChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;

        this.setState({
            [name]: value,
        })
    }


    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                   
                    <FormInput name='email' value={this.state.email} onChange={this.handleChange} label='Email' required />

                    <FormInput name='password' value={this.state.password} onChange={this.handleChange} label='Password' required />
                    
                    <div className='buttons'>
                    <CustomButton type='submit'  required >LOG IN</CustomButton>
                    <CustomButton type='button' onClick={this.props.googleSignInStart} isGoogleSignedIn >LOG IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
} 

export default connect(null, mapDispatchToProps)(Login);