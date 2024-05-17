import { useContext, useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Products from "../Components/Products";
import ShopHeading from "../Components/shopHeading";
import { cartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";

const Shop = () => {
  const { products } = useContext(ProductContext);
  const { cart, removeFromCart } = useContext(cartContext);

  const [sortName, setSortName] = useState("Sort by Popularity");
  const [isActive, setIsActive] = useState(false);

  const sortOptions = [
    "Sort by Popularity",
    "Sort by latest",
    "Default sorting",
    "Sort by rating",
    "Sort by new",
  ];

  return (
    <>
      <section className="shop page-title-area">
        <ShopHeading />
      </section>

      {/* PRODUCTS SECTION */}
      <section className="shop-products pb-100 pt-5 pt-lg-0">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="topbar-result-count">
                  <p className="mb-0">Showing 1 – 6 of 6</p>
                </div>
              </div>

              <div className="col-lg-8 col-md-8">
                <div className="topbar-ordering-and-search">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="topbar-ordering">
                        <div
                          className="sort-options-box d-flex flex-nowrap align-items-center gap-3"
                          onClick={() => setIsActive(!isActive)}
                        >
                          {sortName}
                          <FaChevronDown
                            className={isActive ? "rotate180" : "rotate360"}
                            style={{ transition: "0.5s ease" }}
                          />
                        </div>

                        {isActive && (
                          <div className="sort-dropdown d-flex flex-column gap-3 text-start">
                            {sortOptions.map((name, index) => (
                              <div
                                className="sort-item"
                                key={index}
                                onClick={() => setSortName(name)}
                              >
                                Sort by {name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="topbar-search">
                        <form>
                          <label>
                            <IoSearch className="pt-0" />
                          </label>
                          <input
                            type="text"
                            className="input-search"
                            placeholder="Search here..."
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {products.map((item) => (
              <Products product={item} key={item.id} />
            ))}

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pagination-area text-center">
                <span className="page-numbers current" aria-current="page">
                  1
                </span>
                <a href="" className="page-numbers">
                  2
                </a>
                <a href="" className="page-numbers">
                  3
                </a>
                <a href="" className="page-numbers">
                  4
                </a>
                <a href="" className="page-numbers">
                  5
                </a>
                <a href="" className="next page-numbers">
                  <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
