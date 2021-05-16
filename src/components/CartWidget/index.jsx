import React, { useContext } from 'react';
import cartIcon from '../../img/cart.svg';
import styles from './CartWidget.module.css';
import {CartContext} from '../context/cartContext';
import {Link} from 'react-router-dom';

const CartWidget = () =>{
    const cart = useContext(CartContext);
    return(
        <Link to="/cart">
            <div className={styles.cartWidget}>
                <img src={cartIcon} />
                <div className={styles.circle}>
                    {
                        cart.cartSize() > 0 ? <sup>{cart.cartSize()}</sup> : ''
                    }
                </div>
            </div>
        </Link>
    )
}

export default CartWidget;