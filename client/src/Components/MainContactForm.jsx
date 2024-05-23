import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useAuthContext } from "../Context/AuthContext";

const MainContactForm = () => {
  const { handleMessage, successPara, errParagraph, activateErrMsg, successMsg, loading } = useAuthContext()


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleMessage({ email, name, phone, subject, message });
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      {/* UI ERROR MESSAGE */}
      {activateErrMsg ? (
        <div className="ui error message text-start">
          <div className="content">
            <div className="header fw-bold">Oops!</div>
            <p className="form-ui-error">{errParagraph}</p>
          </div>
        </div>
      ) : (
        successMsg && (
          <div className="ui success message text-start">
            <div className="content">
              <div className="header fw-bold">Success!</div>
              <p className="form-ui-success">{successPara}</p>
            </div>
          </div>
        )
      )}



      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              required
              data-error="Please enter your name"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoComplete="on"
            />

            <div className="help-block with-errors"></div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              required
              data-error="Please enter your email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="on"
            />
            <div className="help-block with-errors"></div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              required
              data-error="Please enter your number"
              className="form-control"
              placeholder="Your Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              autoComplete="on"
            />
            <div className="help-block with-errors"></div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <input
              type="text"
              name="msg_subject"
              id="msg_subject"
              className="form-control"
              required
              data-error="Please enter your subject"
              placeholder="Your Subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              autoComplete="on"
            />
            <div className="help-block with-errors"></div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              id="message"
              cols="30"
              rows="5"
              required
              data-error="Write your message"
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              autoComplete="on"
            ></textarea>
            <div className="help-block with-errors"></div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <button type="submit" className="default-btn">
            <FaLongArrowAltRight className="start-icon before" />
            <span className="label">{ loading ? <Loader/> : "Send Message" }</span>
            <FaLongArrowAltRight className="end-icon after" />
          </button>

          <div id="msgSubmit" className="h3 text-center hidden"></div>
          <div className="clearfix"></div>
        </div>
      </div>
    </form>
  );
};

export default MainContactForm;
