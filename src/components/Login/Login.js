import React from 'react';
import './Login.styles.scss';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '', })
    }

    handleChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;

        this.setState({
            [name]: value,
        })
    }


    render() {
        console.log(this.state)
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                   
                    <FormInput name='email' value={this.state.email} onChange={this.handleChange} label='Email' required />

                    <FormInput name='password' value={this.state.password} onChange={this.handleChange} label='Password' required />
                    

                    <CustomButton type='submit'  required >LOG IN</CustomButton>
                </form>
            </div>
        )
    }
}