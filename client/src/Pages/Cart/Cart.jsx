import { IoChevronForward } from "react-icons/io5";
import CartForm from "../../Components/CartForm";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart-page">
      <section className="cart page-title-area">
        <div className="container p-0">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="title-content">
                <ul>
                  <li>
                    <Link to={"/"} className="text-decoration-none text-dark">
                      Home
                    </Link>
                  </li>
                  <li>
                    <span> <IoChevronForward/> </span>
                  </li>
                  <li>
                    <span className="page-name">Cart</span>
                  </li>
                </ul>
                <h2 className="page-name">Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cart-area ptb-100 pt-lg-0">
        <div className="container">
          <CartForm />
        </div>
      </div>
    </div>
  );
};

export default Cart;
