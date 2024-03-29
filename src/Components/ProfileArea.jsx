import { FaCamera } from "react-icons/fa";
/* IMPORT CONTEXT */
import { useContext } from "react";

const ProfileArea = () => {

    return (
        <div className="profile-area">
            <div className="ui container">
                <div className="profile-root-user shadow">
                    <div className="profile-image">
                        <img alt="Gravatar for antyjames@gmail.com" src="//www.gravatar.com/avatar/751e464fad50830765928c403da9ed5b?d=monsterid&amp;r=pg&amp;s=100" srcSet="//www.gravatar.com/avatar/751e464fad50830765928c403da9ed5b?d=monsterid&amp;r=pg&amp;s=200 2x" height="100" width="100" className="react-gravatar"/>
                        <button className="upload" title="Upload Image">
                            <FaCamera className="camera icon"/>
                        </button>
                    </div>

                    <h3>Micheal</h3>
                    <p></p>
                    <p>Joined: 3/26/2024</p>
                    <p>Role: Student</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileArea