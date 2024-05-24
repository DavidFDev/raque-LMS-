import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const HeroSection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 9000,
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
                      <h1>Educational Books for those who learn differently</h1>
                      <p>Leaning is fun!</p>

                      <div className="links">

                        <Link to="/register" className="starter-btn ps-0 btn text-white text-start">
                          <span className='text-white text-start'>Get Started Free</span>
                        </Link>
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
                      <p>Inhale, exhale, learn, and do!</p>

                      <div className="links">

                        <Link to="/register" className="starter-btn ps-0 btn text-white text-start">
                          <span className='text-white text-start'>Get Started Free</span>
                        </Link>
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
                      <h1>Extend your knowledge from our online books</h1>
                      <p>Dive into the world of online novels where reading is not only fun but also enriching. Explore a wide variety of genres and stories, enhancing your knowledge and imagination with every page you turn.</p>

                      <div className="links">

                        <Link to="/register" className="starter-btn ps-0 btn text-white text-start">
                          <span className='text-white text-start'>Get Started Free</span>
                        </Link>
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
