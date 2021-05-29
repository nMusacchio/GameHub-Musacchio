import React, { useState, useContext } from 'react';
import styles from './ItemCount.module.css';
import {CartContext} from '../context/cartContext';

const ItemCount = ({initVal, item, maxValue})=>{
    const [quantity, setQuantity] = useState(initVal ? initVal : 1);
    const cart = useContext(CartContext);
    function add(){
        if(quantity<maxValue)
        setQuantity(quantity + 1);
        if(initVal)
            cart.addByOne(item)
            
    }
    function sub(){
        if(quantity>1){
            setQuantity(quantity - 1);
            if(initVal)
                cart.subByOne(item)
        }
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