import { education, skillGroups, softSkills } from "@/constants/resume";

export default function Skills() {
    return (
        <section id="skills" aria-labelledby="skills-heading" className="py-14 md:py-20 border-t border-border scroll-mt-20">
            <h2 id="skills-heading" className="mb-8 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                Skills
            </h2>

            {/* Technical: one row per area, strongest first */}
            <dl className="grid grid-cols-1 sm:grid-cols-[132px_1fr] gap-x-6 gap-y-1 sm:gap-y-4">
                {skillGroups.map((group) => (
                    <div key={group.label} className="contents">
                        <dt className="mt-3 sm:mt-0 font-mono text-[12px] text-subtle sm:pt-0.5">{group.label}</dt>
                        <dd className="text-[15px] leading-relaxed">{group.items.join(", ")}</dd>
                    </div>
                ))}
                {education.map((item) => (
                    <div key={item.institution} className="contents">
                        <dt className="mt-3 sm:mt-0 font-mono text-[12px] text-subtle sm:pt-0.5">Education</dt>
                        <dd className="text-[15px] leading-relaxed">
                            {item.degree}, {item.institution}{" "}
                            <span className="font-mono text-[12px] text-subtle">{item.period.replace(" - ", " – ")}</span>
                        </dd>
                    </div>
                ))}
            </dl>

            {/* Soft skills, each with a line of proof from real work */}
            <h3 className="mt-14 mb-6 font-mono text-[11px] uppercase tracking-[0.08em] text-subtle">Soft skills</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {softSkills.map((skill) => (
                    <li key={skill.label} className="space-y-1">
                        <p className="text-[15px] font-medium">{skill.label}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{skill.detail}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
