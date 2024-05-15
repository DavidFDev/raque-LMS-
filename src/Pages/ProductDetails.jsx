import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoChevronForward } from "react-icons/io5";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import RelatedProducts from "../Components/RelatedProducts";
import { useAuthContext } from "../Context/AuthContext";
import { cartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";

const ProductDetails = () => {
  /* CONTEXTS */
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(cartContext);
  const { isLoggedIn, handleLogoutButton } = useAuthContext(); 

  /* STATE */
  const [itemQuantity, setItemQuantity] = useState(1);
  const [productData, setProductData] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  const [slicedItem, setSlicedItems] = useState([]);
  const [order, setOrder] = useState([]);




  /* GET THE SINGLE PRODUCT BASED ON THE ID */
  useEffect(() => {
    const product = products.find((item) => {
      return item.id === id;
    });

    setProductData(product);

    const slicedPro = products.slice(0, 5);

    setFilteredItems(slicedPro);

    const slicedItems = products.slice(0, 3);

    setSlicedItems(slicedItems);
  }, [id]);



  /* DESTRUCTURING THE PRODUCT */
  const { productName, price, mainProduct, description, rating } =
    productData;

  /* HANDLE FORM SUBMISSION  */
  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogoutButton({ id });
  };


  return (
    <>
     <div className="productDetails-page">
       {/* PAGE TITLE AREA */}
       <div className="page-title-area">
         <div className="container">
           <div className="d-table">
             <div className="d-table-cell">
               <div className="title-content">
                 <ul>
                   <li>
                     <Link to="/" className="text-decoration-none text-dark">
                       Home
                     </Link>
                   </li>
                   <li>
                     <span>
                       <IoChevronForward />
                     </span>
                   </li>
                   <li>
                     <span>Product Details</span>
                   </li>
                 </ul>
                 <h2 className="text-capitalize">Product Details</h2>
               </div>
             </div>
           </div>
         </div>
       </div>

       <div className="container py-5 py-lg-0">
         <div className="row align-items-center">
           <div className="col-lg-6 mb-4 mb-lg-0">
             <div className="d-flex flex-column gap-3">
               <div className="products-details-image">
                 <div className="product-image">
                   <img src={mainProduct} alt="" style={{ width: "100%" }}/>
                 </div>
               </div>

               <div className="d-flex gap-2">
                 {filteredItems.map((item) => {
                  return (
                    <Link to={`/product/${item.id}`} key={item.id}>
                      <img
                        src={item.mainProduct}
                        alt={productName}
                        className="img-fluid"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product-details-desc">
              <h3>{productName}</h3>

              <span className="new-price">
                {price}
              </span>

              <div className="product-review">
                {rating === 5 ? (
                  <div className="rating">
                    <RiStarFill className="star-icon" />
                    <RiStarFill className="star-icon" />
                    <RiStarFill className="star-icon" />
                    <RiStarFill className="star-icon" />
                    <RiStarFill className="star-icon" />
                  </div>
                ) : (
                  rating === 4 && (
                    <div className="rating">
                      <RiStarFill className="star-icon" />
                      <RiStarFill className="star-icon" />
                      <RiStarFill className="star-icon" />
                      <RiStarFill className="star-icon" />
                      <RiStarHalfFill className="star-icon" />
                    </div>
                  )
                )}

                <a href="#" className="rating-count">
                  3 reviews
                </a>
              </div>

              <p>{description}</p>

              <div className="product-meta">
                <span>
                  SKU: <span className="sku">10</span>
                </span>
                <span>
                  Availability: <span className="in-stock">In Stock</span>
                </span>
                <span>
                  Category: <a href="#">Business</a>
                </span>
                <span>
                  Tag: <a href="#">Book</a>
                </span>
              </div>

              {/* ADD TO CART BUTTON */}
              <div className="product-add-to-cart">
                <div className="input-counter">
                  <span
                    className="minus-btn"
                    onClick={() => setItemQuantity(itemQuantity - 1)}
                  >
                    <FaMinus />
                  </span>
                  <p aria-valuemin={itemQuantity}>{itemQuantity}</p>
                  <span
                    className="plus-btn"
                    onClick={() => setItemQuantity(itemQuantity + 1)}
                  >
                    <FaPlus />
                  </span>
                </div>

                {isLoggedIn ? (
                  <button
                    type="submit"
                    className="default-btn"
                    onClick={() => addToCart(productData, productData.id)}
                  >
                    <FaPlus className="start-icon" />
                    <span className="label">Add to Cart</span>
                    <FaPlus className="end-icon" />
                  </button>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <button type="submit" className="default-btn">
                      <Link to="/login">
                        <span className="label">Login</span>
                      </Link>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

       {/* PRODUCTS TAB */}
        <div className="row">
          <div className="col-12">
            <div className="nav nav-tabs products-details-tab mb-4">
              {/* <!-- Nav tabs --> */}
              <ul className="nav nav-tabs" id="navId" role="tablist">
                <li className="nav-item" role="representation">
                  <a
                    href="#tab1Id"
                    className="nav-link active"
                    data-bs-toggle="tab"
                    aria-controls="collapseExample"
                    aria-current="page"
                  >
                    <div className="dot"></div>
                    <span className="">Description</span>
                  </a>
                </li>

                <li className="nav-item" role="representation">
                  <a
                    href="#tab2Id"
                    className="nav-link"
                    data-bs-toggle="tab"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="dot"></div>
                    <span className="">Additional Information</span>
                  </a>
                </li>

                <li className="nav-item" role="representation">
                  <a
                    href="#tab5Id"
                    className="nav-link text-capitalize"
                    data-bs-toggle="tab"
                  >
                    <div className="dot"></div>
                    <span>Reviews</span>
                  </a>
                </li>
              </ul>

              {/* <!-- Tab panes --> */}
              <div className="tab-content w-100" id="myTabContent">
                {/* PANEL ONE */}
                <div
                  className="tab-pane fade show active"
                  id="tab1Id"
                  role="tabpanel"
                >
                  {/* ORDER FORM */}
                  <p>
                    {description}
                  </p>
                </div>

                {/* PANEL TWO */}
                <div
                  className="tab-pane fade main-orders"
                  id="tab2Id"
                  role="tabpanel"
                >
                  <div className="order-form overflow-auto"></div>
                </div>

                {/* ADDRESS */}
                <div className="tab-pane fade" id="tab4Id" role="tabpanel">
                  <div className="address"></div>
                </div>

                {/* ACCOUNT DETAILS AND EDIT */}
                <div className="tab-pane fade" id="tab5Id" role="tabpanel">
                  <div className="user-details">
                    {/* User Review Form */}
                    <div className="userAccount-content"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="related-products-area">
          <div className="section-title text-left">
            <span className="sub-title">Our Shop</span>
            <h2>Related Products</h2>
          </div>

          <div className="row align-items-center ">
            {slicedItem.map((item) => {
              return <RelatedProducts data={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
