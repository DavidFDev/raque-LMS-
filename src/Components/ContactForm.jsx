import { useState } from "react";


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState();
    const [subject, setSubject] = useState("");
    const [randonText, setRandownText] = useState("");


  return (
    <section className="contact-area-form" style={{ paddingBottom: "100px" }}>
        <div className="container">
            <div className="section-title text-center">
                <span className="sub-title">Contact Us</span>
                <h2>Drop us Message for any Query</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="contact-form">
                <form id="contactForm">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <input type="text" name="name" id="name" className="form-control" required 
                                data-error="Please enter your name" 
                                placeholder="Your Name" onChange={(e) => setName(e.target.value)} value={name}/>

                                <div className="help-block with-errors"></div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <input type="email" name="email" id="email" className="form-control" required 
                                data-error="Please enter your email" 
                                placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <input type="text" name="phone_number" id="phone_number" required 
                                data-error="Please enter your number" className="form-control" 
                                placeholder="Your Phone" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <input type="text" name="msg_subject" id="msg_subject" className="form-control" required 
                                data-error="Please enter your subject" 
                                placeholder="Your Subject" onChange={(e) => setSubject(e.target.value)} value={subject}/>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <textarea name="message" className="form-control" id="message" cols="30" rows="5" required 
                                    data-error="Write your message" 

                                    placeholder="Your Message" onChange={(e) => setRandownText(e.target.value)} value={randonText}>
                                        
                                </textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <button type="submit" className="default-btn"><i className='bx bx-paper-plane icon-arrow before'></i><span className="label">Send Message</span><i className="bx bx-paper-plane icon-arrow after"></i></button>
                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div id="particles-js-circle-bubble-3"></div>
    </section>
  )
}

export default ContactForm