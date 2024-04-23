import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BiCartAlt } from "react-icons/bi";
import Logo from "../assets/Logo/black-logo.png";
import FranceFlag from "../assets/Flags/france-flag.jpg";
import GermanyFlag from "../assets/Flags/germany-flag.jpg";
import ItalyFlag from "../assets/Flags/italy-flag.jpg";
import RussiaFlag from "../assets/Flags/russia-flag.jpg";
import SpainFlag from "../assets/Flags/spain-flag.jpg";
import USFlag from "../assets/Flags/us-flag.jpg";
import { useContext, useState } from "react";
import MainLogo from "./MainLogo";
import { cartContext } from "../Context/CartContext";

const Navbar = ({
  selectedName,
  setSelectedName,
  selectedFlag,
  setSelectedFlag,
}) => {
  const flagStyling = {
    backgroundColor: "#fff",
    padding: "3px",
    borderRadius: "5px",
    width: "35%",
  };

  const { cartItemsQuantity } = useContext(cartContext);

  const [isActive, setIsActive] = useState(false);

  const options = [
    {
      img: USFlag,
      text: "Eng",
    },

    {
      img: GermanyFlag,
      text: "Ger",
    },

    {
      img: FranceFlag,
      text: "Fre",
    },

    {
      img: SpainFlag,
      text: "Spa",
    },

    {
      img: RussiaFlag,
      text: "Rus",
    },

    {
      img: ItalyFlag,
      text: "Ita",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="main-nav navbar navbar-expand-lg navbar-white bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <MainLogo />
          </Link>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-lg-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link d-flex flex-nowrap">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link d-flex flex-nowrap">
                  Pages
                  <span>
                    <FaAngleDown className="icon" />
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link d-flex flex-nowrap">
                  Courses
                  <span>
                    <FaAngleDown className="icon" />
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link d-flex flex-nowrap">
                  Blog
                  <span>
                    <FaAngleDown className="icon" />
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link d-flex flex-nowrap">
                  Shop
                  <span>
                    <FaAngleDown className="icon" />
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="other-options justify-content-center d-flex align-items-center flex-nowrap gap-3"
            style={{ columnGap: "8px" }}
          >
            <div className="dropdown-country ms-auto">
              <div
                className="dropdown-dialog d-flex align-items-center gap-2 justify-content-end"
                style={{ maxWidth: "100%" }}
                onClick={() => setIsActive(!isActive)}
              >
                <img
                  src={selectedFlag}
                  alt="Country-flag"
                  className="img-fluid shadow"
                  style={flagStyling}
                />
                <span className="fw-bold">{selectedName}</span>
                <FaAngleDown />
              </div>

              {/* IF SELECT IS ACTIVE(SHOW) */}

              {isActive && (
                <div
                  className="dropdown-content d-flex flex-column gap-3 py-3 px-2"
                  style={{ cursor: "pointer" }}
                >
                  {options.map((option, i) => (
                    <div
                      className="d-flex flex-nowrap gap-2 align-items-center"
                      key={i}
                      onClick={() => {
                        setSelectedName(option.text);
                        setSelectedFlag(option.img);
                        setIsActive(!isActive);
                      }}
                    >
                      <img
                        src={option.img}
                        alt="Country-flag"
                        className="img-fluid country-flag"
                        style={flagStyling}
                      />

                      <span className="fw-bold country-name">
                        {option.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to={"/cart"} className="cart-wrapper cursor-pointer">
              <BiCartAlt className="cart-icon icon fs-4" />
              <span>{cartItemsQuantity}</span>
            </Link>

            <div className="search-wrapper d-flex my-2 my-lg-0">
              <span>
                <IoSearch className="search-icon icon fs-4" />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
