import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import { FaRegEye, FaCode } from "react-icons/fa";
import { IoLayersOutline, IoCameraOutline } from "react-icons/io5";
import { LiaFlagCheckeredSolid } from "react-icons/lia";
import { BiHealth } from "react-icons/bi";
import { LuLineChart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Category = ({ options }) => {

  return (
    <div className="category-section ptb-100">
        <div className="container">
            <div className="category-info">
                <div className="section-title text-center text-lg-start">
                    <span className="sub-title text-uppercase text-deepred">
                        COURSES CATEGORIES
                    </span>
                    
                    {/* CATEGORY TITLE */}
                    <h1 className="title text-capitalize text-dark">
                        Browse Trending Categories
                    </h1>
                </div>

                <Link to={"courses-category-style-1.html"} className="default-btn d-none d-lg-inline-block">
                    <FaRegEye className="start-icon"/>
                    <span class="label">View All</span>
                    <FaRegEye className="end-icon"/>
                </Link>
            </div>

            {/* OWL CAROUSEL */}
            <OwlCarousel className="owl-two owl-carousel owl-theme mb-0 pb-0" {...options} margin={10} loop={false} autoplay={true} items={3} nav={true} dots={false} 
                responsive={ {
                    320:{
                            items: 1
                        },
                        576:{
                            items : 1,
                        },
                        600:{
                            items:1
                        },
                        // breakpoint from 768 up
                        758:{
                            items:2,
                            margin: 30
                        },
                        768 : {
                            items: 2
                        },
                        920:{
                            items:3
                        },
                        992:{
                            items:3
                        },

                        1056: {
                            items: 4
                        }
                    }
                }
            >
                <div className="item item-1 single-categories-course-box">
                    <div class="icon">
                        <FaCode/>
                    </div>
                    <h3>Web&nbsp;Development</h3>
                    <span>60 Courses</span>
                    <Link to={"/"} className='link-btn'></Link>
                </div>

                <div className="item item-2 single-categories-course-box">
                    <div class="icon">
                        <IoCameraOutline/>
                    </div>
                    <h3>Photography </h3>
                    <span>21 Courses</span>
                    <Link to={"/"} className='link-btn'></Link>
                </div>

                <div className="item item-3 single-categories-course-box">
                    <div class="icon">
                        <IoLayersOutline/>
                    </div>
                    <h3>Graphics Design</h3>
                    <span>58 Courses</span>
                    <Link to={"/"} className='link-btn'></Link>
                </div>

                <div className="item item-4 single-categories-course-box">
                    <div class="icon">
                        <LiaFlagCheckeredSolid/>
                    </div>
                    <h3>Web Language</h3>
                    <span>99 Courses</span>

                    <Link to={"/"} className="link-btn"></Link>
                </div>

                <div className="item item-5 single-categories-course-box">
                    <div class="icon">
                        <BiHealth/>
                    </div>
                    <h3>Health &amp; Fitness</h3>
                    <span>21 Courses</span>

                    <Link to={"/"} className="link-btn"></Link>
                </div>

                <div className="item item-6 single-categories-course-box">
                    <div class="icon">
                        <LuLineChart/>
                    </div>
                    <h3>Business Studies</h3>
                    <span>49 Courses</span>

                    <Link to={"/"} className="link-btn"></Link>
                </div>
            </OwlCarousel>
        </div>    
    </div>
  )
}

export default Category