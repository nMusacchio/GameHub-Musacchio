import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';
import {getFirestore} from '../../firebase';

const HeaderLink = ({category}) =>{
    return(
        <Link to={`/category/${category.path}`} className={styles.headerLink}>{category.name}</Link>
    )
}

const NavBar = () =>{
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        const db = getFirestore();

        const categoriesCollection = db.collection('categories');
        categoriesCollection.get().then((querySnapshot)=>{
            querySnapshot.size === 0 && console.log("No hay items");
            const docs = querySnapshot.docs.map(doc=>doc.data());
            setCategories(docs);
        })
        .catch((err) => console.log(`Error: ${err}`))
    }, []);

    return(
        <div className={styles.header}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <Link to="/"><p className={styles.logo}>Game<span>Hub</span></p></Link>
                    <CartWidget />
                </div>
            </div>
            <div className={styles.sections}>
                <div className="container">
                    <div className={styles.sectionsWrapper}>
                        {
                            categories.map((cat)=>{
                                return (
                                    <HeaderLink category={cat} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;