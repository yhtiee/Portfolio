"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, Cloud, Globe, Shield, Zap, Rocket } from "lucide-react";
import Image from "next/image";

const Companies = () => {
    // Placeholder data - Replace icons with <Image /> for actual logos
    // The 'color' class simulates the brand color reveal on hover
    const companies = [
        {
            name: "Home Grid",
            role: "Fullstack Developer, Engineering Lead",
            url: "https://www.linkedin.com/company/home-grid/",
            icon: ({ className }: { className?: string }) => (
                <Image
                    src='/homegrid-logo.jpg'
                    width={32}
                    height={32}
                    alt="home-grid-logo"
                    className={`object-contain ${className}`}
                />
            ),
            color: "text-green-500"
        },
        {
            name: "Spurt",
            role: "Backend Engineer",
            url: "https://www.linkedin.com/company/spurtgroup/",
            icon: ({ className }: { className?: string }) => (
                <Image
                    src='/spurtgroup_logo.jpg'
                    width={32}
                    height={32}
                    alt="spurt-logo"
                    className={`object-contain ${className}`}
                />
            ),
            color: "text-green-500"
        },
        {
            name: "CVtoCareer",
            role: "Fullstack Developer, Automations Engineer and Engineering Lead",
            url: "https://www.linkedin.com/company/cvtocareer/",
            icon: ({ className }: { className?: string }) => (
                <Image
                    src='/cvtocareer_logo.jpg'
                    width={32}
                    height={32}
                    alt="cvtocareer-logo"
                    className={`object-contain ${className}`}
                />
            ),
            color: "text-indigo-500"
        },
        {
            name: "Zedi Inc",
            role: "Frontend Engineer",
            url: "https://www.linkedin.com/company/thezedi-inc/",
            icon: ({ className }: { className?: string }) => (
                <Image
                    src='/zedi-logo.jpg'
                    width={32}
                    height={32}
                    alt="zedi-logo"
                    className={`object-contain ${className}`}
                />
            ),
            color: "text-orange-500"
        },
        {
            name: "The Roothub",
            role: "Fullstack Developer Tutor",
            url: "https://www.linkedin.com/company/the-roothub/",
            icon: ({ className }: { className?: string }) => (
                <Image
                    src='/roothub-logo.jpg'
                    width={32}
                    height={32}
                    alt="roothub-logo"
                    className={`object-contain ${className}`}
                />
            ),
            color: "text-yellow-500"
        },
        {
            name: "Trusted Partners",
            role: "Backend Engineer",
            url: "https://www.linkedin.com/company/trstd-prtnrs/",
            icon: ({ className }: { className?: string }) => (
                <Image
                    src='/trstd_prtnrs_logo.jpg'
                    width={32}
                    height={32}
                    alt="home-grid-logo"
                    className={`object-contain ${className}`}
                />
            ),
            color: "text-blue-500"
        },
    ];

    return (
        <section id="companies" className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                            Proudly <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                                Collaborated.
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-xl font-light">
                            I've had the privilege of leaving my digital fingerprints on these amazing organizations.
                        </p>
                    </div>
                    
                    <div className="hidden md:block pb-2">
                        <div className="text-sm font-mono text-gray-400 rotate-3">
                            ( and counting... ) 
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companies.map((company, index) => (
                        <Link 
                            href={company.url} 
                            key={index}
                            target="_blank"
                            className="group relative h-64 bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col justify-between transition-all duration-500 hover:bg-black hover:border-black hover:shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <ArrowUpRight className="w-6 h-6 text-white" />
                            </div>

                            {/* Logo Container - Grayscale by default, Color on hover */}
                            <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0 ${company.color}`}>
                                <company.icon className="w-8 h-8" />
                            </div>

                            <div className="space-y-1 relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                                    {company.name}
                                </h3>
                                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                                    {company.role}
                                </p>
                            </div>
                        </Link>
                    ))}

                    {/* The "You?" Card */}
                    <Link 
                        href="#contact"
                        className="group relative h-64 bg-white rounded-3xl border-2 border-dashed border-gray-200 p-8 flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-black hover:bg-gray-50"
                    >
                        <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">👋</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Your Company</h3>
                        <p className="text-sm text-gray-500 mt-2">Let's build something great.</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Companies;
