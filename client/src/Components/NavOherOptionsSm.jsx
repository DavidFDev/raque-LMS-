import { cartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BiCartAlt } from "react-icons/bi";
import FranceFlag from "../assets/Flags/france-flag.jpg";
import GermanyFlag from "../assets/Flags/germany-flag.jpg";
import ItalyFlag from "../assets/Flags/italy-flag.jpg";
import RussiaFlag from "../assets/Flags/russia-flag.jpg";
import SpainFlag from "../assets/Flags/spain-flag.jpg";
import USFlag from "../assets/Flags/us-flag.jpg";
import { useContext, useState } from "react";

const NavOtherOptionsSm = () => {
  const [selectedName, setSelectedName] = useState("Eng");
  const [selectedFlag, setSelectedFlag] = useState(USFlag);

  const { cartItemsQuantity } = useContext(cartContext);

  const flagStyling = {
    backgroundColor: "#fff",
    padding: "3px",
    borderRadius: "5px",
    width: "30%",
  };


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
      <div
        className="other-options d-none d-sm-flex d-lg-none justify-content-center align-items-center flex-nowrap gap-3"
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
            <span className="fw-normal">{selectedName}</span>
            <FaAngleDown style={{fontSize: "15px"}}/>
          </div>

          {/* IF SELECT IS ACTIVE(SHOW) */}

            <div
              className={isActive ? "dropdown-content d-flex flex-column py-3" : "dropdown-content-below small d-flex flex-column py-3"}
              style={{ cursor: "pointer" }}
            >
              {options.map((option) => (
                <div
                  className="d-flex flex-nowrap gap-2 align-items-center main-list"
                  key={option.text}
                  onClick={() => {
                    isActive && setSelectedName(option.text);
                    isActive && setSelectedFlag(option.img);
                    isActive && setIsActive(!isActive)
                  }}
                >
                  <img
                    src={option.img}
                    alt="Country-flag"
                    className="img-fluid country-flag"
                    style={flagStyling}
                  />

                  <span className="fw-normal country-name">{option.text}</span>
                </div>
              ))}
            </div>
        </div>

        <Link to="/cart" className="cart-wrapper cursor-pointer">
          <BiCartAlt className={isActive ? "cart-icon icon fs-4 rotate-160" : "cart-icon icon fs-4 rotate-360"} style={{ transition: "0.5s ease-in-out" }}/>
          <span>{cartItemsQuantity}</span>
        </Link>

        <div className="search-wrapper d-flex my-2 my-lg-0">
          <span>
            <IoSearch className="search-icon icon fs-4" />
          </span>
        </div>
      </div>

      {/* SECOND OPTION */}
    </>
  );
};

export default NavOtherOptionsSm;
