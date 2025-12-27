"use client";

import { projects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

const ProjectListing = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto relative">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="relative z-10 mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter">
                    Selected <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                        Works.
                    </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                    A curated collection of projects that pushed my boundaries.
                </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default ProjectListing;
