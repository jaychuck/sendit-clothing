import React from 'react';
import { HomePage } from './pages/homepage/HomePage';
import './App.scss';

function App() {
    return (
        <div className='app'>
            <h1 className='brand-title'>Send It!</h1>
            <HomePage />
        </div>
    );
}

export default App;
