import React, { useContext } from 'react';
import styles from './ItemDetail.module.css';
import {CartContext} from '../context/cartContext';
import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom'

const ItemDetail = ({item})=>{
    const cart = useContext(CartContext);
    function alreadyInCart(id){
        if(!cart.isInCart(id))
            return (
                <>
                <ItemCount />
                <button class={styles.buyButton} onClick={()=>{
                    cart.addItem(item, parseInt(document.getElementById('count').value));
                }}>Añadir al carrito</button>
                </>
            )
        else
            return <Link to="/cart"><button class={styles.buyButton}>Terminar compra</button></Link>
    }
    return (
        <div className="container">
            <div className={styles.grid}>
                <div className={styles.image} style={{backgroundImage:`url(${item.img})`}}></div>
                <div className={styles.info}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.price}> $ {item.price}</p>
                    <p className={styles.description}>{item.description}</p>
                    {alreadyInCart(item.id)}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;