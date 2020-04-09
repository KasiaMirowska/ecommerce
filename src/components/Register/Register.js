import React from 'react';
import './Register.styles.scss';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {auth, createUserProfileDocument} from '../../firebase/firebase.util';

export default class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        //just like in app.js where we were checking googleAuth now we need to create the full entry
        const {displayName, email, password, confirmPassword} = this.state;
        console.log(this.state)
        if(password !== confirmPassword) {
            alert('Password entries do not match!')
            return;
        }

        try{
            
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            console.log( user, '???????')
            //after creating a new user we want to save the authCredentials in here to stay singed in so we call the following 
            console.log(displayName, 'DISPLAY NAME')
            await createUserProfileDocument(user, {displayName})
            //once process is finished we reset the form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        }catch(err) {
            console.log(err)
        };
    }

    handleChange =(e)=> {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }


    render () {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your emial and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display name'
                        required
                    />
                    <FormInput 
                         type='email'
                         name='email'
                         value={email}
                         onChange={this.handleChange}
                         label='Email'
                         required
                    />
                    <FormInput 
                     type='password'
                     name='password'
                     value={password}
                     onChange={this.handleChange}
                     label='Password'
                     required
                     />
                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />

                    <CustomButton type='submit'>REGISTER</CustomButton>
                </form>
            </div>
        )
    }
}