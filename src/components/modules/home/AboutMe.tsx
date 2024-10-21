/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-sort-props */
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="py-16 px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/assets/jakirphoto.PNG"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full shadow-xl w-96 h-96 object-cover border-4 border-pink-500 transform hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* About Me Content */}
        <div className="w-full md:w-2/3 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-pink-500">About Me</h2>
          <p className="mt-6 text-gray-300 leading-relaxed">
            I'm{" "}
            <span className="text-white font-semibold">Md Jakir Hossain</span>,
            a passionate Web Developer with experience in building modern,
            responsive websites and applications. I have a deep understanding of
            web technologies like
            <span className="text-pink-400"> React</span>,{" "}
            <span className="text-pink-400">Next.js</span>, and
            <span className="text-pink-400"> Tailwind CSS</span>. I love turning
            complex problems into simple, beautiful, and intuitive solutions. My
            goal is to always build products that provide pixel-perfect,
            performant experiences.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            When I’m not coding, I enjoy exploring new technologies, reading
            about advancements in the tech industry, and contributing to
            open-source projects. I'm always learning and ready to take on new
            challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
