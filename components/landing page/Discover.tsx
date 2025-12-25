"use client";

import Link from "next/link";
import { ArrowRight, Code, Trophy, PenTool } from "lucide-react";

const Discover = () => {
    return (
        <section id="discover" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(45deg, #000 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                        Explore <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                            The Archives.
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                        Dive into my digital garden. From full-scale applications to weekend hackathon sprints and written thoughts.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
                    
                    {/* Projects Card - Large */}
                    <Link href="/projects" className="group relative lg:col-span-2 bg-black rounded-3xl p-8 flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500">
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                             style={{ backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                        />
                        <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                            <Code className="w-64 h-64 text-white" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                <Code className="w-6 h-6 text-white group-hover:text-black" />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">Projects</h3>
                            <p className="text-gray-400 max-w-md group-hover:text-gray-300 transition-colors">
                                A collection of web applications, tools, and experiments built with modern tech stacks.
                            </p>
                        </div>

                        <div className="relative z-10 flex items-center gap-2 text-white font-medium mt-8 group-hover:gap-4 transition-all duration-300">
                            <span>View Portfolio</span>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </Link>

                    <div className="flex flex-col gap-6 lg:col-span-1 h-full">
                        
                        {/* Hackathons Card */}
                        <Link href="/hackathons" className="group relative flex-1 bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-black hover:bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden">
                            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:rotate-12">
                                <Trophy className="w-32 h-32" />
                            </div>
                            
                            <div>
                                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                    <Trophy className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Hackathons</h3>
                            </div>
                            
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-sm text-gray-500 font-medium">48h Sprints & Wins</p>
                                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>

                        {/* Blog Card */}
                        <Link href="/blogs" className="group relative flex-1 bg-white rounded-3xl p-8 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                            <div>
                                <div className="w-10 h-10 border-2 border-current rounded-full flex items-center justify-center mb-4">
                                    <PenTool className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-bold">Blog</h3>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-sm opacity-70 font-medium">Thoughts & Tutorials</p>
                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover;
