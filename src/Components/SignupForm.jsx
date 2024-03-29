import { Link } from "react-router-dom"
import LogoImg from '../assets/Logo/black-logo.png'
import LoginPageImg from '../assets/Signup/register-bg.jpg'
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isActive, setIsActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [errParagraph, setErrParagraph] = useState();
    const navigate = useNavigate()

    /* HANDLE SUBMIT */
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:3001/register", {name, email, password})
        .then(result => {
            console.log(result)
            
            if (result.data === `a user already exist with ${email}`) {

                setIsActive(true)
                setErrParagraph(result.data)
                throw new Error("Use a different email")

            } else if (result.statusText === "OK") {
                navigate("/profile")
            }

        })
        .catch(err=> console.log(err));

    }

  return (
    <div className="row m-0 h-100">
        {/* COL-LEFT */}
        <div className="col-lg-6 col-md-12 p-0">
            {/* REGISTER IMAGE & MAIN IMAGE */}
            <div className="register-image">
                <img src={LoginPageImg} className="img-fluid" alt="image"/>
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
                                <Link to="/">
                                    <img src={LogoImg} className="black-logo" alt="image"/>
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

                            {/* USER MAIN FORM */}
                            <form onSubmit={handleSubmit}>
                                {/* UI ERROR */}
                                {isActive && 
                                    <div className="ui error message text-start">
                                        <div className="content">
                                            <div className="header fw-bold">Oops!</div>
                                            <p className="form-ui-error">{errParagraph}</p>
                                        </div>
                                    </div>
                                }

                                {/* NAME */}
                                <div className="form-group">
                                    <input type="text" name="email" placeholder="Enter Name" autoComplete="off" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required/>
                                    <span className="form-email-feedback"></span>
                                </div>

                                {/* EMAIL */}
                                <div className="form-group">
                                    <input type="email" name="email" id="email" placeholder="Your email address" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </div>

                                {/* PASSWORD */}
                                <div className="form-group">
                                    <input type="password" name="password" id="password" placeholder="Create a password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                </div>
                                
                                {/* SUBMIT BUTTON */}
                                <button type="submit">
                                    Sign Up
                                </button>

                                <div className="connect-with-social">
                                    <span>Or</span>
                                    <button type="submit" className="facebook"><FaFacebookF className="facebook"/> Connect with Facebook</button>
                                    <button type="submit" className="twitter"><FaTwitter className="twitter"/> Connect with Twitter</button>
                                </div>
                            </form>
                            {/* MAIN FORM END */}
                        </div>
                        {/* REGISTER FORM END */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupForm;