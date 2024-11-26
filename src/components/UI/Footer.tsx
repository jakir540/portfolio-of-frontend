/* eslint-disable react/jsx-sort-props */
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
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="flex flex-col items-center">
        {/* Title */}
        <h3 className="text-4xl font-bold text-gray-200 mt-8">
          MERN Stack Developer
        </h3>

        {/* Developer Info */}
        <p className="mt-4 max-w-lg text-center text-gray-400 leading-relaxed">
          I’m Md Jakir Hossain, a MERN Stack Developer skilled in JavaScript,
          React, and Node.js. Passionate about building responsive and
          user-friendly web applications with a focus on seamless UI/UX design,
          secure backend, and scalable architectures.
        </p>

        {/* Social Media Icons */}
        <ul className="flex space-x-8 mt-6">
          <li>
            <Link
              href="https://www.facebook.com/md.jakirhasan.9279"
              target="_blank"
              className="text-gray-300 hover:text-blue-600 transition duration-200"
              rel="noopener noreferrer"
            >
              <FaFacebook size={28} />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/jakir540"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400 transition duration-200"
            >
              <FaGithubSquare size={28} />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-300 hover:text-red-600 transition duration-200"
            >
              <FaGoogle size={28} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/md-jakir-hossain-1398741b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition duration-200"
            >
              <FaLinkedinIn size={28} />
            </Link>
          </li>
          <li>
            <a
              href="https://twitter.com/MdJakir7400"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
            >
              <FaTwitterSquare size={28} />
            </a>
          </li>
        </ul>

        {/* Divider Line */}
        <div className="w-full max-w-xs border-t border-gray-700 my-6"> </div>

        {/* Copyright Section */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Md Jakir Hossain. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
