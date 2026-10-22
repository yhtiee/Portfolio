import { Mail, Github, Linkedin, MapPin, Globe } from "lucide-react";
import { education, experience, resumeSkillGroups } from "@/constants/resume";
import { site } from "@/constants/site";

// On paper, roles that ended before this year shrink to their first bullet (no chips)
// so the PDF stays at 3 pages. The website still shows them in full.
const COMPACT_BEFORE_YEAR = 2023;
const isCompactOnPrint = (period?: string) => {
    const end = Number(period?.split(/\s*[-–]\s*/)[1]);
    return Number.isFinite(end) && end > 0 && end < COMPACT_BEFORE_YEAR;
};

export default function ResumeDocument() {
  return (
    <div id="resume-content" className="bg-white border border-gray-200 shadow-xl p-8 md:p-12 rounded-lg print:border-0 print:shadow-none print:p-0">
        {/* Resume Header */}
        <header className="border-b-2 border-gray-900 pb-6 mb-8 print:pb-4 print:mb-5">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">{site.name}</h1>
                    <p className="text-base text-gray-600 font-medium">{site.roleLine}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 print:flex print:flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                    <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-black transition-colors">
                        <Mail className="w-4 h-4 text-gray-400 print:text-gray-500" />
                        {site.email}
                    </a>
                    <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
                        <Github className="w-4 h-4 text-gray-400 print:text-gray-500" />
                        {site.socials.github.replace("https://", "")}
                    </a>
                    <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
                        <Linkedin className="w-4 h-4 text-gray-400 print:text-gray-500" />
                        {site.socials.linkedin.replace("https://www.", "").replace(/\/$/, "")}
                    </a>
                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
                        <Globe className="w-4 h-4 text-gray-400 print:text-gray-500" />
                        {site.url.replace("https://", "")}
                    </a>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {site.location} ({site.utcOffset}) · Remote · Full-time or contract
                    </div>
                </div>
            </div>
        </header>

        {/* Summary */}
        <section className="mb-10 print:mb-6 break-inside-avoid">
            <h2 className="text-sm font-black uppercase tracking-wide text-gray-900 mb-3 flex items-center gap-2">
                Professional Summary
                <span className="flex-1 h-[1px] bg-gray-200"></span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">{site.summary}</p>
        </section>

        {/* Experience */}
        {[
            { title: "Work Experience", jobs: experience.filter((job) => !job.contract) },
            { title: "Contract Work", jobs: experience.filter((job) => job.contract) },
        ]
            .filter((group) => group.jobs.length > 0)
            .map((group) => (
        <section key={group.title} className="mb-10 print:mb-6">
            <h2 className="text-sm font-black uppercase tracking-wide text-gray-900 mb-6 print:mb-4 flex items-center gap-2">
                {group.title}
                <span className="flex-1 h-[1px] bg-gray-200"></span>
            </h2>
            <div className="space-y-8 print:space-y-3">
                {group.jobs.map((job, index) => (
                    <div key={index}>
                        <div className="break-inside-avoid print:after:block print:after:h-20 print:after:-mb-20 print:after:content-['']">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-base font-bold text-gray-900">{job.role}</h3>
                            {(job.period || job.type) && (
                                <span className="text-[13px] font-semibold text-gray-500 italic pr-1 shrink-0 whitespace-nowrap">
                                    {[job.period, job.type].filter(Boolean).join(" · ")}
                                </span>
                            )}
                        </div>
                        <div className="text-sm font-bold text-gray-600 mb-3">{job.company}</div>
                        </div>
                        <ul className="list-disc list-outside ml-4 space-y-1.5 print:space-y-1 mb-4 print:mb-3">
                            {job.points.map((point, i) => (
                                <li key={i} className={`text-[13px] print:text-[12px] text-gray-700 leading-snug print:leading-[1.38] pl-1 break-inside-avoid ${i > 0 && (job.contract || isCompactOnPrint(job.period)) ? "print:hidden" : ""}`}>{point}</li>
                            ))}
                        </ul>
                        {/* Contract and older roles skip the chips on paper to keep the PDF at 3 pages. */}
                        <div className={`flex flex-wrap gap-1.5 break-inside-avoid ${job.contract || isCompactOnPrint(job.period) ? "print:hidden" : ""}`}>
                            {job.technologies.map((tech, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-gray-100 font-bold text-gray-600 rounded print:bg-white print:border print:border-gray-200">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
            ))}

        {/* Skills */}
        <section className="mb-10 print:mb-6 break-inside-avoid">
            <h2 className="text-sm font-black uppercase tracking-wide text-gray-900 mb-4 flex items-center gap-2">
                Technical Skills
                <span className="flex-1 h-[1px] bg-gray-200"></span>
            </h2>
            <div className="grid grid-cols-1 gap-y-2 print:gap-y-0.5 text-[13px] print:text-[11.5px] print:leading-[1.4]">
                {resumeSkillGroups.map((group) => (
                    <div key={group.label} className="flex gap-2"><span className="font-bold text-gray-900 min-w-[110px] shrink-0">{group.label}:</span> <span className="text-gray-700">{group.items.join(", ")}</span></div>
                ))}
            </div>
        </section>

        {/* Education */}
        <section className="mb-10 print:mb-0 break-inside-avoid">
            <h2 className="text-sm font-black uppercase tracking-wide text-gray-900 mb-6 print:mb-4 flex items-center gap-2">
                Education
                <span className="flex-1 h-[1px] bg-gray-200"></span>
            </h2>
            <div className="space-y-4">
                {education.map((edu, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-base font-bold text-gray-900">{edu.institution}</h3>
                            <span className="text-sm font-semibold text-gray-500 italic pr-1 shrink-0 whitespace-nowrap">{edu.period}</span>
                        </div>
                        <div className="text-sm font-medium text-gray-700">{edu.degree}</div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
}