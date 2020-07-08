import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...inputProps }) => (
    <div className='formInputGroup'>
        <input className='formInput' onChange={handleChange} {...inputProps} />
        {label && (
            <label
                className={`${
                    inputProps.value.length ? 'shrink' : ''
                } formInputLabel`}
            >
                {label}
            </label>
        )}
    </div>
);

export default FormInput;
