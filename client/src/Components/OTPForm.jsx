import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import Loader from "./Loader";

const OTPForm = () => {
  const { activateErrMsg, errParagraph, successPara, successMsg, loading, handleVerifyOTP} = useAuthContext();
  const [otp, setOTP] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerifyOTP({ otp });
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
          type="text"
          name="otp"
          id="otp"
          placeholder="Enter OTP"
          className="form-control"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          required
        />
      </div>

      {/* LOGIN BUTTON */}
      <button type="submit">{ loading ? <Loader/> : "Verify" } </button>
    </form>
  );
};

export default OTPForm;
