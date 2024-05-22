import { Link } from 'react-router-dom';
import LoginForm from '../../../Components/LoginForm';
import LogoImgWhite from '../../../assets/Logo/white-logo.png';
import MainLogo from '../../../Components/MainLogo'
import LoginPageImg from '../../../Components/LoginPageImg';
const Login = () => {

  return (
    <section className='login-area'>
      <div className="row m-0 h-100">
      <div className="col-lg-6 col-md-12 p-0">
        {/* LOGIN IMAGE POSITION-(TOP & LEFT) */}
        <div className="login-image">
          <LoginPageImg/>
        </div>
      </div>

        {/* COL-RIGHT (FORM) */}
        <div className="col-lg-6 col-md-12 p-0">
          <div className="login-content h-100">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="login-form">
                  {/* LOGO */}
                  <div className="logo">
                    {/* BLACK LOGO */}
                    <Link to="/" className="text-dark">
                      <MainLogo/>
                    </Link>
                    
                    {/* WHITE LOGO */}
                    <Link to="/" className="d-none">
                      <img src={LogoImgWhite} className="white-logo img-fluid" alt="image"/>
                    </Link>
                  </div>

                  {/* PAGE TITLE */}
                  <h3>Welcome back</h3>

                  {/* SIGNUP */}
                  <p>
                    New to Raque?&nbsp;
                    <Link to={"/register"} className='signup-link'>Signup</Link>
                  </p>

                  {/* LOGIN FORM */}
                  <LoginForm/>
                  {/* END OF LOGIN FORM */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login