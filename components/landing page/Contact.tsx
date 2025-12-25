"use client";

import { ArrowRight, Mail, Github, Linkedin, Twitter, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("hello@example.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
            {/* Background Pattern */}
             <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Left Column: Info */}
                    <div className="space-y-10">
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                                Let's <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                                    Connect.
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-md font-light leading-relaxed">
                                Have a project in mind? Want to discuss the latest tech? 
                                Or just want to say hi? My inbox is always open.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div 
                                onClick={copyEmail}
                                className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-black hover:shadow-lg transition-all duration-300 cursor-pointer"
                            >
                                <div className="p-3 bg-white rounded-full border border-gray-100 group-hover:bg-black group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Me</p>
                                    <Link className="text-lg font-medium text-gray-900" href="mailto:utibeabasiekpenyong@gmail.com">utibeabasiekpenyong@gmail.com</Link>
                                </div>
                                <div className="text-gray-400 group-hover:text-black transition-colors">
                                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {[
                                    { icon: Github, href: "https://github.com/yhtiee" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/utibeabasi-ekpenyong-4768a017a/" },
                                    { icon: Twitter, href: "https://x.com/Yhutiee_dev" }
                                ].map((social, i) => (
                                    <a 
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 rounded-full bg-gray-50 border border-gray-100 text-gray-600 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-xl relative overflow-hidden group hover:border-black transition-colors duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 z-0 transition-transform group-hover:scale-110" />
                        
                        <form className="relative z-10 space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Name</label>
                                <input 
                                    id="name" 
                                    type="text"
                                    placeholder="John Doe" 
                                    className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Email</label>
                                <input 
                                    id="email" 
                                    type="email" 
                                    placeholder="john@example.com" 
                                    className="flex h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Message</label>
                                <textarea 
                                    id="message" 
                                    placeholder="Tell me about your project..." 
                                    className="flex min-h-[150px] w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all"
                                />
                            </div>
                            <Button size="lg" className="w-full h-14 text-lg bg-black text-white hover:bg-gray-800 rounded-xl transition-all hover:-translate-y-1 shadow-lg">
                                Send Message
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </form>
                    </div>

                </div>

                {/* Footer */}
                <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} UT. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Crafted with <span className="text-red-500">♥</span> and <span className="font-bold text-black">Code</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact;
