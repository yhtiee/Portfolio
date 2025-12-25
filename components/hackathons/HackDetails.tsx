"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Trophy, Users, Code2, ExternalLink, Github, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const HackDetails = () => {
    // Mock Data
    const hack = {
        title: "Global AI Hackathon",
        tagline: "Making the web accessible, one image at a time.",
        date: "October 14-16, 2023",
        location: "San Francisco (Remote)",
        award: "1st Place Winner",
        team: ["Ut (Lead)", "Alex (Design)", "Sarah (Backend)"],
        duration: "48 Hours",
        description: "In a frantic 48-hour sprint, we built 'Visionary', a browser extension that uses GPT-4 Vision to automatically generate descriptive alt text for images on any website, enabling a better experience for screen reader users.",
        theSprint: "The biggest challenge was latency. We needed the descriptions to appear almost instantly. We implemented a caching layer and optimized the image compression before sending it to the API, reducing response times by 60%.",
        stack: ["OpenAI API", "React", "Node.js", "Redis", "Chrome Extension API"],
        images: ["/profile.png", "/profile.png"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com"
    };

    return (
        <article className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in duration-700">
            {/* Navigation */}
            <Link href="/hackathon" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Hackathons
            </Link>

            {/* Header */}
            <div className="space-y-8 mb-12">
                <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <Trophy className="w-3 h-3 text-yellow-400" /> {hack.award}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <Clock className="w-3 h-3" /> {hack.duration}
                    </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">{hack.title}</h1>
                <p className="text-xl text-gray-600 font-light max-w-3xl leading-relaxed">{hack.tagline}</p>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video w-full bg-gray-100 rounded-3xl overflow-hidden border-2 border-black mb-16 shadow-2xl group">
                <Image 
                    src={hack.images[0]} 
                    alt={hack.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    priority
                />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                {/* Main Story */}
                <div className="md:col-span-2 space-y-10">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Flame className="w-5 h-5" /> The Idea
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">{hack.description}</p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5" /> The Sprint
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">{hack.theSprint}</p>
                    </section>

                    <div className="flex gap-4 pt-4">
                        <Button asChild className="rounded-full h-12 px-8 bg-black text-white hover:bg-gray-800 shadow-lg">
                            <Link href={hack.demoUrl} target="_blank">
                                View Demo <ExternalLink className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full h-12 px-8 border-2 border-black hover:bg-gray-50">
                            <Link href={hack.repoUrl} target="_blank">
                                Source Code <Github className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <Users className="w-4 h-4" /> The Squad
                        </h3>
                        <ul className="space-y-2">
                            {hack.team.map((member, i) => (
                                <li key={i} className="text-sm text-gray-600 border-b border-gray-200 last:border-0 pb-2 last:pb-0">{member}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <Code2 className="w-4 h-4" /> Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {hack.stack.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default HackDetails;
