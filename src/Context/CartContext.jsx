import { createContext, useEffect, useState } from "react"

export const cartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cartItemsAmount, setCartItemsAmount] = useState(0)
    const [cartSubTotalPrice, setCartTotalPrice] = useState(0) 
    const [shippingFee, setShippingFee] = useState(30)

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0)

            setCartItemsAmount(amount)
        }

        // TOTAL PRICE
        const cartTotalPrice = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount;
        }, 0)

        setCartTotalPrice(cartTotalPrice);

        // CALCULATE SHIPPING FEE

        // CALCULATE TOTAL



    }, [cart])


    // ADD TO CART
    const addToCart = (product, id, price) => {
        const newItem = {...product, amount: 1}

        const cartItem = cart.find((item) => {
            return item.id === id;
        });


        /* If cart item is already in the cart */
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount + 1}
                } else {
                    return item;
                }

            });

            setCart(newCart)
            
        } else {
            setCart([...cart, newItem])
        }
    };


    // INCREASE ITEM AMOUNT
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    }

    // DECREASE ITEM AMOUNT
    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        })

        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount - 1}
                } else {
                    return item;
                }
            })

            setCart(newCart)
        }

        if (cartItem.amount < 1 || cartItem.amount === 0) {
            removeFromCart(id)
        }
    }

    // REMOVE FROM CART
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };


  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart, increaseAmount, decreaseAmount, shippingFee, cartItemsAmount, cartSubTotalPrice }}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider