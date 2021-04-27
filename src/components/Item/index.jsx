import React from 'react';
import styles from './Item.module.css';
import {Link} from 'react-router-dom';

const Item = ({item})=>{
    return (
        <Link to={`/item/${item.id}`}>
            <div className={styles.item}>
                <div className={styles.image} style={{backgroundImage: `url(${item.img})`}}></div>
                <div className={styles.text}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.description}>{item.description}</p>
                    <p className={styles.price}>${item.price}</p>
                </div>
                <button>COMPRAR</button>
            </div>
        </Link>
    )
}

export default Item;