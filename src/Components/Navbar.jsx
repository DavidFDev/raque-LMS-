import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BiCartAlt } from "react-icons/bi";
import Logo from "../assets/Logo/black-logo.png"
import FranceFlag from "../assets/Flags/france-flag.jpg"
import GermanyFlag from "../assets/Flags/germany-flag.jpg"
import ItalyFlag from "../assets/Flags/italy-flag.jpg"
import RussiaFlag from "../assets/Flags/russia-flag.jpg"
import SpainFlag from "../assets/Flags/spain-flag.jpg"
import USFlag from "../assets/Flags/us-flag.jpg"
import { useState } from "react";

const Navbar = ({ selectedName, setSelectedName, selectedFlag, setSelectedFlag }) => {
    const flagStyling = {
        backgroundColor: "#fff",
        padding: "3px",
        borderRadius: "5px",
        width: "35%",
    }
    
    const [isActive, setIsActive] = useState(false);
    
    const options = [
    {
        img: USFlag,
        text: "Eng"
    },

    {
        img: GermanyFlag,
        text: "Ger"
    },

    {
        img: FranceFlag,
        text: "Fre"
    },

    {
        img: SpainFlag,
        text: "Spa"
    },

    {
        img: RussiaFlag,
        text: "Rus"
    },

    {
        img: ItalyFlag,
        text: "Ita"
    },
    ];

  return (
    <>
      {/* HEADER */}
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </a>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link d-flex flex-nowrap">Home 
                  <span><FaAngleDown className="icon"/></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link d-flex flex-nowrap">Pages 
                  <span><FaAngleDown className="icon"/></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link d-flex flex-nowrap">Courses 
                  <span><FaAngleDown className="icon"/></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link d-flex flex-nowrap">Blog 
                  <span><FaAngleDown className="icon"/></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link d-flex flex-nowrap">Shop 
                  <span><FaAngleDown className="icon"/></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link">Contact 
                </Link>
              </li>
            </ul>


          </div>

          <div className="other-options justify-content-center d-flex align-items-center flex-nowrap gap-3" style={{ columnGap: "8px" }}>
            <div className="dropdown-country ms-auto">

              <div className="dropdown-dialog d-flex align-items-center gap-2 justify-content-end" style={{ maxWidth: "100%" }} onClick={() => setIsActive(!isActive)}>
                <img src={selectedFlag} alt="Country-flag" className="img-fluid shadow" style={flagStyling}/>
                <span className="fw-bold">{selectedName}</span>
                <FaAngleDown/>
              </div>

              {/* IF SELECT IS ACTIVE(SHOW) */}

              {isActive && 
                <div className="dropdown-content d-flex flex-column gap-3 py-3 px-2" style={{ cursor: "pointer" }}>

                  {options.map((option, i) => 
                    <div className="d-flex flex-nowrap gap-2" 
                    key={i} 
                    onClick={e => {
                      setSelectedName(option.text)
                      setSelectedFlag(option.img)
                      setIsActive(!isActive)
                    }}>
                      <img src={option.img} alt="Country-flag" className="img-fluid country-flag" style={flagStyling} />

                      <span className="fw-bold country-name">{option.text}</span>
                    </div>
                  )}

                </div>
              }
            </div>

            <span><BiCartAlt className="cart-icon icon fs-4"/></span>

            <form className="d-flex my-2 my-lg-0">
              <span><IoSearch className="serach-icon icon fs-4"/></span>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar