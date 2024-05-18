import { Link } from "react-router-dom"
import member1 from '../assets/Team/1.jpg'
import member2 from '../assets/Team/2.jpg'
import member3 from '../assets/Team/3.jpg'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";



const TeamArea = () => {

    const teamMembers = [
        {
            img: member1,
            name: "David Idornigie",
            profession: "Frontend Developer"
        },

        {
            img: member2,
            name: "Clarice Daniels",
            profession: "Project Manager"
        },
        
        {
            img: member3,
            name: "Babatunde James",
            profession: "Digital Marketer"
        }
    ]

  return (
    <section className="team-area ptb-100">

        <div className="container">
            <div className="section-title d-flex flex-column align-items-center text-center">
                <span className="sub-title">Make Connections</span>
                <h2>Team of Instructors</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea.</p>
            </div>

            <div className="row justify-content-center">
                {teamMembers.map((member, index) => 
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-3" key={index}>
                        <div className="single-instructor-member mb-30">
                            <div className="member-image">
                                <img src={member.img} alt="images" className="img-fluid"/>
                            </div>

                            <div className="member-content text-center d-flex flex-column gap-1">
                                <h3 className="mb-0">
                                    <a href="">{member.name}</a>
                                </h3>
                                <span className="text-deepred">{member.profession}</span>

                                <ul className="social list-unstyled d-flex flex-nowrap gap-2 align-items-center justify-content-center">
                                    <li>
                                        <a href="www.facebook.com" className="facebook" target="_blank">
                                            <FaFacebookF/>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="www.twitter.com" className="twitter" target="_blank">
                                            <FaTwitter/>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="www.instagram.com" className="instagram" target="_blank">
                                            <FaInstagram/>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="www.linkedin.com" className="linkedin" target="_blank">
                                            <FaLinkedinIn/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="team-btn-box text-center">
                        <Link to="/" className="default-btn">
                            <TbUsersGroup className="start-icon" />
                            <span className="label">Meet All Instructor</span>
                            <TbUsersGroup className="end-icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* <ParticlesComponent id="particles"/> */}

    </section>
  )
}

export default TeamArea