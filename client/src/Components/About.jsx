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
                                <h1>Discover Unlimited Knowledge with Free Online Books</h1>
                                <h6 className='sub-text'>We can support student forum 24/7 for national and international students.</h6>
                            </div>

                            <div className="bottom">
                                <p>Expand your knowledge and enhance your career prospects with our comprehensive courses. Our dedicated team is available around the clock to assist with any questions or concerns you may have. Join our community of learners and take the next step towards achieving your professional goals. Let us help you reach your full potential and succeed in your chosen field.</p>

                                <div className="space">
                                    <h5 className="achieve-space">
                                        <BiPlanet className="planet-icon"/>
                                        <span>A place where you can achieve</span>
                                    </h5>

                                    <p>Education encompasses both the teaching and learning of knowledge, proper conduct, and technical competency.</p>

                                    <button className="default-btn">
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