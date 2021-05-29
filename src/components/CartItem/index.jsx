import React from 'react';
import styles from './CartItem.module.css';
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

export default CartItem;