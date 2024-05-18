import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Map from "../Components/Map";




const Contact = () => {
  return (
    <div id="contact">
      <div className="all-contact-info">
        <section className="contact-area">
          <div className="page-title-area">
            <div className="container p-lg-0">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="title-content">
                    <ul>
                      <li>
                        <Link
                          to="/"
                          className="text-decoration-none text-dark"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <span>

                          <IoChevronForward />
                        </span>
                      </li>
                      <li>
                        <span>Contact</span>
                      </li>
                    </ul>
                    <h2>Contact Us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-info">
          <ContactInfo />
        </section>

        <section className="contact-form-section">
          <ContactForm />
        </section>


      </div>

      <section className="map">
        <Map />
      </section>
    </div>
  );
};

export default Contact;
