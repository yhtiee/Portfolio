"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import CaseStudy, { StatusPill } from "../shared/CaseStudy";
import { kindCounts, kindLabel, projectEntries, type Kind } from "../shared/data";

const filters: (Kind | "all")[] = ["all", "work", "contract", "personal"];

// One grid template shared by the header and every row so the columns line up.
const cols =
    "grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 md:grid-cols-[40px_minmax(0,1fr)_minmax(0,180px)_auto] lg:grid-cols-[40px_88px_minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1.3fr)_120px_32px]";

/** Dense, sortable-feeling index of every project; each row opens its case study in place. */
export default function ProjectIndex() {
    const [filter, setFilter] = useState<Kind | "all">("all");
    const shown = filter === "all" ? projectEntries : projectEntries.filter((e) => e.kind === filter);

    return (
        <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-x-5 gap-y-1">
                    {filters.map((f) => (
                        <button
                            key={f}
                            type="button"
                            aria-pressed={filter === f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "min-h-9 cursor-pointer border-b py-1 text-sm transition-colors",
                                filter === f ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {f === "all" ? "All work" : kindLabel[f]}{" "}
                            <sup className="font-mono text-[10px] text-subtle">{kindCounts[f]}</sup>
                        </button>
                    ))}
                </div>
                <p className="hidden font-mono text-[12px] text-subtle md:block">Select a row to read the case study</p>
            </div>

            <div
                aria-hidden
                className={cn(cols, "hidden border-y border-foreground py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-subtle md:grid")}
            >
                <span>No.</span>
                <span className="hidden lg:block">Year</span>
                <span>Project</span>
                <span>Client</span>
                <span className="hidden lg:block">Stack</span>
                <span className="hidden lg:block">Status</span>
                <span />
            </div>

            <ol className="border-t border-foreground md:border-t-0">
                {shown.map((entry) => {
                    const n = projectEntries.indexOf(entry) + 1;
                    return (
                        <li key={entry.slug} id={entry.slug} className="scroll-mt-28 border-b border-border">
                            <details className="project group/p">
                                <summary
                                    className={cn(
                                        cols,
                                        "cursor-pointer list-none items-baseline py-3.5 transition-colors hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring group-open/p:bg-muted/60 md:py-3"
                                    )}
                                >
                                    <span className="hidden font-mono text-[12px] tabular-nums text-subtle md:block">{String(n).padStart(2, "0")}</span>
                                    <span className="hidden font-mono text-[12px] tabular-nums text-muted-foreground lg:block">
                                        {entry.year || "—"}
                                    </span>
                                    <span className="min-w-0">
                                        <span className="flex flex-wrap items-center gap-2">
                                            <span className="text-[15px] font-medium tracking-[-0.01em]">{entry.project.title}</span>
                                            <span className="lg:hidden">
                                                <StatusPill status={entry.project.status} />
                                            </span>
                                        </span>
                                        <span className="mt-0.5 block truncate text-[13px] text-muted-foreground">{entry.teaser}</span>
                                        <span className="mt-1 block font-mono text-[11px] text-subtle md:hidden">
                                            {[entry.company?.name ?? "Personal", entry.year].filter(Boolean).join(" · ")}
                                        </span>
                                    </span>
                                    <span className="hidden truncate text-[13px] md:block">{entry.company?.name ?? "Personal"}</span>
                                    <span className="hidden truncate font-mono text-[12px] text-muted-foreground lg:block">
                                        {entry.project.tags?.slice(0, 3).join(", ")}
                                    </span>
                                    <span className="hidden lg:block">
                                        <StatusPill status={entry.project.status} />
                                    </span>
                                    <span className="flex size-8 items-center justify-center self-center rounded-md border border-border group-hover/p:border-border-strong">
                                        <Plus className="size-3.5 transition-transform duration-200 group-open/p:rotate-45" aria-hidden />
                                    </span>
                                </summary>
                                <div className="pb-12 pt-6 md:pl-[56px] lg:pr-10">
                                    <CaseStudy entry={entry} layout="wide" />
                                </div>
                            </details>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
