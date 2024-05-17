import { FaPen } from "react-icons/fa";


import { useAuthContext } from "../Context/AuthContext";
import { useState } from "react";

const BioForm = () => {
  const { handleLogout, handleUpdate, bio } = useAuthContext();

  const [userBio, setUserBio] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleBioReset = () => {
    setIsActive(!isActive)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdate({ userBio })
  };

  return (
    <form onSubmit={handleSubmit} style={{width: "100%"}}>
      <div className="form-group">
        <textarea
          className={isActive ? "p-2 showing" : "bio-edit-area"}
          placeholder={isActive ? "Enter bio" : ""}
          rows="3"
          maxLength="107"
          value={isActive ? userBio : ""}
          onChange={(e) => setUserBio(e.target.value)}
        >
          {isActive ? "" : ""}
        </textarea>

        <p className={isActive ? "not-show" : "showing"}>{bio > 0 ? bio : "Click the pen icon to add your biography"}</p>

      </div>


      <button type={isActive ? "button" : "submit"}
        className={
          isActive
            ? "icon-container rounded addWidth"
            : "icon-container rounded-circle"
        }
        onClick={handleBioReset}
      >
        {!isActive ? <FaPen className="icon" /> : "Done"}
      </button>


    </form>
  );
};

export default BioForm;
