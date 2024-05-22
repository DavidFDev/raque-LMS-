import { Link } from "react-router-dom";
import MainLogo from '../../../Components/MainLogo';
import SignupForm from "../../../Components/SignupForm";
import SignupPageImg from "../../../Components/SignupPageImg";

const SignUp = () => {

  return (
    <section className="register-area">
      <div className="row m-0 h-100">
        {/* COL-LEFT */}
        <div className="col-lg-6 col-md-12 p-0">
            {/* REGISTER IMAGE & MAIN IMAGE */}
            <div className="register-image">
              <SignupPageImg/>
            </div>
        </div>

        {/* COL-RIGHT */}
        <div className="col-lg-6 col-md-12 p-0">
          {/* REGISTER CONTENT */}
          <div className="register-content">
            <div className="d-table">
              <div className="d-table-cell">
                {/* REGUSTER FORM */}
                <div className="register-form">
                  <div className="logo">
                      <Link to="/" className="text-dark">
                        <MainLogo/>
                      </Link>

                      <Link to="/" className="d-none">
                        <img src="assets/img/logo.png" className="white-logo" alt="image"/>
                      </Link>
                    </div>
                    
                    {/* REGISTER TITLE */}
                    <h3>Open up your Raque Account now</h3>
                    
                    {/* LOGIN IF YOU'RE ALREADY A USER */}
                    <p>
                      Already signed up?&nbsp;
                      <Link to={"/login"}>Log in</Link>
                    </p>

                    <SignupForm />

                    {/* MAIN FORM END */}
                </div>
                {/* REGISTER FORM END */}
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default SignUp