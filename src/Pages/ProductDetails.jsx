import { useContext, useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";

import expressCard from "../assets/Cards/expresscard.png";
import masterCard from "../assets/Cards/mastercard.png";
import masterCardTwo from "../assets/Cards/mastercard2.png";
import visaCard from "../assets/Cards/visa.png";
import visaCardTwo from "../assets/Cards/visa2.png";

import RelatedProducts from "../Components/RelatedProducts";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { ProductContext } from "../Context/ProductContext";
import { cartContext } from "../Context/CartContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(cartContext);
  const [quantity, setQuantity] = useState(0);
  const [productData, setProductData] = useState();

  console.log(id);

  // Get the single product based on the id
  useEffect(() => {
    const product = products.find((item) => {
      return item.id === parseInt(id);
    });

    setProductData(product);
  }, [id]);

  console.log(productData);

  return (
    <div className="productDetails-page">
      <div className="ui fluid container">
        <div className="products-details-area">
          <div className="container p-md-0">
            <div className="ui items">
              <div className="item">
                <div className="ui large image">
                  <img
                    src="https://res.cloudinary.com/dev-empty/image/upload/v1590078784/oelygng3oujixkht5por.jpg"
                    className="img-fluid"
                  />
                </div>

                <div className="content mt-5 mt-md-0">
                  <div className="header">Vintage Armchair</div>

                  <div className="description">
                    <p className="price">₦155</p>
                    <div className="ui label">SKU: jXxVSbZzv</div>
                  </div>

                  <ul className="products-info">
                    <li>
                      <span>Availability:</span>
                      <a href="/product/5ec6ae570270734b6bca38c6/#">In stock</a>
                    </li>

                    <li>
                      <span>Products Type:</span>
                      <a href="/products/?term=furniture">Book</a>
                    </li>
                  </ul>

                  <div className="extra">
                    <div className="ui action input">
                      <input
                        min="1"
                        max="10"
                        placeholder="Qty"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <button disbaled="false" className="ui violet button">
                        <IoMdCart className="start-icon" />
                        <span>Add to Cart</span>
                        <IoMdCart className="end-icon" />
                      </button>
                    </div>
                  </div>

                  <div className="payment-method">
                    <img src={expressCard} className="img-fluid" />
                    <img src={masterCard} className="img-fluid" />
                    <img src={masterCardTwo} className="img-fluid" />
                    <img src={visaCard} />
                    <img src={visaCardTwo} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="nav nav-tabs userAccount-navigation mb-4">
                  {/* <!-- Nav tabs --> */}
                  <ul className="nav nav-tabs" id="navId" role="tablist">
                    <li className="nav-item" role="representation">
                      <a
                        href="#tab1Id"
                        className="nav-link active"
                        data-bs-toggle="tab"
                        aria-current="page"
                      >
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
                        <span className="">Additional Information</span>
                      </a>
                    </li>

                    <li className="nav-item" role="representation">
                      <a
                        href="#tab3Id"
                        className="nav-link"
                        data-bs-toggle="tab"
                      >
                        <span className="">Shipping</span>
                      </a>
                    </li>

                    <li className="nav-item" role="representation">
                      <a
                        href="#tab5Id"
                        className="nav-link text-capitalize"
                        data-bs-toggle="tab"
                      >
                        <span>Reviews</span>
                      </a>
                    </li>
                  </ul>

                  {/* <!-- Tab panes --> */}
                  <div className="tab-content w-100 py-4" id="myTabContent">
                    {/* PANEL ONE */}
                    <div
                      className="tab-pane fade show active"
                      id="tab1Id"
                      role="tabpanel"
                    >
                      {/* ORDER FORM */}
                      <div className="order-form">
                        <div className="main-table"></div>
                      </div>
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
              <div className="section-title mb-4">
                <h2 className="text-center fs-3">Related Products</h2>
              </div>

              <div className="row align-items-center ">
                {products.map((item) => {
                  return <RelatedProducts data={item} key={item.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
