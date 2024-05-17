import { FaStar } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";
import { useAuthContext } from "../Context/AuthContext";
import { useDateAndTimeContext } from "../Context/TimeMgtContext";

const Products = ({ product }) => {
  const { products } = useContext(ProductContext);
  const { addToCart, cart } = useContext(cartContext);
  const { handleCheckout } = useAuthContext();
  const { handleCalculateDates, borrowDate, returnDate, isExpired } = useDateAndTimeContext();

  const [notification, setNotification] = useState(null);

  const {
    id,
    className,
    mainProduct,
    mainProduct2,
    productName,
    outdatedPrice,
    price,
  } = product;

  const handleSubmit = () => {
    handleCalculateDates();

    let cartItem = [];
    cartItem.push({
      itemId: product.id,
      productName: product.productName,
      borrowDate: borrowDate,
      returnDate: returnDate,
    });

    addToCart(product, id, price);
    handleCheckout(cartItem);

    const handleNotification = async () => {
      try {
        if (!("Notification" in window)) {
          console.log("Browser doesn't support notification");
        } else {
          const permission = await Notification.requestPermission();
          if (permission === "granted") {
            new window.Notification("Automated notification", {
              body: "Raquebookshelf",
              data: "Borrowed an item from the library",
              tag: "borrow indicator",
            });
          }
        }
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }
    };

    handleNotification();
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
      <div className="single-product-box mb-30">
        <div className="product-image">
          <Link to={`/product/${id}`}>
            <img src={mainProduct} alt="product image" className="img-fluid" />
            <img src={mainProduct2} alt="product image" className="img-fluid" />
          </Link>
          <Link to={`/reading/${id}`}
            className="add-to-cart-btn d-flex flex-nowrap align-items-center gap-2 text-capitalize"
            onClick={handleSubmit}
          >
            Borrow <BiCartAlt />
          </Link>
          {productName === "Book Chicks" && (
            <div className="sale-btn">Sale!</div>
          )}
        </div>
        <div className="product-content">
          <h3>
            <Link to={`/product/${id}`}>{productName}</Link>
          </h3>
          <div className={`${className} d-flex flex-nowrap gap-2 justify-content-center align-items-center`}>
            {outdatedPrice && <span className="old">${outdatedPrice}</span>}
            <span className="new">${price}</span>
          </div>
          <div className="rating">
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
