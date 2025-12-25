"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Trophy, ArrowRight } from "lucide-react";

interface HackProps {
    title: string;
    description: string;
    date: string;
    award: string;
    tags: string[];
    image: string;
    location: string;
    projectUrl?: string;
}

const HackCard = ({ title, description, date, award, tags, image, projectUrl }: HackProps) => {
    return (
        <div className="group relative bg-white border-2 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden border-b-2 border-black bg-gray-100">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                
                {/* Award Badge */}
                <div className="absolute top-4 left-4 z-20 bg-black text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
                    <Trophy className="w-3 h-3 text-yellow-400" />
                    {award}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {date}
                        </p>
                        <h3 className="text-xl font-bold tracking-tight group-hover:underline decoration-2 underline-offset-4">{title}</h3>
                    </div>
                </div>

                <p className="text-gray-600 line-clamp-3 leading-relaxed text-sm">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    {tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 text-[10px] font-bold border border-gray-200 rounded-md bg-gray-50 uppercase tracking-wider text-gray-600">
                            {tag}
                        </span>
                    ))}
                </div>
                
                {projectUrl && (
                    <div className="pt-4 border-t border-gray-100">
                         <Link href={projectUrl} className="flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all">
                            View Submission <ArrowRight className="w-4 h-4" />
                         </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HackCard;
