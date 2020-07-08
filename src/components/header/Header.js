import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/sendit-logo.svg';
import { auth } from '../../firebase/firebase.utils';
import './Header.scss';

const Header = ({ currentUser }) => (
    <header className='header'>
        <Link className='logo' to='/'>
            <Logo />
            <h2 className='logo-title'>Send It!</h2>
        </Link>
        <div className='navLinks'>
            <Link className='navLink' to='/shop'>
                SHOP
            </Link>
            <Link className='navLink' to='/contact'>
                CONTACT
            </Link>
            {currentUser ? (
                <div
                    className='navLink'
                    onClick={() => {
                        auth.signOut();
                    }}
                >
                    SIGN OUT
                </div>
            ) : (
                <Link className='navLink' to='/signin'>
                    SIGN IN
                </Link>
            )}
        </div>
    </header>
);

export default Header;
