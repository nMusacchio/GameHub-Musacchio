import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    function addItem(item, quantity){
        if(!isInCart(item.id) || cartSize() == 0)
            setCart([...cart, {item, quantity}]);
        else{
            for(let order of cart){
                if(order.item.id == item.id){
                    order.quantity += quantity;
                    setCart([...cart]);
                }
            }
        }
    }

    function addByOne(item){
        for(let order of cart){
            if(order.item.id == item.item.id){
                order.quantity += 1;
                setCart([...cart]);
            }
        }
    }

    function subByOne(item){
        for(let order of cart){
            if(order.item.id == item.item.id){
                order.quantity -= 1;
                setCart([...cart]);
            }
        }
    }
    
    function removeItem(itemId){
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].item.id == itemId) {
                cart.splice(i, 1);
                setCart([...cart]);
                break;
            }
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

    function cartSize(){
        let size = 0;
        for(let item of cart){
            size += item.quantity;
        }
        return size;
    }

    function cartValue(){
        let value = 0;
        for(let item of cart){
            value += item.item.price * item.quantity;
        }
        return value;
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, isInCart, clear, cartSize, subByOne, addByOne, cartValue}}>
            {children}
        </CartContext.Provider>
    )
}