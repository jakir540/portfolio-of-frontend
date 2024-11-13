/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-sort-props */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Banner = () => {
  return (
    <div className="min-h-screen pb-5 bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white flex justify-center items-center gap-3">
      <div className="text-center space-y-8">
        {/* Main Text */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight ">
          Hello, <br />
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Md Jakir Hossain
          </span>
          , <br />
          <span className="block mt-2 text-green-400">
            Professional Web Developer
          </span>
        </h1>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://github.com"
            className="text-3xl text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-3xl text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://facebook.com"
            className="text-3xl text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com"
            className="text-3xl text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center space-x-6">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            Contact Me
          </button>
          <a
            // https://drive.google.com/file/d/1ympfhV178ItsN-udOHiQydYdmILLys4J/view?usp=sharing
            href="https://drive.google.com/uc?export=download&id=1ympfhV178ItsN-udOHiQydYdmILLys4J"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-pink-500 hover:border-purple-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Get Resume
          </a>
        </div>
      </div>

      {/* Code Snippet Section */}
      <div className="mt-5 w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-lg relative">
        {/* Header - Simulating a Code Editor Tab */}

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 bg-red-500 rounded-full"></span>
            <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
            <span className="h-3 w-3 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-gray-400 text-sm">index.js</span>
        </div>

        {/* Code Block */}
        <pre className="text-left text-sm text-gray-100 font-mono overflow-x-auto leading-relaxed p-6 bg-gray-800 rounded-lg shadow-inner">
          <code className="p-5">
            <span className="text-green-400">const</span> coder = {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-yellow-300">name</span>:{" "}
            <span className="text-red-400">'Md Jakir Hossain'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-yellow-300">skills</span>: [
            <span className="text-green-400">'React'</span>,{" "}
            <span className="text-green-400">'NextJS'</span>,{" "}
            <span className="text-green-400">'Redux'</span>,{" "}
            <span className="text-green-400">'Express'</span>, <br />
            <span className="text-green-400">'NestJS'</span>,{" "}
            <span className="text-green-400">'MySql'</span>,{" "}
            <span className="text-green-400">'MongoDB'</span>,{" "}
            <span className="text-green-400">'Docker'</span>,{" "}
            <span className="text-green-400">'AWS'</span>],
            <br />
            &nbsp;&nbsp;<span className="text-yellow-300">
              hardWorker
            </span>: <span className="text-blue-400">true</span>,
            <br />
            &nbsp;&nbsp;<span className="text-yellow-300">
              quickLearner
            </span>: <span className="text-blue-400">true</span>,
            <br />
            &nbsp;&nbsp;<span className="text-yellow-300">
              problemSolver
            </span>: <span className="text-blue-400">true</span>,
            <br />
            &nbsp;&nbsp;<span className="text-yellow-300">hireable</span>:{" "}
            <span className="text-green-400">function</span>() {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-green-400 ps-5">return</span>(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ps-8">this</span>.
            <span className="text-yellow-300">hardWorker</span> &&
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ps-8">this</span>.
            <span className="text-yellow-300">problemSolver</span> &&
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ps-8">this</span>.
            <span className="text-yellow-300">skills</span>.length &gt;= 5
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;)
            <br />
            &nbsp;&nbsp;{"}"},
            <br />
            {"};"}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Banner;

// text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-500">
