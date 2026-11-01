"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import CaseStudy, { StatusPill } from "../shared/CaseStudy";
import { kindCounts, kindLabel, projectEntries, type Kind } from "../shared/data";

const filters: (Kind | "all")[] = ["all", "work", "contract", "personal"];

/** Filterable list of projects; each row expands in place into the full case study. */
export default function ProjectRows() {
    const [filter, setFilter] = useState<Kind | "all">("all");
    const shown = filter === "all" ? projectEntries : projectEntries.filter((e) => e.kind === filter);

    return (
        <div>
            <div role="group" aria-label="Filter projects" className="mb-4 flex flex-wrap gap-1.5">
                {filters.map((f) => (
                    <button
                        key={f}
                        type="button"
                        onClick={() => setFilter(f)}
                        aria-pressed={filter === f}
                        className={cn(
                            "inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full border px-3.5 text-[13px] transition-colors",
                            filter === f
                                ? "border-foreground bg-foreground text-background"
                                : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
                        )}
                    >
                        {f === "all" ? "All" : kindLabel[f]}
                        <span className="font-mono text-[11px] tabular-nums opacity-70">{kindCounts[f]}</span>
                    </button>
                ))}
            </div>

            <ul className="border-t border-border">
                {shown.map((entry) => (
                    <li key={entry.slug} id={entry.slug} className="scroll-mt-24 border-b border-border">
                        <details className="project group/p">
                            <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-start gap-x-4 gap-y-1 py-4 transition-colors hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:grid-cols-[88px_1fr_auto] sm:px-2">
                                <span className="hidden pt-0.5 font-mono text-[12px] tabular-nums text-subtle sm:block">
                                    {entry.year || kindLabel[entry.kind]}
                                </span>
                                <span className="min-w-0 space-y-1">
                                    <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                        <span className="text-[15px] font-medium tracking-[-0.01em]">{entry.project.title}</span>
                                        <StatusPill status={entry.project.status} />
                                    </span>
                                    <span className="block text-sm leading-relaxed text-muted-foreground line-clamp-2 xl:line-clamp-1">
                                        {entry.teaser}
                                    </span>
                                    <span className="block font-mono text-[11px] text-subtle">
                                        {[entry.company?.name ?? "Personal", entry.project.tags?.slice(0, 3).join(", ")]
                                            .filter(Boolean)
                                            .join(" · ")}
                                    </span>
                                </span>
                                <span className="flex size-8 items-center justify-center rounded-md border border-border text-foreground group-hover/p:border-border-strong">
                                    <Plus className="size-3.5 transition-transform duration-200 group-open/p:rotate-45" aria-hidden />
                                </span>
                            </summary>
                            <div className="pb-10 pt-4 sm:pl-[104px] sm:pr-2 xl:pl-2">
                                <CaseStudy entry={entry} layout="wide-xl" />
                            </div>
                        </details>
                    </li>
                ))}
            </ul>
        </div>
    );
}
