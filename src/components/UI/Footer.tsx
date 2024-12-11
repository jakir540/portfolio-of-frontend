import Link from "next/link";
import {
  FaTwitterSquare,
  FaGoogle,
  FaFacebook,
  FaLinkedinIn,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-14 shadow-lg">
      <div className="container mx-auto flex flex-col items-center px-6">
        {/* Title */}
        <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600">
          MERN Stack Developer
        </h3>

        {/* Developer Info */}
        <p className="mt-6 max-w-2xl text-center text-gray-400 leading-relaxed text-lg">
          I’m Md Jakir Hossain, a passionate Web Developer skilled in
          JavaScript, Typescript, React, Nextjs and Node.js. I specialize in
          creating responsive web applications with seamless UI/UX design,
          secure backend systems, and scalable architectures.
        </p>

        {/* Social Media Icons */}

        <div className="flex justify-center lg:justify-start gap-6 mt-6">
          {/* GitHub */}
          <a
            href="https://github.com"
            className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-900 shadow-lg text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 transform hover:scale-110 hover:-rotate-3 transition-all duration-300"
          >
            <FaGithubSquare size={28} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-900  shadow-lg text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 transform hover:scale-110 hover:-rotate-3 transition-all duration-300"
          >
            <FaLinkedinIn size={28} />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-900 shadow-lg text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 transform hover:scale-110 hover:-rotate-3 transition-all duration-300"
          >
            <FaFacebook size={28} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-900 shadow-lg text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 transform hover:scale-110 hover:-rotate-3 transition-all duration-300"
          >
            <FaTwitterSquare size={28} />
          </a>
        </div>

        {/* Animated Divider */}
        <div className="w-full max-w-xs mt-8">
          <div className="h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600 rounded-full animate-pulse"></div>
        </div>

        {/* Copyright Section */}
        <p className="text-gray-500 text-sm mt-6 tracking-wide">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-white">Md Jakir Hossain</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
