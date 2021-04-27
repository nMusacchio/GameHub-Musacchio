import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import {Router, Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <ItemListContainer/>
                </Route>
                <Route exact path="/category/:id">
                    <ItemListContainer/>
                </Route>
                <Route path="/item/:id">
                    <ItemDetailContainer />
                </Route>
            </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
