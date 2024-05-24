import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ResetPasswordForm = () => {
  const { handleResetPassword, activateErrMsg, errParagraph, successPara, successMsg, loading } = useAuthContext();
  const [password, setPassword] = useState("");
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResetPassword({ password, token });
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
          type="password"
          name="password"
          id="password"
          placeholder="New Password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {/* LOGIN BUTTON */}
      <button type="submit">{ loading ? <Loader/> : "Reset" } </button>
    </form>
  );
};

export default ResetPasswordForm;
