/* eslint-disable react/self-closing-comp */
const timelines = [
  {
    title: "Frontend Developer",
    company: "XYZ Agency",
    startDate: "2022-01-01",
    endDate: "2020-06-30",
    description:
      "Specializing in HTML, CSS, and JavaScript. Collaborated with designers to create responsive and user-friendly interfaces. Implemented UI animations and optimized website performance.",
  },
  {
    title: "MERN Stack Developer",
    company: "ABC Company",
    startDate: "2023-01-01",
    endDate: "2018-12-31",
    description:
      "Worked as a MERN Stack developer, building web applications using MongoDB, Express.js, React.js, and Node.js. Developed RESTful APIs, implemented authentication and authorization, and optimized application performance.",
  },
  {
    title: "Photographer",
    company: "Freelance",
    startDate: "2020-01-01",
    endDate: null,
    description:
      "Started working as a freelance photographer, specializing in portrait and landscape photography. Captured memorable moments for clients and developed post-processing skills. Published photographs in various magazines and participated in local exhibitions.",
  },
];

const TimeLine = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
        TimeLine
      </h2>
      <div className="relative">
        <div className="flex">
          {/* Left side for Frontend Developer */}
          <div className="w-1/2 pr-4">
            <div className="relative mb-12">
              {/* Frontend Developer content */}
              <div className="absolute right-full pr-8 text-right">
                <span className="block text-gray-600 font-semibold mb-1">
                  2022-01-01
                </span>
                <span className="block text-gray-400 text-sm">2020-06-30</span>
              </div>
              <div className="flex items-center justify-end">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out">
                  <h3 className="text-purple-600 text-lg font-semibold capitalize mb-1">
                    Frontend Developer
                  </h3>
                  <h4 className="text-gray-500 font-medium mb-2">XYZ Agency</h4>
                  <p className="text-gray-700">
                    Specializing in HTML, CSS, and JavaScript. Collaborated with
                    designers to create responsive and user-friendly interfaces.
                    Implemented UI animations and optimized website performance.
                  </p>
                </div>
                <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg ml-6"></div>
              </div>
            </div>
          </div>

          {/* Right side for other timeline items */}
          <div className="w-1/2 pl-4">
            {timelines.slice(1).map((item, index) => (
              <div key={index} className="relative mb-12">
                {/* Other timeline items content */}
                <div className="absolute left-full pl-8">
                  <span className="block text-gray-600 font-semibold mb-1">
                    {item.startDate}
                  </span>
                  {item.endDate && (
                    <span className="block text-gray-400 text-sm">
                      {item.endDate}
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg mr-6"></div>
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 ease-in-out">
                    <h3 className="text-purple-600 text-lg font-semibold capitalize mb-1">
                      {item.title}
                    </h3>
                    <h4 className="text-gray-500 font-medium mb-2">
                      {item.company}
                    </h4>
                    <p className="text-gray-700">{item.description}</p>
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
