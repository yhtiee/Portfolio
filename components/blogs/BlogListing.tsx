"use client";

import EmptyState from "../EmptyState";
import BlogCard from "./BlogCard";
import { PenTool } from "lucide-react";

// Placeholder Data
const blogs = [
    {
        title: "The Future of React Server Components",
        excerpt: "Exploring how RSCs are changing the landscape of web development and what it means for the future of frontend architecture.",
        date: "Oct 24, 2023",
        readTime: "5 min read",
        tags: ["React", "Next.js", "Web Dev"],
        image: "/profile.png",
        slug: "future-of-rsc"
    },
    {
        title: "Designing for Dark Mode",
        excerpt: "A deep dive into the complexities of implementing a robust dark mode system in modern web applications using Tailwind CSS.",
        date: "Sep 15, 2023",
        readTime: "8 min read",
        tags: ["Design", "CSS", "Tailwind"],
        image: "/profile.png",
        slug: "designing-dark-mode"
    },
    {
        title: "Why I Switched to TypeScript",
        excerpt: "From a dynamic typing purist to a static typing advocate. Here is my journey and why I think TypeScript is essential for scale.",
        date: "Aug 02, 2023",
        readTime: "6 min read",
        tags: ["TypeScript", "JavaScript", "Opinion"],
        image: "/profile.png",
        slug: "why-typescript"
    }
];

const BlogListing = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto relative">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="relative z-10 mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-2">
                    <PenTool className="w-3 h-3" />
                    The Blog
                </div>
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter">
                    Thoughts & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                        Theories.
                    </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                    Musings on code, design, and the tech industry. 
                    Sometimes technical, sometimes philosophical, always honest.
                </p>
            </div>

            {/* <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                        <BlogCard {...blog} />
                    </div>
                ))}
            </div> */}

            <div className="flex w-full justify-center items-center">
                <EmptyState
                    title="No blogs available"
                    description="Blogs will be updated soon"
                />
            </div>
        </section>
    );
};

export default BlogListing;