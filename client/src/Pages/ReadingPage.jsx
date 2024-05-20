import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useContext, useEffect, useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdAssignmentReturn, MdOutlineHomeWork } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
import { TbMessageSearch } from "react-icons/tb";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { useDateAndTimeContext } from "../Context/TimeMgtContext";

const ReadingPage = () => {
  /* CONTEXTS */
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  /* STATE */
  const [productData, setProductData] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  const [slicedItems, setSlicedItems] = useState([]);
  const navigate = useNavigate();





  const { returnDate, isExpired } = useDateAndTimeContext();

  /* GET THE SINGLE PRODUCT BASED ON THE ID */
  useEffect(() => {
    if (products) {
      const product = products.find((item) => item.id === id);
      setProductData(product || {});
    }
  }, [id, products]);




  /* DESTRUCTURING THE PRODUCT */
  const { mainProduct } = productData;

  /* HANDLE RETURN */
  const handleReturn = () => {
    navigate("/books");
  };





  return (
    <div className="reading-page">
      <div className="due-dates d-flex align-items-center justify-content-center gap-5">
        <button type="submit" className="default-btn" onClick={handleReturn}>
          <MdAssignmentReturn className="start-icon" />
          <span className="label">
            {isExpired ? "Borrow for 1 hour" : "Return now"}
          </span>
          <MdAssignmentReturn className="end-icon" />
        </button>

        <div className="due-date gap-3">
          {isExpired ? (
            <span>Your loan has expired</span>
          ) : (
            <span>Borrow ends at - {returnDate}</span>
          )}
          <span>
            <PiWarningCircleBold className="fs-3" />
          </span>
        </div>
      </div>

      <div className="container py-4 d-flex justify-content-center">
        <div className="icons">
          <FaRegCalendarCheck className="fs-2 text-white" />
          <Link to="/">
            <MdOutlineHomeWork className="fs-2 text-white" />
          </Link>
          <TbMessageSearch className="fs-2 text-white" />
        </div>

        {mainProduct && <img src={mainProduct} className="img-fluid" alt="book" />}
      </div>
    </div>
  );
};

export default ReadingPage;
