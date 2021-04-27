import React from 'react';
import styles from './ItemDetail.module.css';

const ItemDetail = ({item})=>{
    
    
    return (
        <div className="container">
            <div className={styles.grid}>
                <div class={styles.image} style={{backgroundImage:`url(${item.img})`}}></div>
                <div class={styles.info}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.price}> $ {item.price}</p>
                    <p className={styles.description}>{item.description}</p>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;