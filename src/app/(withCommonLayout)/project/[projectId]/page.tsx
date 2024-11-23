"use client";
// Ensure you are using client-side components
import { useEffect, useState } from "react";

// Project details page component
const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // You can access the projectId directly from params
  const { projectId } = params;

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const res = await fetch(
          `https://portfolio-of-backend.vercel.app/api/project/${projectId}`
        );
        if (!res.ok) throw new Error("Failed to fetch project details");
        const { data } = await res.json();
        setProject(data); // Set the fetched project data
      } catch (error) {
        console.error("Error fetching project details:", error);
        setError("Failed to load project details");
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProjectDetails();
    }
  }, [projectId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="bg-gradient-to-b from-[#0d1224] via-gray-800 to-[#0d1224] text-white py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
        {project.title}
      </h1>

      <div className="max-w-4xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-400 mb-6">{project.description}</p>

        <div className="mb-6">
          <strong className="text-gray-300">Technologies:</strong>
          <div className="flex flex-wrap space-x-2">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-teal-500 text-white px-2 py-1 rounded-md text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 justify-center">
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
    </section>
  );
};

export default ProjectDetails;
