import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import AboutSection from "../Components/About";
import AboutInnerArea from "../Components/Innovation";
import MissionArea from "../Components/MissionArea";
import StoryArea from "../Components/OurStory";
import ValuesArea from "../Components/OurValue";
import TeamArea from "../Components/TeamArea";
import PartnersArea from "../Components/PartnersArea";

const Aboutus = () => {
  return (
    <>
      <section id="page-id">
        <div className="pricing-banner page-title-area">
          <div className="container">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="title-content">
                  <ul>
                    <li>
                      <Link to="/" className="text-decoration-none text-dark">
                        Home
                      </Link>
                    </li>
                    <li>
                      <span>
                        {" "}
                        <IoChevronForward />{" "}
                      </span>
                    </li>
                    <li>
                      <span className="page-name">About</span>
                    </li>
                  </ul>
                  <h2 className="page-name">About us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection/>

      <AboutInnerArea/>

      <MissionArea/>

      <StoryArea/>

      <PartnersArea/>

      <ValuesArea/>

      <TeamArea className="pt-0" />


    </>
  );
};

export default Aboutus;
