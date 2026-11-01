import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import LocalTime from "@/components/site/LocalTime";
import { education, skillGroups, softSkills } from "@/constants/resume";
import { site } from "@/constants/site";
import { cn } from "@/lib/utils";
import ContactActions from "../shared/ContactActions";
import { Eyebrow, Tags } from "../shared/CaseStudy";
import { contracts, period, proofCompanies, roles, socialLinks, stats } from "../shared/data";
import ProjectRows from "./ProjectRows";

const VISIBLE_POINTS = 1;

export const SectionHead = ({ id, index, title, note }: { id: string; index: string; title: string; note?: string }) => (
    <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-foreground pb-3">
        <h2 id={`${id}-heading`} className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">
            <span className="mr-3 font-mono text-[12px] font-normal tabular-nums text-subtle">{index}</span>
            {title}
        </h2>
        {note && <p className="hidden text-[13px] text-muted-foreground sm:block">{note}</p>}
    </div>
);

const Logo = ({ src }: { src?: string }) => (
    <span className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white">
        {src ? <Image src={src} alt="" width={20} height={20} className="rounded-[3px] object-contain" /> : null}
    </span>
);

export function About() {
    return (
        <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
            <h2 id="about-heading" className="sr-only">
                About
            </h2>
            <p className="max-w-[64ch] text-[17px] leading-[1.65] tracking-[-0.01em] text-foreground/85">{site.about}</p>

            <dl className="mt-8 grid grid-cols-2 border-y border-border sm:grid-cols-4">
                {stats.map((s, i) => (
                    <div
                        key={s.label}
                        className={cn(
                            "py-4 pr-4",
                            i % 2 === 1 && "border-l border-border pl-4",
                            i >= 2 && "border-t border-border sm:border-t-0",
                            i > 0 && "sm:border-l sm:pl-4"
                        )}
                    >
                        <dt className="sr-only">{s.label}</dt>
                        <dd>
                            <span className="block text-2xl font-semibold tracking-[-0.03em] tabular-nums">{s.value}</span>
                            <span className="mt-0.5 block text-[12px] text-muted-foreground">{s.label}</span>
                        </dd>
                    </div>
                ))}
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Eyebrow>Shipped at</Eyebrow>
                {proofCompanies.map((c) => (
                    <span key={c.id} className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground">
                        {c.logo && <Image src={c.logo} alt="" width={16} height={16} className="rounded-[3px] object-contain" />}
                        {c.name}
                    </span>
                ))}
            </div>
        </section>
    );
}

export function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24">
            <SectionHead id="experience" index="01" title="Experience" note="Roles, newest first" />
            <ol className="space-y-8">
                {roles.map((role) => {
                    const more = role.points.slice(VISIBLE_POINTS);
                    const bullet = (p: string, i: number) => (
                        <li key={i} className="grid grid-cols-[12px_1fr] gap-2 text-[14px] leading-relaxed text-muted-foreground">
                            <span className="mt-[0.7em] h-px w-2 bg-subtle" aria-hidden />
                            <span>{p}</span>
                        </li>
                    );
                    return (
                        <li key={role.companyId + role.role} className="grid gap-x-6 gap-y-2 sm:grid-cols-[120px_1fr]">
                            <p className="font-mono text-[12px] leading-6 tabular-nums text-subtle">
                                {period(role.period)}
                                {role.type && <span className="block">{role.type}</span>}
                            </p>
                            <div className="min-w-0 space-y-2.5">
                                <div className="flex items-start gap-3">
                                    <Logo src={role.logo} />
                                    <div className="min-w-0">
                                        <h3 className="text-[15px] font-medium leading-snug">{role.role}</h3>
                                        <p className="text-[13px] text-muted-foreground">
                                            {role.companyName} · {role.location}
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-1.5">{role.points.slice(0, VISIBLE_POINTS).map(bullet)}</ul>
                                {more.length > 0 && (
                                    <details className="group/more">
                                        <summary className="inline-flex min-h-8 cursor-pointer list-none items-center font-mono text-[12px] text-muted-foreground hover:text-foreground">
                                            <span className="group-open/more:hidden">+{more.length} more</span>
                                            <span className="hidden group-open/more:inline">Show less</span>
                                        </summary>
                                        <ul className="mt-1 space-y-1.5">{more.map(bullet)}</ul>
                                    </details>
                                )}
                                <Tags tags={role.technologies} max={7} />
                            </div>
                        </li>
                    );
                })}
            </ol>

            <div className="mt-12">
                <Eyebrow className="mb-4">Contract engagements</Eyebrow>
                <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
                    {contracts.map((c) => (
                        <li key={c.companyId} className="space-y-2 bg-background p-4">
                            <div className="flex items-center gap-3">
                                <Logo src={c.logo} />
                                <div className="min-w-0">
                                    <p className="text-[14px] font-medium">{c.companyName}</p>
                                    <p className="text-[12px] text-muted-foreground">{c.location}</p>
                                </div>
                            </div>
                            <p className="text-[13px] leading-relaxed text-muted-foreground line-clamp-3">{c.points[0]}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function Projects() {
    return (
        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24">
            <SectionHead id="projects" index="02" title="Projects" note="Open any row for the case study" />
            <ProjectRows />
        </section>
    );
}

export function Skills() {
    return (
        <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24">
            <SectionHead id="skills" index="03" title="Skills" note="Strongest first" />
            <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[120px_1fr]">
                {skillGroups.map((g) => (
                    <div key={g.label} className="contents">
                        <dt className="mt-2 font-mono text-[12px] text-subtle sm:mt-0 sm:pt-0.5">{g.label}</dt>
                        <dd className="text-[14px] leading-relaxed">{g.items.join(", ")}</dd>
                    </div>
                ))}
                {education.map((e) => (
                    <div key={e.institution} className="contents">
                        <dt className="mt-2 font-mono text-[12px] text-subtle sm:mt-0 sm:pt-0.5">Education</dt>
                        <dd className="text-[14px] leading-relaxed">
                            {e.degree}, {e.institution} <span className="font-mono text-[12px] text-subtle">{period(e.period)}</span>
                        </dd>
                    </div>
                ))}
            </dl>
            <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {softSkills.map((s) => (
                    <li key={s.label} className="space-y-1">
                        <p className="text-[14px] font-medium">{s.label}</p>
                        <p className="text-[13px] leading-relaxed text-muted-foreground">{s.detail}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export function Contact() {
    return (
        <footer id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
            <SectionHead id="contact" index="04" title="Contact" />
            <p className="max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
                Hiring for a senior, lead or backend role, or building something that needs an engineer who can own it end to
                end? Email is the fastest way to reach me.
            </p>
            <a
                href={`mailto:${site.email}`}
                className="mt-5 block break-all text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium tracking-[-0.02em] underline decoration-border-strong underline-offset-[6px] hover:decoration-foreground"
            >
                {site.email}
            </a>
            <ContactActions className="mt-5" socials={false} />
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {socialLinks.map((l) => (
                    <li key={l.label}>
                        <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-8 items-center gap-1 text-muted-foreground hover:text-foreground"
                        >
                            {l.label} <ArrowUpRight className="size-3.5" aria-hidden />
                            <span className="sr-only">(opens in new tab)</span>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="mt-14 flex flex-wrap justify-between gap-2 font-mono text-[12px] text-subtle">
                <p>
                    © {new Date().getFullYear()} {site.name}
                </p>
                <p>
                    {site.location} · <LocalTime timeZone={site.timeZone} />
                </p>
            </div>
        </footer>
    );
}
