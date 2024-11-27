// /* eslint-disable no-console */
// /* eslint-disable prettier/prettier */
// /* eslint-disable padding-line-between-statements */
// /* eslint-disable react/jsx-sort-props */
// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
//   const { projectId } = params;
//   const [project, setProject] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter(); // For navigation (e.g., handling 404)

//   // Fetch project details
//   useEffect(() => {
//     const fetchProjectDetails = async () => {
//       try {
//         const res = await fetch(
//           `https://portfolio-of-backend.vercel.app/api/project/${projectId}`,
//           { cache: "no-store" }
//         );

//         if (!res.ok) {
//           throw new Error("Failed to fetch project details");
//         }

//         const { data } = await res.json();
//         setProject(data);
//       } catch (err) {
//         console.error("Error fetching project details:", err);
//         setError("Project not found");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (projectId) fetchProjectDetails();
//   }, [projectId]);

//   // Show loading state
//   if (loading) {
//     return (
//       <section className="flex items-center justify-center h-screen bg-gradient-to-b from-[#0f0f0f] via-gray-900 to-[#0f0f0f] text-white">
//         <p className="text-lg font-medium animate-pulse">Loading project...</p>
//       </section>
//     );
//   }

//   // Show error state (404 handling)
//   if (error) {
//     return (
//       <section className="flex items-center justify-center h-screen bg-gradient-to-b from-[#0f0f0f] via-gray-900 to-[#0f0f0f] text-white">
//         <p className="text-lg font-medium text-red-500">{error}</p>
//         <button
//           onClick={() => router.push("/")} // Navigate back to homepage or projects list
//           className="ml-4 bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-400 transition-all duration-300"
//         >
//           Go Back
//         </button>
//       </section>
//     );
//   }

//   // Render the project details
//   return (
//     <section className="bg-gradient-to-b from-[#0f0f0f] via-gray-900 to-[#0f0f0f] text-white py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden relative">
//         {/* Project Image with Glassmorphism */}
//         <div className="relative">
//           <img
//             src={project.image}
//             alt={`${project.title} screenshot`}
//             className="w-full h-[500px] object-cover rounded-t-lg"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
//         </div>

//         {/* Glassmorphic Info Section */}
//         <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg max-w-[70%] sm:max-w-[40%]">
//           <h1 className="text-3xl sm:text-4xl font-bold text-teal-400">
//             {project.title}
//           </h1>
//         </div>

//         {/* Content Section */}
//         <div className="bg-gray-900 p-8 lg:p-12">
//           {/* Description */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold text-teal-400 mb-4">
//               Project Description
//             </h2>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               {project.description}
//             </p>
//           </div>

//           {/* Technologies */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold text-teal-400 mb-4">
//               Technologies
//             </h2>
//             <div className="flex flex-wrap gap-4 mt-4">
//               {project.technologies.map((tech: string, index: number) => (
//                 <span
//                   key={index}
//                   className="bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm shadow-md hover:shadow-teal-500/50 transition-all duration-300"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center gap-6 mt-10">
//             <a
//               href={project.liveLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300"
//             >
//               🚀 <span>Live Project</span>
//             </a>
//             <a
//               href={project.repositoryLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 bg-gray-800 text-teal-400 px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
//             >
//               📂 <span>Repository</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;

import React from "react";

export default function ProjectDetails() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium
      fuga impedit atque eligendi ipsa laboriosam sint consectetur. Dignissimos
      sed error ducimus delectus placeat molestiae, quibusdam autem deserunt
      voluptate sint?
    </div>
  );
}
