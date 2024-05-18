import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";
import { BiUserPin } from "react-icons/bi";
import Slider from 'react-slick';

const MissionArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="mission-area">
      <div className="container">
        <div className="mission-area-content">
          <div className="section-title text-left">
            <span className="sub-title text-deepred">Discover Mission</span>
            <h2>Why our platform is better</h2>
          </div>

          <Slider className="mt-4" {...settings}>
            <div className="item item-1">
              <div>
                <h3>Quality can be better than quantity in this platform</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                <Link to="about-style-2.html" className="default-btn">
                  <BiUserPin className="start-icon me-2" />
                  <span className="label">Learn More</span>
                  <BiUserPin className="end-icon" />
                </Link>
              </div>
            </div>

            <div className="item item-2">
              <div>
                <h3>A place where you can achieve</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                <Link to="/" className="default-btn">
                  <BiUserPin className="start-icon me-2" />
                  <span className="label">Learn More</span>
                  <BiUserPin className="end-icon" />
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MissionArea;
