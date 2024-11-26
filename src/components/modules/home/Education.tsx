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
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] items-center justify-between p-10 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-white space-y-8 md:space-y-0 md:space-x-12">
      {/* Lottie Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <LottieNoSSR
          animationData={educationAnimation}
          loop={true}
          className="w-2/3 md:w-4/5 max-w-xs"
        />
      </div>
      {/* Education Information Section */}
      <div className="w-full md:w-1/2 space-y-8">
        <h2 className="text-4xl font-bold text-gray-100 mb-6 text-center md:text-left border-b-2 border-gray-600 pb-2">
          Education
        </h2>

        {/* Bachelor's Degree */}
        <div className="flex items-center space-x-4 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 shadow-md transition-transform duration-200 hover:scale-105">
          <FaGraduationCap className="text-3xl text-blue-400" />
          <div>
            <h3 className="text-xl font-semibold text-gray-100">
              Bachelor of Science in Computer Science & Engineering
            </h3>
            <p className="text-gray-400">
              Atish Dipankar University of Science & Technology
            </p>
            <p className="text-sm text-gray-500">2020 - 2024</p>
          </div>
        </div>

        {/* Higher Secondary Certificate (HSC) */}
        <div className="flex items-center space-x-4 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 shadow-md transition-transform duration-200 hover:scale-105">
          <FaUniversity className="text-3xl text-green-400" />
          <div>
            <h3 className="text-xl font-semibold text-gray-100">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-gray-400">Adhyapak Abdul Majid College</p>
            <p className="text-sm text-gray-500">2015</p>
          </div>
        </div>

        {/* Secondary School Certificate (SSC) */}
        <div className="flex items-center space-x-4 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700 shadow-md transition-transform duration-200 hover:scale-105">
          <FaSchool className="text-3xl text-yellow-400" />
          <div>
            <h3 className="text-xl font-semibold text-gray-100">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-gray-400">Panchkitta High School</p>
            <p className="text-sm text-gray-500">2013</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
