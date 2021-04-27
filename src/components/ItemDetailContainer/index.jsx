import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';


const ItemDetailContainer = ()=>{
    const [item, setItem] = useState([]);


    useEffect(()=>{
        const getItem = new Promise((resolve, err) => {
            const _item = {
                id: '1',
                title: 'Item #1',
                price: 300,
                description:"Soy un producto.",
                img: "https://i.pinimg.com/236x/52/81/ce/5281cea00cc9830dd874ebbca3b01e51.jpg"
            }
            setTimeout(()=>{
                resolve(_item);
            }, 3000)
        })
        getItem.then((res)=>{
            setItem(res);
        });
    }, [])
    
    return (<ItemDetail item={item}/>)
}

export default ItemDetailContainer;