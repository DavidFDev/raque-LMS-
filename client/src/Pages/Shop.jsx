import { useContext, useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Products from "../Components/Products";
import ShopHeading from "../Components/shopHeading";
import { cartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";
import SearchBooksForm from "../Components/SearchBooksForm";
import coverImg from "../assets/Products/thirdProduct.jpg"
import LoadingBullets from "../Components/Spinner";


const Shop = () => {
  const { products, books, loading } = useContext(ProductContext);
  const { cart, removeFromCart } = useContext(cartContext);

  const [sortName, setSortName] = useState("Sort by Popularity");
  const [isActive, setIsActive] = useState(false);

  const bookWithCovers = books.map(singleBook => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.coverId ? `https://covers.openlibrary.org/b/id/${singleBook.coverId}-L.jpg` : coverImg
    }
  });

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
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <div className="topbar-result-count">
                  <p className="mb-0">Showing 1 – 6 of 6</p>
                </div>
              </div>


              <div className="col-12 col-md-6">
                <div className="topbar-ordering-and-search">
                  <div className="">
                    <div className="topbar-search">
                      <SearchBooksForm/> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {
              loading ? (
                <LoadingBullets/>
              ) : (
                bookWithCovers.slice(0, 20).map((item, i) => (
                  <Products product={item} key={i} />
                ))
              )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
