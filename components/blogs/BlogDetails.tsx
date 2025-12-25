"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogDetails = () => {
    // Mock Data
    const post = {
        title: "The Future of React Server Components",
        date: "October 24, 2023",
        readTime: "5 min read",
        author: "Gemini Code Assist",
        tags: ["React", "Next.js", "Web Development"],
        image: "/profile.png",
        content: [
            "React Server Components (RSC) represent a paradigm shift in how we build React applications. For years, we've been pushing more and more logic to the client, resulting in larger bundles and slower initial load times. RSCs aim to reverse this trend by allowing components to render exclusively on the server.",
            "The beauty of RSC lies in its ability to reduce the amount of JavaScript sent to the client. By rendering static content on the server, we can strip away the hydration costs associated with traditional React components. This leads to faster Time to Interactive (TTI) and a better user experience, especially on low-end devices.",
            "However, adopting RSC isn't without its challenges. It requires a mental shift in how we think about state and effects. Since server components don't have access to browser APIs or state, we have to carefully separate our concerns between server and client components.",
            "In conclusion, while the learning curve might be steep, the benefits of React Server Components are undeniable. As the ecosystem matures and frameworks like Next.js continue to innovate, I believe RSC will become the standard for building high-performance web applications."
        ]
    };

    return (
        <article className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in duration-700">
            {/* Navigation */}
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Writing
            </Link>

            {/* Header */}
            <header className="space-y-8 mb-12 text-center">
                <div className="flex items-center justify-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight text-gray-900">
                    {post.title}
                </h1>

                <div className="flex justify-center gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600">
                            #{tag}
                        </span>
                    ))}
                </div>
            </header>

            {/* Hero Image */}
            <div className="relative aspect-[2/1] w-full bg-gray-100 rounded-3xl overflow-hidden border-2 border-black mb-16 shadow-2xl group">
                <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    priority
                />
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Sidebar (Share) */}
                <div className="lg:col-span-2 hidden lg:block">
                    <div className="sticky top-24 space-y-4">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Share</p>
                        <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all">
                            <Twitter className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all">
                            <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all">
                            <Facebook className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-8 prose prose-lg prose-gray max-w-none">
                    {post.content.map((paragraph, index) => (
                        <p key={index} className="text-xl text-gray-600 leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left">
                            {paragraph}
                        </p>
                    ))}
                    
                    <div className="mt-12 pt-12 border-t border-gray-200">
                        <h3 className="text-2xl font-bold mb-6">Thanks for reading!</h3>
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex items-center gap-6">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-black shrink-0">
                                <Image src="/profile.png" alt="Author" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Written by {post.author}</p>
                                <p className="text-gray-600">Software Engineer & UI Designer. Obsessed with clean code and pixel-perfect interfaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogDetails;