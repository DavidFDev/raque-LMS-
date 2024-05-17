import { useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { cartContext } from "../Context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(cartContext);
  const [ cartItems, setCartItems] = useState({});
  const [itemValue, setItemValue] = useState({})
  const { id, mainProduct, productName, price, quantity } = item;  


  return (
    <tbody>
      <tr>
        <td className="product-thumbnail">
          <a href="#">
            <img src={mainProduct} alt={productName} className="img-fluid" />
          </a>
        </td>

        <td className="product-name">
          <span>{productName}</span>
        </td>

        <td className="product-price">
          <span className="unit-amount">{price}</span>
        </td>

        <td className="product-quantity">
          <div className="input-counter d-flex align-items-center">
            <span
              className="minus-btn"
              onClick={() => decreaseQuantity(id, price)}
            >
              <FaMinus />
            </span>

            <div className="amount-input">{quantity}</div>

            <span
              className="plus-btn"
              onClick={() => increaseQuantity(id, price)}
            >
              <FaPlus />
            </span>
          </div>
        </td>

        <td className="product-subtotal">
          <span className="subtotal-amount">
            {price}
          </span>

          <span
            className="remove"
            onClick={() => removeFromCart(id)}
            style={{ cursor: "pointer" }}
          >
            <IoTrashOutline />
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default CartItem;
