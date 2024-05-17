import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowsAltH } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true
  };

  return (
    <section className='hero-section'>
      <Slider {...settings}>
        {/* SLIDE[0] */}
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
                      <p>Raque students by introducing collaboratives outside R, internships and search experience abroad</p>

                      <div className="links">
                        <Link to="/courses-category-style-1" className="btn btn-deepred text-white default-btn d-flex gap-2 flex-nowrap align-items-center">
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

        {/* SLIDE[1] */}
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
                      <p>Raque students by introducing collaboratives outside R, internships and search experience abroad</p>

                      <div className="links">
                        <Link to="/courses-category-style-1" className="btn btn-deepred text-white default-btn d-flex gap-2 flex-nowrap align-items-center">
                          <FaArrowsAltH className="start-icon"/>
                          <span className='label'>View Courses</span>
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

        {/* SLIDE[2] */}
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
                      <p>Raque students by introducing collaboratives outside R, internships and search experience abroad</p>

                      <div className="links">
                        <Link to="/courses-category-style-1" className="btn btn-deepred text-white default-btn d-flex gap-2 flex-nowrap align-items-center">
                          <FaArrowsAltH className="start-icon"/>
                          <span className='label'>View Courses</span>
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
      </Slider>
    </section>
  );
};

export default HeroSection;