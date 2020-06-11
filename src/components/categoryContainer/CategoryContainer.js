import React, { Component } from 'react';
import { CategoryItem } from '../categoryItem/CategoryItem';
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
                },
                {
                    id: 2,
                    title: 'Jackets',
                    subTitle: 'Shop Now',
                    imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                },
                {
                    id: 3,
                    title: 'Shoes',
                    subTitle: 'Shop Now',
                    imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                },
                {
                    id: 4,
                    title: 'Men',
                    subTitle: 'Shop Now',
                    imgUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                },
                {
                    id: 5,
                    title: 'Women',
                    subTitle: 'Shop Now',
                    imgUrl: 'https://i.ibb.co/GCCdy8t/women.png',
                    size: 'large',
                },
            ],
        };
    }
    render() {
        const { menuCategories } = this.state;
        return (
            <div className='category-container'>
                {menuCategories.map(({ title, subTitle, id, imgUrl, size }) => (
                    <CategoryItem
                        id={id}
                        title={title}
                        subTitle={subTitle}
                        imgUrl={imgUrl}
                        size={size}
                    />
                ))}
            </div>
        );
    }
}

export default CategoryContainer;
