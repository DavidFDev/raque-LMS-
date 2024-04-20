import { FaRegEye, FaCode, FaStar } from "react-icons/fa";
import { IoLayersOutline, IoCameraOutline } from "react-icons/io5";
import { LiaFlagCheckeredSolid } from "react-icons/lia";
import { BiHealth } from "react-icons/bi";
import { LuLineChart } from "react-icons/lu";
import { Link } from "react-router-dom";



const DiscoverCourses = ({ infos }) => {

  return (
    <div className="discover-section">
        <div className="container">
          <div className="discover-info">
            <div className="section-title text-center text-lg-start">
              <span className="sub-title text-uppercase text-deepred">
                discover courses
              </span>
                
              {/* CATEGORY TITLE */}
              <h1 className="title text-capitalize text-dark">
                our popular online course
              </h1>
            </div>

            <Link to={"courses-category-style-1.html"} className="btn-deepred default-btn d-none d-lg-inline-block">
              <FaRegEye className="start-icon"/>
              <span className="label">View All</span>
              <FaRegEye className="end-icon"/>
            </Link>
          </div>

          <div className="sorting-menu d-flex flex-wrap gap-1 mt-0 pt-0">
            <button className="filter mixitup-control-active" data-filter="all">All (06)</button>
            <button className="filter" data-filter=".business">Business (02)</button>
            <button className="filter" data-filter=".design">Design (05)</button>
            <button className="filter" data-filter=".development">Development (04)</button>
            <button className="filter" data-filter=".language">Language (02)</button>
            <button className="filter" data-filter=".management">Management (03)</button>
            <button className="filter" data-filter=".photography">Photography (04)</button>
          </div>

          <div className="shorting" id="MixItUp0F3ADE">
            <div className="row">
              {infos.map((info, index) => 
                <div className="col-lg-4 col-md-6 mix business design language" key={index}>
                  <div className="single-courses-box mb-30">
                    <div className="courses-image">
                      <a href="single-courses.html" className="d-block img-fluid">
                        <img src={info.headingImage} alt="image" className="img-fluid"/>
                      </a>

                      <div className="courses-tag">
                        <a href="#" className="img-fluid d-block">{info.tag}</a>
                      </div>
                    </div>

                    <div className="courses-content">
                      <div className="course-author d-flex align-items-center" style={{ marginBottom: "13px" }}>
                        <img src={info.user} className="rounded-circle mr-2 img-fluid" alt="image"/>
                        <span>{info.name}</span>
                      </div>

                      <h3>
                        <a href="single-courses.html" className="d-inline-block">{info.description}</a>
                      </h3>

                      <div className="courses-rating d-flex align-items-center gap-1">
                        <div className="review-stars-rated">
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                          <FaStar/>
                        </div>

                        <div className="rating-total">
                          {info.rating}
                        </div>
                      </div>
                    </div>

                    <div className="courses-box-footer">
                      <ul>
                        <li className="students-number">
                          <i className="bx bx-user"></i> {info.students}&nbsp;students
                        </li>

                        <li className="courses-lesson">
                          <i className="bx bx-book-open"></i> {info.lessons} lessons
                        </li>

                        <li className="courses-price">
                          {/* If the price isn't equal to "Free" display DollarSign($) */}
                          {info.price !== "Free" && "$"}{info.price}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>    
    </div>
  )
}

export default DiscoverCourses