"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

export interface Project {
    id?: string | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    description?: string | undefined;
    tags?: string[] | undefined;
    image?: string | undefined;
    images?: string[] | undefined;
    challenge?: string | undefined;
    solution?: string | undefined;
    features?: string[] | undefined;
    demoUrl?: string | undefined;
    repoUrl?: string | undefined;
}

interface ProjectProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectProps) => {
    return (
        <div className="group relative bg-white border-2 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden border-b-2 border-black bg-gray-100">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <Image
                    src={project.image!}
                    alt={project.title!}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                     {project.demoUrl && (
                        <Link href={project.demoUrl} target="_blank" className="p-2 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                    )}
                    {project.repoUrl && (
                        <Link href={project.repoUrl} target="_blank" className="p-2 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
                            <Github className="w-4 h-4" />
                        </Link>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="space-y-2 flex-grow">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:underline decoration-2 underline-offset-4">{project.title}</h3>
                    <p className="text-gray-600 line-clamp-3 leading-relaxed text-sm">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags!.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-bold border border-black rounded-full bg-gray-50 uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className="pt-4 mt-auto border-t border-gray-100">
                     <Link href={`/projects/${project.title!.toLowerCase()}`} className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                        View Details <ArrowUpRight className="w-4 h-4" />
                     </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
