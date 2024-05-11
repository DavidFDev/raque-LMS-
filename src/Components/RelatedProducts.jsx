import { useContext } from "react";
import { BiCartAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext";
import { TbCurrencyNaira } from "react-icons/tb";


const RelatedProducts = ({ data }) => {
  const { id, mainProduct, mainProduct2, productName, price } = data;
  const { addToCart } = useContext(cartContext);
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="single-product-box mb-30">
        <div className="product-image">
          <Link to={`/product/${id}`} >
            <img src={mainProduct} alt="image" className="img-fluid" />
            <img src={mainProduct2} alt="image" className="img-fluid" />
          </Link>

          <button
            type="button"
            onClick={() => addToCart(data, id)}
            className="add-to-cart-btn"
          >
            Borrow <BiCartAlt className="bx bx-cart" />
          </button>
        </div>

        <div className="product-content">
          <h3>
            <a href="single-product.html">{productName}</a>
          </h3>

          <div className="price">
            <span className="new">{price}</span>
          </div>

          <div className="rating">
            <FaStar className="" />
            <FaStar className="" />
            <FaStar className="" />
            <FaStar className="" />
            <FaStar className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RelatedProducts;
