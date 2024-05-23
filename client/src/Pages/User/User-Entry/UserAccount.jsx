import { FaEdit, FaOpencart } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import userImg from "../../../assets/User/userImg.png";

import { Link } from "react-router-dom";

import AccountDetails from "../../../Components/AccountDetails";
import AllOrders from "../../../Components/AllOrders";
import RecentOrders from "../../../Components/RecentOrders";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import BioForm from "../../../Components/BioForm";
import { useAuthContext } from "../../../Context/AuthContext";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const UserAccount = () => {
  const { isLoggedIn, handleLogout, name, email, phone } = useAuthContext();

  return (
    <>
      {isLoggedIn ? (
        <section className="user-account-area pb">
          {/* PAGE TITLE */}
          <div className="page-title-area">
            <div className="container">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="title-content">
                    <ul>
                      <li>
                        <Link to="/" className="text-decoration-none text-dark">
                          Home
                        </Link>
                      </li>
                      <li>
                        <span>
                          <IoChevronForward />
                        </span>
                      </li>
                      <li>
                        <span>My Account</span>
                      </li>
                    </ul>
                    <h2 className="text-capitalize">{name}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* USER ACCOUNT */}
          <div className="main-userAccount mt-5 mt-lg-0">
            <div className="container">
              {/*  */}
              <div className="userAccount-profile">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-5">
                    <div className="profile-image">
                      <img
                        src={userImg}
                        className="img-fluid rounded"
                        alt="image"
                      />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-7">
                    <div className="profile-content">
                      <h3 className="profile-name text-capitalize">{name}</h3>

                      <BioForm/>


                      <ul className="contact-info">
                        <li>
                          <MdOutlineMailOutline className="icon" />
                          <a href="#">{email}</a>
                        </li>
                        <li>
                          <FaPhone className="icon" />
                          <a href="tel:+234 704 459 3001">
                            {isLoggedIn && phone}
                          </a>
                        </li>
                      </ul>

                      <ul className="social">
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <FaFacebookF className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <FaTwitter className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <FaInstagram className="bx bxl-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <FaLinkedinIn className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <FaPinterestP className="bx bxl-pinterest-alt" />
                          </a>
                        </li>
                      </ul>

                      <button type="button" onClick={handleLogout} className="userAccount-logout">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="nav nav-tabs userAccount-navigation mb-4">
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs" id="navId" role="tablist">
                      <li className="nav-item" role="representation">
                        <a
                          href="#tab1Id"
                          className="nav-link active"
                          data-bs-toggle="tab"
                          aria-current="page"
                        >
                          <MdDashboard />
                          <span className="">Dashboard</span>
                        </a>
                      </li>

                      <li className="nav-item" role="representation">
                        <a
                          href="#tab2Id"
                          className="nav-link"
                          data-bs-toggle="tab"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <FaOpencart />
                          <span className="">Orders</span>
                        </a>
                      </li>


                      <li className="nav-item" role="representation">
                        <a
                          href="#tab4Id"
                          className="nav-link text-capitalize"
                          data-bs-toggle="tab"
                        >
                          <FaEdit />
                          <span> Account Details</span>
                        </a>
                      </li>
                    </ul>

                    {/* <!-- Tab panes --> */}
                    <div className="tab-content w-100 py-4" id="myTabContent">
                      {/* PANEL ONE */}
                      <div
                        className="tab-pane fade show active"
                        id="tab1Id"
                        role="tabpanel"
                      >
                        <p>
                          Hello <b className="text-capitalize">{name}</b> (not{" "}
                          <b className="text-capitalize">{name}</b>?{" "}
                          <Link
                            to="/login"
                            onClick={handleLogout}
                            className="text-altlemon"
                            style={{ cursor: "pointer" }}
                          >
                            Logout
                          </Link>{" "}
                          )
                        </p>

                        <p>
                          From your account dashboard you can view your{" "}
                          <span className="text-altlemon">recent orders</span>,
                          manage your
                          <span className="text-altlemon">
                            shipping and billing addresses
                          </span>
                          , and
                          <span className="text-altlemon">
                            edit your password and account details
                          </span>
                          .
                        </p>

                        {/* RECENT ORDER FORM */}
                        <RecentOrders />
                      </div>

                      {/* PANEL TWO */}
                      <div
                        className="tab-pane fade main-orders"
                        id="tab2Id"
                        role="tabpanel"
                      >
                        <div className="order-form overflow-auto">
                          <AllOrders />
                        </div>
                      </div>


                      {/* ACCOUNT DETAILS AND EDIT */}
                      <div
                        className="tab-pane fade"
                        id="tab4Id"
                        role="tabpanel"
                      >
                        <div className="user-details">
                          {/* User Review Form */}
                          <div className="userAccount-content">
                            <AccountDetails />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default UserAccount;
