// app/(withCommonLayout)/project/[projectId]/page.tsx

import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectDetails";

// Server-side fetch function
async function fetchProjectDetails(projectId: string) {
  try {
    const res = await fetch(
      `https://portfolio-of-backend.vercel.app/api/project/${projectId}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch project details");
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching project details:", error);
    return null;
  }
}

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  // The function is now async to support the await syntax
  const project = await fetchProjectDetails(params.projectId); // Async fetch on the server side

  // If project is not found, trigger a 404 page
  if (!project) {
    notFound();
  }

  // Pass project data to ProjectDetails component
  return <ProjectDetails project={project} />;
}
