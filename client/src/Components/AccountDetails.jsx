import { useState } from 'react';
import { IoIosSave } from "react-icons/io";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { useAuthContext } from "../Context/AuthContext";
import { usePopupNotification } from '../Context/PopupNotificationContext';
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import Loader from './Loader';




const AccountDetails = () => {
  const { email, name, password, handleUpdate, errParagraph, successPara, successMsg, activateErrMsg, loading } = useAuthContext();
  const { showNotification } = usePopupNotification();

  const [fullName, setFullName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate({ userEmail, currentPassword, newPassword, fullName });
    activateErrMsg ? showNotification(errParagraph) : successMsg && showNotification(successPara)
  };

  return (
    <>
      <form className="edit-account" onSubmit={handleSubmit}>
        <div className="row"> 
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="name">
                Full name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control text-capitalize"
                value={fullName}
                autoComplete="on"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <label htmlFor="email">
                Email address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={userEmail}
                autoComplete="on"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="col-12">
            <legend>Password Change</legend>
          </div>

          <div className="col-6">
            <div className="form-group">
              <label htmlFor="password">
                Current password (leave blank to leave unchanged)
              </label>
              <div className="password">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  id="password"
                  className="form-control"
                  value={currentPassword}
                  autoComplete="on"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <FaEyeSlash
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                />
              </div>
              {activateErrMsg && <span className="text-altlemon">{errParagraph}</span>}
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <label htmlFor="newPassword">
                New password (leave blank to leave unchanged)
              </label>
              <div className="password">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  className="form-control"
                  value={newPassword}
                  autoComplete="on"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <FaEyeSlash
                  onClick={() => setShowNewPassword(!showNewPassword)}
                />
              </div>
              {activateErrMsg && <span className="text-altlemon">{errParagraph}</span>}
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="default-btn">
              <IoIosSave className="start-icon" />
              <span className="label">{loading ? <Loader/> : "Save Changes"}</span>
              <IoIosSave className="end-icon" />
            </button>
          </div>
        </div>
      </form>

    </>
  );
};

export default AccountDetails;
