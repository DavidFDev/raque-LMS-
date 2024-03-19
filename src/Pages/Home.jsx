import AboutSection from '../Components/About'
import BlogArea from '../Components/BlogArea';
import Category from '../Components/Category';
import CountdownArea from '../Components/CountdownArea';
import DiscoverCourses from '../Components/DiscoverCourses';
import FunFact from '../Components/FunFact';
import HeroSection from '../Components/Hero-section'
import MissionArea from '../Components/MissionArea';
import PartnersArea from '../Components/PartnersArea';
import StudentFormArea from '../Components/StudentFormArea';
import TeamArea from '../Components/TeamArea';
import course1 from '../assets/DiscoverCourses/1.jpg'
import course2 from '../assets/DiscoverCourses/2.jpg'
import course3 from '../assets/DiscoverCourses/3.jpg'
import course4 from '../assets/DiscoverCourses/4.jpg'
import course5 from '../assets/DiscoverCourses/5.jpg'
import course6 from '../assets/DiscoverCourses/6.jpg'
import user1 from '../assets/DiscoverCourses/user1.jpg'
import user2 from '../assets/DiscoverCourses/user2.jpg'
import user3 from '../assets/DiscoverCourses/user3.jpg'
import user4 from '../assets/DiscoverCourses/user4.jpg'
import user5 from '../assets/DiscoverCourses/user5.jpg'
import user6 from '../assets/DiscoverCourses/user6.jpg'

const Home = () => {
  const options = {
    loop: true,
    items: 1,
    nav:true,
    dots: true,
    autoplay:true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
    },

  };

  const owlCarouselTwo = {
    loop:true,
    margin: 20,
    dots: true,
    nav:true,
    center: true,
    items:1,
    responsive:{
      320:{
      items: 1
      },
      576:{
      items : 1
      },
      600:{
      items:1
      },
      // breakpoint from 768 up
      758:{
      items:2
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
    },
    smartSpeed: 1000,
    autoplay:true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  }

  const infos = [
    {
      headingImage: course1,
      tag: "Business",
      user: user1,
      name: "Steven Smith",
      description: "Raque Professional IT Expert Certificate Course",
      rating: `${Number(5)}.0 (1 ratinng)`,
      students: Number(10),
      lessons: Number(6),
      price: "Free"
    },
    
    {
      headingImage: course2,
      tag: "Design",
      user: user2,
      name: "Sarah Taylor ",
      description: "Certified Graphic Design with Free Project Course",
      rating: `${Number(4.5)} (2 ratinng)`,
      students: Number(10),
      lessons: Number(10),
      price: Number(250)
    },

    {
      headingImage: course3,
      tag: "Development",
      user: user3,
      name: "James Anderson",
      description: "Photography Crash Course for Photographer",
      rating: `${Number(4)}.0 (1 ratinng)`,
      students: Number(5),
      lessons: Number(5),
      price: Number(150)
    },

    {
      headingImage: course4,
      tag: "Language",
      user: user4,
      name: "Liam King",
      description: "Web Design for Developing Technology with Joy",
      rating: `${Number(5)}.0 (1 ratinng)`,
      students: Number(10),
      lessons: Number(6),
      price: Number(195)
    },

    {
      headingImage: course5,
      tag: "Management",
      user: user5,
      name: "Lina D'Souza",
      description: "Information About UI/UX Design Degree",
      rating: `${Number(5)}.0 (1 ratinng)`,
      students: Number(10),
      lessons: Number(6),
      price: Number(178)
    },

    {
      headingImage: course6,
      tag: "Photography",
      user: user6,
      name: "David Warner",
      description: "Photography Photo modify and Beautiful",
      rating: `${Number(5)}.0 (1 ratinng)`,
      students: Number(10),
      lessons: Number(6),
      price: Number(500)
    },
  ]


  return (
    <>
      <HeroSection options={options} />
      <AboutSection/>
      <Category owlCarouselTwo={owlCarouselTwo} />
      <FunFact/>
      <DiscoverCourses infos={infos}/>
      <MissionArea/>
      <PartnersArea/>
      <TeamArea/>
      <StudentFormArea/>
      <BlogArea/>
      <CountdownArea/>
    </>
  )
}

export default Home