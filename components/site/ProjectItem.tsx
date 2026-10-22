import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { projectSlug } from "@/constants/site";
import type { Project } from "@/constants/types";

// The collapsed row only needs a teaser: the first sentence of the subtitle.
const firstSentence = (text = "") => text.split(/(?<=[.!?])\s+/)[0];

const Label = ({ children }: { children: React.ReactNode }) => (
    <h6 className="font-mono text-[11px] uppercase tracking-[0.08em] text-subtle">{children}</h6>
);

/**
 * Project dates are kept in the data but not shown: the role above already gives the
 * timeline, and per-project dates only highlight overlapping work.
 *
 * A project as a native <details> row: zero JS to expand, keyboard and find-in-page
 * friendly, and deep-linkable via its article id (/#slug). Screenshots inside a closed
 * <details> aren't rendered, so they only download once a visitor opens the project.
 */
export default function ProjectItem({ project }: { project: Project }) {
    const slug = projectSlug(project);
    const meta = [project.role, project.team].filter(Boolean).join(" · ");
    const links = [
        ...(project.demoUrl ? [{ label: "Live site", href: project.demoUrl }] : []),
        ...(project.repoUrl ? [{ label: "Code", href: project.repoUrl }] : []),
        ...(project.links ?? []),
    ];

    return (
        <article id={slug} className="scroll-mt-20 border-t border-border first:border-t-0">
            <details className="project group/project" suppressHydrationWarning>
                <summary className="list-none cursor-pointer -mx-3 px-3 py-4 rounded-md grid grid-cols-[1fr_auto] items-start gap-4 hover:bg-muted transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                    <div className="min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <h5 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">{project.title}</h5>
                            {project.status && (
                                <span className={`rounded-full border px-2 py-px font-mono text-[10px] uppercase tracking-wide ${
                                    project.status.startsWith("Live") ? "border-foreground text-foreground" : "border-border-strong text-muted-foreground"
                                }`}>
                                    {project.status}
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-1">
                            {firstSentence(project.subtitle || project.description)}
                        </p>
                        {meta && <p className="font-mono text-[11px] text-subtle">{meta}</p>}
                    </div>
                    <div className="flex items-center gap-3 pt-0.5 font-mono text-[12px] text-subtle tabular-nums">
                        <span className="flex size-6 items-center justify-center rounded-md border border-border text-foreground group-hover/project:border-border-strong">
                            <Plus className="size-3.5 transition-transform duration-200 group-open/project:rotate-45" aria-hidden />
                        </span>
                    </div>
                </summary>

                <div className="pb-10 pt-3 space-y-8">
                    {project.image && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
                            <Image
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                fill
                                loading="lazy"
                                sizes="(min-width: 768px) 672px, 100vw"
                                className="object-cover object-top"
                            />
                        </div>
                    )}

                    <div className="space-y-4">
                        {project.description && (
                            <p className="text-[15px] leading-[1.65] text-muted-foreground max-w-[62ch]">{project.description}</p>
                        )}
                        <dl className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px]">
                            {[
                                ["Role", project.role],
                                ["Team", project.team],
                            ]
                                .filter(([, value]) => value)
                                .map(([label, value]) => (
                                    <div key={label} className="flex gap-2">
                                        <dt className="text-subtle">{label}</dt>
                                        <dd className="text-foreground">{value}</dd>
                                    </div>
                                ))}
                        </dl>
                    </div>

                    {/* Outcomes first: what changed for users or the business. */}
                    {project.impact && project.impact.length > 0 && (
                        <div className="space-y-3">
                            <Label>Impact</Label>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.impact.map((item, i) => (
                                    <li key={i} className="rounded-lg border border-border bg-muted/60 px-4 py-3 text-[14px] leading-snug text-foreground">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.myRole && project.myRole.length > 0 && (
                        <div className="space-y-3">
                            <Label>What I did</Label>
                            <ul className="space-y-2">
                                {project.myRole.map((item, i) => (
                                    <li key={i} className="grid grid-cols-[12px_1fr] gap-2 text-[14px] leading-relaxed text-foreground/85">
                                        <span className="mt-[0.7em] h-px w-2 bg-subtle" aria-hidden />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.challenges && project.challenges.length > 0 ? (
                        <div className="space-y-3">
                            <Label>Hard problems</Label>
                            <div className="divide-y divide-border border-y border-border">
                                {project.challenges.map((item) => (
                                    <div key={item.title} className="py-4 space-y-2">
                                        <h6 className="text-[14px] font-medium">{item.title}</h6>
                                        <p className="text-[13px] leading-relaxed text-muted-foreground">{item.problem}</p>
                                        <p className="text-[13px] leading-relaxed text-foreground/85">
                                            <span className="font-mono text-subtle" aria-hidden>→ </span>
                                            {item.approach}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        (project.challenge || project.solution) && (
                            <div className="space-y-3">
                                <Label>Challenge &amp; approach</Label>
                                {project.challenge && <p className="text-[13px] leading-relaxed text-muted-foreground">{project.challenge}</p>}
                                {project.solution && <p className="text-[13px] leading-relaxed text-foreground/85 whitespace-pre-line">{project.solution}</p>}
                            </div>
                        )
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-4">
                        {project.tags && project.tags.length > 0 && (
                            <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                                {project.tags.map((tag) => (
                                    <li key={tag} className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {links.length > 0 && (
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                                {links.map((link) => (
                                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium underline underline-offset-4 decoration-border-strong hover:decoration-foreground">
                                        {link.label} <ArrowUpRight className="size-3.5" aria-hidden />
                                        <span className="sr-only">(opens in new tab)</span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </details>
        </article>
    );
}
