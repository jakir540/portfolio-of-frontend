import { FetchAllProjects } from "@/src/services/projectServices";
import { TProject } from "@/src/types";
import Link from "next/link";

const AllProjects = async () => {
  const projects = await FetchAllProjects();
  const projectsLists = projects?.data || [];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Title */}
      <h1 className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        All Projects
      </h1>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsLists?.map((project: TProject) => (
          <Link key={project._id} href={`/project/${project._id}`} passHref>
            <div className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer group">
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-teal-500/20 text-teal-300 px-2 py-2 rounded-full text-sm shadow-md hover:shadow-teal-500/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-teal-500 text-white py-2 text-center rounded-md hover:bg-teal-600 transition duration-300"
                  >
                    Live Project
                  </a>
                  <a
                    href={project.repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-gray-300 py-2 text-center rounded-md hover:bg-gray-700 transition duration-300 ml-2"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
