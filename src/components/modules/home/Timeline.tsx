/* eslint-disable react/jsx-sort-props */
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
    image: "https://i.ibb.co.com/SQPpHQ8/certificate.jpg",
  },
  {
    title: "Next Level Web Development",
    source: "Programming Hero",
    startDate: "2024-04-01",
    endDate: "2024-10-31",
    description:
      "Dive into advanced web development, including TypeScript, Redux, and Mongoose. Built advanced-level websites and explored modern design trends.",
    image: "https://i.ibb.co.com/dG6PvrH/cert.jpg",
  },
  {
    title: "Contributed to Open-Source Projects",
    source: "GitHub",
    startDate: "2020-01-01",
    endDate: "Lifetime",
    description:
      "Contributed to various open-source projects by fixing bugs, adding features, and collaborating with other developers to gain experience.",
  },
];

const TimeLine = () => {
  return (
    <div className="p-10 bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] rounded-3xl shadow-2xl">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text text-white">
        My Learning Journey
      </h2>
      <div className="relative flex flex-wrap justify-center items-start">
        {/* Left side for the first two milestones */}
        <div className="w-full md:w-1/2 px-6 mb-12 md:mb-0 relative space-y-12">
          {milestones.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="relative p-8 bg-gray-900 bg-opacity-60 rounded-2xl shadow-lg backdrop-blur-md transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <h3 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <div className="flex justify-between items-center text-gray-400 mb-4">
                <div className="text-sm">{item.source}</div>
                <div className="text-right">
                  <span className="block">{item.startDate}</span>
                  <span className="block text-gray-500">{item.endDate}</span>
                </div>
              </div>
              <p className="text-gray-300 text-base">{item.description}</p>

              {/* Hover image */}
              {item.image && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              )}
              <div className="absolute top-1/2 right-[-8px] transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg border-2 border-gray-900"></div>
            </div>
          ))}
        </div>

        {/* Right side for the last two milestones */}
        <div className="w-full md:w-1/2 px-6 space-y-12">
          {milestones.slice(2).map((item, index) => (
            <div
              key={index}
              className="relative p-8 bg-gray-900 bg-opacity-60 rounded-2xl shadow-lg backdrop-blur-md transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <h3 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <div className="flex justify-between items-center text-gray-400 mb-4">
                <div className="text-sm">{item.source}</div>
                <div className="text-right">
                  <span className="block">{item.startDate}</span>
                  <span className="block text-gray-500">{item.endDate}</span>
                </div>
              </div>
              <p className="text-gray-300 text-base">{item.description}</p>

              {/* Hover image */}
              {item.image && (
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              )}

              <div className="absolute top-1/2 left-[-8px] transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg border-2 border-gray-900"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
