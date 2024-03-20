import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
// import { PRODUCTS } from "../products";
// import product1 from '../assets/Products/1-1.jpg';
// import product11 from '../assets/Products/1.jpg';
// import product2 from '../assets/Products/2-1.jpg';
// import product22 from '../assets/Products/2.jpg';
// import product3 from '../assets/Products/3.jpg';
// import product33 from '../assets/Products/3-1.jpg';
// import product4 from '../assets/Products/4.jpg';
// import product44 from '../assets/Products/4-1.jpg';
// import product5 from '../assets/Products/5.jpg';
// import product55 from '../assets/Products/5-1.jpg';
// import product6 from '../assets/Products/6.jpg';
// import product66 from '../assets/Products/6-1.jpg';




const ShopProducts = ({ sortName, setSortName, isActive, setIsActive }) => {

    const sortOptions = [
        "Sort by Popularity",
        "Sort by latest",
        "Default sorting",
        "Sort by rating",
        "Sort by new"
    ]

  return (
    
    <div className="container">
        <div className="woocommerce-topbar">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-4">
                    <div className="topbar-result-count">
                        <p>Showing 1 – 6 of 54</p>
                    </div>
                </div>

                <div className="col-lg-8 col-md-8">
                    <div className="topbar-ordering-and-search">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-5 offset-lg-4 offset-md-1 col-sm-6">
                                <div className="topbar-ordering">
                                    <div className="sort-options-box d-flex flex-nowrap align-items-center gap-3" onClick={() => setIsActive(!isActive)}>
                                        {sortName}
                                        <FaChevronDown/>
                                    </div>

                                    {isActive && 
                                        <div className="sort-dropdown d-flex flex-column gap-3 text-start" >
                                            {sortOptions.map((name, index) => 
                                                <div className="sort-item" key={index} onClick={() => setSortName(name)}>Sort by {name}</div>
                                            )}
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-6 col-sm-6">
                                <div className="topbar-search">
                                    <form>
                                        <label><i className="bx bx-search"></i></label>
                                        <input type="text" className="input-search" placeholder="Search here..."/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-product-box mb-30">
                    <div className="product-image">
                        <a href="single-product.html">
                            <img src={"singleProduct"} alt="image"/>
                            <img src="assets/img/shop/1-1.jpg" alt="image"/>
                        </a>

                        <a href="#" className="add-to-cart-btn">Add To Cart <i className='bx bx-cart'></i></a>
                    </div>

                    <div className="product-content">
                        <h3><a href="single-product.html">Novel Bunch</a></h3>

                        <div className="price">
                            <span className="new">$455.50</span>
                        </div>

                        <div className="rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="pagination-area text-center">
                    <span className="page-numbers current" aria-current="page">1</span>
                    <a href="#" className="page-numbers">2</a>
                    <a href="#" className="page-numbers">3</a>
                    <a href="#" className="page-numbers">4</a>
                    <a href="#" className="page-numbers">5</a>
                    <a href="#" className="next page-numbers"><i className='bx bx-chevron-right'></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopProducts