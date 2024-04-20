import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowsAltH } from "react-icons/fa";

const HeroSection = () => {

  return (
    <div className='hero-section'>
        {/* SECTION 1 [SHOWCASE] */}

        {/* OWL CAROUSEL */}
        <OwlCarousel className="owl-one owl-carousel owl-theme mb-0 pb-0" items={1} smartSpeed={3000} autoPlay={true} 
            loop={true} 
            autoplaySpeed={5000}
            autoplayTimeout={5000} 
            autoplayHoverPause={true} 
            animateOut="fadeOut"
            animateIn="fadeIn"
        >

            {/* <!-- SLIDE[0] --> */}
            <div className="item item-1">
                <div className="container p-0">
                    <div className="main-banner">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container p-0">
                                    <div className="main-banner-content">
                                        <span className='sub-title'>
                                            <span className="highlight"></span>
                                            THE FUTURE
                                        </span>
                                        <h1>Transformative course for those who learn differently</h1>
                                        <p>Raque students students by introducing collaboratives outside R, internships and search experience abroad</p>

                                        <div className="links">
                                            <Link to={"courses-category-style-1.html"} className="btn btn-deepred text-white default-btn d-flex gap-2 flex-nowrap align-items-center">
                                                <FaArrowsAltH className="start-icon"/>
                                                <span className="label">View Courses</span>
                                                <FaArrowsAltH className="end-icon"/>
                                            </Link>                     
                                            <button className="starter-btn btn text-white">
                                                <span>Get Started Free</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <!-- SLIDE[1] --> */}
            <div className="item item-2">
                <div className="container p-0">
                    <div className="main-banner">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container p-0">
                                    <div className="main-banner-content">

                                        <span className='sub-title'>
                                            <span className="highlight"></span>
                                            WEAPON IS EDUCATION
                                        </span>

                                        <h1>Thinking out of the box and create a learning learner</h1>
                                        <p>Raque students students by introducing collaboratives outside R, internships and search experience abroad</p>

                                        <div className="links">
                                            <button className="default-btn hero-btn d-flex gap-2 align-items-center flex-nowrap justify-content-center m-auto ">
                                                <FaArrowsAltH className="start-icon"/>
                                                <span className='label'>
                                                    View Courses
                                                </span>
                                                <FaArrowsAltH className="end-icon"/>
                                            </button> 

                                            <button className="starter-btn btn text-white">
                                                <span>Get Started Free</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- SLIDE[2] --> */}
            <div className="item item-3">
                <div className="container p-0">
                    <div className="main-banner">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container p-0">
                                    <div className="main-banner-content">

                                        <span className='sub-title'>
                                            <span className="highlight"></span>
                                            <span>AIM FOR EXCELLENCE</span>
                                        </span>

                                        <h1>Learn a new skill from online courses</h1>
                                        <p>Raque students students by introducing collaboratives outside R, internships and search experience abroad</p>

                                        <div className="links">
                                            <button className="default-btn hero-btn d-flex gap-2 align-items-center flex-nowrap justify-content-center">
                                                <FaArrowsAltH className="start-icon"/>
                                                <span className='label'>
                                                    View Courses
                                                </span>
                                                <FaArrowsAltH className="end-icon"/>
                                            </button>      

                                            <button className="starter-btn btn text-white">
                                                <span>Get Started Free</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </OwlCarousel>
    </div>
  )
}

export default HeroSection