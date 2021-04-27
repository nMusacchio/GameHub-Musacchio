import React, { useEffect, useState } from 'react';
import styles from './ItemListContainer.module.css';
import ItemList from '../ItemList';
import { useParams } from 'react-router';

const ItemListContainer = (props) =>{
    const [items, setItems] = useState([]);
    let cat_id = useParams().id;

    useEffect(()=>{
        const getItems = new Promise((resolve, err) => {
            const _items = [
                {
                    id: '1',
                    title: 'Item #1',
                    price: 300,
                    description:"Soy un producto.",
                    img: "https://i.pinimg.com/236x/52/81/ce/5281cea00cc9830dd874ebbca3b01e51.jpg",
                    category: "Deportes"
                },
                {
                    id: '2',
                    title: 'Item #2',
                    price: 199,
                    description:"Soy un producto.",
                    img: "https://i.pinimg.com/236x/52/81/ce/5281cea00cc9830dd874ebbca3b01e51.jpg",
                    category: "Aventura"
                },
                {
                    id: '3',
                    title: 'Item #3',
                    price: 900,
                    description:"Soy un producto.",
                    img: "https://i.pinimg.com/236x/52/81/ce/5281cea00cc9830dd874ebbca3b01e51.jpg",
                    category: "RPG"
                },
                {
                    id: '4',
                    title: 'Item #4',
                    price: 900,
                    description:"Soy un producto.",
                    img: "https://i.pinimg.com/236x/52/81/ce/5281cea00cc9830dd874ebbca3b01e51.jpg",
                    category: "RPG"
                }
            ]
            
            setTimeout(()=>{
                if (cat_id){
                    resolve(_items.filter(obj=>{
                        return obj.category == cat_id;
                    }))
                }else{
                    resolve(_items);
                }
            }, 0)
        })
        getItems.then((res)=>{
            setItems(res);
        });
    }, [cat_id])

    return(
        <div className={styles.gamesMain}>
            <div className="container">
                <h1>Juegos</h1>
                <div className={styles.itemContainer}>
                    <ItemList items={items} />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer