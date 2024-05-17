import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import SocialAuth from "./SocialAuth";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { activateErrMsg, errParagraph, handleLogin, successPara, successMsg } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin({ email, password });
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

      {/* EMAIL */}
      <div className="form-group">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* PASSWORD */}
      <div className="form-group">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {/* LOGIN BUTTON */}
      <button type="submit">Login</button>

      <div className="forgot-password">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      {/* SOCIALS */}
      <SocialAuth />
    </form>
  );
};

export default LoginForm;
