/* eslint-disable import/order */

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

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Education />
      <TimeLine />
      <Skills />
      <AllProjects />
      <Blogs />
      <ContactUs />
      <Footer />
    </>
  );
}
