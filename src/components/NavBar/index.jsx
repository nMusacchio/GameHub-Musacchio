import React from 'react';
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget';

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
            </div>
            <div className={styles.sections}>
                <div className="container">
                    <div className={styles.sectionsWrapper}>
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
        </div>

    )
}

export default NavBar;