import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLogo from "./MainLogo";
import NavLinks from "./NavLinks";
import NavOtherOptionsSm from "./NavOherOptionsSm";
import NavOtherOptionsLg from "./NavOtherOptionsLg";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [ scrolled, setScrolled ] = useState(false)

  useEffect(_ => {
    const handleScroll = _ => { 
      if (window.scrollY > 162) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return _ => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar navbar-expand-lg navbar-white bg-white ${!scrolled ? "not-showing-on-scroll" : "main-nav show-hidden"} `}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <MainLogo />
          </Link>

          <div className="embeded d-flex align-items-center gap-3">
            {/* OTHER OPTIONS SM */}
            <NavOtherOptionsSm/>
            {/* END */}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              style={{border: "none", padding: "0", boxShadow: "none"}}
            >
              <IoMenu className="text-dark" style={{fontSize: "50px"}}/>
            </button>

          </div>

          
          
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <MainLogo/>
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-labelledby="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <NavLinks/>


              {/* OTHER OPTIONS LG */}
              <NavOtherOptionsLg/>
              
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
