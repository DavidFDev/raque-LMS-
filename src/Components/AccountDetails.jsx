import { IoIosSave } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";

import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";

import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";

const AccountDetails = () => {
  const { email, name, password, handleUpdate, isLoggedIn, errParagraph, activateErrMsg } = useAuthContext();

  const [fullName, setFullName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [currentPassword, setCurrentPassword] = useState( password );
  const [newPassword, setNewPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdate({ userEmail, currentPassword, newPassword, fullName });
  };



  const oldPassword = document.querySelector("#password");
  function handlePasswordVisibility() {
    // toggle the type attribute
    const type =
      oldPassword.getAttribute("type") === "password" ? "text" : "password";
    oldPassword.setAttribute("type", type);

    
    // this.classList.toggle("bi-eye");
  }




  const newPass = document.querySelector("#newPassword");
  function handleNewPasswordVisibility() {
    // toggle the type attribute
    const newType =
      newPass.getAttribute("type") === "password" ? "text" : "password";
    newPass.setAttribute("type", newType);

    // toggle the icon
    // this.classList.toggle("bi-eye");
  }





  const confirmPass = document.querySelector("#confirmPassword");
  function handleConfirmPasswordVisibility() {
    // toggle the type attribute
    const confirmPassword =
      confirmPass.getAttribute("type") === "password" ? "text" : "password";
    confirmPass.setAttribute("type", confirmPassword);

    // toggle the icon
    // this.classList.toggle("bi-eye");
  }

  


  
  

  return (
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

        <div className="col-lg-12 col-md-12">
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

        <div className="col-lg-12 col-md-12">
          <legend>Password Change</legend>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label htmlFor="password">
              Current password (leave blank to leave unchanged)
            </label>
            <div className="password">
              <input
                type="password"
                id="password"
                className="form-control"
                value={currentPassword}
                autoComplete="on"
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <FaEyeSlash
                id="togglePassword"
                onClick={handlePasswordVisibility}
              />
            </div>
            {activateErrMsg ? <span className="text-deepred">{errParagraph}</span> : "" }
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <label htmlFor="newPassword">
              New password (leave blank to leave unchanged)
            </label>
            <div className="password">
              <input
                type="password"
                id="newPassword"
                name="password"
                className="form-control"
                value={newPassword}
                autoComplete="on"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <FaEyeSlash
                id="togglePassword"
                onClick={handleNewPasswordVisibility}
              />
            </div>
            {activateErrMsg ? <span className="text-deepred">{errParagraph}</span> : null }
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <button type="submit" className="default-btn">
            <IoIosSave className="start-icon" />
            <span className="label">Save Changes</span>
            <IoIosSave className="end-icon" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default AccountDetails;
