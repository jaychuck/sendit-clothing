import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/homepage/HomePage';
import './App.scss';
const HatsPage = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Hats PAGE</h2>
            <button
                onClick={() => {
                    props.history.push('/');
                }}
            >
                Home
            </button>
        </div>
    );
};
const ShoesPage = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Shoes Page</h2>
            <Link to='/'>Home page</Link>
        </div>
    );
};
function App() {
    return (
        <div className='app'>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/hats' component={HatsPage} />
                <Route path='/shoes/:shoesID' component={ShoesPage} />
            </Switch>
        </div>
    );
}

export default App;
