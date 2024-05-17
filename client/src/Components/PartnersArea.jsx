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
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 758,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="partner-area bg-deepred ptb-100">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="text-capitalize text-white">our company &amp; partners</h1>
        </div>

        <Slider {...settings} className="mt-4">
          <div className="item item-1">
            <div className="single-partner-item">
              <Link to="/">
                <img src={partner1} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="item item-2">
            <div className="single-partner-item">
              <Link to="/">
                <img src={partner2} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="item item-3">
            <div className="single-partner-item">
              <Link to="/">
                <img src={partner3} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="item item-4">
            <div className="single-partner-item">
              <Link to="/">
                <img src={partner4} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="item item-5">
            <div className="single-partner-item">
              <Link to="/">
                <img src={partner5} alt="Partner Image" className="img-fluid" />
              </Link>
            </div>
          </div>

          <div className="item item-6">
            <div className="single-partner-item">
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
