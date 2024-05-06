import { FiPhoneCall } from "react-icons/fi";
import { GrLogin } from "react-icons/gr";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { FaAngleDown } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { RiHistoryLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";

const Header = () => {
  const { name, isLoggedIn, handleLogout } = useAuthContext();

  return (
    <>
      {/* DEFAULT SYSTEM RESPONSE NOTIFICATION */}

      <div className="top-header bg-deepred">
        <div className="container">
          {/* <div className="success-alert">
            <div className="alert alert-success" role="alert">
              <GrStatusGood className="icon" />
              <span className="alert-link"> Login Successful</span>.
            </div>
          </div> */}

          <div className="row align-items-center">
            <div className="col-lg-8 p-1">
              {/* Top-Header-contact */}
              <div className="top-header-address">
                {/* TOP HEADER ADDRESS */}
                <address className="d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap gap-3">
                  <div className="phone d-flex flex-nowrap align-items-center mt-0 gap-2">
                    <FiPhoneCall className="icon" />

                    <span className="d-flex flex-column">
                      <p className="d-none d-md-inline text-white mb-0">
                        Contact support
                      </p>
                      <a href="tel:+234 704 459 3001"> +234 704 459 3001</a>
                    </span>
                  </div>

                  <div className="office-addy d-flex flex-nowrap align-items-center mt-0 gap-2">
                    <LiaMapMarkerAltSolid className="icon" />

                    <span className="d-flex flex-column">
                      <p className="d-none d-md-inline text-white mb-0">
                        Our location
                      </p>
                      <a
                        href="address:Lagos State, NIG"
                        className="text-capitalize"
                      >
                        Lagos State, NIG
                      </a>
                    </span>
                  </div>

                  <div className="email d-flex flex-nowrap align-items-center mt-0 gap-2">
                    <MdOutlineEmail className="icon" />

                    <span className="d-flex flex-column">
                      <p className="d-none d-md-inline text-white mb-0">
                        Contact email
                      </p>
                      <a href="mailto: hello@raque.com">
                        raquereinforce@gmail..com
                      </a>
                    </span>
                  </div>
                </address>
              </div>
            </div>





            {/* TOP HEADER BTN */}
            <div className="col-lg-4 p-0 d-none d-lg-inline">
              <div className="top-header-btn">
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    type="button"
                    className="text-deepred bg-white fw-bolder"
                  >
                    <GrLogin className="icon" />
                    &nbsp; &nbsp;
                    <span>Log In</span>
                  </Link>
                ) : (
                  <div className="active-user text-capitalize dropdown-centered">
                    <span data-bs-toggle="dropdown" aria-expanded="false">
                      {name}
                      <FaAngleDown className="icon" />
                    </span>

                    <ul className="dropdown-menu">
                      <li className="dropdown-item">
                        <Link to="/profile">
                          <FaUserAlt /> <span>My profile</span>
                        </Link>
                      </li>

                      <li className="dropdown-item">
                        <Link to="/profile#tab2Id">
                          <RiHistoryLine /> <span>My order history</span>{" "}
                        </Link>
                      </li>

                      <li className="dropdown-item">
                        <Link to="/login" onClick={handleLogout}>
                          <TbLogout /> <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
