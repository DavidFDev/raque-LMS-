import { Link } from "react-router-dom"
import { BiUserPin } from "react-icons/bi";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const MissionArea = () => {
  return (
    <div className="mission-area">
        <div className="container">
            <div className="mission-area-content">
                <div className="section-title text-left">
                    <span className="sub-title text-deepred">Discover Mission</span>
                    <h2>Why our platform in better</h2>
                </div>

                <OwlCarousel className="owl-three owl-carousel owl-theme mt-4" margin={10} loop={false} autoplay={true} items={1} nav={true} dots={false}>
                    <div className="item item-1">
                        <div>
                            <h3>Quality can be better than quantity in this platform</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                            <Link to="about-style-2.html" className="default-btn">
                                <BiUserPin className="start-icon me-2"/>
                                <span className="label">Learn More</span>
                                <BiUserPin className="end-icon"/>
                            </Link>
                        </div>
                    </div>

                    <div className="item item-2">
                        <div>
                            <h3>A place where you can achieve</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                            <Link to="/" className="default-btn">
                                <BiUserPin className="start-icon me-2"/>
                                <span className="label">Learn More</span>
                                <BiUserPin className="end-icon"/>
                            </Link>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    </div>
  )
}

export default MissionArea