import ProjectDetailsComponent from "@/components/projects/ProjectDetails";
import { projects } from "@/constants/projects";

type PageProps = {
  params: Promise<{
    title: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    title: project.title!.toLowerCase(),
  }));
}

export default async function ProjectDetails({ params }: PageProps) {

  const { title } = await params;

  console.log(title, "Title params")
  const updatedTitle = decodeURIComponent(title);

  const project = projects.find((project) => project.title?.toLowerCase() === updatedTitle);

  return (
    <div className="bg-white font-sans min-h-screen pt-20">
      <ProjectDetailsComponent project={project!} />
    </div>
  );
}