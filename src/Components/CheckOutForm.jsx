import { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { TbHandClick } from "react-icons/tb";
import { cartContext } from "../Context/CartContext";
import { useAuthContext } from "../Context/AuthContext";


const CheckOutForm = () => {
  const { handleCheckout, isLoggedIn } = useAuthContext()
  const [firstname, setFirstname] = useState("");
  const [lastname, setLirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [state, setState] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const { cartSubTotalPrice, networkFee } = useContext(cartContext);

  const [cartItems, setCartItems] = useState([]);

  /* GETTING ITEMS FROM LOCAL STORAGE AND RETRIVING THE STRING */
  useEffect(() => {
    let retString = localStorage.getItem("cartItems");
 
    let cartBox = JSON.parse(retString);

    setCartItems(cartBox);
  }, [setCartItems]);


  
  /* CALCULTED BORROW AND RETURN DATE */ 
  useEffect(() => {

    const handleCalculateDates = () => {
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
      const borrowDate = new Date(currentDate);
      const returnDate = new Date(currentDate.getTime() + oneDay);
  
      setBorrowDate(borrowDate.toLocaleDateString());
      setReturnDate(returnDate.toLocaleDateString());
    };

    handleCalculateDates();

  }, [])
  

  /* CREATED AN EMPTY ARRAY AND PUSHED ITEMS(OBJECT) INTO THE EMPTY ARRAY */
  let cartItem = []
  cartItems.map((item) => {
    cartItem.push({
      "itemId": item.id,
      "productName": item.productName,
      "borrowDate": borrowDate,
      "returnDate": returnDate
    })
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    handleCheckout([ cartItem ])
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="billing-details">
            <h3 className="title">Billing Details</h3>

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label htmlFor="country">
                    Country <span className="required">*</span>
                  </label>

                  <div className="select-box">
                    <select className="wide" id="country" name="country">
                      <option value="india">India</option>
                      <option value="italy">Italy</option>
                      <option value="spain">Spain</option>
                      <option value="france">France</option>
                      <option value="brazil">Brazil</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label htmlFor="firstname">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    autoComplete="on"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label htmlFor="lastname">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLirstname(e.target.value)}
                    autoComplete="on"
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="address">
                    Address <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    autoComplete="on"
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="town">
                    Town / City <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="town"
                    id="town"
                    className="form-control"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    autoComplete="on"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label htmlFor="state">
                    State / County <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="form-control"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    autoComplete="on"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label htmlFor="postcode">
                    Postcode / Zip <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    autoComplete="on"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="on"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label htmlFor="tel">
                    Phone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="on"
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="create-an-account"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="create-an-account"
                  >
                    Create an account?
                  </label>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="ship-different-address"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="ship-different-address"
                  >
                    Mail to a different address?
                  </label>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="notes"
                    id="notes"
                    cols="30"
                    rows="5"
                    placeholder="Order Notes"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="order-details">
            <h3 className="title">Your Order</h3>

            <div className="order-table table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((items) => {
                    const { id, mainProduct, productName, price, quantity } =
                      items;
                    return (
                      <tr key={id}>
                        <td className="product-name">
                          <Link to="">{productName}</Link>
                        </td>
                        <td className="product-total">
                          <span className="subtotal-amount">
                            {price}
                          </span>
                        </td>
                      </tr>
                    );
                  }).sort()}

                  <tr>
                    <td className="order-subtotal">
                      <span>Cart Subtotal</span>
                    </td>

                    <td className="order-subtotal-price">
                      <span className="order-subtotal-amount">
                        {cartItems.length}
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="order-shipping">
                      <span>Network Fee</span>
                    </td>

                    <td className="shipping-price">
                      <span>&#8358;{parseFloat(networkFee * cartItems.length).toFixed(2)}</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="total-price">
                      <span>Order Total</span>
                    </td>

                    <td className="product-subtotal">
                      <span className="subtotal-amount">
                        &#8358;{parseFloat(networkFee * cartItems.length).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="payment-box">
              <div className="payment-method"></div>

              <button
                type="submit"
                className="btn-deepred default-btn d-lg-inline-block "
              >
                <TbDeviceLandlinePhone className="start-icon" />
                <span className="label">Place order</span>
                <TbHandClick className="end-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckOutForm;
