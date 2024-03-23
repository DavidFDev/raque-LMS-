import { FaStar } from "react-icons/fa";
// Import Icons...
import { BiCartAlt } from "react-icons/bi";
// Import link...
import { Link } from "react-router-dom";


const Products = ({product}) => {
    // Destructure Product...
    const { id, className, mainProduct, mainProduct2, productName, outdatedPrice, price } = product;

  return (
    // SINGLE PRODUCT...
    <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
        <div className="single-product-box mb-30">
            <div className="product-image">
                {/* PRODUCT IMAGE */}
                <Link to={`/product/${id}`}>
                    <img src={mainProduct} alt="image" className="img-fluid"/>
                    <img src={mainProduct2} alt="image" className="img-fluid"/>
                </Link>

                {/* BUTTON */}
                <Link to={"/"} className="add-to-cart-btn d-flex flex-nowrap align-items-center gap-2">
                    Add To Cart <BiCartAlt/>
                </Link>
                {/* SPECIAL SALE */}
                {productName === "Book Chicks"  && <div className="sale-btn">Sale!</div> }
            </div>

            <div className="product-content">
                {/* PRODUCT NAME */}
                <h3>
                    <a href="single-product.html">{productName}</a>
                </h3>
                
                {/* PRODUCT PRICE */}
                <div className={`${className} d-flex flex-nowrap gap-2 justify-content-center align-items-center`}>
                    <span className="old">{outdatedPrice && `$${outdatedPrice}${Number(0)}`}</span>
                    <span className="new">${price}0</span>
                </div>

                {/* RATING */}
                <div className="rating">
                    <FaStar className='star-icon'/>
                    <FaStar className='star-icon'/>
                    <FaStar className='star-icon'/>
                    <FaStar className='star-icon'/>
                    <FaStar className='star-icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products