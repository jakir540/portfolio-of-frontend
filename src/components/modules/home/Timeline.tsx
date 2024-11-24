/* eslint-disable react/self-closing-comp */
const milestones = [
  {
    title: "Learned HTML, CSS, and JavaScript",
    source: "Self-Taught",
    startDate: "2022-01-01",
    endDate: "2022-06-30",
    description:
      "Started with the basics of web development, including HTML, CSS, and JavaScript. Built simple websites and explored responsive design.",
  },
  {
    title: "Completed Web Development",
    source: "Programming Hero",
    startDate: "2023-01-01",
    endDate: "2023-06-31",
    description:
      "Participated in an intensive online bootcamp where I learned front-end and back-end development, including React, Node.js, and Express.",
  },
  {
    title: "Next Level Web Development",
    source: "Programming Hero",
    startDate: "2024-04-01",
    endDate: "2024-10-31",
    description:
      "Dive in the Next Level web development, including Tyscript, Redux, and Mongoose.Built advance level websites and explored modern design.",
  },
  {
    title: "Contributed to Open-Source Projects",
    source: "GitHub",
    startDate: "2023-04-01",
    endDate: null,
    description:
      "Contributed to various open-source projects by fixing bugs, adding features, and collaborating with other developers.",
  },
];

const TimeLine = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        My Learning Journey
      </h2>
      <div className="relative">
        <div className="flex flex-wrap justify-center">
          {/* Left side for the first two milestones */}
          <div className="w-full md:w-1/2 px-6 mb-12 md:mb-0 relative">
            {milestones.slice(0, 2).map((item, index) => (
              <div key={index} className="relative mb-12">
                {/* Fixed Date Position */}
                {/* <div className="timeline-date left-0 mb-8 absolute">
                  <div className="text-gray-300 font-semibold">
                    <span className="block">{item.startDate}</span>
                    <span className="block text-gray-500 text-sm">
                      {item.endDate}
                    </span>
                  </div>
                </div> */}
                <div className="flex items-center justify-end">
                  <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 ease-in-out">
                    <h3 className="text-purple-400 text-xl font-semibold capitalize mb-2">
                      {item.title}
                    </h3>
                    <h4 className="text-gray-300 font-medium mb-3">
                      {item.source}
                    </h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-400 rounded-full border-4 border-white shadow-lg ml-6"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side for the last two milestones */}
          <div className="w-full md:w-1/2 px-6">
            {milestones.slice(2).map((item, index) => (
              <div key={index} className="relative mb-12">
                {/* Fixed Date Position */}
                {/* <div className="timeline-date left-0 pl-8 space-y-6 sticky top-24">
                  <span className="block text-gray-300 font-semibold">
                    {item.startDate}
                  </span>
                  {item.endDate && (
                    <span className="block text-gray-500 text-sm">
                      {item.endDate}
                    </span>
                  )}
                </div> */}
                <div className="flex items-center space-x-6">
                  <div className="w-8 h-8 bg-purple-400 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 ease-in-out">
                    <h3 className="text-purple-400 text-xl font-semibold capitalize mb-2">
                      {item.title}
                    </h3>
                    <h4 className="text-gray-300 font-medium mb-3">
                      {item.source}
                    </h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
