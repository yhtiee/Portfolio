"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

/** Tracks which section is in the reading band so the rail shows where you are. */
function useActiveSection() {
    const [active, setActive] = useState(sections[0].id);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length) setActive(visible[0].target.id);
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);
    return active;
}

/** Desktop: vertical numbered list in the rail. */
export function RailNav() {
    const active = useActiveSection();
    return (
        <nav aria-label="Sections" className="hidden lg:block">
            <ol className="space-y-0.5">
                {sections.map((s, i) => {
                    const on = s.id === active;
                    return (
                        <li key={s.id}>
                            <a
                                href={`#${s.id}`}
                                aria-current={on ? "true" : undefined}
                                className="group flex items-center gap-3 py-1.5 text-sm"
                            >
                                <span className="w-5 font-mono text-[11px] tabular-nums text-subtle">0{i + 1}</span>
                                <span
                                    aria-hidden
                                    className={cn(
                                        "h-px bg-border-strong transition-all duration-300 ease-[var(--ease-snappy)] group-hover:w-12 group-hover:bg-foreground",
                                        on ? "w-12 bg-foreground" : "w-6"
                                    )}
                                />
                                <span
                                    className={cn(
                                        "transition-colors group-hover:text-foreground",
                                        on ? "font-medium text-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    {s.label}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

/** Mobile/tablet: a sticky strip of section links under the review bar. */
export function MobileNav({ children }: { children?: React.ReactNode }) {
    const active = useActiveSection();
    return (
        <div className="sticky top-8 z-40 -mx-5 border-b border-border bg-background/85 backdrop-blur-md md:-mx-8 lg:hidden">
            <div className="flex h-12 items-center gap-1 px-3 md:px-6">
                <nav aria-label="Sections" className="flex min-w-0 flex-1 gap-0.5 overflow-x-auto">
                    {sections.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            aria-current={s.id === active ? "true" : undefined}
                            className={cn(
                                "shrink-0 rounded-md px-2.5 py-2 text-[13px] transition-colors",
                                s.id === active ? "bg-muted font-medium text-foreground" : "text-muted-foreground"
                            )}
                        >
                            {s.label}
                        </a>
                    ))}
                </nav>
                {children}
            </div>
        </div>
    );
}
