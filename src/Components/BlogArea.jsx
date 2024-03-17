import { BiBookReader, BiUserPin } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import blogPost1 from '../assets/Blog/1.jpg'
import blogPost2 from '../assets/Blog/2.jpg'
import blogPost3 from '../assets/Blog/3.jpg'
import blogPost4 from '../assets/Blog/4.jpg'
import blogPost5 from '../assets/Blog/5.jpg'
import blogPost6 from '../assets/Blog/6.jpg'
import user1 from '../assets/DiscoverCourses/user1.jpg'
import user2 from '../assets/DiscoverCourses/user2.jpg'
import user3 from '../assets/DiscoverCourses/user3.jpg'
import user4 from '../assets/DiscoverCourses/user4.jpg'
import user5 from '../assets/DiscoverCourses/user5.jpg'
import user6 from '../assets/DiscoverCourses/user6.jpg'
import { useContext } from "react";

const BlogArea = () => {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    
    // GET FULL DATE
    let monthName = month[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();

    const fullDate = `${monthName} ${day}, ${year}`;

    const blogPosts = [
        {
            img: blogPost1,
            tag: "Learning",
            tagClassName: "text-altgreen",
            userImg: user1,
            userName: "Steven Smith",
            postDate: fullDate,
            review: "World largest elephant toothpaste experiment in 2023",
        },

        {
            img: blogPost2,
            tag: "Education",
            tagClassName: "text-altblue",
            userImg: user2,
            userName: "Lina D'Souza",
            postDate: fullDate,
            review: "Most Popular Education Posts Of The Week 20-26 Aug",
        },

        {
            img: blogPost3,
            tag: "Learning",
            tagClassName: "text-warning",
            userImg: user3,
            userName: "David Malan",
            postDate: fullDate,
            review: "How to enhance education quality management system",
        },

        {
            img: blogPost4,
            tag: "Management",
            tagClassName: "text-deepred",
            userImg: user4,
            userName: "David Warner",
            postDate: fullDate,
            review: "Global education: Ideas for the way move forward",
        },

        {
            img: blogPost5,
            tag: "Ideas",
            tagClassName: "text-altgreen",
            userImg: user5,
            userName: "Olivar Waise",
            postDate: fullDate,
            review: "New report reimagines the broader education workforce",
        },

        {
            img: blogPost6,
            tag: "Workforce",
            tagClassName: "text-warning",
            userImg: user6,
            userName: "Clarice James",
            postDate: fullDate,
            review: "New report reimagines the broader education workforce",
        },
    ]

  return (
    <div className="blog-area ptb-100">
        <div className="container">
            <div className="blog-content d-flex align-items-center justify-content-lg-between justify-content-center">
                <div className="section-title text-center text-lg-start">
                    <span className="sub-title text-uppercase">
                        explore news
                    </span>

                    <h2>Our Latest Insights</h2>

                </div>

                <Link to={"courses-category-style-1.html"} className="btn btn-deepred text-white default-btn d-none d-lg-flex gap-2 d-flex flex-nowrap align-items-center">
                    <BiBookReader className="start-icon"/>
                    <span className="label">Read All</span>
                    <BiBookReader className="end-icon"/>
                </Link>
            </div>

            <OwlCarousel className="blog-slides owl-carousel owl-theme mt-5" margin={30} dots={false} 
                responsive={ 
                    {
                        320:{
                            items: 1
                        },
                        576:{
                            items : 2,
                        },
                        600:{
                            items:2
                        },
                        // breakpoint from 768 up
                        758:{
                            items:2,
                            margin: 30
                        },
                        768 : {
                            items: 2
                        },
                        920:{
                            items:2
                        },
                        992:{
                            items:3
                        },
                    }
                }>

                {blogPosts.map((singlePost, index) => 

                    <div className="item" key={index}>
                        <div className="single-blog-post mb-30">
                            <div className="post-image">
                                <Link to="single-blog.html" className="d-block">
                                    <img src={singlePost.img} alt="image" className="img-fluid"/>
                                </Link>

                                <div className="tag">
                                    <Link to="/" className={singlePost.tagClassName}>{singlePost.tag}</Link>
                                </div>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta mb-2">
                                    <li className="post-author">
                                        <img src={singlePost.userImg} className="d-inline-block rounded-circle me-2 img-fluid" alt="image"/>
                                        By:&nbsp; <Link to="/" className="d-inline-block text-altgreen">{singlePost.userName}</Link>
                                    </li>

                                    <li>
                                        <Link to="/" className="text-dark">{singlePost.postDate}</Link>
                                    </li>
                                </ul>

                                <h3>
                                    <Link to="single-blog.html" className="d-inline-block text-dark">{singlePost.review}</Link>
                                </h3>

                                <Link to="single-blog.html" className="read-more-btn text-dark">
                                    Read More <FaArrowRightLong/>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </OwlCarousel>
        </div>
    </div>
  )
}

export default BlogArea