import { Link } from "react-router-dom";
import ForgotPasswordForm from "../../../Components/ForgotPasswordForm";
import MainLogo from "../../../Components/MainLogo";
import LoginPageImg from "../../../Components/LoginPageImg";


const ForgotPassword = () => {
  return (
    <section className="forgotpassword-area">
      <div className="row m-0 h-100">
        {/* COL-LEFT */}
        <div className="col-lg-6 col-md-12 p-0">
          {/* REGISTER IMAGE & MAIN IMAGE */}
          <div className="forgotpassword-image">
            <LoginPageImg/>
          </div>
        </div>

        {/* COL-RIGHT */}
        <div className="col-lg-6 col-md-12 p-0">
          {/* REGISTER CONTENT */}
          <div className="forgotpassword-content">
            <div className="d-table">
              <div className="d-table-cell">
                {/* REGUSTER FORM */}
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

                  {/* REGISTER TITLE */}
                  <h3>Validate Account</h3>

                  <p>
                    Forgot your password?&nbsp;{" "}
                    <span className="text-altlemon">
                      Enter your email below👇
                    </span>
                  </p>

                  {/* FORM */}
                  <ForgotPasswordForm />

                  {/* MAIN FORM END */}
                </div>
                {/* REGISTER FORM END */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
