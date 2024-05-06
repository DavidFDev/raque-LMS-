import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";

const ForgotPasswordForm = () => {
  const { successMsg, activateErrMsg, errParagraph, handleForgotPassword, successPara } =
    useAuthContext();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForgotPassword({ email });
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
      ) 
      : successMsg && <div className="ui success message text-start">
            <div className="content">
              <div className="header fw-bold">Success!</div>
              <p className="form-ui-success">{successPara}</p>
            </div>
        </div>
      }

      {/* EMAIL */}
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

      {/* LOGIN BUTTON */}
      <button type="submit">Send Link</button>
    </form>
  );
};

export default ForgotPasswordForm;
