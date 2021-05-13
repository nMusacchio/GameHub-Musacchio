import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import {Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import {CartProvider} from './components/context/cartContext';
import Cart from './components/Cart';

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
            <CartProvider>
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
                    <Route path="/cart">
                        <Cart />
                    </Route>
            </Switch>
            </CartProvider>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
