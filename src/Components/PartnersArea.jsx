import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import partner1 from '../assets/Partners/1.png'
import partner2 from '../assets/Partners/2.png'
import partner3 from '../assets/Partners/3.png'
import partner4 from '../assets/Partners/4.png'
import partner5 from '../assets/Partners/5.png'
import partner6 from '../assets/Partners/6.png'

const PartnersArea = () => {
  return (
    <section className="partner-area bg-deepred ptb-100">
        <div className="container">
            <div className="section-title text-center">
                <h1 className="text-capitalize text-white">our company &amp; partners</h1>
            </div>

            <OwlCarousel className='owl-three owl-theme owl-carousel' margin={10} loop={true} autoplay={true} items={2} nav={false} dots={false} 
                responsive={ 
                    {
                        320:{
                            items: 1
                        },
                        576:{
                            items : 2,
                        },
                        600:{
                            items:2
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
                            items:4
                        },
                    }
                }>

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
                

            </OwlCarousel>
        </div>
    </section>
  )
}

export default PartnersArea