"use client";

import EmptyState from "../EmptyState";
import HackCard from "./HackCard";
import { Trophy } from "lucide-react";

const hacks = [
    {
        title: "Global AI Hackathon",
        description: "Built a generative AI tool for accessibility. Used GPT-4 to describe images for visually impaired users in real-time.",
        date: "Oct 2023",
        award: "1st Place",
        tags: ["OpenAI", "React Native", "Python"],
        image: "/profile.png",
        location: "San Francisco (Remote)",
        projectUrl: "/hackathon/1"
    },
    {
        title: "FinTech Disrupt",
        description: "Created a decentralized peer-to-peer lending platform focused on micro-loans for emerging markets.",
        date: "June 2023",
        award: "Best UI/UX",
        tags: ["Solidity", "Next.js", "Web3"],
        image: "/profile.png",
        location: "London",
        projectUrl: "/hackathon/2"
    },
    {
        title: "HealthHacks 2022",
        description: "Developed a wearable integration dashboard for monitoring patient vitals remotely.",
        date: "Nov 2022",
        award: "Finalist",
        tags: ["IoT", "Vue.js", "Node.js"],
        image: "/profile.png",
        location: "New York",
        projectUrl: "/hackathon/3"
    }
];

const HackListing = () => {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto relative">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-2">
                    <Trophy className="w-3 h-3 text-yellow-400" />
                    Hall of Fame
                </div>
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter">
                    Weekend <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
                        Warriors.
                    </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                    48 hours. Too much coffee. Not enough sleep. 
                    Here are the results of my rapid prototyping adventures.
                </p>
            </div>

            {/* <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hacks.map((hack, index) => (
                    <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                        <HackCard {...hack} />
                    </div>
                ))}
            </div> */}

            <div className="flex w-full justify-center items-center">
                <EmptyState
                    title="No hackathons available"
                    description="Hackathons will be updated soon"
                />
            </div>
        </section>
    );
};

export default HackListing;
