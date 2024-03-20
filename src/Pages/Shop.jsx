import ShopProducts from "../Components/ShopProducts";
import ShopHeading from "../Components/shopHeading";
import { useState } from "react";
// import { PRODUCTS } from "../products";

const Shop = () => {
  const [sortName, setSortName] = useState("Sort by Popularity");
  const [isActive, setIsActive] = useState(false);


  return (
    <>
      <section className="shop page-title-area">
        <ShopHeading/>
      </section>

      <section className="shop-products">
        <ShopProducts sortName={sortName} setSortName={setSortName} isActive={isActive} setIsActive={setIsActive} />
      </section>
    </>
  )
}

export default Shop