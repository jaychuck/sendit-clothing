import React, { Component } from 'react';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { siginWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
        console.log(
            'email and password: ',
            this.state.email,
            this.state.password
        );
    };
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <div className='signIn'>
                <h2>I already have an account</h2>
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
