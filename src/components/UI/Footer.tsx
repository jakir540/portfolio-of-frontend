/* eslint-disable react/jsx-sort-props */
import Link from "next/link";
import {
  FaTwitterSquare,
  FaGoogle,
  FaFacebook,
  FaLinkedinIn,
  FaGitSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="flex flex-col items-center">
        {/* Title */}
        <h3 className="text-3xl mt-8">Front-End Developer</h3>

        {/* Developer Info */}
        <p className="mt-4 max-w-md text-center text-gray-300">
          Experienced Front-End Developer proficient in JavaScript, React, and
          Node.js. Skilled at creating dynamic user interfaces and delivering
          high-quality, scalable web applications. Committed to providing a
          seamless user experience and meeting client requirements.
        </p>

        {/* Social Media Icons */}
        <ul className="flex space-x-6 mt-6">
          <li>
            <Link
              href="https://www.facebook.com/md.jakirhasan.9279"
              target="_blank"
              className="text-gray-300 hover:text-blue-600"
            >
              <FaFacebook size={24} />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/jakir540"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400"
            >
              <FaGitSquare size={24} />
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-300 hover:text-red-600">
              <FaGoogle size={24} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/md-jakir-hossain-1398741b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500"
            >
              <FaLinkedinIn size={24} />
            </Link>
          </li>
          <li>
            <a
              href="https://twitter.com/MdJakir7400"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaTwitterSquare size={24} />
            </a>
          </li>
        </ul>

        {/* Copyright Section */}
        <p className="mt-4 text-gray-500 text-sm">
          &copy; 2023 Front-End Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
