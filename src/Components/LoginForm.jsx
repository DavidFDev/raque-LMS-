
import LogoImg from '../assets/Logo/black-logo.png'
import LogoImgWhite from '../assets/Logo/white-logo.png'
import LoginPageImg from '../assets/Login-Form/login-bg.jpg'
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from '../Context/LoginContext';
// IMPORT USE CONTEXT

const LoginForm = () => {
    // const { userName, setUserEmail, isFuntioning, setIsFuntioning } = useContext(LoginContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isActive, setIsActive] = useState(false);
    const [errParagraph, setErrParagraph] = useState();
    const navigate = useNavigate();


    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login',  { email, password })
        .then(result =>  {console.log(result)
            if (result.data === "Success") {
                navigate('/profile')
                setIsFuntioning(true)
            } else if (result.data === `the password is incorrect`) {
                setIsActive(true)
                setErrParagraph(result.data)
            } else if (result.data === "An account doesn't exist with this email") {
                setIsActive(true)
                setErrParagraph(result.data);
            }
        })
        .catch(err => alert(err))
    }


    return (
        <>
            <div className="row m-0 h-100">
                {/* COL-LEFT */}
                <div className="col-lg-6 col-md-12 p-0">
                    {/* LOGIN IMAGE POSITION-(TOP & LEFT) */}
                    <div className="login-image">
                        <img src={LoginPageImg}  className='img-fluid' alt="image"/>
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
                                        <Link to="/">
                                            <img src={LogoImg} className="black-logo img-fluid" alt="image"/>
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
                                    <form onSubmit={handleSubmit}>
                                        {/* UI ERROR MESSAGE */}
                                        {isActive && 
                                            <div className="ui error message text-start">
                                                <div className="content">
                                                    <div className="header fw-bold">Oops!</div>
                                                    <p className="form-ui-error">{errParagraph}</p>
                                                </div>
                                            </div>
                                        }

                                        {/* EMAIL */}
                                        <div className="form-group">
                                            <input type="email" placeholder="Your email address" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required/>
                                        </div>

                                        {/* PASSWORD */}
                                        <div className="form-group">
                                            <input type="password" placeholder="Your password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required/>
                                        </div>
                                        
                                        {/* LOGIN BUTTON */}
                                        <button type="submit">Login</button>
                                        
                                        <div className="forgot-password">
                                            <a href="#">Forgot Password?</a>
                                        </div>

                                        {/* SOCIALS */}
                                        <div className="connect-with-social">
                                            <button type="submit" className="facebook">
                                                <FaFacebookF className="facebook"/> Connect with Facebook
                                            </button>

                                            <button type="submit" className="twitter">
                                                <FaTwitter className="twitter"/> Connect with Twitter
                                            </button>
                                        </div>
                                    </form>
                                    {/* END OF LOGIN FORM */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default LoginForm