import React from 'react';
import styles from './NavBar.module.css';
import cartIcon from '../../img/cart.svg';

const CartWidget = () =>{
    return(
        <img src={cartIcon} />
    )
}

const HeaderLink = (props) =>{
    return(
        <a className={styles.headerLink} href={`/${props.name}`}>{props.name}</a>
    )
}

const NavBar = (props) =>{
    const sections = ["Deportes", "Aventura", "Acción", "FPS", "RPG"]
    return(
        <div className={styles.header}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <p className={styles.logo}>Game<span>Hub</span></p>
                    <CartWidget />
                </div>
                <div className={styles.sections}>
                    {
                        sections.map((element)=>{
                            return (
                                <HeaderLink name={element} />
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default NavBar;