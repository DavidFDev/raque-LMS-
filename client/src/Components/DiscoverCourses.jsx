import { useState } from "react";
import { FaRegEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const DiscoverCourses = ({ infos }) => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { name: "All", count: 6, filter: "all" },
    { name: "Business", count: 2, filter: "Business" },
    { name: "Design", count: 5, filter: "Design" },
    { name: "Development", count: 4, filter: "Development" },
    { name: "Language", count: 2, filter: "Language" },
    { name: "Management", count: 3, filter: "Management" },
    { name: "Photography", count: 4, filter: "Photography" },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredInfos = filter === "all" ? infos : infos.filter(info => info.tag === filter);

  return (
    <section className="discover-section">
      <div className="container">
        <div className="discover-info">
          <div className="section-title text-center text-lg-start">
            <span className="sub-title text-uppercase text-altlemon">
              discover courses
            </span>
            <h1 className="title text-capitalize text-dark">
              our popular online course
            </h1>
          </div>

          <Link to={"courses-category-style-1.html"} className="btn-altlemon default-btn d-none d-lg-inline-block">
            <FaRegEye className="start-icon"/>
            <span className="label">View All</span>
            <FaRegEye className="end-icon"/>
          </Link>
        </div>

        <div className="sorting-menu d-flex flex-wrap gap-1 mt-0 pt-0">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter ${filter === category.filter ? "mixitup-control-active" : ""}`}
              onClick={() => handleFilterChange(category.filter)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>



        <div className="shorting" id="MixItUp0F3ADE">
          <div className="row">
            {infos.map((info, index) => (
              <div className={`col-lg-4 col-md-6 mix ${filter !== "all" && info.tag !== filter ? 'hidden' : ''}`} key={index}>
                <div className="single-courses-box mb-30">
                  <div className="courses-image">
                    <Link to="#" className="d-block img-fluid">
                      <img src={info.headingImage} alt="image" className="img-fluid"/>
                    </Link>
                    <div className="courses-tag">
                      <Link to="/" className="img-fluid d-block">{info.tag}</Link>
                    </div>
                  </div>

                  <div className="courses-content">
                    <div className="course-author d-flex align-items-center" style={{ marginBottom: "13px" }}>
                      <img src={info.user} className="rounded-circle mr-2 img-fluid" alt="image"/>
                      <span>{info.name}</span>
                    </div>

                    <h3>
                      <Link to="#" className="d-inline-block">{info.description}</Link>
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
                        {info.price !== "Free" && "$"}{info.price}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCourses;
