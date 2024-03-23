import React, { Children, useEffect } from "react";
import { createContext, useContext, useState } from "react";

// CREATE PRODUCT CONTEXT
const ProductContext = createContext();


const ProductProvider = ({ Children }) => {
  // CREATE PRODUCT STATE
  const [product, setProduct] = useState();

  // FETCH PRODUCTS - (API) USE useEffect()//REACT HOOK 
  useEffect(() => {
    const fetchProducts = async ()=> {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProduct(data);
      console.log(product);
    }

    fetchProducts();
  }, []);


  return (
    <ProductContext.Provider>
      { Children }
    </ProductContext.Provider>
  )
}

export default ProductProvider;