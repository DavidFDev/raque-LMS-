import { useEffect, createContext, useContext, useState } from "react";
import { PRODUCTS } from "../products";


// CREATE PRODUCT CONTEXT AND EXPORT IT
export const ProductContext = createContext();



const ProductProvider = ({ children }) => {
  // CREATE PRODUCT STATE
  const [products, setProducts] = useState();

  // FETCH PRODUCTS - (API) USE useEffect()//REACT HOOK || IMPORT A CREATED DATA INTO THIS FILES AND USE IT AS THE PRODUCT CONTEXT VALUE
  useEffect(() => {
    setProducts(PRODUCTS)
  }, [])


  return (
    <ProductContext.Provider value={{ products }}>
      { children }
    </ProductContext.Provider>
  )
}

export default ProductProvider;