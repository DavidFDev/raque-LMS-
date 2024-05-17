import { Link } from "react-router-dom";
import MainContactForm from "./MainContactForm";
// import TsParticles from "./Particles";
const ContactForm = () => {


  return (
    <section className="contact-area-form " style={{ paddingBottom: "100px" }}>
        <div className="container">
            <div className="section-title text-center">
                <span className="sub-title">Contact Us</span>
                <h2>Drop us Message for any Query</h2>
                <p style={{textOverflow: "ellipsis"}}>
                    Already use <span className="text-deepred">Raque</span>? <Link to="/login">Sign In</Link> so we can tailor your support experiences. If it's not possible, we'd still like to hear from you.
                </p>
            </div>

            <div className="contact-form">
                <MainContactForm id="form" />
            </div>
        </div>

    </section>
  )
}

export default ContactForm