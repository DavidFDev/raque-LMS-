import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";

const ForgotPasswordForm = () => {
  const {
    successMsg,
    activateErrMsg,
    errParagraph,
    handleForgotPassword,
    successPara,
  } = useAuthContext();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [regionCode, setRegionCode] = useState("+234");
  const [activeTab, setActiveTab] = useState(false);
  const phoneNumber = regionCode + phone;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForgotPassword({ email, phone, phoneNumber });
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <ul
        className="nav nav-tabs d-flex justify-content-center"
        id="myTab"
        role="tablist"
      >
        <div
          className={
            !activeTab
              ? "input-option left-h d-flex align-items-center shadow"
              : "input-option right-h d-flex align-items-center shadow"
          }
        >
          <li className="nav-item rounded" role="presentation">
            <button
              className="nav-link active"
              id="email-tab"
              data-bs-toggle="tab"
              data-bs-target="#emailInput"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              onClick={() => setActiveTab(false)}
            >
              <span>Email</span>
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="phoneNumber-tab"
              data-bs-toggle="tab"
              data-bs-target="#phoneNumber"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={() => setActiveTab(true)}
            >
              <span>Phone</span>
            </button>
          </li>
        </div>
      </ul>

      {/* TAB PANES */}
      <div className="tab-content">
        {/* EMAIL TAB PANE*/}
        <div
          className="tab-pane active"
          id="emailInput"
          role="tabpanel"
          aria-labelledby="email-tab"
        >
          {/* EMAIL */}
          {!activeTab && (
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}
        </div>

        {/* PHONE NUMBER TAB PANE */}
        <div
          className="tab-pane"
          id="phoneNumber"
          role="tabpanel"
          aria-labelledby="phoneNumber-tab"
        >
          <div className="input-group mb-3">
            {/* Region Code Selection */}

            {activeTab &&
              <>
                <div className="input-group-prepend">
                  <select
                    className="custom-select form-control"
                    value={regionCode}
                    onChange={(e) => setRegionCode(e.target.value)}
                  >
                    <option value="+234">+234</option>
                  </select>
                </div>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  className={activeTab ? "d-block form-control" : "d-none form-control"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </>
            }

          </div>
        </div>
      </div>

      {/* SEND LINK BUTTON */}
      <button type="submit">Send Link</button>
    </form>
  );
};

export default ForgotPasswordForm;
