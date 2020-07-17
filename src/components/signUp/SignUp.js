import React, { Component } from 'react';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/customButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('Your confirm password does not match the password');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.error(error);
        }
    };
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='signUp'>
                <h2 className='signUpHeading'>I do not have an account</h2>
                <p>Sign up with you email and passord</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label={'Display Name'}
                        name={'displayName'}
                        type={'text'}
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label={'Email'}
                        name={'email'}
                        type={'email'}
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label={'Password'}
                        name={'password'}
                        type={'password'}
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label={'Confirm Password'}
                        name={'confirmPassword'}
                        type={'password'}
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <div className='formButtons'>
                        <CustomButton type={'submit'}>Sign up</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
