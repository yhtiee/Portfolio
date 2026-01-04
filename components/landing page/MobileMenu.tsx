"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Briefcase, Code, Mail, FileText, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
    { name: 'About', href: '/#about', icon: User },
    { name: 'Technologies', href: '/#technologies', icon: Code },
    { name: 'Companies', href: '/#companies', icon: Code },
    { name: 'Discover', href: '/#discover', icon: Briefcase },
    { name: 'Contact', href: '/#contact', icon: Mail },
    { name: 'Resume', href: '/resume', icon: FileText },
];


const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-300">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-r border-gray-100 p-6">
                <SheetHeader className="mb-8 text-left">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <SheetDescription className="sr-only">Navigation links</SheetDescription>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(false)}>
                        <Image 
                            src='/main-logo.png'
                            width={100}
                            height={40}
                            alt="logo"
                            className="w-auto h-10"
                        />
                    </div>
                </SheetHeader>

                <div className="flex flex-col space-y-3">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="group flex items-center gap-4 p-3 rounded-2xl text-lg font-medium text-gray-600 transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:pl-5"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 group-hover:bg-gray-800 group-hover:text-white transition-colors duration-300">
                                <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                            </div>
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="absolute bottom-8 left-6 right-6">
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Get in touch</p>
                        <p className="text-sm font-medium text-gray-900">Let's build something together.</p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;
