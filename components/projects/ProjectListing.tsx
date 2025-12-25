"use client";

import ProjectCard from "./ProjectCard";

// Placeholder Data - Replace with your actual projects
const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js and Tailwind CSS, featuring dark mode and real-time data visualization.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
        image: "/profile.png", // Using profile.png as placeholder, replace with project screenshots
        demoUrl: "https://example.com",
        repoUrl: "https://github.com"
    },
    {
        title: "AI Content Generator",
        description: "An AI-powered application that helps users generate blog posts, social media captions, and marketing copy using OpenAI's GPT-4 API.",
        tags: ["React", "Node.js", "OpenAI API", "Stripe"],
        image: "/profile.png",
        demoUrl: "https://example.com",
        repoUrl: "https://github.com"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management tool with drag-and-drop functionality, team workspaces, and real-time updates using WebSockets.",
        tags: ["Vue.js", "Firebase", "Pinia", "DnD"],
        image: "/profile.png",
        demoUrl: "https://example.com",
        repoUrl: "https://github.com"
    },
    {
        title: "Portfolio v1",
        description: "My previous portfolio site. A minimalist design focused on typography and whitespace. Good memories, but it was time for an upgrade.",
        tags: ["HTML", "SCSS", "JavaScript"],
        image: "/profile.png",
        repoUrl: "https://github.com"
    }
];

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
                    From late-night hackathon experiments to production-ready applications.
                </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default ProjectListing;
