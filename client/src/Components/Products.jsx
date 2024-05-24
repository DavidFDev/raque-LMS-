import { useContext, useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { cartContext } from "../Context/CartContext";
import { useDateAndTimeContext } from "../Context/TimeMgtContext";
import Logo from "../assets/Logo/yctlibrary.png";


const Products = ({ product }) => {
  const { addToCart, cart } = useContext(cartContext);
  const { handleCheckout } = useAuthContext();
  const { handleCalculateDates, borrowDate, returnDate, isExpired } = useDateAndTimeContext();

  const [notification, setNotification] = useState(null);

  const { id,
    authur,
    coverId,
    edition_count,
    first_publish_year,
    cover_img,
    title } 
  = product;

  const handleSubmit = async () => {

    handleCalculateDates();
  
    let cartItem = [];
    cartItem.push({ 
      itemId: product.id,
      productName: product.title,
      borrowDate: borrowDate,
      returnDate: returnDate,
    });
  

    try {
      await addToCart(product, id);
      await handleCheckout(cartItem);
      console.log('Successfully added to cart and handled checkout');
    } catch (error) {
      console.error('Error occurred during add to cart or checkout:', error);
    }

    const handleNotification = async () => {
      try {
        if (!("Notification" in window)) {
          console.log("Browser doesn't support notification");
        } else {
          const permission = await Notification.requestPermission();
          if (permission === "granted") {
            new window.Notification("YCT Library", {
              body: `You have borrowed "${title}". Please return it by ${returnDate}.`,
              data: "Borrowed an item from the library",
              tag: "borrow indicator",
              icon: Logo, 
            });
          }
        }
      } catch (error) {
        console.error("Error requesting notification permission:", error);
      }
    };

    handleNotification();
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
      <div className="single-product-box mb-30">
        <div className="product-image">
          <Link to={`/product/${id}`}>
            <img src={cover_img} alt="product image" className="w-100" />
          </Link>
          <Link to={`/reading/${id}`}
            className="add-to-cart-btn d-flex flex-nowrap align-items-center gap-2 text-capitalize"
            onClick={handleSubmit}
          >
            Borrow <BiCartAlt />
          </Link>
        </div>
      


        <div className="product-content">
          <h3>
            <Link to={`/product/${id}`}>{title}</Link>
          </h3>
          <div className={`d-flex flex-nowrap gap-2 justify-content-center align-items-center`}>
            <span className="new">{ authur.join(", ") } </span>
          </div>
            
          <div className='book-item-info-item edition-count'>
            <span className='text-capitalize fw-bold'>Total Editions: </ span> 
            <span> { edition_count } </span>
          </div>


          <div className='book-item-info-item edition-count'>
            <span className='text-capitalize fw-bold'>First Publish Year: </ span> 
            <span> { first_publish_year } </span>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Products;
