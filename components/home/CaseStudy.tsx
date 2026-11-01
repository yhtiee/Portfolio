import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectEntry } from "./data";

export const Eyebrow = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <p className={cn("font-mono text-[11px] uppercase tracking-[0.08em] text-subtle", className)}>{children}</p>
);

export const ExternalLinks = ({ links, className }: { links: ProjectEntry["links"]; className?: string }) =>
    links.length > 0 ? (
        <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-2 text-sm", className)}>
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-8 items-center gap-1 font-medium underline decoration-border-strong underline-offset-4 hover:decoration-foreground"
                >
                    {link.label} <ArrowUpRight className="size-3.5" aria-hidden />
                    <span className="sr-only">(opens in new tab)</span>
                </a>
            ))}
        </div>
    ) : null;

export const Tags = ({ tags, max, className }: { tags?: string[]; max?: number; className?: string }) => {
    if (!tags?.length) return null;
    const shown = max ? tags.slice(0, max) : tags;
    const rest = tags.length - shown.length;
    return (
        <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label="Technologies">
            {shown.map((tag) => (
                <li key={tag} className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {tag}
                </li>
            ))}
            {rest > 0 && <li className="px-1 py-0.5 font-mono text-[11px] text-subtle">+{rest}</li>}
        </ul>
    );
};

/**
 * The full case study for one project. `wide` puts the screenshot and facts in a side
 * column on large screens so an expanded project costs height once, not three times.
 */
export default function CaseStudy({
    entry,
    layout = "wide",
    showImage = true,
}: {
    entry: ProjectEntry;
    /** wide: two columns from lg; wide-xl: two columns from xl (for narrower containers); stack: one column. */
    layout?: "wide" | "wide-xl" | "stack";
    showImage?: boolean;
}) {
    const { project } = entry;
    const grid = {
        wide: "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10",
        "wide-xl": "xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:gap-10",
        stack: "",
    }[layout];
    const stick = { wide: "lg:sticky lg:top-24 lg:self-start", "wide-xl": "xl:sticky xl:top-24 xl:self-start", stack: "" }[layout];

    const facts = [
        ["Role", project.role],
        ["Team", project.team],
        ["When", entry.year],
        ["For", entry.company?.name],
    ].filter(([, v]) => v) as [string, string][];

    return (
        <div className={cn("grid gap-8", grid)}>
            {/* Side: picture, facts, stack, links */}
            <div className={cn("space-y-5", stick)}>
                {showImage && project.image && (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted">
                        <Image
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            fill
                            loading="lazy"
                            sizes="(min-width: 1024px) 520px, 100vw"
                            className="object-cover object-top"
                        />
                    </div>
                )}
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[13px]">
                    {facts.map(([label, value]) => (
                        <div key={label} className="contents">
                            <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-subtle pt-0.5">{label}</dt>
                            <dd className="text-foreground">{value}</dd>
                        </div>
                    ))}
                </dl>
                <Tags tags={project.tags} />
                <ExternalLinks links={entry.links} />
            </div>

            {/* Main: story, outcomes, my part, hard problems */}
            <div className="min-w-0 space-y-7">
                {project.description && (
                    <p className="max-w-[68ch] text-[15px] leading-[1.65] text-muted-foreground">{project.description}</p>
                )}

                {project.impact && project.impact.length > 0 && (
                    <div className="space-y-3">
                        <Eyebrow>Impact</Eyebrow>
                        <ul className="grid gap-2 sm:grid-cols-2">
                            {project.impact.map((item, i) => (
                                <li key={i} className="rounded-lg border border-border bg-muted/60 px-3.5 py-3 text-[14px] leading-snug">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.myRole && project.myRole.length > 0 && (
                    <div className="space-y-3">
                        <Eyebrow>What I did</Eyebrow>
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
                        <Eyebrow>Hard problems</Eyebrow>
                        <div className={cn("grid gap-px overflow-hidden rounded-lg border border-border bg-border", layout === "wide" && "xl:grid-cols-2")}>
                            {project.challenges.map((item) => (
                                <div key={item.title} className="space-y-2 bg-background p-4">
                                    <p className="text-[14px] font-medium">{item.title}</p>
                                    <p className="text-[13px] leading-relaxed text-muted-foreground">{item.problem}</p>
                                    <p className="text-[13px] leading-relaxed text-foreground/85">
                                        <span className="font-mono text-subtle" aria-hidden>
                                            →{" "}
                                        </span>
                                        {item.approach}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    (project.challenge || project.solution) && (
                        <div className="space-y-3">
                            <Eyebrow>Challenge &amp; approach</Eyebrow>
                            {project.challenge && <p className="text-[13px] leading-relaxed text-muted-foreground">{project.challenge}</p>}
                            {project.solution && (
                                <p className="whitespace-pre-line text-[13px] leading-relaxed text-foreground/85">{project.solution}</p>
                            )}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
