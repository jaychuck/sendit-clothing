import React, { Component } from 'react';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { auth, siginWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <div className='signIn'>
                <h2 className='signInHeading'>I already have an account</h2>
                <p>sign in with the email and password</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label={'Email'}
                        name={'email'}
                        type={'email'}
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        label='password'
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={siginWithGoogle} isGoogleButton>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
