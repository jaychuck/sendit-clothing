import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, isGoogleButton, ...customButtonProps }) => (
    <button
        className={`${isGoogleButton ? 'googleButton' : ''} customButton`}
        {...customButtonProps}
    >
        {children}
    </button>
);

export default CustomButton;
