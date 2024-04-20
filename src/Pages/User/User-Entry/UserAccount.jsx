import { FaEdit, FaOpencart } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaPinterestP, FaTwitter } from "react-icons/fa6";
import { IoChevronForward, IoDownloadOutline } from "react-icons/io5";
import { MdDashboard, MdOutlineMailOutline } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import userImg from '../../../assets/Team/1.jpg';

import { BiLogOut } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import UserForm from "../../../Components/UserForm";
import { useAuthContext } from "../../../Context/AuthContext";

const UserAccount = () => {
    const {email, name, handleLogout, isLoggedIn} = useAuthContext();


  return (
    <>
        {isLoggedIn ? 
            <section className='user-account-area pb'>
                {/* PAGE TITLE */}
                <div className="page-title-area">
                    <div className="container">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="title-content">
                                    <ul>
                                        <li>
                                            <Link to={"/contact"} className="text-decoration-none text-dark">Home</Link>
                                        </li>
                                        <li>
                                            <span> <IoChevronForward/> </span>
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
                                        <img src={userImg} className="img-fluid rounded" alt="image"/>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-7">
                                    <div className="profile-content">
                                        <h3 className="profile-name text-capitalize">{name}</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore atque officiis maxime suscipit expedita obcaecati nulla in ducimus.</p>

                                        <ul className="contact-info">
                                            <li><MdOutlineMailOutline className="icon"/> <a href="#">{email}</a></li>
                                            <li><FaPhone className="icon"/> <a href="tel:+234 704 459 3001">+234 704 459 3001</a></li>
                                            <li><TbWorld className="icon"/> <a href="#" target="_blank">www.digitaldove.com</a></li>
                                        </ul>

                                        <ul className="social">
                                            <li><a href="#" className="d-block" target="_blank"><FaFacebookF className="bx bxl-facebook"/></a></li>
                                            <li><a href="#" className="d-block" target="_blank"><FaTwitter className="bx bxl-twitter"/></a></li>
                                            <li><a href="#" className="d-block" target="_blank"><FaInstagram className="bx bxl-instagram"/></a></li>
                                            <li><a href="#" className="d-block" target="_blank"><FaLinkedinIn className="bx bxl-linkedin"/></a></li>
                                            <li><a href="#" className="d-block" target="_blank"><FaPinterestP className="bx bxl-pinterest-alt"/></a></li>
                                        </ul>

                                        <div className="userAccount-logout" onClick={handleLogout}>Logout</div>
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
                                            <a href="#tab1Id" className="nav-link active" data-bs-toggle="tab" aria-current="page">
                                                <MdDashboard/> 
                                                <span className="">Dashboard</span>
                                            </a>
                                        </li>



                                        <li className="nav-item" role="representation">
                                            <a href="#tab2Id" className="nav-link" data-bs-toggle="tab" role="button" aria-haspopup="true" aria-expanded="false">
                                                <FaOpencart/> 
                                                <span className="">Orders</span>
                                            </a>
                                        </li>



                                        <li className="nav-item" role="representation">
                                            <a href="#tab3Id" className="nav-link" data-bs-toggle="tab">
                                                <IoDownloadOutline/> 
                                                <span className="">Downloads</span>
                                            </a>
                                        </li>



                                        <li className="nav-item" role="representation">
                                            <a href="#tab4Id" className="nav-link text-capitalize" data-bs-toggle="tab">
                                                <FiHome/>  
                                                <span className="">Addresses</span>
                                            </a>
                                        </li>



                                        <li className="nav-item" role="representation">
                                            <a href="#tab5Id" className="nav-link text-capitalize" data-bs-toggle="tab">
                                            <FaEdit/> 
                                            <span> Account Details</span>
                                            </a>
                                        </li>



                                        <li className="nav-item" role="representation">
                                            <a href="#tab5Id" className="nav-link text-capitalize" data-bs-toggle="tab">
                                                <BiLogOut/>    
                                                <span>Logout</span>
                                            </a>
                                        </li>
                                    </ul>
                                    
                                    {/* <!-- Tab panes --> */}
                                    <div className="tab-content w-100 py-4" id="myTabContent">
                                        {/* PANEL ONE */}
                                        <div className="tab-pane fade show active" id="tab1Id" role="tabpanel">
                                            <p>Hello <b className="text-capitalize">{name}</b> (not <b className="text-capitalize">{name}</b>? <span className="text-deepred" onClick={handleLogout} style={{cursor: "pointer"}}>Logout</span> )</p>

                                            <p>From your account dashboard you can view your <span className="text-deepred">recent orders</span>, manage your <span className="text-deepred">shipping and billing addresses</span>, and <span className="text-deepred">edit your password and account details</span>.</p>
                                            
                                            {/* ORDER FORM */}
                                            <div className="order-form">
                                                <h3>Recent Orders</h3>
                                                <div className="main-table">
                                                    <table className="table border text-center">
                                                        <thead className="">
                                                            <tr>
                                                                <th>Order</th>
                                                                <th>Date</th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr>
                                                                <td>#074145O5</td>
                                                                <td>October 18, 2023</td>
                                                                <td>Completed	</td>
                                                                <td>&#8358;49.00 for 1 item	</td>
                                                                <td>
                                                                    <Link to={""} className="view-button">
                                                                        View
                                                                    </Link> 
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>#074145O6</td>
                                                                <td>October 18, 2023</td>
                                                                <td>On Hold </td>
                                                                <td>&#8358;49.00 for 1 item	</td>
                                                                <td>
                                                                    <Link to={""} className="view-button">
                                                                        View
                                                                    </Link> 
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>#074145O7</td>
                                                                <td>October 18, 2023</td>
                                                                <td>Completed	</td>
                                                                <td>&#8358;49.00 for 1 item	</td>
                                                                <td>
                                                                    <Link to={""} className="view-button">
                                                                        View
                                                                    </Link> 
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>#074145O5</td>
                                                                <td>October 18, 2023</td>
                                                                <td>Completed	</td>
                                                                <td>&#8358;49.00 for 1 item	</td>
                                                                <td>
                                                                    <Link to={""} className="view-button">
                                                                        View
                                                                    </Link> 
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>#074145O6</td>
                                                                <td>October 18, 2023</td>
                                                                <td>On Hold</td>
                                                                <td>&#8358;49.00 for 1 item	</td>
                                                                <td>
                                                                    <Link to={""} className="view-button">
                                                                        View
                                                                    </Link> 
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>#074145O7</td>
                                                                <td>October 18, 2023</td>
                                                                <td>Completed	</td>
                                                                <td>&#8358;49.00 for 1 item	</td>
                                                                <td>
                                                                    <Link to={""} className="view-button">
                                                                        View
                                                                    </Link> 
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        {/* PANEL TWO */}
                                        <div className="tab-pane fade main-orders" id="tab2Id" role="tabpanel">
                                            <div className="order-form overflow-auto">
                                                <table className="table border text-center">
                                                    <thead className="">
                                                        <tr>
                                                            <th>Order</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Total</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <td>#074145O5</td>
                                                            <td>October 18, 2023</td>
                                                            <td>Completed	</td>
                                                            <td>&#8358;49.00 for 1 item	</td>
                                                            <td>
                                                                <Link to={""} className="view-button">
                                                                    View
                                                                </Link> 
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>#074145O6</td>
                                                            <td>October 18, 2023</td>
                                                            <td>On Hold </td>
                                                            <td>&#8358;49.00 for 1 item	</td>
                                                            <td>
                                                                <Link to={""} className="view-button">
                                                                    View
                                                                </Link> 
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>#074145O7</td>
                                                            <td>October 18, 2023</td>
                                                            <td>Completed	</td>
                                                            <td>&#8358;49.00 for 1 item	</td>
                                                            <td>
                                                                <Link to={""} className="view-button">
                                                                    View
                                                                </Link> 
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>#074145O5</td>
                                                            <td>October 18, 2023</td>
                                                            <td>Completed	</td>
                                                            <td>&#8358;49.00 for 1 item	</td>
                                                            <td>
                                                                <Link to={""} className="view-button">
                                                                    View
                                                                </Link> 
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>#074145O6</td>
                                                            <td>October 18, 2023</td>
                                                            <td>On Hold</td>
                                                            <td>&#8358;49.00 for 1 item	</td>
                                                            <td>
                                                                <Link to={""} className="view-button">
                                                                    View
                                                                </Link> 
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>#074145O7</td>
                                                            <td>October 18, 2023</td>
                                                            <td>Completed	</td>
                                                            <td>&#8358;49.00 for 1 item	</td>
                                                            <td>
                                                                <Link to={""} className="view-button">
                                                                    View
                                                                </Link> 
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        
                                        {/* <div className="tab-pane fade" id="tab3Id" role="tabpanel">
                                            <table className="table table-striped">

                                            </table>
                                        </div> */}

                                        {/* ADDRESS */}
                                        <div className="tab-pane fade" id="tab4Id" role="tabpanel">
                                            <div className="address">
                                                <div className="userAccount-content">
                                                    <p>The following addresses will be used on the checkout page by default.</p>

                                                    <div className="userAccount-addresses">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="addresses-title d-flex align-items-center justify-content-between">
                                                                    <h3>Billing address</h3>
                                                                    <a href="#tab5Id" className="edit" data-bs-toggle="tab" role="button" aria-haspopup="true" aria-expanded="false">Edit</a>
                                                                </div>

                                                                <address className="text-capitalize">
                                                                    {name}
                                                                    <br />
                                                                    ET
                                                                    <br />
                                                                    3774 Joy Lane
                                                                    Los Angeles, CA 90071
                                                                </address>
                                                            </div>

                                                            <div className="col-lg-6 col-md-6 mt-3 mt-lg-0">
                                                                <div className="addresses-title d-flex align-items-center justify-content-between">
                                                                    <h3>Shipping address</h3>
                                                                    <a href="#tab5Id" className="edit" data-bs-toggle="tab" role="button" aria-haspopup="true" aria-expanded="false">Add</a>
                                                                </div>
                                                                <address>You have not set up this type of address yet.</address>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ACCOUNT DETAILS AND EDIT */}
                                        <div className="tab-pane fade" id="tab5Id" role="tabpanel">
                                            <div className="user-details">

                                                {/* User Review Form */}
                                                <div className="userAccount-content">
                                                    <UserForm/>
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
        :
            null
        }
    </>
  )
}

export default UserAccount