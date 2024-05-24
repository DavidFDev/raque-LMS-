import { useContext } from "react";
import Products from "../Components/Products";
import SearchBooksForm from "../Components/SearchBooksForm";
import LoadingBullets from "../Components/Spinner";
import ShopHeading from "../Components/shopHeading";
import { cartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";
import coverImg from "../assets/Products/thirdProduct.jpg";


const Shop = () => {
  const { products, books, loading } = useContext(ProductContext);
  const { cart, removeFromCart } = useContext(cartContext);

  const bookWithCovers = books.map(singleBook => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.coverId ? `https://covers.openlibrary.org/b/id/${singleBook.coverId}-L.jpg` : coverImg
    }
  });


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
                  <p className="mb-0 d-flex flex-nowrap align-items-center gap-2">
                    <span> Showing </span> 
                    <span>{!books.length ? 0 : 1} - {`${books.length} of ${books.length}`}</span>
                  </p>
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
                <div className="d-flex justify-content-center" style={{ height: "100%" }}>
                  <LoadingBullets />
                </div>
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
