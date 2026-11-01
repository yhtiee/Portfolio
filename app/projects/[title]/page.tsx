import { permanentRedirect, redirect } from "next/navigation";
import { projects } from "@/constants/projects";
import { projectSlug } from "@/constants/site";

type PageProps = {
  params: Promise<{
    title: string;
  }>;
};

// Old detail URLs (/projects/home%20grid) now open the project inline on the home page.
export async function generateStaticParams() {
  return projects.map((project) => ({
    title: project.title!.toLowerCase(),
  }));
}

export default async function LegacyProjectPage({ params }: PageProps) {
  const { title } = await params;

  let decoded = title;
  try {
    decoded = decodeURIComponent(title);
  } catch {
    // Malformed escape sequence: fall back to the raw segment.
  }
  decoded = decoded.toLowerCase();

  const project = projects.find(
    (item) => item.title?.toLowerCase() === decoded || projectSlug(item) === decoded
  );

  if (project) permanentRedirect(`/#${projectSlug(project)}`);
  redirect("/#experience");
}
