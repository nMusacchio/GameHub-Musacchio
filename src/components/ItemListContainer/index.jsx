import React, { useEffect, useState } from 'react';
import styles from './ItemListContainer.module.css';
import ItemList from '../ItemList';
import { useParams } from 'react-router';
import {getFirestore} from '../../firebase';
import Spinner from '../Spinner';

const ItemListContainer = (props) =>{
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    let cat_id = useParams().id;

    useEffect(() =>{
        setLoading(true);
        const db = getFirestore();

        let itemsCollection = db.collection('items');
        if(cat_id)
            itemsCollection = itemsCollection.where('categoryID', "==", cat_id)
        itemsCollection.get().then((querySnapshot)=>{
            const docs = querySnapshot.docs.map(doc=>doc.data());
            setItems(docs);
        })
        .catch((err) => console.log(`Error: ${err}`))
        .finally(()=>{
            setLoading(false);
        })
    }, [cat_id]);

    return(
        <div className={styles.gamesMain}>
            <div className="container">
                <h1>Juegos</h1>
                <div className={styles.itemContainer}>
                    {
                        loading ? <Spinner /> :
                        (items.length > 0 ? 
                        <ItemList items={items} /> :
                        <p style={{margin: '0px auto'}}>No hay juegos disponibles</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer