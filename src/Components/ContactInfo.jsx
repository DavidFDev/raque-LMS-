import { FiPhoneCall } from "react-icons/fi";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import ParticlesComponent from "./Particles";


const ContactInfo = () => {
  return (
    <div className="contact-area-info pt-5 mt-5 pt-lg-0 mt-lg-0 pb-100">

        <div className="container">
            
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="contact-info-box mb-30 ">
                        <div className="icon">
                            <MdOutlineEmail/>
                        </div>

                        <h3>Email Here</h3>
                        <p><a href="mailto:hello@raque.com">raquereinforce@gmail.com</a></p>
                        <p><a href="mailto:raque@hello.com">raquereinforce@gmail.com</a></p>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="contact-info-box mb-30">
                        <div className="icon">
                            <LiaMapMarkerAltSolid/>
                        </div>

                        <h3>Location Here</h3>
                        <p><a href="https://goo.gl/maps/Mii9keyeqXeNH4347" target="_blank">YCT. Herbert Macaulay Rd, Yaba Lagos</a></p>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 offset-sm-3 offset-md-3 offset-lg-0">
                    <div className="contact-info-box mb-30">
                        <div className="icon">
                            <FiPhoneCall/>
                        </div>

                        <h3>Call Here</h3>
                        <p><a href="tel:2347044593001">+234 704 459 3001</a></p>
                        <p><a href="tel:2347018573905">+241 452 4526</a></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactInfo