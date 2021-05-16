import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail';
import {getFirestore} from '../../firebase';
import Spinner from '../Spinner';


const ItemDetailContainer = ()=>{
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(false);
    let id_item = useParams().id;

    useEffect(() =>{
        setLoading(true);
        const db = getFirestore();

        const itemsCollection = db.collection('items');
        const itemRequested = itemsCollection.where('url_path', "==", id_item);
        itemRequested.get().then((querySnapshot)=>{
            setItem({...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id});
        })
        .catch((err) => console.log(`Error: ${err}`))
        .finally(()=>{
            setLoading(false);
        })
    }, []);
    
    return loading ? <Spinner /> : (<ItemDetail item={item}/>)
}

export default ItemDetailContainer;