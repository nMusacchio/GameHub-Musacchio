import React, { useState } from 'react';
import styles from './ItemCount.module.css';

const ItemCount = ()=>{
    const [quantity, setQuantity] = useState(1);
    function add(){
        setQuantity(quantity + 1);
    }
    function sub(){
        if(quantity>1)
            setQuantity(quantity - 1);
    }
    return(
        <div className={styles.itemCount}>
            <button id="sub" onClick={sub}>-</button>
            <input id="count" type="text" readOnly value={quantity} />
            <button id="add" onClick={add}>+</button>
        </div>
    )
}

export default ItemCount;