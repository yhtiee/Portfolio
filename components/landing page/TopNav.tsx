"use client"

import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./MobileMenu"
import { Briefcase, Code, Mail, FileText, User } from "lucide-react";

const TopNav = () => {

    const menuItems = [
        { name: 'About', href: '/#about', icon: User },
        { name: 'Technologies', href: '/#technologies', icon: Code },
        { name: 'Companies', href: '/#companies', icon: Code },
        { name: 'Discover', href: '/#discover', icon: Briefcase },
        { name: 'Contact', href: '/#contact', icon: Mail },
        { name: 'Resume', href: '/resume', icon: FileText },
    ];

    return (
        <nav className="fixed top-0 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <div className="flex-shrink-0 group">
                    <Image 
                        src='/main-logo.png'
                        width={100}
                        height={100}
                        alt="logo"
                        className="w-auto h-12 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 cursor-pointer"
                        onClick={() => window.location.href = '/'}
                    />
                </div>

                <div className="hidden md:flex items-center gap-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-gray-600 transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <item.icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="md:hidden">
                    <MobileMenu />
                </div>
                
            </div>
        </nav>
    )
}

export default TopNav