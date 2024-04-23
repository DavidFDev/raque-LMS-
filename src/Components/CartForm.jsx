import { useContext, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { cartContext } from "../Context/CartContext";
import CartItem from "./CartItem";



const CartForm = () => {
    const { cart, cartSubTotalPrice, shippingFee } = useContext(cartContext)
    const [coupon, setCoupon] = useState("")


  return (
    <form className="cart-form">
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


                {cart.map(item => {
                    return <CartItem item={item} key={item.id}/>
                })}
            </table>
        </div>

        <div className="cart-buttons">
            <div className="row align-items-center">
                <div className="col-lg-7 col-sm-7 col-md-7">
                    <div className="shopping-coupon-code">
                        <input type="text" className="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code" value={coupon} onChange={e => setCoupon(e.target.value)} />
                        <button type="submit">Apply Coupon</button>
                    </div>
                </div>

                <div className="col-lg-5 col-sm-5 col-md-5 text-right">
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
                <li>Subtotal <span>&#8358;{parseFloat(cartSubTotalPrice).toFixed(2)}</span></li>
                <li>Shipping <span>&#8358;{parseFloat(shippingFee).toFixed(2)}</span></li>
                <li>Total <span>&#8358;{parseFloat(cartSubTotalPrice + shippingFee).toFixed(2)}</span></li>
            </ul>
            
            <button type="submit" className="default-btn">
                <FaShoppingBag className="start-icon"/>
                <span className="label">Proceed to Checkout</span>
                <FaShoppingBag className="end-icon"/>
            </button>
        </div>
    </form>
  )
}

export default CartForm