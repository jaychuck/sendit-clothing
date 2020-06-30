import React from 'react';
import ProductItem from '../productItem/ProductItem';

import './ProductContainer.scss';

const ProductContainer = ({ title, products }) => {
    return (
        <div className='productContainer'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='container'>
                {products
                    .filter((product, idx) => idx < 4)
                    .map(({ id, ...productProps }) => {
                        return <ProductItem key={id} {...productProps} />;
                    })}
            </div>
        </div>
    );
};

export default ProductContainer;
