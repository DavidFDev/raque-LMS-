import { IoMdCheckmark } from "react-icons/io";


const AboutInnerArea = () => {
  return (
    <section className="about-inner-area ptb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="about-text">
                        <h3>100,000 online courses</h3>
                        <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                        <ul className="features-list list-unstyled">
                        <li><span><IoMdCheckmark /></span> Activate Listening</li>
                        <li><span><IoMdCheckmark /></span> Brilliant minds</li>
                        <li><span><IoMdCheckmark /></span> Better. Best. Wow!</li>
                        <li><span><IoMdCheckmark /></span> Branding it better!</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="about-text">
                        <h3>Expert instruction</h3>
                        <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                        <ul className="features-list list-unstyled">
                        <li><span><IoMdCheckmark /></span> Creating. Results.</li>
                        <li><span><IoMdCheckmark /></span> Expect more</li>
                        <li><span><IoMdCheckmark /></span> Good thinking</li>
                        <li><span><IoMdCheckmark /></span> In real we trust</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div className="about-text">
                        <h3>Lifetime access</h3>
                        <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
                        <ul className="features-list list-unstyled">
                            <li><span><IoMdCheckmark /></span> Stay real. Always.</li>
                            <li><span><IoMdCheckmark /></span> We have you covered</li>
                            <li><span><IoMdCheckmark /></span> We turn heads</li>
                            <li><span><IoMdCheckmark /></span> Your brand, promoted</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutInnerArea;
