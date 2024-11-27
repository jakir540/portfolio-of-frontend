/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";
import React from "react";
import dynamic from "next/dynamic"; // Import dynamic for client-side only rendering
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

// Dynamically import Lottie with SSR disabled
const LottieNoSSR = dynamic(() => import("lottie-react"), {
  ssr: false, // Disable SSR for Lottie
});

// Import your animation file from the public folder
import educationAnimation from "@/public/assets/Animation - 1729532302024.json";

const Education = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] items-center justify-between p-12 rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl text-white space-y-12 md:space-y-0 md:space-x-16">
      {/* Lottie Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <LottieNoSSR
          animationData={educationAnimation}
          loop={true}
          className="w-3/4 md:w-4/5 max-w-md"
        />
      </div>
      {/* Education Information Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-5xl font-extrabold text-white mb-6 text-center md:text-left border-b-4 border-pink-500 pb-3">
          Education
        </h2>

        {/* Bachelor's Degree */}
        <div className="flex items-center space-x-6 p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
          <FaGraduationCap className="text-4xl text-pink-500" />
          <div>
            <h3 className="text-2xl font-bold text-gray-100">
              Bachelor of Science in Computer Science & Engineering
            </h3>
            <p className="text-lg text-gray-400">
              Atish Dipankar University of Science & Technology
            </p>
            <p className="text-sm text-gray-500">2020 - 2024</p>
          </div>
        </div>

        {/* Higher Secondary Certificate (HSC) */}
        <div className="flex items-center space-x-6 p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
          <FaUniversity className="text-4xl text-green-500" />
          <div>
            <h3 className="text-2xl font-bold text-gray-100">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-lg text-gray-400">
              Adhyapak Abdul Majid College
            </p>
            <p className="text-sm text-gray-500">2015</p>
          </div>
        </div>

        {/* Secondary School Certificate (SSC) */}
        <div className="flex items-center space-x-6 p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
          <FaSchool className="text-4xl text-yellow-500" />
          <div>
            <h3 className="text-2xl font-bold text-gray-100">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-lg text-gray-400">Panchkitta High School</p>
            <p className="text-sm text-gray-500">2013</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
