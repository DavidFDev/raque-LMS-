import { Link } from "react-router-dom"
import Logo from "../assets/Logo/white-logo.png"
import { FiPhoneCall } from "react-icons/fi";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  const textFMT = {
    cap: "text-capitalize",
    upper: "text-uppercase"
  }

  return (
    <>
      <div className="footer" style={{ background: "#12141b" }}>
        <div className="container">
          <div className="footer-wrapper">
            <div className="row">

              {/* CONTACT US */}
              <div className="col-12 col-sm-6 col-lg-3 footer-info">
                <h3 className={textFMT.cap}>Contact Us</h3>
                <div className="contact-info main-footer-info special-info">
                  <ul className="list-unstyled">
                    <li>
                      <LiaMapMarkerAltSolid className="icon fs-1"/>
                      <a href="#" target="_blank">2750 Quadra Street Victoria Road, New York, USA</a>
                    </li>
                    <li>
                      <FiPhoneCall  className="icon"/>
                      <a href="tel:+2347044593001">+234 704 459 3001</a>
                    </li>
                    <li>
                      <MdOutlineEmail className="icon"/>
                      <a href="mailto:idornigiedavid1@gmail.com">idornigiedavid1@gmail.com</a>
                    </li>
                  </ul>

                  {/* SOCIAL LINKS */}
                  <div className="social-links mb-4 mb-md-0">
                    <div className="social-link">
                      <a href="http://www.facebook.com">
                        <FaFacebookF className="icon"/>
                      </a>
                    </div>
                    <div className="social-link">
                      <a href="http://www.twitter.com">
                        <FaTwitter className="icon"/>
                      </a>
                    </div>
                    <div className="social-link">
                      <a href="http://www.facebook.com">
                        <FaInstagram className="icon"/>
                      </a>
                    </div>
                    <div className="social-link">
                      <a href="http://www.facebook.com">
                        <FaLinkedinIn className="icon"/>
                      </a>
                    </div>
                    <div className="social-link">
                      <a href="http://www.facebook.com">
                        <FaPinterestP className="icon"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* SUPPORT */}
              <div className="col-12 col-sm-6 col-lg-3 footer-info">
                <h3 className={textFMT.cap}>Support Links</h3>
                <div className="support-links main-footer-info">
                  <ul className="list-unstyled">
                    <li>
                      <Link to={"signup"}>Privacy</Link>
                    </li>

                    <li>
                      <Link to={"login"}>FAQ's</Link>
                    </li>

                    <li>
                      <Link to={"/"}>Support</Link>
                    </li>

                    <li>
                      <Link to={"/"}>Terms</Link>
                    </li>

                    <li>
                      <Link to={"/"}>Conditions</Link>
                    </li>

                    <li>
                      <Link to={"/"}>Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* USEFUL LINKS */}
              <div className="col-12 col-sm-6 col-lg-3 footer-info">
                <h3 className={textFMT.cap}>useful links</h3>
                <div className="quick-links main-footer-info">
                  <ul className="list-unstyled">
                    <li>
                      <Link to={"/"}>Web Design</Link>
                    </li>
                    <li>
                      <Link to={"/"}>UI/UX Design</Link>
                    </li>
                    <li>
                      <Link to={"/"}>WP Development</Link>
                    </li>
                    <li>
                      <Link to={"/"}>APP</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Whitepaper</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Web Development</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* NEWSLETTER */}
              <div className="newsletter col-12 col-sm-6 col-lg-3 footer-info">
                <h3 className={textFMT.cap}>newsletter</h3>
                <div className="about-the-store main-footer-info">
                  <p className="text-white" style={{ lineHeight: "1.8" }}>To get the latest news and latest updates from us.</p>
                </div>

                <form className="newsletter-form d-flex flex-column gap-2">
                  <label for="email" className="text-white">Your e-mail address:</label>
                  <input className="form-control mb-1 bg-transparent" type="email" name="email" id="email" placeholder="Enter your email" required autoComplete="on"/>
                  <button type="submit" className="btn w-100 bg-deepred text-white">Subscribe</button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="main-footer" style={{ background: "#000" }}>
        <div className="container d-flex align-items-center flex-column gap-3">
          <img src={Logo} alt="White Logo" className="img-fluid"/>
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} <span className="text-white">Raque</span> Designed By <span className="text-white">DigitalDove</span> | All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer