import React from 'react';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';
import './AuthenticationPage.scss';

const AuthenticationPage = () => (
    <div className='authenticationContainer'>
        <SignIn />
        <SignUp />
    </div>
);

export default AuthenticationPage;
