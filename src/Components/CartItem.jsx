import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { cartContext } from "../Context/CartContext";



const CartItem = ({item}) => {
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(cartContext)
    const { id, mainProduct, productName, price, amount } = item;

  return (
    <tbody>
        <tr>
            <td className="product-thumbnail">
                <a href="#">
                    <img src={mainProduct} alt={productName}  className="img-fluid"/>
                </a>
            </td>

            <td className="product-name">
                <span>{productName}</span>
            </td>

            <td className="product-price">
                <span className="unit-amount">&#8358;{price}</span>
            </td>

            <td className="product-quantity">
                <div className="input-counter d-flex align-items-center">
                    <span className="minus-btn" 
                        onClick={() => decreaseAmount(id, price)}>
                            
                        <FaMinus/>
                    </span>

                    <div className="amount-input">
                        {amount} 
                    </div>

                    <span className="plus-btn" 

                        onClick={() => increaseAmount(id, price)}>

                        <FaPlus/>
                    </span>
                </div>
            </td>

            <td className="product-subtotal">
                <span className="subtotal-amount">&#8358;{parseFloat(price * amount).toFixed(2)}</span>

                <span className="remove" onClick={() => removeFromCart(id)} style={{ cursor: "pointer" }}>
                    <IoTrashOutline/>
                </span>
            </td>
        </tr>

    </tbody>
  )
}

export default CartItem