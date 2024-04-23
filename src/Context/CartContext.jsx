import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  const [cartSubTotalPrice, setCartTotalPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState(30);

  useEffect(() => {
    if (cart) {
      const quantity = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
      }, 0);

      setCartItemsQuantity(quantity);
    }

    // TOTAL PRICE
    const cartTotalPrice = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);

    setCartTotalPrice(cartTotalPrice);
  }, [cart]);

  // ADD TO CART
  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    /* If cart item is already in the cart */
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // INCREASE ITEM QUANTITY
  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // DECREASE ITEM QUANTITY
  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity - 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    }

    if (cartItem.quantity < 1 || cartItem.quantity === 0) {
      removeFromCart(id);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        shippingFee,
        cartItemsQuantity,
        cartSubTotalPrice,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
