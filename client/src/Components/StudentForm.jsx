import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { useAuthContext } from "../Context/AuthContext";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");

  const { activateErrMsg, errParagraph, successMsg, successPara, handleFeedback, handleFeedbackPage } =
    useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleFeedback({ email, name, phone, address, message });

    if (window.location.href === "https://yctlibrary.onrender.com/feedback") {
      handleFeedbackPage({ email, name, phone, address, message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your name*"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required={true}
              autoComplete="on"
            />
            <span className="label-title">
              <FaRegUser className="icon" />
            </span>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your address*"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required={true}
              autoComplete="on"
            />
            <span className="label-title">
              <AiOutlineHome className="icon" />
            </span>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your email*"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              required={true}
              autoComplete="on"
            />
            <span className="label-title">
              <MdMailOutline className="icon" />
            </span>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Your phone*"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              maxLength="11"
              pattern=".{10,10}"
              required
              autoComplete="on"
            />
            <span className="label-title">
              <FiPhone className="icon" />
            </span>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="form-group">
            <textarea
              cols="30"
              rows="5"
              className="form-control"
              placeholder="Write something here (Optional)"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <span className="label-title">
              <FaRegEdit />
            </span>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <button
            type="submit"
            className="default-btn d-flex gap-2 align-items-center flex-nowrap justify-content-center m-auto "
          >
            <VscFeedback className="start-icon" />
            <span className="label">Send Message</span>
            <VscFeedback className="end-icon" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default StudentForm;
