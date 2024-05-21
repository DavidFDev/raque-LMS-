import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaRegCalendarCheck } from "react-icons/fa";
import { MdAssignmentReturn, MdOutlineHomeWork } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
import { TbMessageSearch } from "react-icons/tb";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { useDateAndTimeContext } from "../Context/TimeMgtContext";
import coverImg from "../assets/Products/thirdProduct.jpg";
import LoadingBullets from "../Components/Spinner";
import "../.././book-details.css"
const ReadingPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { books } = useContext(ProductContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(
          `https://openlibrary.org/works/${id}.json`
        );
        const data = await response.json();

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;

          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };

          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    getBookDetails();
  }, [id]);

  const [productData, setProductData] = useState({});
  const [filteredItems, setFilteredItems] = useState([]);
  const [slicedItems, setSlicedItems] = useState([]);
  const navigate = useNavigate();

  const { returnDate, isExpired } = useDateAndTimeContext();

  const handleReturn = () => {
    navigate("/books");
  };

  return (
    <>
      {loading ? (
        <LoadingBullets />
      ) : (
        <div className="reading-page">
          <div className="due-dates d-flex align-items-center justify-content-center gap-5">
            <button
              type="button"
              className="default-btn"
              onClick={handleReturn}
            >
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

          {/* <div className="container py-4 d-flex justify-content-center">
            <div className="icons">
              <Link to="/">
                <MdOutlineHomeWork className="fs-2 text-white" />
              </Link>
            </div>

            {book && (
              <>
                <h2>{book.title}</h2>
                {book.cover_img && (
                  <img src={book.cover_img} className="img-fluid" alt="book" />
                )}
                <p>{book.description}</p>
                <p>Places: {book.subject_places}</p>
                <p>Times: {book.subject_times}</p>
                <p>Subjects: {book.subjects}</p>
              </>
            )}
          </div> */}

          <section className="book-details">
            <div className="container">
              <button
                type="button"
                className="d-flex align-items-center back-btn"
                onClick={() => navigate("/books")}
              >
                <FaArrowLeft size={22} />
                <span className="fs-18 fw-bolder">Go Back</span>
              </button>

              {book && <div className="book-details-content row">
                <div className="book-details-img col-12 col-lg-6">
                  <img src={book?.cover_img} alt="cover img" />
                </div>


                <div className="book-details-info col-12 col-lg-6">
                  <div className="book-details-item title">
                    <span className="fw-bold fs-3">{book?.title}</span>
                  </div>
                  <div className="book-details-item description">
                    <span>{book?.description}</span>
                  </div>
                  <div className="book-details-item">
                    <span className="fw-bold">Subject Places: </span>
                    <span className="text-italic">{book?.subject_places}</span>
                  </div>
                  <div className="book-details-item">
                    <span className="fw-bold">Subject Times: </span>
                    <span className="text-italic">{book?.subject_times}</span>
                  </div>
                  <div className="book-details-item">
                    <span className="fw-bold">Subjects: </span>
                    <span>{book?.subjects}</span>
                  </div>
                </div>
              </div>}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ReadingPage;
