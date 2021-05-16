import React, { useContext } from 'react';
import styles from './ItemDetail.module.css';
import {CartContext} from '../context/cartContext';
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom'

const ItemDetail = ({item})=>{
    const cart = useContext(CartContext);

    return (
        <div className="container">
            <div className={styles.grid}>
                <div className={styles.image} style={{backgroundImage:`url(${item.image})`}}></div>
                <div className={styles.info}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.price}> $ {item.price}</p>
                    <p className={styles.description}>{item.description}</p>
                    <ItemCount />
                    <button class={styles.buyButton} onClick={()=>{
                        cart.addItem(item, parseInt(document.getElementById('count').value));
                    }}>Añadir al carrito</button>
                    {cart.cartSize() > 0 ? <Link to="/cart"><button class={styles.buyButton}>Terminar compra</button></Link> : ''}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;