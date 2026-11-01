"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import CaseStudy, { Eyebrow, Tags } from "../shared/CaseStudy";
import type { ProjectEntry } from "../shared/data";
import { experienceGroups, type ExperienceGroup } from "../shared/groups";
import { StatusText } from "../shared/TypeTag";

// The timeline holds employment only; contract and personal work live in their own column.
const employment = experienceGroups.filter((g) => g.kind === "work");
const contract = experienceGroups.filter((g) => g.kind === "contract");
const personal = experienceGroups.find((g) => g.kind === "personal");
const sideProjectCount = contract.reduce((n, g) => n + g.projects.length, 0) + (personal?.projects.length ?? 0);

const VISIBLE_POINTS = 2;
const SIDE_ID = "side-work";

const bullet = (p: string, i: number) => (
    <li key={i} className="grid grid-cols-[12px_1fr] gap-2 text-[14px] leading-relaxed text-muted-foreground">
        <span className="mt-[0.7em] h-px w-2 bg-subtle" aria-hidden />
        <span>{p}</span>
    </li>
);

const projectCount = (n: number) => (n === 1 ? "1 project" : `${n} projects`);

const shortPeriod = (p?: string) => (p ?? "").replace(/ – Present/, "–now").replace(/(\d{4}) – (\d{4})/, "$1–$2");

/** Real work type from the resume ("Full-time", "Part-time"); nothing when the data has none. */
const WorkType = ({ type }: { type?: string }) =>
    type ? (
        <span className="inline-flex h-5 shrink-0 items-center rounded-[3px] border border-border-strong px-1.5 font-mono text-[10px] uppercase leading-none tracking-[0.06em] text-muted-foreground">
            {type}
        </span>
    ) : null;

const Logo = ({ group, size = 32 }: { group: ExperienceGroup; size?: number }) => (
    <span
        className="flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white"
        style={{ width: size, height: size }}
    >
        {group.logo ? (
            <Image src={group.logo} alt="" width={size - 10} height={size - 10} className="object-contain" />
        ) : (
            <span className="font-mono text-[11px] font-medium text-black">{group.name.slice(0, 1)}</span>
        )}
    </span>
);

function useActiveSection(ids: string[]) {
    const [active, setActive] = useState(ids[0]);
    const key = ids.join(",");
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const hit = entries.find((e) => e.isIntersecting);
                if (hit) setActive(hit.target.id);
            },
            { rootMargin: "-25% 0px -65% 0px" }
        );
        key.split(",").forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [key]);
    return active;
}

const findProject = (slug: string) => {
    for (const g of experienceGroups) {
        const entry = g.projects.find((e) => e.slug === slug);
        if (entry) return { entry, group: g };
    }
    return null;
};

/**
 * V4: employment timeline (roles hold the projects built there) beside a separate column of
 * contract work (grouped by client) and personal products. Case studies open in a side sheet.
 */
export default function V4Timeline() {
    const [open, setOpen] = useState<Set<string>>(() => new Set([employment[0].id]));
    const [project, setProject] = useState<{ entry: ProjectEntry; group: ExperienceGroup } | null>(null);
    const [sheetOpen, setSheetOpen] = useState(false);

    const active = useActiveSection([...employment.map((g) => g.id), SIDE_ID]);
    const allOpen = employment.every((g) => open.has(g.id));

    const openProject = (entry: ProjectEntry, group: ExperienceGroup) => {
        setProject({ entry, group });
        setSheetOpen(true);
    };

    // Deep links: #xp-spurt opens that role; #carematch opens that project's case study.
    useEffect(() => {
        const apply = () => {
            const hash = decodeURIComponent(window.location.hash.slice(1));
            if (!hash) return;
            if (employment.some((g) => g.id === hash)) {
                setOpen((prev) => new Set(prev).add(hash));
                return;
            }
            const hit = findProject(hash);
            if (hit) {
                if (hit.group.kind === "work") setOpen((prev) => new Set(prev).add(hit.group.id));
                setProject(hit);
                setSheetOpen(true);
            }
        };
        apply();
        window.addEventListener("hashchange", apply);
        return () => window.removeEventListener("hashchange", apply);
    }, []);

    const toggle = (id: string) =>
        setOpen((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });

    const jump = (id: string) => {
        if (id !== SIDE_ID) setOpen((prev) => new Set(prev).add(id));
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    };

    const setAll = () => setOpen(allOpen ? new Set() : new Set(employment.map((g) => g.id)));

    const jumpLink = (id: string, children: React.ReactNode, className?: string) => (
        <a
            href={`#${id}`}
            onClick={(e) => {
                e.preventDefault();
                jump(id);
            }}
            aria-current={active === id ? "true" : undefined}
            className={className}
        >
            {children}
        </a>
    );

    const projectRow = (entry: ProjectEntry, group: ExperienceGroup, meta?: string) => (
        <button
            type="button"
            onClick={() => openProject(entry, group)}
            className="group/r flex w-full cursor-pointer items-start gap-3 rounded-md py-2 text-left transition-colors hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-ring"
        >
            <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                    <span className="text-[14px] font-medium">{entry.project.title}</span>
                    <StatusText status={entry.project.status} />
                </span>
                <span className="mt-0.5 text-[12px] leading-relaxed text-muted-foreground line-clamp-1">{entry.teaser}</span>
                {meta && <span className="block font-mono text-[11px] text-subtle">{meta}</span>}
            </span>
            <ChevronRight className="mt-1 size-4 shrink-0 text-subtle transition-transform group-hover/r:translate-x-0.5 group-hover/r:text-foreground" aria-hidden />
        </button>
    );

    return (
        <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-x-10 xl:grid-cols-[200px_minmax(0,1fr)_340px] 2xl:grid-cols-[230px_minmax(0,1fr)_400px] 2xl:gap-x-14">
            {/* Desktop navigation column */}
            <aside className="hidden lg:block">
                <div className="sticky top-8 flex max-h-[calc(100dvh-2rem)] flex-col gap-8 overflow-y-auto py-8">
                    <nav aria-label="Jump to role">
                        <div className="mb-3 flex items-center justify-between">
                            <Eyebrow>Experience</Eyebrow>
                            <button
                                type="button"
                                onClick={setAll}
                                className="cursor-pointer font-mono text-[11px] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                            >
                                {allOpen ? "Collapse all" : "Expand all"}
                            </button>
                        </div>
                        <ol className="space-y-px border-l border-border">
                            {employment.map((g) => (
                                <li key={g.id}>
                                    {jumpLink(
                                        g.id,
                                        <>
                                            <span className="truncate">{g.name}</span>
                                            <span className="shrink-0 font-mono text-[11px] font-normal text-subtle">{shortPeriod(g.period)}</span>
                                        </>,
                                        cn(
                                            "-ml-px flex items-center justify-between gap-2 border-l py-1.5 pl-3 text-[13px] transition-colors",
                                            active === g.id
                                                ? "border-foreground font-medium text-foreground"
                                                : "border-transparent text-muted-foreground hover:text-foreground"
                                        )
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {jumpLink(
                        SIDE_ID,
                        <>
                            <span>
                                <span className="block font-medium text-foreground">Contract &amp; personal</span>
                                <span className="block font-mono text-[11px] text-subtle">
                                    {contract.length} clients · {personal?.projects.length ?? 0} own products
                                </span>
                            </span>
                            <ArrowRight className="size-4 shrink-0" aria-hidden />
                        </>,
                        cn(
                            "flex items-center justify-between gap-3 rounded-md border px-3 py-2.5 text-[13px] transition-colors hover:border-foreground",
                            active === SIDE_ID ? "border-foreground" : "border-border"
                        )
                    )}
                </div>
            </aside>

            {/* Employment timeline */}
            <section id="experience" aria-labelledby="work-heading" className="min-w-0 scroll-mt-28 lg:scroll-mt-12">
                {/* Mobile/tablet section bar */}
                <div className="sticky top-8 z-30 -mx-5 border-b border-border bg-background/90 backdrop-blur-md md:-mx-8 lg:hidden">
                    <div className="flex items-center gap-1.5 overflow-x-auto px-5 py-2 md:px-8">
                        <a href="#experience" className="inline-flex h-10 shrink-0 items-center rounded-md border border-foreground px-3 text-[13px] font-medium">
                            Experience
                        </a>
                        <a
                            href={`#${SIDE_ID}`}
                            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-border px-3 text-[13px] text-muted-foreground"
                        >
                            Contract &amp; personal <span className="font-mono text-[11px] text-subtle">{sideProjectCount}</span>
                        </a>
                        <button
                            type="button"
                            onClick={setAll}
                            className="ml-auto inline-flex h-10 shrink-0 cursor-pointer items-center px-2 font-mono text-[12px] text-muted-foreground"
                        >
                            {allOpen ? "Collapse all" : "Expand all"}
                        </button>
                    </div>
                </div>

                <div className="flex items-baseline justify-between gap-4 pb-4 pt-6 lg:pt-8">
                    <h2 id="work-heading" className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                        Experience
                    </h2>
                    <p className="font-mono text-[12px] text-subtle">
                        {employment.length} roles · {employment.reduce((n, g) => n + g.projects.length, 0)} projects
                    </p>
                </div>

                <ol className="relative border-t border-foreground">
                    {employment.map((g) => {
                        const isOpen = open.has(g.id);
                        const panel = `${g.id}-panel`;
                        return (
                            <li
                                key={g.id}
                                id={g.id}
                                className="relative scroll-mt-28 border-b border-border sm:grid sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-x-6 lg:scroll-mt-12"
                            >
                                <div className="relative hidden pt-5 sm:block">
                                    <p className="font-mono text-[12px] leading-5 tabular-nums text-muted-foreground">{g.period}</p>
                                    <span aria-hidden className="absolute inset-y-0 right-0 w-px bg-border" />
                                    <span aria-hidden className="absolute right-[-4px] top-[26px] size-[9px] rounded-full bg-foreground" />
                                </div>

                                <div className="min-w-0 py-4 sm:py-5">
                                    <button
                                        type="button"
                                        onClick={() => toggle(g.id)}
                                        aria-expanded={isOpen}
                                        aria-controls={panel}
                                        className="group flex w-full cursor-pointer items-start gap-3 rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                                    >
                                        <Logo group={g} />
                                        <span className="min-w-0 flex-1">
                                            <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                                <span className="text-[16px] font-semibold tracking-[-0.01em]">{g.name}</span>
                                                <WorkType type={g.employment} />
                                            </span>
                                            <span className="mt-0.5 block text-[13px] text-muted-foreground">
                                                {g.role}
                                                {g.location && ` · ${g.location}`}
                                            </span>
                                            <span className="mt-0.5 block font-mono text-[11px] text-subtle sm:hidden">{g.period}</span>
                                            {!isOpen && (
                                                <span className="mt-2 text-[13px] text-muted-foreground line-clamp-2">
                                                    {g.projects.length > 0 ? (
                                                        <>
                                                            <span className="text-foreground">{g.projects.map((p) => p.project.title).join(" · ")}</span>
                                                            {g.summary && <span className="hidden md:inline"> — {g.summary}</span>}
                                                        </>
                                                    ) : (
                                                        g.summary
                                                    )}
                                                </span>
                                            )}
                                        </span>
                                        <span className="flex shrink-0 items-center gap-2 pt-0.5">
                                            <span className="hidden font-mono text-[11px] text-subtle md:inline">{projectCount(g.projects.length)}</span>
                                            <span className="flex size-8 items-center justify-center rounded-md border border-border group-hover:border-border-strong">
                                                <ChevronDown className={cn("size-4 transition-transform duration-200", isOpen && "rotate-180")} aria-hidden />
                                            </span>
                                        </span>
                                    </button>

                                    <div id={panel} hidden={!isOpen} className="mt-5 space-y-6 sm:pl-11">
                                        <div>
                                            <ul className="grid gap-y-2">{g.points.slice(0, VISIBLE_POINTS).map(bullet)}</ul>
                                            {g.points.length > VISIBLE_POINTS && (
                                                <details className="group/more mt-1">
                                                    <summary className="inline-flex min-h-8 cursor-pointer list-none items-center font-mono text-[12px] text-muted-foreground hover:text-foreground">
                                                        <span className="group-open/more:hidden">+{g.points.length - VISIBLE_POINTS} more highlights</span>
                                                        <span className="hidden group-open/more:inline">Show less</span>
                                                    </summary>
                                                    <ul className="mt-1 grid gap-y-2">{g.points.slice(VISIBLE_POINTS).map(bullet)}</ul>
                                                </details>
                                            )}
                                        </div>

                                        {g.projects.length > 0 ? (
                                            <div>
                                                <Eyebrow className="mb-3">Built here · {g.projects.length}</Eyebrow>
                                                <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                                                    {g.projects.map((entry) => (
                                                        <li key={entry.slug} className="bg-background">
                                                            <button
                                                                type="button"
                                                                onClick={() => openProject(entry, g)}
                                                                className="group/c flex h-full w-full cursor-pointer flex-col gap-2 p-4 text-left transition-colors hover:bg-muted/60 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
                                                            >
                                                                <span className="flex items-start justify-between gap-2">
                                                                    <span className="text-[15px] font-medium tracking-[-0.01em]">{entry.project.title}</span>
                                                                    <ArrowUpRight
                                                                        className="size-4 shrink-0 text-subtle transition-transform group-hover/c:-translate-y-0.5 group-hover/c:translate-x-0.5 group-hover/c:text-foreground"
                                                                        aria-hidden
                                                                    />
                                                                </span>
                                                                <StatusText status={entry.project.status} />
                                                                <span className="text-[13px] leading-relaxed text-muted-foreground line-clamp-2">{entry.teaser}</span>
                                                                <span className="mt-auto pt-1 font-mono text-[11px] text-subtle">
                                                                    {entry.project.tags?.slice(0, 3).join(", ")}
                                                                </span>
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            <p className="font-mono text-[12px] text-subtle">No public projects listed for this role.</p>
                                        )}

                                        <Tags tags={g.technologies} max={10} />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </section>

            {/* Contract + personal: its own column on xl, a two-part index under the timeline below that */}
            <section
                id={SIDE_ID}
                aria-labelledby="side-work-heading"
                className="mt-14 scroll-mt-28 lg:col-start-2 lg:scroll-mt-12 xl:col-start-3 xl:row-start-1 xl:mt-0 xl:pt-8"
            >
                <div className="rounded-xl border border-border p-4 md:p-5 xl:border-0 xl:p-0">
                    <h2 id="side-work-heading" className="text-xl font-semibold tracking-[-0.02em]">
                        Contract &amp; personal
                    </h2>
                    <p className="mt-1 text-[13px] text-muted-foreground">Client builds and my own products, outside the roles in the timeline.</p>

                    <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-8 xl:grid-cols-1">
                        <div id="contract-work">
                            <div className="flex items-baseline justify-between gap-3 border-b border-foreground pb-2">
                                <h3 className="text-[15px] font-semibold">Contract work</h3>
                                <span className="font-mono text-[11px] text-subtle">by client · {contract.length}</span>
                            </div>
                            <ul className="divide-y divide-border">
                                {contract.map((g) => (
                                    <li key={g.id} id={g.id} className="scroll-mt-28 py-3 lg:scroll-mt-12">
                                        <div className="flex items-center gap-2.5">
                                            <Logo group={g} size={26} />
                                            <div className="min-w-0">
                                                <p className="truncate text-[14px] font-semibold">{g.name}</p>
                                                <p className="truncate font-mono text-[11px] text-subtle">
                                                    {[g.role, g.location].filter(Boolean).join(" · ")}
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="ml-3 mt-1.5 border-l border-border pl-[22px]">
                                            {g.projects.map((entry) => (
                                                <li key={entry.slug}>{projectRow(entry, g)}</li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {personal && (
                            <div id="personal-work">
                                <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-foreground pb-2">
                                    <h3 className="text-[15px] font-semibold">Personal / independent</h3>
                                    <span className="font-mono text-[11px] text-subtle">{personal.projects.length} products</span>
                                </div>
                                <ul className="divide-y divide-border">
                                    {personal.projects.map((entry) => (
                                        <li key={entry.slug} className="py-1">
                                            {projectRow(entry, personal, entry.project.role)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetContent side="right" className="w-full gap-0 overflow-y-auto sm:max-w-xl xl:max-w-3xl">
                    {project && (
                        <>
                            <SheetHeader className="sticky top-0 z-10 border-b border-border bg-background/90 px-5 py-4 backdrop-blur-md md:px-6">
                                <p className="flex flex-wrap items-center gap-2 pr-8 font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                                    {project.group.kind === "work" && (
                                        <>
                                            {project.group.name} · {project.group.role}
                                        </>
                                    )}
                                    {project.group.kind === "contract" && <>Contract · {project.group.name}</>}
                                    {project.group.kind === "personal" && <>Personal project</>}
                                </p>
                                <SheetTitle className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl tracking-[-0.02em]">
                                    {project.entry.project.title}
                                    <StatusText status={project.entry.project.status} />
                                </SheetTitle>
                                <SheetDescription>{project.entry.teaser}</SheetDescription>
                            </SheetHeader>
                            <div className="px-5 py-6 md:px-6">
                                <CaseStudy entry={project.entry} layout="stack" />
                            </div>
                        </>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
}
