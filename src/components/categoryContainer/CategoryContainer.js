import React, { Component } from 'react';
import CategoryItem from '../categoryItem/CategoryItem';
import './CategoryContainer.scss';

export class CategoryContainer extends Component {
    constructor() {
        super();
        this.state = {
            menuCategories: [
                {
                    id: 1,
                    title: 'Hats',
                    subTitle: 'Shop Now',
                    imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl: 'hats',
                },
                {
                    id: 2,
                    title: 'Shoes',
                    subTitle: 'Shop Now',
                    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl: 'shoes',
                },
                {
                    id: 3,
                    title: 'Jackets',
                    subTitle: 'Shop Now',
                    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    linkUrl: 'jackets',
                },
                {
                    id: 4,
                    title: 'Men',
                    subTitle: 'Shop Now',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    linkUrl: 'men',
                },
                {
                    id: 5,
                    title: 'Women',
                    subTitle: 'Shop Now',
                    imgUrl: 'https://i.ibb.co/GCCdy8t/women.png',
                    size: 'large',
                    linkUrl: 'women',
                },
            ],
        };
    }
    render() {
        const { menuCategories } = this.state;
        return (
            <div className='category-container'>
                {menuCategories.map(({ id, ...menuCategoriesProps }) => (
                    <CategoryItem key={id} {...menuCategoriesProps} />
                ))}
            </div>
        );
    }
}

export default CategoryContainer;
