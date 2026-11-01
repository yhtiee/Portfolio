"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import CaseStudy, { Eyebrow, Tags } from "../shared/CaseStudy";
import { kindLabel, type Kind, type ProjectEntry } from "../shared/data";
import { experienceGroups, kindOrder, type ExperienceGroup } from "../shared/groups";
import { StatusText, TypeLegend, TypeTag } from "../shared/TypeTag";

type Filter = Kind | "all";

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

const VISIBLE_POINTS = 2;

const bullet = (p: string, i: number) => (
    <li key={i} className="grid grid-cols-[12px_1fr] gap-2 text-[14px] leading-relaxed text-muted-foreground">
        <span className="mt-[0.7em] h-px w-2 bg-subtle" aria-hidden />
        <span>{p}</span>
    </li>
);

const projectCount = (n: number) => (n === 1 ? "1 project" : `${n} projects`);

function useActiveGroup(ids: string[]) {
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
            const el = id && document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [key]);
    return active;
}

/**
 * V4 timeline: every role is a node; its projects live inside it. Filters and the jump list
 * sit in a sticky column on desktop and in a sticky chip bar on mobile.
 */
export default function V4Timeline() {
    const [filter, setFilter] = useState<Filter>("all");
    const [open, setOpen] = useState<Set<string>>(() => new Set([experienceGroups[0].id]));
    const [project, setProject] = useState<{ entry: ProjectEntry; group: ExperienceGroup } | null>(null);
    const [sheetOpen, setSheetOpen] = useState(false);
    const openProject = (entry: ProjectEntry, group: ExperienceGroup) => {
        setProject({ entry, group });
        setSheetOpen(true);
    };

    const visible = filter === "all" ? experienceGroups : experienceGroups.filter((g) => g.kind === filter);
    const active = useActiveGroup(visible.map((g) => g.id));
    const allOpen = visible.every((g) => open.has(g.id));

    const toggle = (id: string) =>
        setOpen((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });

    const jump = (id: string) => {
        setOpen((prev) => new Set(prev).add(id));
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
    };

    const setAll = () => setOpen(allOpen ? new Set() : new Set(visible.map((g) => g.id)));

    const filters: { value: Filter; label: string; groups: number; projects: number }[] = [
        {
            value: "all",
            label: "All",
            groups: experienceGroups.length,
            projects: experienceGroups.reduce((n, g) => n + g.projects.length, 0),
        },
        ...kindOrder.map((k) => {
            const gs = experienceGroups.filter((g) => g.kind === k);
            return { value: k, label: kindLabel[k], groups: gs.length, projects: gs.reduce((n, g) => n + g.projects.length, 0) };
        }),
    ];

    return (
        <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-16">
            {/* Desktop control column */}
            <aside className="hidden lg:block">
                <div className="sticky top-8 flex max-h-[calc(100dvh-2rem)] flex-col gap-8 overflow-y-auto py-8">
                    <div>
                        <Eyebrow className="mb-3">Filter by type</Eyebrow>
                        <div role="group" aria-label="Filter by type" className="space-y-1">
                            {filters.map((f) => (
                                <button
                                    key={f.value}
                                    type="button"
                                    aria-pressed={filter === f.value}
                                    onClick={() => setFilter(f.value)}
                                    className={cn(
                                        "flex min-h-10 w-full cursor-pointer items-center justify-between gap-3 rounded-md px-2.5 text-left text-[13px] transition-colors",
                                        filter === f.value ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                                    )}
                                >
                                    <span className="flex items-center gap-2">
                                        <span
                                            aria-hidden
                                            className={cn(
                                                "size-2.5 rounded-full border border-foreground",
                                                filter === f.value ? "bg-foreground" : "bg-transparent"
                                            )}
                                        />
                                        {f.value === "all" ? <span>All work</span> : <TypeTag kind={f.value} />}
                                    </span>
                                    <span className="font-mono text-[11px] tabular-nums text-subtle">
                                        {f.projects} projects
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <nav aria-label="Jump to experience">
                        <div className="mb-3 flex items-center justify-between">
                            <Eyebrow>Jump to</Eyebrow>
                            <button
                                type="button"
                                onClick={setAll}
                                className="cursor-pointer font-mono text-[11px] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                            >
                                {allOpen ? "Collapse all" : "Expand all"}
                            </button>
                        </div>
                        <ol className="space-y-px border-l border-border">
                            {visible.map((g) => (
                                <li key={g.id}>
                                    <a
                                        href={`#${g.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            jump(g.id);
                                        }}
                                        aria-current={active === g.id ? "true" : undefined}
                                        className={cn(
                                            "-ml-px flex items-center justify-between gap-2 border-l py-1.5 pl-3 text-[13px] transition-colors",
                                            active === g.id
                                                ? "border-foreground font-medium text-foreground"
                                                : "border-transparent text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        <span className="truncate">{g.name}</span>
                                        <span className="shrink-0 font-mono text-[11px] font-normal text-subtle">
                                            {g.period ? g.period.replace(/ – Present/, "–now").replace(/(\d{4}) – (\d{4})/, "$1–$2") : <TypeTag kind={g.kind} />}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <TypeLegend />
                </div>
            </aside>

            <div className="min-w-0">
                {/* Mobile/tablet control bar */}
                <div className="sticky top-8 z-30 -mx-5 border-b border-border bg-background/90 backdrop-blur-md md:-mx-8 lg:hidden">
                    <div role="group" aria-label="Filter by type" className="flex gap-1.5 overflow-x-auto px-5 py-2.5 md:px-8">
                        {filters.map((f) => (
                            <button
                                key={f.value}
                                type="button"
                                aria-pressed={filter === f.value}
                                onClick={() => setFilter(f.value)}
                                className={cn(
                                    "inline-flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-md border px-3 text-[13px]",
                                    filter === f.value ? "border-foreground text-foreground" : "border-border text-muted-foreground"
                                )}
                            >
                                {f.value === "all" ? "All" : <TypeTag kind={f.value} />}
                                <span className="font-mono text-[11px] text-subtle">{f.projects}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 pb-4 pt-6 lg:pt-8">
                    <h2 id="work-heading" className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                        Experience &amp; work
                    </h2>
                    <button
                        type="button"
                        onClick={setAll}
                        className="min-h-9 cursor-pointer font-mono text-[12px] text-muted-foreground hover:text-foreground lg:hidden"
                    >
                        {allOpen ? "Collapse all" : "Expand all"}
                    </button>
                    <TypeLegend className="hidden md:flex lg:hidden" />
                </div>

                <ol className="relative border-t border-foreground">
                    {visible.map((g) => {
                        const isOpen = open.has(g.id);
                        const panel = `${g.id}-panel`;
                        return (
                            <li
                                key={g.id}
                                id={g.id}
                                className="relative scroll-mt-28 border-b border-border sm:grid sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-x-6 lg:scroll-mt-12"
                            >
                                {/* Rail: period + node */}
                                <div className="relative hidden pt-5 sm:block">
                                    <p className="font-mono text-[12px] leading-5 tabular-nums text-muted-foreground">
                                        {g.period ?? kindLabel[g.kind]}
                                    </p>
                                    {g.employment && <p className="font-mono text-[11px] text-subtle">{g.employment}</p>}
                                    <span aria-hidden className="absolute inset-y-0 right-0 w-px bg-border" />
                                    <span
                                        aria-hidden
                                        className={cn(
                                            "absolute right-[-4px] top-[26px] size-[9px] rounded-full border border-foreground",
                                            g.kind === "work" ? "bg-foreground" : "bg-background",
                                            g.kind === "personal" && "border-dashed"
                                        )}
                                    />
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
                                                <TypeTag kind={g.kind} />
                                            </span>
                                            <span className="mt-0.5 block text-[13px] text-muted-foreground">
                                                {g.role}
                                                {g.location && ` · ${g.location}`}
                                            </span>
                                            <span className="mt-0.5 block font-mono text-[11px] text-subtle sm:hidden">
                                                {[g.period, g.employment].filter(Boolean).join(" · ")}
                                            </span>
                                            {!isOpen && (
                                                <span className="mt-2 block text-[13px] text-muted-foreground line-clamp-2 xl:line-clamp-1">
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
                                            <span className="hidden font-mono text-[11px] text-subtle md:inline">
                                                {projectCount(g.projects.length)}
                                            </span>
                                            <span className="flex size-8 items-center justify-center rounded-md border border-border group-hover:border-border-strong">
                                                <ChevronDown
                                                    className={cn("size-4 transition-transform duration-200", isOpen && "rotate-180")}
                                                    aria-hidden
                                                />
                                            </span>
                                        </span>
                                    </button>

                                    <div id={panel} hidden={!isOpen} className="mt-5 space-y-6 sm:pl-11">
                                        {g.points.length > 0 && (
                                            <div>
                                                <ul className="grid gap-x-8 gap-y-2 xl:grid-cols-2">
                                                    {g.points.slice(0, VISIBLE_POINTS).map(bullet)}
                                                </ul>
                                                {g.points.length > VISIBLE_POINTS && (
                                                    <details className="group/more mt-1">
                                                        <summary className="inline-flex min-h-8 cursor-pointer list-none items-center font-mono text-[12px] text-muted-foreground hover:text-foreground">
                                                            <span className="group-open/more:hidden">+{g.points.length - VISIBLE_POINTS} more highlights</span>
                                                            <span className="hidden group-open/more:inline">Show less</span>
                                                        </summary>
                                                        <ul className="mt-1 grid gap-x-8 gap-y-2 xl:grid-cols-2">
                                                            {g.points.slice(VISIBLE_POINTS).map(bullet)}
                                                        </ul>
                                                    </details>
                                                )}
                                            </div>
                                        )}
                                        {g.points.length === 0 && <p className="text-[14px] text-muted-foreground">{g.summary}</p>}

                                        {g.projects.length > 0 ? (
                                            <div>
                                                <Eyebrow className="mb-3">
                                                    Built here · {g.projects.length}
                                                </Eyebrow>
                                                <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 2xl:grid-cols-3">
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
            </div>

            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetContent side="right" className="w-full gap-0 overflow-y-auto sm:max-w-xl xl:max-w-3xl">
                    {project && (
                        <>
                            <SheetHeader className="sticky top-0 z-10 border-b border-border bg-background/90 px-5 py-4 backdrop-blur-md md:px-6">
                                <p className="flex flex-wrap items-center gap-2 pr-8 text-[12px] text-muted-foreground">
                                    <TypeTag kind={project.group.kind} />
                                    {project.group.name} · {project.group.role}
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
