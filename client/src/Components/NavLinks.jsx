import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { useAuthContext } from "../Context/AuthContext";


const NavLinks = () => {

  const { isLoggedIn } = useAuthContext()

  return (
    <ul className="navbar-nav mx-lg-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li className="nav-item dropdown-center">
        <div className="nav-link d-flex flex-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
          Pages
          <span>
            <FaAngleDown className="icon" />
          </span>
        </div>

        <ul className="dropdown-menu">
          <li className="dropdown-item"><Link to="/about" className="dropdown-link">About </Link></li>

          <li className="dropdown-item"><Link to="/pricing" className="dropdown-link">Pricing</Link></li>

          <li className="dropdown-item"><Link to="/feedback" className="dropdown-link">Feedback</Link></li>

          <li className="dropdown-item"><Link to="/login" className="dropdown-link">Log In</Link></li>

          <li className="dropdown-item"><Link to="/register" className="dropdown-link">Register</Link></li>

        </ul>

      </li>




      {/* <li className="nav-item dropdown-centered">
        <div className="nav-link d-flex flex-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
          Courses
          <span>
            <FaAngleDown className="icon" />
          </span>
        </div>

        <ul className="dropdown-menu">
          <li className="dropdown-item"><Link to="" className="dropdown-link">Courses </Link></li>

          <li className="dropdown-item"><Link to="" className="dropdown-link">Courses Grid </Link></li>

          <li className="dropdown-item"><Link to="" className="dropdown-link">Courses Details</Link></li>
          
          <li className="dropdown-item"><Link to="/profile" className="dropdown-link">My Account</Link></li>
        </ul>
      </li> */}




      { isLoggedIn && 
        ( 
          <li className="nav-item dropdown-center">
            <Link to="/profile" className="nav-link d-flex flex-nowrap">
              My Account
            </Link>
          </li> 
        )
      }




      <li className="nav-item">
        <Link to="/books" className="nav-link">
          Books
          {/* <span>
            <FaAngleDown className="icon" />
          </span> */}
        </Link>


        {/* <ul className="dropdown-menu">
          <li className="dropdown-item"><Link to="/shop" className="dropdown-link">Shop</Link></li>
          
          <li className="dropdown-item"><Link to="/cart" className="dropdown-link">Cart</Link></li>

          <li className="dropdown-item"><Link to="/checkout" className="dropdown-link">Checkout</Link></li>
        </ul> */}
      </li>

      <li className="nav-item">
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
