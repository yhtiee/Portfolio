"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import CaseStudy, { ExternalLinks, StatusPill, Tags } from "../shared/CaseStudy";
import { kindCounts, kindLabel, projectEntries, type Kind } from "../shared/data";

const filters: (Kind | "all")[] = ["all", "work", "contract", "personal"];

/**
 * Master/detail project browser. lg+: list on the left, live preview on the right, full case
 * study in a side sheet. Below lg there is no preview pane: a tap opens the sheet directly.
 */
export default function ProjectExplorer() {
    const [filter, setFilter] = useState<Kind | "all">("all");
    const [selected, setSelected] = useState(projectEntries[0].slug);
    const [open, setOpen] = useState(false);

    const shown = filter === "all" ? projectEntries : projectEntries.filter((e) => e.kind === filter);
    const current = projectEntries.find((e) => e.slug === selected) ?? projectEntries[0];

    const choose = (slug: string) => {
        setSelected(slug);
        if (!window.matchMedia("(min-width: 1024px)").matches) setOpen(true);
    };

    const changeFilter = (f: Kind | "all") => {
        setFilter(f);
        const first = f === "all" ? projectEntries[0] : projectEntries.find((e) => e.kind === f);
        if (first) setSelected(first.slug);
    };

    return (
        <div className="flex h-full min-h-0 flex-col">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 md:px-5">
                <h2 id="projects-heading" className="text-[15px] font-semibold tracking-[-0.01em]">
                    Projects <span className="ml-1 font-mono text-[12px] font-normal text-subtle">{kindCounts.all}</span>
                </h2>
                <div role="group" aria-label="Filter projects" className="-mx-1 flex max-w-full gap-1 overflow-x-auto px-1">
                    {filters.map((f) => (
                        <button
                            key={f}
                            type="button"
                            aria-pressed={filter === f}
                            onClick={() => changeFilter(f)}
                            className={cn(
                                "inline-flex h-8 shrink-0 cursor-pointer items-center gap-1.5 rounded-md px-2.5 text-[13px] transition-colors",
                                filter === f ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            {f === "all" ? "All" : kindLabel[f]}
                            <span className="font-mono text-[11px] opacity-70">{kindCounts[f]}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
                {/* List */}
                <ul className="min-h-0 divide-y divide-border overflow-y-auto lg:border-r lg:border-border" aria-label="Project list">
                    {shown.map((entry) => {
                        const on = entry.slug === current.slug;
                        return (
                            <li key={entry.slug}>
                                <button
                                    type="button"
                                    onClick={() => choose(entry.slug)}
                                    aria-current={on ? "true" : undefined}
                                    className={cn(
                                        "group relative flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left transition-colors md:px-5",
                                        on ? "lg:bg-muted" : "hover:bg-muted/60"
                                    )}
                                >
                                    <span
                                        aria-hidden
                                        className={cn("absolute inset-y-2 left-0 hidden w-0.5 rounded-full bg-foreground lg:block", !on && "lg:hidden")}
                                    />
                                    <span className="min-w-0 flex-1">
                                        <span className="flex items-center gap-2">
                                            <span className="truncate text-[14px] font-medium">{entry.project.title}</span>
                                            <StatusPill status={entry.project.status} />
                                        </span>
                                        <span className="mt-0.5 block truncate font-mono text-[11px] text-subtle">
                                            {[entry.company?.name ?? "Personal", entry.year].filter(Boolean).join(" · ")}
                                        </span>
                                    </span>
                                    <ChevronRight
                                        className={cn("size-4 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5", on && "lg:text-foreground")}
                                        aria-hidden
                                    />
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Preview (lg+) */}
                <div className="hidden min-h-0 overflow-y-auto p-5 lg:block xl:p-6" aria-live="polite">
                    {current.project.image && (
                        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted">
                            <Image
                                key={current.slug}
                                src={current.project.image}
                                alt={`${current.project.title} screenshot`}
                                fill
                                sizes="(min-width: 1536px) 560px, 420px"
                                className="object-cover object-top motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300"
                            />
                        </div>
                    )}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold tracking-[-0.02em]">{current.project.title}</h3>
                        <StatusPill status={current.project.status} />
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-subtle">
                        {[current.project.role, current.project.team].filter(Boolean).join(" · ")}
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground line-clamp-4">
                        {current.project.subtitle || current.project.description}
                    </p>
                    {current.project.impact && current.project.impact.length > 0 && (
                        <ul className="mt-4 space-y-1.5">
                            {current.project.impact.slice(0, 2).map((item, i) => (
                                <li key={i} className="grid grid-cols-[12px_1fr] gap-2 text-[13px] leading-snug">
                                    <span className="mt-[0.6em] h-px w-2 bg-foreground" aria-hidden />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <Tags tags={current.project.tags} max={6} className="mt-4" />
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md bg-foreground px-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
                        >
                            Full case study <ArrowRight className="size-3.5" aria-hidden />
                        </button>
                        <ExternalLinks links={current.links} />
                    </div>
                </div>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="right" className="w-full gap-0 overflow-y-auto sm:max-w-xl xl:max-w-3xl">
                    <SheetHeader className="sticky top-0 z-10 border-b border-border bg-background/90 px-5 py-4 backdrop-blur-md md:px-6">
                        <SheetTitle className="flex flex-wrap items-center gap-2 pr-8 text-lg tracking-[-0.02em]">
                            {current.project.title} <StatusPill status={current.project.status} />
                        </SheetTitle>
                        <SheetDescription>{current.teaser}</SheetDescription>
                    </SheetHeader>
                    <div className="px-5 py-6 md:px-6 [&_li]:text-left [&_p]:text-left">
                        <CaseStudy entry={current} layout="stack" />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
