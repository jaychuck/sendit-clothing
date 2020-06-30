import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import HatsPage from './pages/hatsPage/HatsPage';
import ShoesPage from './pages/shoesPage/ShoesPage';
import JacketsPage from './pages/jacketsPage/JacketsPage';
import './App.scss';

function App() {
    return (
        <div className='app'>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/hats' component={HatsPage} />
                <Route exact path='/jackets' component={JacketsPage} />
                <Route path='/shoes' component={ShoesPage} />
                <Route path='/shop' component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
