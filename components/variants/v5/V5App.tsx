"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowLeft, ChevronRight, UserRound } from "lucide-react";
import CopyEmail from "@/components/site/CopyEmail";
import ThemeToggle from "@/components/site/ThemeToggle";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { site } from "@/constants/site";
import { cn } from "@/lib/utils";
import CaseStudy, { Eyebrow, Tags } from "../shared/CaseStudy";
import { kindLabel } from "../shared/data";
import { experienceGroups, kindOrder, type ExperienceGroup } from "../shared/groups";
import { StatusText, TypeLegend, TypeTag } from "../shared/TypeTag";

const PROFILE = "profile";
const VISIBLE_POINTS = 3;

const mq = (px: number) => typeof window !== "undefined" && window.matchMedia(`(min-width: ${px}px)`).matches;

const Logo = ({ group, size = 28 }: { group: ExperienceGroup; size?: number }) => (
    <span
        className="flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white"
        style={{ width: size, height: size }}
    >
        {group.logo ? (
            <Image src={group.logo} alt="" width={size - 8} height={size - 8} className="object-contain" />
        ) : (
            <span className="font-mono text-[11px] font-medium text-black">{group.name.slice(0, 1)}</span>
        )}
    </span>
);

const findBySlug = (slug: string) => {
    for (const g of experienceGroups) {
        const p = g.projects.find((e) => e.slug === slug);
        if (p) return { group: g, project: p };
    }
    return null;
};

/**
 * Three panes on xl (experiences · selected role · case study), two on lg (case study in a
 * side sheet), and a drill-down on mobile (list → role → sheet) with the Back button wired in.
 */
export default function V5App({ profile }: { profile: React.ReactNode }) {
    const [groupId, setGroupId] = useState(experienceGroups[0].id);
    const [slug, setSlug] = useState<string | null>(experienceGroups[0].projects[0]?.slug ?? null);
    const [view, setView] = useState<"list" | "detail">("list");
    const [sheetOpen, setSheetOpen] = useState(false);
    /** True when the mobile drill-down added a history entry, so Back can pop it. */
    const pushed = useRef(false);

    const isProfile = groupId === PROFILE;
    const group = experienceGroups.find((g) => g.id === groupId);
    const project = group?.projects.find((p) => p.slug === slug) ?? group?.projects[0];

    // Deep links (#xp-spurt, #carematch) and the mobile Back button.
    useEffect(() => {
        const apply = () => {
            const hash = decodeURIComponent(window.location.hash.slice(1));
            const g = experienceGroups.find((x) => x.id === hash);
            const hit = !g && hash ? findBySlug(hash) : null;
            if (hash === PROFILE) {
                setGroupId(PROFILE);
                if (!mq(1024)) setView("detail");
            } else if (g) {
                setGroupId(g.id);
                setSlug(g.projects[0]?.slug ?? null);
                if (!mq(1024)) setView("detail");
            } else if (hit) {
                setGroupId(hit.group.id);
                setSlug(hit.project.slug);
                if (!mq(1024)) setView("detail");
            } else {
                pushed.current = false;
                setView("list");
            }
        };
        apply();
        window.addEventListener("popstate", apply);
        return () => window.removeEventListener("popstate", apply);
    }, []);

    const select = (id: string) => {
        setGroupId(id);
        const g = experienceGroups.find((x) => x.id === id);
        setSlug(g?.projects[0]?.slug ?? null);
        if (mq(1024)) {
            history.replaceState(null, "", `#${id}`);
            document.getElementById("v5-detail")?.scrollTo({ top: 0 });
        } else {
            history.pushState(null, "", `#${id}`);
            pushed.current = true;
            setView("detail");
            window.scrollTo({ top: 0 });
        }
    };

    const back = () => {
        if (pushed.current) {
            pushed.current = false;
            history.back(); // popstate brings the list back
        } else {
            history.replaceState(null, "", window.location.pathname);
            setView("list");
        }
    };

    const openProject = (s: string) => {
        setSlug(s);
        if (mq(1280)) document.getElementById("v5-case")?.scrollTo({ top: 0 });
        else setSheetOpen(true);
    };

    const listItem = "flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors";

    return (
        <div
            className={cn(
                "mx-auto max-w-[1680px] lg:grid lg:h-[calc(100dvh-2rem-1px)] lg:grid-cols-[320px_minmax(0,1fr)] lg:overflow-hidden lg:border-x lg:border-border",
                isProfile ? "xl:grid-cols-[340px_minmax(0,1fr)]" : "xl:grid-cols-[340px_minmax(0,440px)_minmax(0,1fr)] 2xl:grid-cols-[360px_minmax(0,500px)_minmax(0,1fr)]"
            )}
        >
            {/* Pane 1 · who + all experiences */}
            <nav
                aria-label="Experiences"
                className={cn("flex-col lg:flex lg:min-h-0 lg:overflow-y-auto lg:border-r lg:border-border", view === "detail" ? "hidden" : "flex")}
            >
                <div className="border-b border-border px-5 pb-5 pt-6">
                    <p className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-foreground" aria-hidden />
                        {site.status}
                    </p>
                    <h1 className="mt-3 text-[28px] font-semibold leading-[1.05] tracking-[-0.04em]">{site.name}</h1>
                    <p className="mt-1 text-[14px] text-muted-foreground">
                        {site.roleLine} · {site.location.split(",")[0]}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        <CopyEmail email={site.email} />
                        <a
                            href={site.resumePdf}
                            download
                            className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-medium hover:bg-muted"
                        >
                            CV <ArrowDown className="size-3.5" aria-hidden />
                        </a>
                        <ThemeToggle />
                    </div>
                </div>

                <div className="flex-1 space-y-5 px-2 py-4">
                    <button
                        type="button"
                        onClick={() => select(PROFILE)}
                        aria-current={isProfile ? "true" : undefined}
                        className={cn(listItem, isProfile ? "bg-muted" : "hover:bg-muted/60")}
                    >
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border">
                            <UserRound className="size-3.5" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                            <span className="block text-[14px] font-medium">Profile</span>
                            <span className="block text-[12px] text-muted-foreground">About, skills and contact</span>
                        </span>
                        <ChevronRight className="size-4 text-subtle lg:hidden" aria-hidden />
                    </button>

                    {kindOrder.map((kind) => {
                        const groups = experienceGroups.filter((g) => g.kind === kind);
                        if (!groups.length) return null;
                        return (
                            <div key={kind}>
                                <div className="mb-1 flex items-center justify-between px-3">
                                    <TypeTag kind={kind} />
                                    <span className="font-mono text-[11px] text-subtle">
                                        {groups.reduce((n, g) => n + g.projects.length, 0)} projects
                                    </span>
                                </div>
                                <ul>
                                    {groups.map((g) => {
                                        const on = g.id === groupId;
                                        return (
                                            <li key={g.id}>
                                                <button
                                                    type="button"
                                                    onClick={() => select(g.id)}
                                                    aria-current={on ? "true" : undefined}
                                                    className={cn(listItem, "relative", on ? "bg-muted" : "hover:bg-muted/60")}
                                                >
                                                    {on && <span aria-hidden className="absolute inset-y-2 left-0 hidden w-0.5 rounded-full bg-foreground lg:block" />}
                                                    <Logo group={g} />
                                                    <span className="min-w-0 flex-1">
                                                        <span className="block truncate text-[14px] font-medium">{g.name}</span>
                                                        <span className="block truncate text-[12px] text-muted-foreground">{g.role}</span>
                                                    </span>
                                                    <span className="shrink-0 text-right font-mono text-[11px] leading-tight text-subtle">
                                                        {g.period && <span className="block">{g.period.replace(" – Present", "–now").replace(" – ", "–")}</span>}
                                                        <span className="block">{g.projects.length}p</span>
                                                    </span>
                                                    <ChevronRight className="size-4 shrink-0 text-subtle lg:hidden" aria-hidden />
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="border-t border-border px-5 py-4">
                    <TypeLegend />
                </div>
            </nav>

            {/* Pane 2 · the selected role (or profile) */}
            <section
                id="v5-detail"
                aria-label={isProfile ? "Profile" : group?.name}
                className={cn("lg:block lg:min-h-0 lg:overflow-y-auto", view === "list" ? "hidden" : "block", !isProfile && "xl:border-r xl:border-border")}
            >
                <div className="sticky top-8 z-20 flex h-12 items-center border-b border-border bg-background/90 px-3 backdrop-blur-md lg:hidden">
                    <button type="button" onClick={back} className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-md px-2 text-sm font-medium">
                        <ArrowLeft className="size-4" aria-hidden /> All experience
                    </button>
                </div>

                {isProfile && <div className="px-5 py-6 md:px-8 lg:py-8 xl:px-10">{profile}</div>}

                {!isProfile && group && (
                    <div className="px-5 py-6 md:px-7 lg:py-7">
                        <div className="flex items-start gap-3">
                            <Logo group={group} size={40} />
                            <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h2 className="text-[22px] font-semibold leading-tight tracking-[-0.03em]">{group.name}</h2>
                                    <TypeTag kind={group.kind} />
                                </div>
                                <p className="mt-0.5 text-[14px] text-muted-foreground">{group.role}</p>
                                <p className="mt-0.5 font-mono text-[11px] text-subtle">
                                    {[group.period, group.employment, group.location].filter(Boolean).join(" · ")}
                                </p>
                            </div>
                        </div>

                        {group.points.length > 0 ? (
                            <div className="mt-6">
                                <Eyebrow className="mb-2">Highlights</Eyebrow>
                                <ul className="space-y-2">
                                    {group.points.slice(0, VISIBLE_POINTS).map((p, i) => (
                                        <li key={i} className="grid grid-cols-[12px_1fr] gap-2 text-[14px] leading-relaxed text-muted-foreground">
                                            <span className="mt-[0.7em] h-px w-2 bg-subtle" aria-hidden />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                                {group.points.length > VISIBLE_POINTS && (
                                    <details key={group.id} className="group/more mt-2">
                                        <summary className="inline-flex min-h-8 cursor-pointer list-none items-center font-mono text-[12px] text-muted-foreground hover:text-foreground">
                                            <span className="group-open/more:hidden">+{group.points.length - VISIBLE_POINTS} more</span>
                                            <span className="hidden group-open/more:inline">Show less</span>
                                        </summary>
                                        <ul className="mt-1 space-y-2">
                                            {group.points.slice(VISIBLE_POINTS).map((p, i) => (
                                                <li key={i} className="grid grid-cols-[12px_1fr] gap-2 text-[14px] leading-relaxed text-muted-foreground">
                                                    <span className="mt-[0.7em] h-px w-2 bg-subtle" aria-hidden />
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                )}
                            </div>
                        ) : (
                            <p className="mt-6 text-[14px] text-muted-foreground">{group.summary}</p>
                        )}

                        <Tags tags={group.technologies} max={8} className="mt-5" />

                        <div className="mt-8">
                            <Eyebrow className="mb-2 border-b border-foreground pb-2">
                                {kindLabel[group.kind] === "Personal" ? "Projects" : "Built here"} · {group.projects.length}
                            </Eyebrow>
                            {group.projects.length === 0 ? (
                                <p className="py-3 font-mono text-[12px] text-subtle">No public projects listed for this role.</p>
                            ) : (
                                <ul className="divide-y divide-border">
                                    {group.projects.map((e) => {
                                        const on = e.slug === project?.slug;
                                        return (
                                            <li key={e.slug}>
                                                <button
                                                    type="button"
                                                    onClick={() => openProject(e.slug)}
                                                    aria-current={on ? "true" : undefined}
                                                    className={cn(
                                                        "relative flex w-full cursor-pointer items-start gap-3 py-3.5 text-left transition-colors xl:px-3",
                                                        on ? "xl:bg-muted" : "hover:bg-muted/60"
                                                    )}
                                                >
                                                    <span className="min-w-0 flex-1">
                                                        <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                                            <span className="text-[15px] font-medium">{e.project.title}</span>
                                                            <StatusText status={e.project.status} />
                                                        </span>
                                                        <span className="mt-1 block text-[13px] leading-relaxed text-muted-foreground line-clamp-2">{e.teaser}</span>
                                                    </span>
                                                    <ChevronRight className={cn("mt-1 size-4 shrink-0 text-subtle", on && "xl:text-foreground")} aria-hidden />
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    </div>
                )}
            </section>

            {/* Pane 3 · case study (xl+) */}
            {!isProfile && (
                <section id="v5-case" aria-label="Case study" className="hidden min-h-0 overflow-y-auto xl:block">
                    {project && group ? (
                        <div className="px-8 py-7 2xl:px-10">
                            <p className="flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground">
                                <TypeTag kind={group.kind} />
                                {group.name}
                            </p>
                            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                                <h2 className="text-[28px] font-semibold tracking-[-0.03em]">{project.project.title}</h2>
                                <StatusText status={project.project.status} />
                            </div>
                            <p className="mt-1 max-w-[70ch] text-[15px] text-muted-foreground">{project.teaser}</p>
                            <div className="mt-6">
                                <CaseStudy key={project.slug} entry={project} layout="stack" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex h-full items-center justify-center p-10 text-center font-mono text-[12px] text-subtle">
                            No public projects listed for this role.
                        </div>
                    )}
                </section>
            )}

            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetContent side="right" className="w-full gap-0 overflow-y-auto sm:max-w-xl">
                    {project && group && (
                        <>
                            <SheetHeader className="sticky top-0 z-10 border-b border-border bg-background/90 px-5 py-4 backdrop-blur-md">
                                <p className="flex flex-wrap items-center gap-2 pr-8 text-[12px] text-muted-foreground">
                                    <TypeTag kind={group.kind} />
                                    {group.name}
                                </p>
                                <SheetTitle className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl tracking-[-0.02em]">
                                    {project.project.title}
                                    <StatusText status={project.project.status} />
                                </SheetTitle>
                                <SheetDescription>{project.teaser}</SheetDescription>
                            </SheetHeader>
                            <div className="px-5 py-6">
                                <CaseStudy entry={project} layout="stack" />
                            </div>
                        </>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
}
