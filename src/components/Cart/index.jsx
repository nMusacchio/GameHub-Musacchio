import React, { useContext, useState } from 'react';
import styles from './Cart.module.css';
import {CartContext} from '../context/cartContext';
import {getFirestore} from '../../firebase';
import CartItem from '../CartItem';
import {Link} from 'react-router-dom';

const Cart = () => {
    const cart = useContext(CartContext);
    const [idSell, setIdSell] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    function createOrder(){
        let order = {
            buyer: {
                name,
                phone,
                email,
            },
            items: cart.cart,
            total: cart.cartValue()
        }
        const db = getFirestore();
        const orders = db.collection("orders");
        orders.add(order).then(({id}) => {
            setIdSell(id);
            cart.clear();
        }) 
    }
    function onNameChange(evt) {
        setName(evt.target.value);
    }

    function onPhoneChange(evt) {
        setPhone(evt.target.value);
    }

    function onEmailChange(evt) {
        setEmail(evt.target.value);
    }
    
    return(
        <>
            <div className="container">
                <h2>Tu carrito:</h2>
                {
                    cart.cartSize() == 0 && idSell == ""? 
                    <>
                    <p className={styles.emptyCart}>No hay productos en tu carrito</p> 
                    <Link to="/"><button>VOLVER AL INICIO</button></Link>
                    </>:
                    <>
                    <div className={styles.itemsContainer}>
                        {cart.cart.map((product)=>{
                            return <CartItem removeFc={cart.removeItem} item={product} />;
                        })}
                    </div>
                    {idSell != "" ? 
                    <>
                   <div className={styles.form}>
                         <p>Compra realizada con éxito! Su ID de compra es: {idSell}</p>
                        <Link to="/"><button>VOLVER AL INICIO</button></Link>
                    </div>
                    </>
                    :
                    <> 
                    <div className={styles.form}>
                        <div className={styles.content}>
                            <p>Nombre:</p>
                            <input type="text" name="name" id="name" onChange={evt => onNameChange(evt)} />
                            <p>Teléfono:</p>
                            <input type="text" name="phone" id="phone" onChange={evt => onPhoneChange(evt)} />
                            <p>E-mail:</p>
                            <input type="text" name="email" id="email" onChange={evt => onEmailChange(evt)} />
                            <button onClick={createOrder} disabled={!(name !== "" && phone !== "" && email !== "")}>REALIZAR COMPRA</button>
                        </div>
                    </div>
                    <h2>Precio total: ${cart.cartValue()}</h2>
                    </>
                    }
                    </>
                }
            </div>
        </>
    )
}

export default Cart;