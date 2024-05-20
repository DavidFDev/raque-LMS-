import { useState } from "react";
import { useAuthContext } from '../Context/AuthContext';
import SocialAuth from './SocialAuth';

const SignupForm = () => {
    const {activateErrMsg, errParagraph , handleSignup} = useAuthContext()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")


    /* HANDLE SUBMIT */
    const handleSubmit = (e) => {
        e.preventDefault();
        
        handleSignup ({name, email, password, phone})

    }

  return (
    <form onSubmit={handleSubmit}>
        {/* UI ERROR */}
        {activateErrMsg && 
            <div className="ui error message text-start">
                <div className="content">
                    <div className="header fw-bold">Oops!</div>
                    <p className="form-ui-error">{errParagraph}</p>
                </div>
            </div>
        }

        {/* NAME */}
        <div className="form-group">
            <input type="text" name="name" id="name" placeholder="Enter Full Name" autoComplete="off" autoCapitalize="on" className="form-control text-capitalize" value={name} onChange={(e) => setName(e.target.value)} required/>
            <span className="form-email-feedback"></span>
        </div>

        {/* EMAIL */}
        <div className="form-group">
            <input type="email" name="email" id="email" placeholder="Your email address" autoComplete="on" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>

        {/* PHONE */}
        <div className="form-group">
            <input type="tel" placeholder="Phone Number" id="phone" name="phone" className="form-control" value={phone} onChange={e => setPhone(e.target.value)} required/>
        </div>

        {/* PASSWORD */}
        <div className="form-group">
            <input type="password" name="password" id="password" placeholder="Create a password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        
        {/* SUBMIT BUTTON */}
        <button type="submit">
            Sign Up
        </button>

       <SocialAuth />
    </form>
  )
}

export default SignupForm;