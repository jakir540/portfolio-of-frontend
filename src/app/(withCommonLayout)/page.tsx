// import TimeLine from "@/src/components/modules/home/Timeline";
import Education from "@/src/components/modules/home/Education";
import Banner from "@/src/components/modules/home/Banner";
import AboutMe from "@/src/components/modules/home/AboutMe";
import Footer from "@/src/components/UI/Footer";
import ContactUs from "@/src/components/modules/home/ContactMe";
import Skills from "@/src/components/modules/home/Skills";
import AllProjects from "@/src/components/modules/home/AllProjects";
import Blogs from "@/src/components/modules/home/Blogs";
import TimeLine from "@/src/components/modules/home/Timeline";
import {
  FetchAllBlogs,
  FetchAllProjects,
} from "@/src/services/projectServices";

const Home = async () => {
  const projects = await FetchAllProjects();
  const blogs = await FetchAllBlogs();

  return (
    <>
      <Banner />
      <AboutMe />
      <Education />
      <TimeLine />
      <Skills />
      <AllProjects projects={projects} />
      <Blogs blogs={blogs} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
