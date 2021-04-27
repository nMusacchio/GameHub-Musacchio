import React from 'react';
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';

const HeaderLink = (props) =>{
    return(
        <Link to={`/category/${props.name}`} className={styles.headerLink} href={`/${props.name}`}>{props.name}</Link>
    )
}

const NavBar = (props) =>{
    const sections = ["Deportes", "Aventura", "Acción", "FPS", "RPG"]
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