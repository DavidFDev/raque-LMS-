import { useContext, useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { cartContext } from "../Context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartForm = () => {
  const { cartSubTotalPrice, networkFee } = useContext(cartContext);

  const [coupon, setCoupon] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieving the string
    let retString = localStorage.getItem("cartItems");

    let cartBox = JSON.parse(retString);

    return setCartItems(cartBox);
  }, [setCartItems]);



  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <form className="cart-form" onSubmit={handleSubmit}>
      <div className="cart-table table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          {cartItems.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </table>
      </div>

      <div className="cart-buttons">
        <div className="row align-items-center">

          <div className="col-12 text-right">
            <a href="#" className="default-btn">
              <PiShoppingCartSimpleBold className="start-icon" />
              <span className="label">Update Cart</span>
              <PiShoppingCartSimpleBold className="end-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="cart-totals">
        <h3>Cart Totals</h3>

        <ul>
          <li>
            Subtotal{" "}
            <span>&#8358;{parseFloat(cartSubTotalPrice).toFixed(2)}</span>
          </li>
          <li>
            Network Fee <span>&#8358;{parseFloat(networkFee).toFixed(2)}</span>
          </li>
          <li>
            Total{" "}
            <span>
              &#8358;{parseFloat(cartSubTotalPrice + networkFee).toFixed(2)}
            </span>
          </li>
        </ul>

        <Link type="submit" to="/checkout" className="default-btn">
          <FaShoppingBag className="start-icon" />
          <span className="label">Proceed to Checkout</span>
          <FaShoppingBag className="end-icon" />
        </Link>
      </div>
    </form>
  );
};

export default CartForm;
