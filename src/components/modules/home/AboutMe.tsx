/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
/* AboutMe.js */

import Image from "next/image";
import styles from "./AboutMe.module.css"; // Assuming the CSS file exists

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-gradient-to-b from-[#0d1224] via-gray-900 to-[#0d1224] text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start relative">
          <div className={styles.imageContainer}>
            <div className={styles.spinBorder}></div>
            <Image
              src="/assets/jakirphoto.PNG"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full shadow-lg "
            />
          </div>
        </div>

        {/* About Me Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight border-b-4 border-pink-400 inline-block pb-2">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed tracking-wide mt-6">
            I'm{" "}
            <span className="text-pink-400 font-bold">Md Jakir Hossain</span>, a
            dedicated Web Developer skilled in creating cutting-edge, responsive
            websites and applications. My expertise spans technologies like{" "}
            <span className="text-pink-400 font-medium">TypeScript</span>,{" "}
            <span className="text-pink-400 font-medium">React</span>,{" "}
            <span className="text-pink-400 font-medium">Redux</span>,{" "}
            <span className="text-pink-400 font-medium">Next.js</span>,{" "}
            <span className="text-pink-400 font-medium">Node.js</span>, and{" "}
            <span className="text-pink-400 font-medium">Mongoose</span>. I take
            pride in building solutions that are intuitive, scalable, and
            performant.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed tracking-wide mt-4">
            My passion lies in tackling challenges and turning complex
            requirements into seamless, user-friendly designs. Whether it's
            crafting stunning interfaces or writing efficient backend logic, I
            aim to deliver experiences that truly matter.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed tracking-wide mt-4">
            Outside of coding, I enjoy exploring the ever-evolving tech world,
            contributing to open-source projects, and staying ahead in the
            industry by embracing continuous learning. Let's create something
            amazing together!
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="py-3 px-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-pink-600/50 transform hover:scale-105 transition duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
