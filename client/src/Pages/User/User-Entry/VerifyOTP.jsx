import { Link } from "react-router-dom";
import ResetPasswordForm from "../../../Components/ResetPasswordForm";
import MainLogo from '../../../Components/MainLogo';
import LoginPageImg from "../../../Components/LoginPageImg";

const VerifyOTP = () => {
  return (
    <section className="forgotpassword-area">
      <div className="row m-0 h-100">

        {/* COL-RIGHT */}
        <div className="col-lg-6 col-md-12 p-0">
          {/* RESET CONTENT */}
          <div className="forgotpassword-content">
            <div className="d-table">
              <div className="d-table-cell">
                {/* RESET FORM */}
                <div className="forgotpassword-form">
                  <div className="logo">
                    <Link to="/" className="text-dark">
                      <MainLogo/>
                    </Link>

                    <Link to="/" className="d-none">
                      <img
                        src="assets/img/logo.png"
                        className="white-logo"
                        alt="image"
                      />
                    </Link>
                  </div>

                  {/* RESET TITLE */}
                  <h3>Verify OTP</h3>


                    {/* FORM */}
                  <ResetPasswordForm label="Enter OTP" />

                  {/* MAIN FORM END */}
                </div>
                {/* RESET FORM END */}
              </div>
            </div>
          </div>
        </div>

        {/* COL-LEFT */}
        <div className="col-lg-6 col-md-12 p-0">
          {/* RESET IMAGE & MAIN IMAGE */}
          <div className="forgotpassword-image">
            <LoginPageImg/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOTP;
