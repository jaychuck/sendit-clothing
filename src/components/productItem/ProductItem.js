import React from 'react';

import './ProductItem.scss';

const ProductItem = ({ id, name, imageUrl, price }) => {
    return (
        <div className='productItem' key={id}>
            <div
                className='productImg'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='productItemFooter'>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
    );
};

export default ProductItem;
