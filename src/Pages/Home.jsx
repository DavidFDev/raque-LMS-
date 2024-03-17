import AboutSection from '../Components/About'
import BlogArea from '../Components/BlogArea';
import Category from '../Components/Category';
import CountdownArea from '../Components/CountdownArea';
import DiscoverCourses from '../Components/DiscoverCourses';
import FunFact from '../Components/FunFact';
import Header from '../Components/Header'
import HeroSection from '../Components/Hero-section'
import MissionArea from '../Components/MissionArea';
import PartnersArea from '../Components/PartnersArea';
import StudentFormArea from '../Components/StudentFormArea';
import TeamArea from '../Components/TeamArea';

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

  return (
    <>
      <HeroSection options={options} />
      <AboutSection/>
      <Category owlCarouselTwo={owlCarouselTwo} />
      <FunFact/>
      <DiscoverCourses/>
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