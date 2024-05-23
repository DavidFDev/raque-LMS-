import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import partner1 from '../assets/Partners/1.png';
import partner2 from '../assets/Partners/2.png';
import partner3 from '../assets/Partners/3.png';
import partner4 from '../assets/Partners/4.png';
import partner5 from '../assets/Partners/5.png';
import partner6 from '../assets/Partners/6.png';

const PartnersArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 876,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false
        },
      },
    ],
  };

  return (
    <section className="partner-area bg-altlemon ptb-100">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="text-capitalize text-white">our company &amp; partners</h1>
        </div>

        <Slider {...settings} className="mt-4">
          <div className="item">
            <div className="single-partner-item d-flex justify-content-center">
              <Link to="/">
                <img src={partner1} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="item">
            <div className="single-partner-item d-flex justify-content-center">
              <Link to="/">
                <img src={partner2} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="item">
            <div className="single-partner-item d-flex justify-content-center">
              <Link to="/">
                <img src={partner3} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="item">
            <div className="single-partner-item d-flex justify-content-center">
              <Link to="/">
                <img src={partner4} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="item">
            <div className="single-partner-item d-flex justify-content-center">
              <Link to="/">
                <img src={partner5} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="item">
            <div className="single-partner-item d-flex justify-content-center">
              <Link to="/">
                <img src={partner6} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default PartnersArea;
