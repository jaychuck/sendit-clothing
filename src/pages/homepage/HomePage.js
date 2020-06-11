import React from 'react';
import './HomePage.scss';
import { CategoryContainer } from '../../components/categoryContainer/CategoryContainer';

export const HomePage = () => (
    <div className='homePage'>
        <CategoryContainer />
    </div>
);

export default HomePage;
