import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail';


const ItemDetailContainer = ()=>{
    const [item, setItem] = useState([]);
    let id_item = useParams().id;

    useEffect(()=>{
        const getItem = new Promise((resolve, err) => {
            const _items = [
                {
                    id: '1',
                    title: 'Item #1',
                    price: 300,
                    description:"Soy un producto.",
                    img: "https://i.pinimg.com/236x/52/81/ce/5281cea00cc9830dd874ebbca3b01e51.jpg"
                },
                {
                    id: '2',
                    title: 'Item #2',
                    price: 199,
                    description:"Soy un producto.",
                    img: "https://i.pinimg.com/236x/52/81/ce/5281cea00cc9830dd874ebbca3b01e51.jpg"
                },
                {
                    id: '3',
                    title: 'Item #3',
                    price: 900,
                    description:"Soy un producto.",
                    img: "https://i.pinimg.com/236x/52/81/ce/5281cea00cc9830dd874ebbca3b01e51.jpg"
                }
            ]
            let _item = _items.filter(obj => {
                return obj.id === id_item;
            })
            setTimeout(()=>{
                resolve(_item[0]);
            }, 2000)
        })
        getItem.then((res)=>{
            setItem(res);
        });
    }, [])
    
    return (<ItemDetail item={item}/>)
}

export default ItemDetailContainer;