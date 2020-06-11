import React from 'react';
import './CategoryItem.scss';

export const CategoryItem = ({ title, subTitle, id, imgUrl, size }) => (
    <div className={`category-item ${size}`} key={id}>
        <div
            className='background-image'
            style={{ backgroundImage: `url(${imgUrl})` }}
        />
        <div className='item'>
            <h1 className='item-title'>{title}</h1>
            <span className='item-subTitle'>{subTitle}</span>
        </div>
    </div>
);
