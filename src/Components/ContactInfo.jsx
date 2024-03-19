import { FiPhoneCall } from "react-icons/fi";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="contact-area-info pt-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="contact-info-box mb-30">
                        <div className="icon">
                            <MdOutlineEmail/>
                        </div>

                        <h3>Email Here</h3>
                        <p><a href="mailto:hello@raque.com">hello@raque.com</a></p>
                        <p><a href="mailto:raque@hello.com">raque@hello.com</a></p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="contact-info-box mb-30">
                        <div className="icon">
                            <LiaMapMarkerAltSolid/>
                        </div>

                        <h3>Location Here</h3>
                        <p><a href="https://goo.gl/maps/Mii9keyeqXeNH4347" target="_blank">2750 Quadra Street Victoria Road, New York, USA</a></p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div className="contact-info-box mb-30">
                        <div className="icon">
                            <FiPhoneCall/>
                        </div>

                        <h3>Call Here</h3>
                        <p><a href="tel:1234567890">+123 456 7890</a></p>
                        <p><a href="tel:2414524526">+241 452 4526</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo