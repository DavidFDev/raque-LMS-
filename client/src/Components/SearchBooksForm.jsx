import { useContext, useRef, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const SearchBooksForm = () => {
  const { setSearchTerm, setResultTitle, resultTitle } = useContext(ProductContext);
  const navigate = useNavigate();
  const searchText = useRef('');

  useEffect(() => {
    searchText.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something");
    } else {
      setSearchTerm(tempSearchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="the lost world..."
        ref={searchText}
      />
      <button type="submit" aria-label="Search">
        <IoSearch className="pt-0" />
      </button>
    </form>
  );
};

export default SearchBooksForm;
