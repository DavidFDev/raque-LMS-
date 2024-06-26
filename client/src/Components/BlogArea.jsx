import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from "react";
import { BiBookReader } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import blogPost1 from "../assets/Blog/1.jpg";
import blogPost2 from "../assets/Blog/2.jpg";
import blogPost3 from "../assets/Blog/3.jpg";
import blogPost4 from "../assets/Blog/4.jpg";
import blogPost5 from "../assets/Blog/5.jpg";
import blogPost6 from "../assets/Blog/6.jpg";
import user1 from "../assets/DiscoverCourses/user1.jpg";
import user2 from "../assets/DiscoverCourses/user2.jpg";
import user3 from "../assets/DiscoverCourses/user3.jpg";
import user4 from "../assets/DiscoverCourses/user4.jpg";
import user5 from "../assets/DiscoverCourses/user5.jpg";
import user6 from "../assets/DiscoverCourses/user6.jpg";

const BlogArea = () => {
  const [date, setDate] = useState();

  useEffect(() => {
    const month = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();
    let monthName = month[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    const simplifiedDate = `${monthName} ${day}, ${year}`;
    setDate(simplifiedDate);
  }, []);

  const blogPosts = [
    { img: blogPost1, tag: "Learning", tagClassName: "text-altgreen", userImg: user1, userName: "Steven Smith", postDate: date, review: "World largest elephant toothpaste experiment in 2023" },
    { img: blogPost2, tag: "Education", tagClassName: "text-altblue", userImg: user2, userName: "Lina D'Souza", postDate: date, review: "Most Popular Education Posts Of The Week 20-26 Aug" },
    { img: blogPost3, tag: "Learning", tagClassName: "text-warning", userImg: user3, userName: "David Malan", postDate: date, review: "How to enhance education quality management system" },
    { img: blogPost4, tag: "Management", tagClassName: "text-altlemon", userImg: user4, userName: "David Warner", postDate: date, review: "Global education: Ideas for the way move forward" },
    { img: blogPost5, tag: "Ideas", tagClassName: "text-altgreen", userImg: user5, userName: "Olivar Waise", postDate: date, review: "New report reimagines the broader education workforce" },
    { img: blogPost6, tag: "Workforce", tagClassName: "text-warning", userImg: user6, userName: "Clarice James", postDate: date, review: "New report reimagines the broader education workforce" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 320, settings: { slidesToShow: 1, arrows: false } }
    ]
  };

  return (
    <section className="blog-area ptb-100">
      <div className="container">
        <div className="blog-content d-flex align-items-center justify-content-lg-between justify-content-center">
          <div className="section-title text-center text-lg-start">
            <span className="sub-title text-uppercase">explore news</span>
            <h2>Our Latest Insights</h2>
          </div>
          <Link to={"courses-category-style-1.html"} className="btn-altlemon default-btn d-none d-lg-inline-block ">
            <BiBookReader className="start-icon" />
            <span className="label">Read All</span>
            <BiBookReader className="end-icon" />
          </Link>
        </div>

        <div className="slider-container">
          <Slider className="blog-slides mt-5" {...settings}>
            {blogPosts.map((singlePost, index) => (
              <div className="item slider-item" key={index}>
                <div className="single-blog-post mb-30">
                  <div className="post-image">
                    <Link to="single-blog.html" className="d-block">
                      <img src={singlePost.img} alt="image" className="img-fluid" />
                    </Link>
                    <div className="tag">
                      <Link to="/" className={singlePost.tagClassName}>{singlePost.tag}</Link>
                    </div>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta mb-2">
                      <li className="post-author">
                        <img src={singlePost.userImg} className="d-inline-block rounded-circle me-2 img-fluid" alt="image" />
                        By:&nbsp;<Link to="/" className="d-inline-block text-altgreen">{singlePost.userName}</Link>
                      </li>
                      <li><Link to="/" className="text-dark">{singlePost.postDate}</Link></li>
                    </ul>
                    <h3>
                      <Link to="single-blog.html" className="d-inline-block text-dark">{singlePost.review}</Link>
                    </h3>
                    <Link to="/" className="read-more-btn text-dark">
                      <span>Read More &nbsp;<FaArrowRightLong /></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
