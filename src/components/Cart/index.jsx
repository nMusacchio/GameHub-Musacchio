import React, { useContext } from 'react';
import styles from './Cart.module.css';
import {CartContext} from '../context/cartContext';
import ItemCount from '../ItemCount';

const CartItem = ({item, removeFc}) => {
    return(
        <div className={styles.item}>
            <div className={styles.info}>
                <p className={styles.title}>{item.item.title}</p>
                <p className={styles.desc}>{item.item.description}</p>
            </div>
            <div className={styles.numbers}>
                <p className={styles.price}>$ {item.quantity * item.item.price}</p>
                <ItemCount item={item}  initVal={item.quantity} />
            </div>
            <div className={styles.remove}  onClick={()=>{removeFc(item.item.id)}}>x</div>
        </div>
    )
}

const Cart = () => {
    const cart = useContext(CartContext);
    return(
        <>
            <div className="container">
                <h2>Tu carrito:</h2>
                {
                    cart.cartSize() == 0 ? 
                    <p className={styles.emptyCart}>No hay productos en tu carrito</p> :
                    <>
                    <div className={styles.itemsContainer}>
                        {cart.cart.map((product)=>{
                            return <CartItem removeFc={cart.removeItem} item={product} />;
                        })}
                    </div>
                    <h2>Precio total: ${cart.cartValue()}</h2>
                    </>
                }
            </div>
        </>
    )
}

export default Cart;