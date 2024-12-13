import Banner from "@/src/components/modules/home/Banner";
import AboutMe from "@/src/components/modules/home/AboutMe";
import Education from "@/src/components/modules/home/Education";
import TimeLine from "@/src/components/modules/home/Timeline";
import Skills from "@/src/components/modules/home/Skills";
import AllProjects from "@/src/components/modules/home/AllProjects";
import Blogs from "@/src/components/modules/home/Blogs";
import ContactUs from "@/src/components/modules/home/ContactMe";
import Footer from "@/src/components/UI/Footer";
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
