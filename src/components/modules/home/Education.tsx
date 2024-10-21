/* eslint-disable import/order */
"use client";
import React from "react";
import Lottie from "lottie-react"; // Default import for Lottie
import educationAnimation from "../../../../public/assets/Animation - 1729532302024.json"; // Adjust the path as needed

const Education = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 items-center justify-between p-8 text-white shadow-md">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Lottie animationData={educationAnimation} loop={true} />
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-600">XYZ University, 2018 - 2022</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">
            Associate Degree in Information Technology
          </h3>
          <p className="text-gray-600">ABC College, 2016 - 2018</p>
        </div>
        {/* Add more education entries as needed */}
      </div>
    </div>
  );
};

export default Education;
