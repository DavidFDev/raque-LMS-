import React from 'react';
import { FaPlusCircle } from 'react-icons/fa'; 

const BecomeStudentPartnerArea = () => {
    return (
        <section className="become-student-partner-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="become-student-partner-content bg-color">
                            <h2>Become a Student</h2>
                            <p>Join thousands of students in learning new skills, advancing your career, and enriching your life.</p>
                            <a href="login.html" className="default-btn">
                                <FaPlusCircle className="icon-arrow before" />
                                <span className="label">Apply Now</span>
                                <FaPlusCircle className="icon-arrow after" />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="become-student-partner-image bg-image1 jarallax" data-jarallax='{"speed": 0.3}'>
                            <img src="assets/img/become-instructor.jpg" alt="Become a Student" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="become-student-partner-image bg-image2 jarallax" data-jarallax='{"speed": 0.3}'>
                            <img src="assets/img/become-partner.jpg" alt="Become a Partner" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="become-student-partner-content">
                            <h2>Become a Partner</h2>
                            <p>Choose from hundreds of free courses, or get a degree or certificate at a breakthrough price. Learn at your own pace.</p>
                            <Link to="/login" className="default-btn">
                                <FaPlusCircle className="icon-arrow before" />
                                <span className="label">Contact Us</span>
                                <FaPlusCircle className="icon-arrow after" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeStudentPartnerArea;
