import React from 'react';
import Item from '../Item';
import styles from './ItemList.module.css'

const ItemList = ({items}) =>{
    return(
        <React.Fragment>
            {items.map((item, index)=><Item key={index} item={item} />)}
        </React.Fragment>
    )
}

export default ItemList;