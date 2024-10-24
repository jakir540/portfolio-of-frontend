/* eslint-disable import/order */

// import TimeLine from "@/src/components/modules/home/Timeline";
import Education from "@/src/components/modules/home/Education";
import Banner from "./Banner";
import AboutMe from "@/src/components/modules/home/AboutMe";
import Footer from "@/src/components/UI/Footer";
import ContactUs from "@/src/components/modules/home/ContactMe";
import Skills from "@/src/components/modules/home/Skills";

export default function Home() {
  return (
    <>
      <Banner />

      {/* <TimeLine /> */}
      <AboutMe />
      <Education />
      <Skills />
      <ContactUs />
      <Footer />
    </>
  );
}
