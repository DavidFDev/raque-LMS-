import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { BiUserPin } from "react-icons/bi";
import Slider from "react-slick";

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
                <p>
                  Our library management system offers a vast collection of free
                  books available to read online, making it accessible to all
                  university students. Enjoy unlimited access to a diverse range
                  of academic and leisure reading materials without any cost.
                </p>
                <p>
                  Our platform is user-friendly, with a seamless interface that
                  allows you to easily find and read books from any device.
                  Whether you're conducting research or looking for something to
                  read in your free time, our online library has you covered.
                </p>
                <Link to="" className="default-btn">
                  <BiUserPin className="start-icon me-2" />
                  <span className="label">Learn More</span>
                  <BiUserPin className="end-icon" />
                </Link>
              </div>
            </div>

            <div className="item item-2">
              <div>
                <h3>A place where you can achieve</h3>
                <p>
                  Explore a vast collection of free books available for you to
                  read online. Enhance your knowledge and support your studies
                  with our comprehensive digital library.
                </p>
                <p>
                  Our platform offers an easy-to-navigate interface, providing
                  students with unlimited access to educational resources at no
                  cost. Start your reading journey today and discover a wealth
                  of information right at your fingertips.
                </p>
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
