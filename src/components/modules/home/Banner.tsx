/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Typical from "react-typical";

const Banner = () => {
  const fullName = "Md Jakir Hossain";
  const skillsArray = [
    "React",
    "NextJS",
    "Redux",
    "Express",
    "NestJS",
    "MySql",
    "MongoDB",
    "Docker",
    "AWS",
  ];

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 lg:px-12 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute w-[30rem] h-[30rem] bg-gradient-to-r from-pink-500 to-purple-600 opacity-30 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Name Section */}
      <div className="relative z-10 flex-1 text-center lg:text-left space-y-8 lg:space-y-12 p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hello, <br />
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 animate-text">
            <Typical
              steps={[
                "M",
                100,
                "Md ",
                100,
                "Md J",
                100,
                "Md Ja",
                100,
                "Md Jak",
                100,
                "Md Jaki",
                100,
                "Md Jakir",
                100,
                "Md Jakir H",
                100,
                "Md Jakir Ho",
                100,
                "Md Jakir Hos",
                100,
                "Md Jakir Hoss",
                100,
                "Md Jakir Hossai",
                100,
                "Md Jakir Hossain",
              ]}
              wrapper="span"
              loop={1}
            />
          </span>
          <br />
          <span className="block mt-2 text-green-400 text-xl md:text-2xl">
            Professional Web Developer
          </span>
        </h1>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-6 mt-6">
          <a
            href="https://github.com"
            className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-900 bg-opacity-60 shadow-lg text-gray-400 hover:text-pink-500 hover:shadow-pink-500/50 transform hover:scale-110 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://linkedin.com"
            className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-900 bg-opacity-60 shadow-lg text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 transform hover:scale-110 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://facebook.com"
            className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-900 bg-opacity-60 shadow-lg text-gray-400 hover:text-blue-700 hover:shadow-blue-700/50 transform hover:scale-110 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://twitter.com"
            className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-900 bg-opacity-60 shadow-lg text-gray-400 hover:text-blue-400 hover:shadow-blue-400/50 transform hover:scale-110 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start gap-6 mt-10">
          <button
            onClick={() => handleScrollToSection("#contact")}
            id="contact"
            className="py-3 px-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-pink-600/50 transform hover:scale-105 transition duration-300"
          >
            Contact Me
          </button>
          <a
            href="https://drive.google.com/uc?export=download&id=1ympfhV178ItsN-udOHiQydYdmILLys4J"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-8 rounded-full bg-gray-900 text-white border border-pink-500 hover:border-purple-500 hover:text-pink-500 shadow-lg transform hover:scale-105 transition duration-300"
          >
            Get Resume
          </a>
        </div>
      </div>

      {/* Code Section */}
      <div className="relative z-10 flex-1 mt-10 lg:mt-0 lg:ml-12 p-8 bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-lg shadow-xl shadow-gray-900/50">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <span className="h-4 w-4 bg-red-500 rounded-full"></span>
            <span className="h-4 w-4 bg-yellow-500 rounded-full"></span>
            <span className="h-4 w-4 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-gray-400 text-sm">index.js</span>
        </div>

        <pre className="text-left text-sm text-gray-100 font-mono overflow-x-auto leading-relaxed p-6 bg-gray-900 bg-opacity-70 rounded-lg">
          <code>
            <span className="text-green-400">const</span> coder = {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-yellow-300">name</span>:{" "}
            <span className="text-red-400 text-2xl">'{fullName}'</span>,
            <br />
            &nbsp;&nbsp;<span className="text-yellow-300">skills</span>: [
            {skillsArray.map((skill, idx) => (
              <span key={idx} className="text-green-400">
                '{skill}'{idx !== skillsArray.length - 1 ? "," : ""}
              </span>
            ))}
            ],
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
            <span className="text-green-400">return</span>(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.
            <span className="text-yellow-300">hardWorker</span> &&
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.
            <span className="text-yellow-300">problemSolver</span> &&
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.
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
