/* eslint-disable import/order */

// import TimeLine from "@/src/components/modules/home/Timeline";
import Education from "@/src/components/modules/home/Education";
import Banner from "./Banner";
import AboutMe from "@/src/components/modules/home/AboutMe";

export default function Home() {
  return (
    <>
      <Banner />

      {/* <TimeLine /> */}
      <AboutMe />
      <Education />
    </>
  );
}
