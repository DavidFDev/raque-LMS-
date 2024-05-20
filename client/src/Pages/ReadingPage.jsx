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
import coverImg from "../assets/Products/thirdProduct.jpg"
const URL = "https://openlibrary.org/works/";


const ReadingPage = () => {
  /* CONTEXTS */
  const { id } = useParams();
  const [ loading, setLoading ] = useState(false);
  const { books } = useContext(ProductContext);
  const [ book, setBook ] = useState(null);


  useEffect(() => {
    setLoading(true);
    const getBookDetails = async () => {
      try {
        const response = await fetch(`${URL}${id}.json`)
        const data =  response.json()

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;

          const newBooks = {
            description: description ? description.value : "No description found",
            title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "NO subiect places round",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects. join(", ") : "No subjects found"
          }

          setBook(newBooks)

        } else {
          setBook(null)
        }

      } catch(err) {
        console.log(err)
        setLoading(false)
      }
    }

    getBookDetails()
  }, [id])

  /* STATE */
  const [productData, setProductData] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  const [slicedItems, setSlicedItems] = useState([]);
  const navigate = useNavigate();





  const { returnDate, isExpired } = useDateAndTimeContext();

  /* GET THE SINGLE PRODUCT BASED ON THE ID */
  useEffect(() => {
    if (books) {
      const libBooks = books.find((item) => item.id === id);
      setProductData(libBooks || {});
    }
  }, [id, books]);




  /* DESTRUCTURING THE PRODUCT */
  const {
    description,
    title,
    cover_img,
    subject_places,
    subject_times,
    subjects } 
  = book;

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

        { title }

        {cover_img && <img src={cover_img} className="img-fluid" alt="book" />}
      </div>
    </div>
  );
};

export default ReadingPage;
