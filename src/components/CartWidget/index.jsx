import React, { useContext } from 'react';
import cartIcon from '../../img/cart.svg';
import styles from './CartWidget.module.css';
import {CartContext} from '../context/cartContext';

const CartWidget = () =>{
    const cart = useContext(CartContext);
    return(
        <React.Fragment>
            <div className={styles.cartWidget}>
                <img src={cartIcon} />
                <div className={styles.circle}>
                    <sup>{cart.cartLength()}</sup>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartWidget;