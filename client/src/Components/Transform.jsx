import { FaPlusCircle } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import studentImg from "../assets/About-img/student1.jpg"
import studentImg1 from "../assets/About-img/student2.jpg"
import { useContext } from 'react';
import { useAuthContext } from '../Context/AuthContext';

const BecomeStudentPartnerArea = () => {

    const { isLoggedIn } = useAuthContext();

    return (
        <section className="become-student-partner-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 p-0 d-md-none">
                        <div className="become-student-partner-image bg-image1 jarallax" data-jarallax='{"speed": 0.3}'>
                            <img src={studentImg} alt="Become a Student" className='img-fluid'/>
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-6 p-0">
                        <div className="become-student-partner-content bg-color h-100 text-center text-md-start">
                            <h2>Become a Student</h2>
                            <p>Join thousands of students in learning new skills, advancing your career, and enriching your life.</p>
                            <Link to="/register" className="default-btn">
                                <FaPlusCircle className="start-icon before" />
                                <span className="label">Apply Now</span>
                                <FaPlusCircle className="end-icon after" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 p-0 d-none d-md-inline-block">
                        <div className="become-student-partner-image bg-image1 jarallax" data-jarallax='{"speed": 0.3}'>
                            <img src={studentImg} alt="Become a Student" className='img-fluid'/>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 p-0">
                        <div className="become-student-partner-image bg-image2 jarallax" data-jarallax='{"speed": 0.3}'>
                            <img src={studentImg1} alt="Become a Partner" className='img-fluid'/>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="become-student-partner-content text-center text-md-start">
                            <h2 className='text-dark'>Become a Partner</h2>
                            <p>Choose from hundreds of free courses, or get a degree or certificate at a breakthrough price. Learn at your own pace.</p>
                            <Link to={isLoggedIn ? "/contact" : "/login"} className="default-btn">
                                <FaPlusCircle className="start-icon before" />
                                <span className="label">Contact Us</span>
                                <FaPlusCircle className="end-icon after" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeStudentPartnerArea;
