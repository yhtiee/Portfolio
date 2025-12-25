"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Layers, Cpu, Zap, CheckCircle2, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetailsComponent = () => {
    // Mock Data - In a real app, fetch based on ID
    const project = {
        title: "E-Commerce Dashboard",
        subtitle: "A comprehensive solution for modern retail management.",
        description: "This dashboard was built to solve the fragmentation problem in managing multi-channel sales. It aggregates data from various sources into a single, real-time interface, allowing store owners to make data-driven decisions instantly.",
        challenge: "The main challenge was handling real-time WebSocket connections for over 10,000 concurrent users while maintaining sub-100ms latency for order updates. Additionally, visualizing complex datasets without cluttering the UI required a novel approach to layout design.",
        solution: "We utilized a custom Node.js server with Redis Pub/Sub for event distribution. On the frontend, we implemented optimistic UI updates to ensure the interface felt instant regardless of network conditions. The UI uses a modular 'bento-box' grid system that adapts to user priorities.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Redis", "Node.js"],
        features: [
            "Real-time Order Tracking",
            "Inventory Management System",
            "Advanced Analytics & Reporting",
            "Multi-User Role Management",
            "Dark/Light Mode Support"
        ],
        images: [
            "/profile.png", // Hero Image
            "/profile.png", // Gallery 1
            "/profile.png"  // Gallery 2
        ],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com"
    };

    return (
        <article className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-700">
            {/* Navigation */}
            <Link href="/projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </Link>

            {/* Header */}
            <div className="space-y-6 mb-12">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">{project.title}</h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl">{project.subtitle}</p>
                
                <div className="flex flex-wrap gap-4 items-center pt-4">
                    {project.demoUrl && (
                        <Button asChild className="rounded-full h-12 px-8 text-lg bg-black text-white hover:bg-gray-800 hover:-translate-y-1 transition-all shadow-lg cursor-pointer">
                            <Link href={project.demoUrl} target="_blank">
                                Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    )}
                    {project.repoUrl && (
                        <Button asChild variant="outline" className="rounded-full h-12 px-8 text-lg border-2 border-black text-black hover:bg-gray-50 hover:-translate-y-1 transition-all cursor-pointer">
                            <Link href={project.repoUrl} target="_blank">
                                View Code <Github className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>

            {/* Hero Media (Cinema Style) */}
            <div className="relative aspect-video w-full bg-gray-100 rounded-3xl overflow-hidden border-2 border-black mb-20 group shadow-2xl">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <Image 
                    src={project.images[0]} 
                    alt={project.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    priority
                />
                {/* Play Button Overlay (Decorative) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/50">
                        <PlayCircle className="w-12 h-12 text-white" />
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <Layers className="w-6 h-6" />
                            The Overview
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <Zap className="w-6 h-6" />
                            The Challenge
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{project.challenge}</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <Cpu className="w-6 h-6" />
                            The Solution
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{project.solution}</p>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-10">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <h3 className="font-bold text-xl mb-6">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-black transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-black text-white p-8 rounded-3xl relative overflow-hidden shadow-xl">
                         <div className="absolute inset-0 opacity-20" 
                             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
                        />
                        <h3 className="font-bold text-xl mb-6 relative z-10">Key Features</h3>
                        <ul className="space-y-3 relative z-10">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm group">
                                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 group-hover:text-green-400 transition-colors" />
                                    <span className="group-hover:text-white transition-colors">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Gallery / Diagrams */}
            <section className="space-y-8 mb-20">
                <h2 className="text-3xl font-bold">Visuals & Diagrams</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((img, index) => (
                        <div key={index} className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 hover:border-black transition-all duration-300 group hover:shadow-xl">
                            <Image 
                                src={img} 
                                alt={`Gallery ${index}`} 
                                fill 
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Figure {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Next Project Teaser */}
            <div className="border-t border-gray-100 pt-12 flex justify-end">
                <Link href="/projects" className="group text-right">
                    <p className="text-sm text-gray-500 mb-1">Next Project</p>
                    <h3 className="text-2xl font-bold flex items-center gap-2 group-hover:underline decoration-2 underline-offset-4">
                        AI Content Generator <ArrowLeft className="w-5 h-5 rotate-180 transition-transform group-hover:translate-x-1" />
                    </h3>
                </Link>
            </div>
        </article>
    );
};

export default ProjectDetailsComponent;
