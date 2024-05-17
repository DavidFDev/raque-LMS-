import { BiPlanet } from "react-icons/bi";
import { FaArrowsAltH } from "react-icons/fa";
import aboutImg1 from '../assets/About-img/about-1.jpeg'
import aboutImg2 from '../assets/About-img/about-2.jpeg'



const AboutSection = () => {
  return (
    <section className='about-section'>
        <div className="container">
            <div className="content">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="left-content">
                            <img src={aboutImg1} alt="About Img 1" className="img-fluid left-img rounded"/>
                            <img src={aboutImg2} alt="About Img 2" className="img-fluid right-img rounded"/>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6">
                        <div className="right-content text-center text-lg-start">
                            <div className="top d-flex flex-column gap-2">
                                <span className="sub-title text-deepred">ABOUT US</span>
                                <h1>Learn New Skills to go ahead for Your Career</h1>
                                <h6 className='sub-text'>We can support student forum 24/7 for national and international students.</h6>
                            </div>

                            <div className="bottom">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>

                                <div className="space">
                                    <h5 className="achieve-space">
                                        <BiPlanet className="planet-icon"/>
                                        <span>A place where you can achieve</span>
                                    </h5>

                                    <p>Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency.</p>

                                    <button className="default-btn btn btn-deepred text-white d-flex flex-nowrap gap-2 align-items-center m-auto m-lg-0">
                                        <FaArrowsAltH className="start-icon"/>
                                        <span className="label">
                                            View Courses
                                        </span>
                                        <FaArrowsAltH className="end-icon"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default AboutSection