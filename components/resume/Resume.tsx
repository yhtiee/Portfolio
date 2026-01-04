import { Download, Mail, Github, Linkedin, MapPin, Globe } from "lucide-react";

export default function ResumeDocument() {

    const experience = [
        {
            company: "Home Grid (Texas, USA)",
            role: "Fullstack Developer & Engineering Lead",
            period: "2025 - Present",
            points: [
                "Lead a team of 3 developers to build a healthcare PWA, streamlining operations for medical facilities by automating shift management.",
                "Architected a secure document vault using Nest.js and Supabase, ensuring HIPAA compliance for sensitive patient records.",
                "Engineered AI-driven scheduling algorithms, reducing manual administrative workload by generating optimized employee shifts.",
                "Optimized application performance with Vite and Shadcn UI, achieving sub-second load times for critical hospital workflows."
            ],
            technologies: ["TypeScript", "Vite", "Nest.js", "Supabase", "AWS"]
        },
        {
            company: "CvtoCareer (Sydney, Australia)",
            role: "Engineering Lead",
            period: "2024 - 2025",
            points: [
                "Spearhead the migration from a monolithic architecture to micro-frontends, improving deployment frequency and code modularity.",
                "Scale job automation engines to process high-volume applications on LinkedIn and Indeed by optimizing Python web scrapers.",
                "Integrate Generative AI features using Gemini API, increasing user engagement by providing instant resume enhancements.",
                "Manage the full-stack deployment pipeline on Vercel, ensuring 99.9% uptime for career development tools."
            ],
            technologies: ["Next.js", "Material UI", "Redis", "MongoDB", "TypeScript", "Vercel"]
        },
        {
            company: "CvtoCareer (Sydney, Australia)",
            role: "Web Scrapping & Automation Engineer",
            period: "2023 - 2024",
            points: [
                "Deployed over 7+ automation engines, to automate job application for clients on major job listing sites",
                "Integrate question extraction and answering feature using AI, which increased job application speed time by 20% and increased success application rate by 50%",
                "Automated the aggregation of 50,000+ weekly job postings from major platforms by engineering robust web scrapers using Selenium and Puppeteer.",
                "Reduced data processing latency by 40% through the implementation of asynchronous scraping pipelines with Python and Playwright, managed via Redis message brokers.",
                "Deployed scalable scraping infrastructure on Digital Ocean using Docker containers, ensuring 99.9% system availability during peak data collection windows.",
                "Developed high-performance REST APIs using Flask to serve aggregated job market data, achieving sub-200ms response times for client applications."
            ],
            technologies: ["Python", "TypeScript", "Flask", "Selenium", "Playwright", "Puppeteer", "Redis", "PostgresSQL", "Digital Ocean", "Docker"]
        },
        {
            company: "Spurt (Delaware, USA)",
            role: "Backend Engineer",
            period: "2023 - 2024",
            points: [
                "Engineered a centralized SSO system using Python and Flask, unifying user access across the SpurtX ecosystem.",
                "Implemented Stripe subscription billing, enabling automated revenue collection and flexible payment tiers.",
                "Migrated legacy PHP backend services to Nest.js, improving API response times and system scalability.",
                "Designed complex PostgreSQL database schemas to support multi-tenant project management workflows."
            ],
            technologies: ["Python", "Flask", "PostgreSQL", "Docker", "Nest.js", "TypeScript", "AWS"]
        },
        {
            company: "Zedi Inc (Lagos, Nigeria)",
            role: "Frontend Engineer",
            period: "2023 - 2025",
            points: [
                "Built responsive marketing websites for clients like Arcpenter and Truq using Next.js, enhancing brand visibility and SEO rankings.",
                "Integrated Strapi Headless CMS, empowering non-technical teams to manage content updates without engineering support.",
                "Developed real-time collaboration features for the Scrollz platform, utilizing React Query for seamless data synchronization.",
                "Implemented complex UI animations with Framer Motion, delivering a polished and interactive user experience."
            ],
            technologies: ["Next.js", "Tailwind", "Strapi", "Framer Motion", "TypeScript"]
        },
        {
            company: "Trusted Partners (Riyadh, Saudi Arabia)",
            role: "Backend Engineer",
            period: "2021 - 2022",
            points: [
                "Developed scalable RESTful APIs using Django and Flask, supporting high-traffic web applications.",
                "Optimized database performance through query analysis in PostgreSQL, ensuring efficient data retrieval for client systems.",
                "Implemented automated testing suites using Jest, reducing production defects and ensuring code reliability."
            ],
            technologies: ["Django", "Flask", "Python", "PostgreSQL", "REST APIs"]
        },
        {
            company: "The Roothub (Uyo, Nigeria)",
            role: "Full Stack Developer & Tutor",
            period: "2020 - 2022",
            points: [
                "Mentored 50+ students to professional proficiency by designing and delivering a comprehensive Full Stack JavaScript curriculum.",
                "Developed the internal Learning Management System using React to help and support HR manual processes",
            ],
            technologies: ["React.js", "Django", "JavaScript", "Python", "MySQL"]
        }
    ];

    const skills = {
        languages: ["TypeScript", "JavaScript", "Python", "Solidity", "HTML/CSS"],
        frontend: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Vue.js", "Vite", "Material UI", "Shadcn UI"],
        backend: ["Node.js", "Nest.js", "Express", "Django", "GraphQL", "REST APIs", "Flask"],
        database: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
        tools: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Vercel", "Digital Ocean"],
        automation: ["Selenium", "Playwright", "Puppeteer", "Beautifulsoup", "Xpath"]
    };

    const education = [
        {
            institution: "University of Uyo",
            degree: "Bachelor of Engineering in Computer Engineering",
            period: "2017 - 2022"
        }
    ];

  return (
    <div id="resume-content" className="bg-white border border-gray-200 shadow-xl p-8 md:p-12 rounded-lg print:border-0 print:shadow-none print:p-0">
        {/* Resume Header */}
        <header className="border-b-2 border-gray-900 pb-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">Utibeabasi Ekpenyong</h1>
                    <p className="text-xl text-blue-700 font-semibold">Software Engineer</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-y-2 text-sm text-gray-600">
                    <a href="mailto:utibeabasiekpenyong@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Mail className="w-4 h-4 text-gray-400 print:text-blue-600" />
                        utibeabasiekpenyong@gmail.com
                    </a>
                    <a href="https://github.com/yhtiee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Github className="w-4 h-4 text-gray-400 print:text-blue-600" />
                        https://github.com/yhtiee
                    </a>
                    <a href="https://ut-software-engineer.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Globe className="w-4 h-4 text-gray-400 print:text-blue-600" />
                        https://ut-software-engineer.vercel.app/
                    </a>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        Remote / Worldwide
                    </div>
                </div>
            </div>
        </header>

        {/* Summary */}
        <section className="mb-10 break-inside-avoid">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-3 flex items-center gap-2">
                Professional Summary
                <span className="flex-1 h-[1px] bg-gray-200"></span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">
                Experienced Software Engineer specializing in full-stack development with a focus on building scalable, high-performance web applications. 
                Proven track record in engineering leadership, system architecture, and delivering complex solutions using modern technologies like 
                Next.js, Nest.js, and Cloud Infrastructure. Passionate about clean code, automation, and solving real-world problems.
            </p>
        </section>

        {/* Skills */}
        <section className="mb-10 break-inside-avoid">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-4 flex items-center gap-2">
                Technical Skills
                <span className="flex-1 h-[1px] bg-gray-200"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-[13px]">
                <div className="flex gap-2"><span className="font-bold text-gray-900 min-w-[85px]">Languages:</span> <span className="text-gray-700">{skills.languages.join(", ")}</span></div>
                <div className="flex gap-2"><span className="font-bold text-gray-900 min-w-[85px]">Frontend:</span> <span className="text-gray-700">{skills.frontend.join(", ")}</span></div>
                <div className="flex gap-2"><span className="font-bold text-gray-900 min-w-[85px]">Backend:</span> <span className="text-gray-700">{skills.backend.join(", ")}</span></div>
                <div className="flex gap-2"><span className="font-bold text-gray-900 min-w-[85px]">Database:</span> <span className="text-gray-700">{skills.database.join(", ")}</span></div>
                <div className="flex gap-2"><span className="font-bold text-gray-900 min-w-[85px]">Automation:</span> <span className="text-gray-700">{skills.automation.join(", ")}</span></div>
                <div className="flex gap-2"><span className="font-bold text-gray-900 min-w-[85px]">DevOps:</span> <span className="text-gray-700">{skills.tools.join(", ")}</span></div>
            </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center gap-2">
                Work Experience
                <span className="flex-1 h-[1px] bg-gray-200"></span>
            </h2>
            <div className="space-y-8">
                {experience.map((job, index) => (
                    <div key={index} className="break-inside-avoid">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-base font-bold text-gray-900">{job.role}</h3>
                            <span className="text-[13px] font-semibold text-gray-500 italic">{job.period}</span>
                        </div>
                        <div className="text-sm font-bold text-blue-700 mb-3">{job.company}</div>
                        <ul className="list-disc list-outside ml-4 space-y-1.5 mb-4">
                            {job.points.map((point, i) => (
                                <li key={i} className="text-[13px] text-gray-700 leading-snug pl-1">{point}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                            {job.technologies.map((tech, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-gray-100 font-bold text-gray-600 rounded print:bg-white print:border print:border-gray-200">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Education */}
        <section className="break-inside-avoid">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center gap-2">
                Education
                <span className="flex-1 h-[1px] bg-gray-200"></span>
            </h2>
            <div className="space-y-4">
                {education.map((edu, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-base font-bold text-gray-900">{edu.institution}</h3>
                            <span className="text-sm font-semibold text-gray-500 italic">{edu.period}</span>
                        </div>
                        <div className="text-sm font-medium text-gray-700">{edu.degree}</div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
}