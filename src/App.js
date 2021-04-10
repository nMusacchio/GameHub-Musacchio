import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import React from 'react';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <ItemListContainer message="Hola, bienvenido a Gamehub" />
        </React.Fragment>
    );
}

export default App;
