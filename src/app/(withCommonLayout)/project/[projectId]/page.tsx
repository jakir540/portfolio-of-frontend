// app/(withCommonLayout)/project/[projectId]/page.tsx

import { notFound } from "next/navigation";
import ProjectDetails from "./ProjectDetails";
import { FetchSingleProject } from "@/src/services/projectServices";

// Server-side fetch function
async function fetchProjectDetails(projectId: string) {}

export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = await params;

  const project = await FetchSingleProject(projectId);
  console.log({ project });

  // If project is not found, trigger a 404 page
  if (!project) {
    notFound();
  }

  // Pass project data to ProjectDetails component
  return <ProjectDetails project={project} />;
}
