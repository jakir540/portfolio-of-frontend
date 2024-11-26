"use client"

import { useEffect, useState } from "react";
import { TProject } from "@/src/types";
import Link from "next/link";

const AllProjects = () => {
  const [projects, setProjects] = useState<TProject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://portfolio-of-backend.vercel.app/api/project/allProject",
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const { data } = await res.json();
        setProjects(data);
      } catch (error) {
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <section
        id="projects"
        className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-20 px-4 sm:px-6 lg:px-8"
      >
        <p className="text-center text-lg text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-5xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        All Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <Link key={project._id} href={`/project/${project._id}`} passHref>
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
              {/* Project Title */}
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
                {project.title}
              </h2>

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-lg mb-6"
              />

              {/* Project Description */}
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

              {/* Technologies */}
              <div className="mb-4">
                <strong className="text-gray-300">Technologies:</strong>
                <div className="flex flex-wrap space-x-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-teal-500 text-white px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="mt-6 flex space-x-4 justify-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
                >
                  Live Project
                </a>
                <a
                  href={project.repositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-teal-400 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
                >
                  Repository
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
