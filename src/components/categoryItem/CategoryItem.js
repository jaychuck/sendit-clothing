import React from 'react';
import { withRouter } from 'react-router-dom';
import './CategoryItem.scss';

const CategoryItem = ({
    title,
    subTitle,
    id,
    imgUrl,
    size,
    linkUrl,
    history,
    match,
}) => (
    <div
        className={`category-item ${size}`}
        key={id}
        onClick={() => {
            history.push(`${match.url}${linkUrl}`);
        }}
    >
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

export default withRouter(CategoryItem);
