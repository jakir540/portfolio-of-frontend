/* eslint-disable import/order */
"use client";
import React from "react";
import Lottie from "lottie-react";
import educationAnimation from "../../../../public/assets/Animation - 1729532302024.json";

const Education = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] items-center justify-between p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-white">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Lottie
          animationData={educationAnimation}
          loop={true}
          className="w-3/4 md:w-full"
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
        <h2 className="text-3xl font-extrabold text-gray-200 mb-6">
          Education
        </h2>

        {/* Bachelor's Degree */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-100">
            Bachelor of Science in Computer Science & Engineering
          </h3>
          <p className="text-lg text-gray-400">
            Atish Dipankar University of Science & Technology, 2020 - 2024
          </p>
        </div>

        {/* HSC */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-100">
            Higher Secondary Certificate (HSC)
          </h3>
          <p className="text-lg text-gray-400">
            Adhyapak Abdul Majid College, 2015
          </p>
        </div>

        {/* SSC */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-100">
            Secondary School Certificate (SSC)
          </h3>
          <p className="text-lg text-gray-400">Panchkitta High School, 2013</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
