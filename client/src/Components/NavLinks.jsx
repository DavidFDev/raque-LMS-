import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { useAuthContext } from "../Context/AuthContext";


const NavLinks = () => {

  const { isLoggedIn } = useAuthContext()

  return (
    <ul className="navbar-nav mx-lg-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link text-altlemon" : "nav-link"}>
          Home
        </Link>
      </li>

      <li className="nav-item dropdown-center">
      <div className={
        location.pathname === "/about" || 
        location.pathname === "/login" || 
        location.pathname === "/pricing" || 
        location.pathname === "/feedback" 
          ? "nav-link d-flex text-altlemon" 
          : "nav-link d-flex flex-nowrap"
      } data-bs-toggle="dropdown" aria-expanded="false">
        Pages
        <span>
          <FaAngleDown className="icon" />
        </span>
      </div>

        <ul className="dropdown-menu">

          <li className="dropdown-item"><Link to="/about" className={location.pathname === "/about" ? "dropdown-link text-altlemon" : "dropdown-link"}>About</Link></li>

          <li className="dropdown-item"><Link to="/pricing" className={location.pathname === "/pricing" ? "dropdown-link text-altlemon" : "dropdown-link"}>Pricing</Link></li>

          <li className="dropdown-item"><Link to="/feedback" className={location.pathname === "/feedback" ? "dropdown-link text-altlemon" : "dropdown-link"}>Feedback</Link></li>

          <li className="dropdown-item"><Link to="/login" className={location.pathname === "/login" ? "dropdown-link text-altlemon" : "dropdown-link"}>Log In</Link></li>

          <li className="dropdown-item"><Link to="/register" className={location.pathname === "/register" ? "dropdown-link text-altlemon" : "dropdown-link"}>Register</Link></li>

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
            <Link to="/profile" className={location.pathname === "/profile" ? "nav-link d-flex text-altlemon" : "nav-link d-flex flex-nowrap"}>
              My Account
            </Link>
          </li> 
        )
      }




      <li className="nav-item">
        <Link to="/books" className={location.pathname === "/books" ? "nav-link text-altlemon" : "nav-link"}>
          Books
        </Link>


        {/* <ul className="dropdown-menu">
          <li className="dropdown-item"><Link to="/shop" className="dropdown-link">Shop</Link></li>
          
          <li className="dropdown-item"><Link to="/cart" className="dropdown-link">Cart</Link></li>

          <li className="dropdown-item"><Link to="/checkout" className="dropdown-link">Checkout</Link></li>
        </ul> */}
      </li>

      <li className="nav-item">
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link text-altlemon" : "nav-link"}>
          Contact
        </Link>
      </li>

      {isLoggedIn ? (
        <li className="nav-item d-lg-none d-sm-inline-block">
          <Link to="/login" className={location.pathname === "/login" ? "nav-link text-altlemon" : "nav-link"}>
            Logout
          </Link>
        </li>
      ) : (
        <>
          <li className="nav-item d-lg-none d-sm-inline-block">
            <Link to="/login" className={location.pathname === "/login" ? "nav-link text-altlemon" : "nav-link"}>
              Login
            </Link>
          </li>

          <li className="nav-item d-lg-none d-sm-inline-block">
            <Link to="/register" className={location.pathname === "/register" ? "nav-link text-altlemon" : "nav-link"}>
              Signup
            </Link>
          </li>
        </>
      )}

    </ul>
  );
};

export default NavLinks;
