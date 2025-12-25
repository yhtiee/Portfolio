"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    image: string;
    slug: string;
}

const BlogCard = ({ title, excerpt, date, readTime, tags, image, slug }: BlogPost) => {
    return (
        <Link href={`/blog/${slug}`} className="group relative bg-white border-2 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            {/* Image Section */}
            <div className="relative h-56 w-full overflow-hidden border-b-2 border-black bg-gray-100">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight group-hover:underline decoration-2 underline-offset-4 leading-tight">
                    {title}
                </h3>
                
                <p className="text-gray-600 line-clamp-3 leading-relaxed text-sm">
                    {excerpt}
                </p>
                
                <div className="pt-4 mt-auto border-t border-gray-100 flex items-center text-sm font-bold group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;