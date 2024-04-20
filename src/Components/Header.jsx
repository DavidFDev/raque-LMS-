import { FiPhoneCall } from "react-icons/fi";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { GrLogin } from "react-icons/gr"
import { Link } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";


const Header = () => {

  const {name, isLoggedIn} = useAuthContext();

  console.log('refreshiiiiiinnnnngggg')


  return (

    <div className='top-header bg-deepred'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 p-1">
            {/* Top-Header-contact */}
            <div className="top-header-address">

              {/* TOP HEADER ADDRESS */}
              <address className="d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap gap-3">
                <div className="phone d-flex flex-nowrap align-items-center mt-0 gap-2">
                  <FiPhoneCall className="icon"/> 

                  <span className="d-flex flex-column">
                    <p className="d-none d-md-inline text-white mb-0">Contact support</p>
                    <a href="tel:+234 704 459 3001"> +234 704 459 3001</a>
                  </span> 

                </div>

                <div className="office-addy d-flex flex-nowrap align-items-center mt-0 gap-2">
                  <LiaMapMarkerAltSolid className="icon"/> 

                  <span className="d-flex flex-column">
                    <p className="d-none d-md-inline text-white mb-0">Our location</p>
                    <a href="address:Lagos State, NIG" className="text-capitalize">Lagos State, NIG</a>
                  </span>

                </div>

                <div className="email d-flex flex-nowrap align-items-center mt-0 gap-2">
                  <MdOutlineEmail className="icon"/> 

                  <span className="d-flex flex-column">
                    <p className="d-none d-md-inline text-white mb-0">Contact email</p>
                    <a href="mailto: hello@raque.com"> hello@raque.com</a>
                  </span>

                </div>
              </address>

            </div>
          </div>

          <div className="col-lg-4 p-0 d-none d-lg-inline">
            <div className="top-header-btn">
              {!isLoggedIn ? 
                <Link to="/login" type="button" className="text-deepred bg-white fw-bolder">
                  <GrLogin className="icon"/>&nbsp; &nbsp;
                  <span>Log In</span>
                </Link>
              : <span className="user-email text-capitalize" >{name}</span> }
            </div> 
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Header