import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaRegEye, FaCode } from "react-icons/fa";
import { IoLayersOutline, IoCameraOutline } from "react-icons/io5";
import { LiaFlagCheckeredSolid } from "react-icons/lia";
import { BiHealth } from "react-icons/bi";
import { LuLineChart } from "react-icons/lu";
import { Link } from "react-router-dom";
import Slider from 'react-slick';

const Category = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 320, settings: { slidesToShow: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 758, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 920, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 1056, settings: { slidesToShow: 4 } },
    ],
  };

  return (
    <section className="category-section ptb-100">
      <div className="container">
        <div className="category-info">
          <div className="section-title text-center text-lg-start">
            <span className="sub-title text-uppercase text-deepred">
              COURSES CATEGORIES
            </span>
            <h1 className="title text-capitalize text-dark">
              Browse Trending Categories
            </h1>
          </div>

          <Link to="/" className="default-btn d-none d-lg-inline-block">
            <FaRegEye className="start-icon"/>
            <span className="label">View All</span>
            <FaRegEye className="end-icon"/>
          </Link>
        </div>

        {/* Slick Carousel */}
        <Slider {...settings} className='slick-two'>
          <div className="item item-1 single-categories-course-box">
            <div className="icon">
              <FaCode/>
            </div>
            <h3>Web&nbsp;Development</h3>
            <span>60 Courses</span>
            <Link to="/" className='link-btn'></Link>
          </div>

          <div className="item item-2 single-categories-course-box">
            <div className="icon">
              <IoCameraOutline/>
            </div>
            <h3>Photography</h3>
            <span>21 Courses</span>
            <Link to="/" className='link-btn'></Link>
          </div>

          <div className="item item-3 single-categories-course-box">
            <div className="icon">
              <IoLayersOutline/>
            </div>
            <h3>Graphics Design</h3>
            <span>58 Courses</span>
            <Link to="/" className='link-btn'></Link>
          </div>

          <div className="item item-4 single-categories-course-box">
            <div className="icon">
              <LiaFlagCheckeredSolid/>
            </div>
            <h3>Web Language</h3>
            <span>99 Courses</span>
            <Link to="/" className="link-btn"></Link>
          </div>

          <div className="item item-5 single-categories-course-box">
            <div className="icon">
              <BiHealth/>
            </div>
            <h3>Health &amp; Fitness</h3>
            <span>21 Courses</span>
            <Link to="/" className="link-btn"></Link>
          </div>

          <div className="item item-6 single-categories-course-box">
            <div className="icon">
              <LuLineChart/>
            </div>
            <h3>Business Studies</h3>
            <span>49 Courses</span>
            <Link to="/" className="link-btn"></Link>
          </div>
        </Slider>
      </div>    
    </section>
  );
}

export default Category;
