import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import HatsPage from './pages/hatsPage/HatsPage';
import ShoesPage from './pages/shoesPage/ShoesPage';
import JacketsPage from './pages/jacketsPage/JacketsPage';
import AuthenticationPage from './pages/authenticationPage/AuthenticationPage';
import Header from '../src/components/header/Header';

import { auth } from '../src/firebase/firebase.utils';

import './App.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className='app'>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/hats' component={HatsPage} />
                    <Route exact path='/jackets' component={JacketsPage} />
                    <Route path='/shoes' component={ShoesPage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={AuthenticationPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
