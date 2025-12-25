"use client";

import { Database, Layout, Server, Settings, Cpu } from "lucide-react";

const Technologies = () => {
    const categories = [
        {
            title: "Frontend",
            icon: Layout,
            description: "Pixel-perfect experiences.",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Vue.js", "Vite", "Material UI", "Shadcn"]
        },
        {
            title: "Backend",
            icon: Server,
            description: "Scalable & secure logic.",
            skills: ["Node.js", "Express", "Python", "Django", "Nest.js", "GraphQL", "REST APIs"]
        },
        {
            title: "Database",
            icon: Database,
            description: "Data persistence & caching.",
            skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
        },
        {
            title: "DevOps & Tools",
            icon: Settings,
            description: "Deployment & workflow.",
            skills: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Vercel", "Jest", "GCP", "Netlify", "Render"]
        }
    ];

    return (
        <section id="technologies" className="py-24 bg-white relative overflow-hidden">
             {/* Background Elements */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 opacity-50" />
                <div className="absolute bottom-20 left-0 w-72 h-72 bg-gray-50 rounded-full blur-3xl -z-10 opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 space-y-4 text-center md:text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Toolkit.</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed md:mx-0">
                        From high-level abstractions to low-level systems, these are the instruments I use to compose software.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat) => (
                        <div 
                            key={cat.title} 
                            className="group bg-white border border-gray-200 rounded-3xl p-8 hover:border-black transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12">
                                <cat.icon className="w-32 h-32" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                        <cat.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{cat.title}</h3>
                                        <p className="text-sm text-gray-500 font-medium">{cat.description}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {cat.skills.map((skill) => (
                                        <span 
                                            key={skill} 
                                            className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm font-semibold text-gray-700 hover:bg-black hover:text-white hover:scale-105 transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fun "Currently Learning" Section */}
                <div className="mt-8 bg-black text-white rounded-3xl p-8 border border-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" 
                         style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                    />
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gray-800 rounded-2xl animate-pulse">
                                <Cpu className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">System Upgrade in Progress...</h3>
                                <p className="text-gray-400 text-sm">Exploring new horizons.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
                            <div className="w-full sm:w-64 space-y-2">
                                <div className="flex justify-between text-xs font-mono text-gray-400">
                                    <span>Solidity (Blockchain development)</span>
                                    <span>65%</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-white w-[65%] rounded-full relative overflow-hidden" />
                                </div>
                            </div>
                             <div className="w-full sm:w-64 space-y-2">
                                <div className="flex justify-between text-xs font-mono text-gray-400">
                                    <span>AI/ML</span>
                                    <span>40%</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-white w-[40%] rounded-full relative overflow-hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Technologies;
