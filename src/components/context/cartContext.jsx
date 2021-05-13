import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    function addItem(item, quantity){
        if(!isInCart(item.id) || cartLength() == 0)
            setCart([...cart, {item, quantity}]);
    }
    
    function removeItem(itemId){
        const index = cart.indexOf(5);
        if (index > -1) {
            cart.splice(index, 1);
        }
    }

    function clear(){
        setCart([]);
    }

    function isInCart(id){
        for(let order of cart){
            if(order.item.id == id)
                return true;
        }
        return false;
    }

    function cartLength(){
        return cart.length;
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, isInCart, clear, cartLength}}>
            {children}
        </CartContext.Provider>
    )
}