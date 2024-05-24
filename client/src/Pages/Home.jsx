import AboutSection from '../Components/About';
import DiscoverCourses from '../Components/DiscoverCourses';
import HeroSection from '../Components/Hero-section';
import MissionArea from '../Components/MissionArea';
import PartnersArea from '../Components/PartnersArea';
import StudentFormArea from '../Components/StudentFormArea';
import TeamArea from '../Components/TeamArea';
import BecomeStudentPartnerArea from '../Components/Transform';
import course1 from '../assets/DiscoverCourses/1.jpg';
import course2 from '../assets/DiscoverCourses/2.jpg';
import course3 from '../assets/DiscoverCourses/3.jpg';
import course4 from '../assets/DiscoverCourses/4.jpg';
import course5 from '../assets/DiscoverCourses/5.jpg';
import course6 from '../assets/DiscoverCourses/6.jpg';
import user1 from '../assets/DiscoverCourses/user1.jpg';
import user2 from '../assets/DiscoverCourses/user2.jpg';
import user3 from '../assets/DiscoverCourses/user3.jpg';
import user4 from '../assets/DiscoverCourses/user4.jpg';
import user5 from '../assets/DiscoverCourses/user5.jpg';
import user6 from '../assets/DiscoverCourses/user6.jpg';

const Home = () => {

  const infos = [
    {
      headingImage: course1,
      tag: "Business",
      user: user1,
      name: "Steven Smith",
      description: "Yctlibrary Professional IT Expert Certificate Course",
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
      <HeroSection />
      <AboutSection/>
      <DiscoverCourses infos={infos}/>
      <MissionArea/>
      <PartnersArea/>
      <TeamArea/>
      <StudentFormArea/>
      <BecomeStudentPartnerArea/>
    </>
  )
}

export default Home