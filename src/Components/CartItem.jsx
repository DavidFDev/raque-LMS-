import { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { cartContext } from "../Context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(cartContext);
  const [ cartItems, setCartItems] = useState({});
  const [itemValue, setItemValue] = useState({})
  const { id, mainProduct, productName, price, quantity } = item;  

  // useEffect(() => {
  //   setCartItems(item)
  //   function getIntoLocalStg() {
      
  //     let string = JSON.stringify([{id, mainProduct,productName, price, quantity}])

  //     localStorage.setItem("item", string)

  //   }

  //   getIntoLocalStg();

  //   function manipulateLocalStorage() {
  //     let getItem = localStorage.getItem("item")

  //     let mainItem = JSON.parse(getItem)

      
  //   }

  //   manipulateLocalStorage()
  // }, [])

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
          <span className="unit-amount">&#8358;{price}</span>
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
            &#8358;{parseFloat(price * quantity).toFixed(2)}
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
