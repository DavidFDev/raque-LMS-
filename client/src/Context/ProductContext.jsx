import { useEffect, createContext, useContext, useState, useCallback } from "react";
import { PRODUCTS } from "../products";

// CREATE PRODUCT CONTEXT AND EXPORT IT
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // CREATE PRODUCT STATE
  const [products, setProducts] = useState();
  const [ searchTerm, setSearchTerm ] = useState("the lost world")
  const [ books, setBooks ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ resultTitle, setResultTitle ] = useState("")

  // FETCH PRODUCTS - (API) USE useEffect()//REACT HOOK || IMPORT A CREATED DATA INTO THIS FILES AND USE IT AS THE PRODUCT CONTEXT VALUE
  useEffect(() => {
    try {
      setProducts(PRODUCTS);
    } catch (error) {
      console.log(error)
    }
  }, [PRODUCTS, setProducts]);


  const fetchBooks = useCallback(async() => {
    setLoading(true)
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${searchTerm}`)
      const data = await response.json();
      const  { docs } = data;


      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

          return {
            id: key,
            authur: author_name,
            coverId: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title
          }
        })

        setBooks(newBooks)

        if (newBooks.length > 1) {
          setResultTitle("Your search results")
        } else {
          setResultTitle("No search result found !")
        }
      } else {
        setBooks([])
        setResultTitle("No search result found !")
        setLoading(false)
      }

      setLoading(false)
      
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }, [searchTerm])

  console.log(books)

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks])

  return (
    <ProductContext.Provider value={{ products, loading, setSearchTerm, books, resultTitle, setResultTitle, setLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
