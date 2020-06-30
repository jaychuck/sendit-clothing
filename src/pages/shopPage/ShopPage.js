import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ProductContainer from '../../components/productContainer/ProductContainer';
import SHOP_DATA from './ShopPageData';
import './ShopPage.scss';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products: SHOP_DATA };
    }

    render() {
        const { products } = this.state;
        return (
            <div className='shopPage'>
                <h1>Shop Page</h1>
                {products.map(({ id, ...productProps }) => (
                    <ProductContainer key={id} {...productProps} />
                ))}
            </div>
        );
    }
}

export default withRouter(ShopPage);
