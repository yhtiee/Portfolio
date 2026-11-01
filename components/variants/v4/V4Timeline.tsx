"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import CaseStudy, { Eyebrow, Tags } from "../shared/CaseStudy";
import type { ProjectEntry } from "../shared/data";
import { experienceGroups, type ExperienceGroup } from "../shared/groups";
import { StatusText } from "../shared/TypeTag";

// Experience = employment timeline, then contract work (by client), then personal products.
const employment = experienceGroups.filter((g) => g.kind === "work");
const contract = experienceGroups.filter((g) => g.kind === "contract");
const personal = experienceGroups.find((g) => g.kind === "personal");

const CONTRACT_ID = "contract-work";
const PERSONAL_ID = "personal-work";
const VISIBLE_POINTS = 2;

const sections = [
    { id: "experience", label: "Experience", count: employment.length },
    { id: CONTRACT_ID, label: "Contract", count: contract.length },
    ...(personal ? [{ id: PERSONAL_ID, label: "Personal", count: personal.projects.length }] : []),
];

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

/** Which role / sub-section is in the reading band. */
function useActive(ids: string[]) {
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

/** Sub-section opener: heavy rule, title, count and a short description. */
const SubHead = ({ id, title, count, children }: { id: string; title: string; count: string; children: React.ReactNode }) => (
    <div className="border-t-2 border-foreground pt-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 id={`${id}-heading`} className="text-lg font-semibold tracking-[-0.02em] md:text-xl">
                {title}
            </h3>
            <p className="font-mono text-[12px] text-subtle">{count}</p>
        </div>
        <p className="mt-1 max-w-[80ch] text-[14px] text-muted-foreground">{children}</p>
    </div>
);

/**
 * Experience: a timeline of employed roles (each holding the projects built there), then
 * contract work grouped by client, then personal products. Case studies open in a side sheet.
 */
export default function V4Timeline() {
    const [open, setOpen] = useState<Set<string>>(() => new Set([employment[0].id]));
    const [project, setProject] = useState<{ entry: ProjectEntry; group: ExperienceGroup } | null>(null);
    const [sheetOpen, setSheetOpen] = useState(false);

    const active = useActive([...employment.map((g) => g.id), CONTRACT_ID, PERSONAL_ID]);
    const activeSection = active === CONTRACT_ID || active === PERSONAL_ID ? active : "experience";
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
        if (employment.some((g) => g.id === id)) setOpen((prev) => new Set(prev).add(id));
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    };

    const setAll = () => setOpen(allOpen ? new Set() : new Set(employment.map((g) => g.id)));

    const jumpLink = (id: string, children: React.ReactNode, className?: string, current?: boolean) => (
        <a
            href={`#${id}`}
            onClick={(e) => {
                e.preventDefault();
                jump(id);
            }}
            aria-current={current ? "true" : undefined}
            className={className}
        >
            {children}
        </a>
    );

    const projectRow = (entry: ProjectEntry, group: ExperienceGroup, meta?: string) => (
        <button
            type="button"
            onClick={() => openProject(entry, group)}
            className="group/r flex h-full w-full cursor-pointer items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/60 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
        >
            <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                    <span className="text-[14px] font-medium">{entry.project.title}</span>
                    <StatusText status={entry.project.status} />
                </span>
                <span className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">{entry.teaser}</span>
                {meta && <span className="mt-1 block font-mono text-[11px] text-subtle">{meta}</span>}
            </span>
            <ChevronRight className="mt-1 size-4 shrink-0 text-subtle transition-transform group-hover/r:translate-x-0.5 group-hover/r:text-foreground" aria-hidden />
        </button>
    );

    const sideLink = (id: string, label: string, count: string) =>
        jumpLink(
            id,
            <>
                <span>{label}</span>
                <span className="shrink-0 font-mono text-[11px] font-normal text-subtle">{count}</span>
            </>,
            cn(
                "-ml-px flex items-center justify-between gap-2 border-l py-1.5 pl-3 text-[13px] transition-colors",
                active === id ? "border-foreground font-medium text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
            ),
            active === id
        );

    return (
        <div className="lg:grid lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-x-10 xl:grid-cols-[230px_minmax(0,1fr)] xl:gap-x-14">
            {/* Desktop navigation column */}
            <aside className="hidden lg:block">
                <nav aria-label="Experience sections" className="sticky top-8 flex max-h-[calc(100dvh-2rem)] flex-col gap-7 overflow-y-auto py-8">
                    <div>
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
                                <li key={g.id}>{sideLink(g.id, g.name, shortPeriod(g.period))}</li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <Eyebrow className="mb-3">Also</Eyebrow>
                        <ul className="space-y-px border-l border-border">
                            <li>{sideLink(CONTRACT_ID, "Contract work", `${contract.length} clients`)}</li>
                            {personal && <li>{sideLink(PERSONAL_ID, "Personal", `${personal.projects.length} products`)}</li>}
                        </ul>
                    </div>
                </nav>
            </aside>

            <section id="experience" aria-labelledby="work-heading" className="min-w-0 scroll-mt-20 lg:scroll-mt-12">
                {/* Mobile/tablet section bar; the active chip follows the scroll position */}
                <div className="sticky top-8 z-30 -mx-5 border-b border-border bg-background/90 backdrop-blur-md md:-mx-8 lg:hidden">
                    <nav aria-label="Experience sections" className="flex items-center gap-1.5 overflow-x-auto px-5 py-2 md:px-8">
                        {sections.map((s) => (
                            <Fragment key={s.id}>
                            {jumpLink(
                                s.id,
                                <>
                                    {s.label} <span className="font-mono text-[11px] text-subtle">{s.count}</span>
                                </>,
                                cn(
                                    "inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border px-3 text-[13px] transition-colors",
                                    activeSection === s.id ? "border-foreground font-medium text-foreground" : "border-border text-muted-foreground"
                                ),
                                activeSection === s.id
                            )}
                            </Fragment>
                        ))}
                    </nav>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pb-4 pt-6 lg:pt-8">
                    <h2 id="work-heading" className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                        Experience
                    </h2>
                    <div className="flex items-center gap-4">
                        <p className="font-mono text-[12px] text-subtle">
                            {employment.length} roles · {employment.reduce((n, g) => n + g.projects.length, 0)} projects
                        </p>
                        <button
                            type="button"
                            onClick={setAll}
                            className="min-h-9 cursor-pointer font-mono text-[12px] text-muted-foreground hover:text-foreground lg:hidden"
                        >
                            {allOpen ? "Collapse all" : "Expand all"}
                        </button>
                    </div>
                </div>

                {/* Employment timeline */}
                <ol className="relative border-t border-foreground">
                    {employment.map((g) => {
                        const isOpen = open.has(g.id);
                        const panel = `${g.id}-panel`;
                        return (
                            <li
                                key={g.id}
                                id={g.id}
                                className="relative scroll-mt-20 border-b border-border sm:grid sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-x-6 lg:scroll-mt-12"
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
                                                <span className="mt-2 text-[13px] text-muted-foreground line-clamp-2 xl:line-clamp-1">
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
                                            <ul className="grid gap-x-10 gap-y-2 xl:grid-cols-2">{g.points.slice(0, VISIBLE_POINTS).map(bullet)}</ul>
                                            {g.points.length > VISIBLE_POINTS && (
                                                <details className="group/more mt-1">
                                                    <summary className="inline-flex min-h-8 cursor-pointer list-none items-center font-mono text-[12px] text-muted-foreground hover:text-foreground">
                                                        <span className="group-open/more:hidden">+{g.points.length - VISIBLE_POINTS} more highlights</span>
                                                        <span className="hidden group-open/more:inline">Show less</span>
                                                    </summary>
                                                    <ul className="mt-1 grid gap-x-10 gap-y-2 xl:grid-cols-2">{g.points.slice(VISIBLE_POINTS).map(bullet)}</ul>
                                                </details>
                                            )}
                                        </div>

                                        {g.projects.length > 0 ? (
                                            <div>
                                                <Eyebrow className="mb-3">Built here · {g.projects.length}</Eyebrow>
                                                <ul className={cn("grid border-l border-t border-border sm:grid-cols-2", (g.projects.length === 3 || g.projects.length >= 5) && "xl:grid-cols-3")}>
                                                    {g.projects.map((entry) => (
                                                        <li key={entry.slug} className="border-b border-r border-border">
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

                                        <Tags tags={g.technologies} max={12} />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                {/* Contract work, grouped by client */}
                <div id={CONTRACT_ID} aria-labelledby={`${CONTRACT_ID}-heading`} role="region" className="mt-14 scroll-mt-20 lg:scroll-mt-12">
                    <SubHead id={CONTRACT_ID} title="Contract work" count={`${contract.length} clients · ${contract.reduce((n, g) => n + g.projects.length, 0)} projects`}>
                        Products I&apos;ve built for clients on contract, usually as the sole or lead engineer. Grouped by client; the data
                        has no dates for these engagements.
                    </SubHead>
                    <ul className="mt-5 grid border-l border-t border-border md:grid-cols-2 xl:grid-cols-3">
                        {contract.map((g) => (
                            <li key={g.id} id={g.id} className="flex flex-col border-b border-r border-border">
                                <div className="flex items-center gap-2.5 px-4 pt-4">
                                    <Logo group={g} size={28} />
                                    <div className="min-w-0">
                                        <p className="truncate text-[15px] font-semibold">{g.name}</p>
                                        <p className="truncate font-mono text-[11px] text-subtle">{[g.role, g.location].filter(Boolean).join(" · ")}</p>
                                    </div>
                                </div>
                                <ul className="mt-2 flex-1 pb-1">
                                    {g.projects.map((entry) => (
                                        <li key={entry.slug} className="ml-[30px] border-l border-border">
                                            {projectRow(entry, g)}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Personal / independent */}
                {personal && (
                    <div id={PERSONAL_ID} aria-labelledby={`${PERSONAL_ID}-heading`} role="region" className="mt-14 scroll-mt-20 lg:scroll-mt-12">
                        <SubHead id={PERSONAL_ID} title="Personal / independent" count={`${personal.projects.length} products`}>
                            Products I&apos;ve founded or built on my own, mostly open source.
                        </SubHead>
                        <ul className="mt-5 grid border-l border-t border-dashed border-border-strong md:grid-cols-2 xl:grid-cols-3">
                            {personal.projects.map((entry) => (
                                <li key={entry.slug} className="border-b border-r border-dashed border-border-strong">
                                    {projectRow(entry, personal, entry.project.role)}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
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
