import {React, createContext, useContext, useState} from 'react';
import { PRODUCTS } from '../products';

export const shopContext = createContext(null);



const getDefaultCart = () =>  {
    let cart = {} 
    for (let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }

    return cart; 
}

const shopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState();

    const addToCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId]}))
    }
  return (
    <shopContext.Provider>{}</shopContext.Provider>
  )
}

export default shopContextProvider