import Image from "next/image";
import { ArrowDown, Plus } from "lucide-react";
import LocalTime from "@/components/site/LocalTime";
import ThemeToggle from "@/components/site/ThemeToggle";
import { education, skillGroups, softSkills } from "@/constants/resume";
import { site } from "@/constants/site";
import { Eyebrow, Tags } from "../shared/CaseStudy";
import ContactActions from "../shared/ContactActions";
import { contracts, kindCounts, period, roles, socialLinks, stats } from "../shared/data";
import VariantSwitcher from "../shared/VariantSwitcher";
import ProjectIndex from "./ProjectIndex";
import V3Tabs from "./V3Tabs";

const Logo = ({ src }: { src?: string }) => (
    <span className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white">
        {src && <Image src={src} alt="" width={20} height={20} className="object-contain" />}
    </span>
);

const roleCols = "grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 md:grid-cols-[132px_minmax(0,1fr)_120px_32px]";

function ExperiencePanel() {
    return (
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
                <div
                    aria-hidden
                    className={`${roleCols} hidden border-y border-foreground py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-subtle md:grid`}
                >
                    <span>Period</span>
                    <span>Role</span>
                    <span>Type</span>
                    <span />
                </div>
                <ol className="border-t border-foreground md:border-t-0">
                    {roles.map((role) => (
                        <li key={role.companyId + role.role} className="border-b border-border">
                            <details className="group/r">
                                <summary
                                    className={`${roleCols} cursor-pointer list-none items-center py-4 transition-colors hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-ring group-open/r:bg-muted/60`}
                                >
                                    <span className="hidden font-mono text-[12px] tabular-nums text-muted-foreground md:block">{period(role.period)}</span>
                                    <span className="flex min-w-0 items-center gap-3">
                                        <Logo src={role.logo} />
                                        <span className="min-w-0">
                                            <span className="block text-[15px] font-medium leading-snug">{role.role}</span>
                                            <span className="block text-[13px] text-muted-foreground">
                                                {role.companyName} · {role.location}
                                            </span>
                                            <span className="block font-mono text-[11px] text-subtle md:hidden">
                                                {[period(role.period), role.type].filter(Boolean).join(" · ")}
                                            </span>
                                        </span>
                                    </span>
                                    <span className="hidden text-[13px] text-muted-foreground md:block">{role.type ?? "—"}</span>
                                    <span className="flex size-8 items-center justify-center rounded-md border border-border">
                                        <Plus className="size-3.5 transition-transform duration-200 group-open/r:rotate-45" aria-hidden />
                                    </span>
                                </summary>
                                <div className="space-y-4 pb-6 pt-2 md:pl-[148px] md:pr-12">
                                    <ul className="grid gap-x-8 gap-y-2 xl:grid-cols-2">
                                        {role.points.map((p, i) => (
                                            <li key={i} className="grid grid-cols-[12px_1fr] gap-2 text-[14px] leading-relaxed text-muted-foreground">
                                                <span className="mt-[0.7em] h-px w-2 bg-subtle" aria-hidden />
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Tags tags={role.technologies} />
                                </div>
                            </details>
                        </li>
                    ))}
                </ol>
            </div>

            <aside className="space-y-10 lg:col-span-4">
                <div>
                    <Eyebrow className="border-b border-foreground pb-2">Contract engagements</Eyebrow>
                    <ul className="divide-y divide-border">
                        {contracts.map((c) => (
                            <li key={c.companyId} className="flex gap-3 py-3.5">
                                <Logo src={c.logo} />
                                <div className="min-w-0">
                                    <p className="text-[14px] font-medium">{c.companyName}</p>
                                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">{c.points[0]}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Eyebrow className="border-b border-foreground pb-2">Education</Eyebrow>
                    {education.map((e) => (
                        <div key={e.institution} className="py-3.5">
                            <p className="text-[14px] font-medium">{e.degree}</p>
                            <p className="mt-0.5 text-[13px] text-muted-foreground">
                                {e.institution} · <span className="font-mono text-[12px]">{period(e.period)}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
}

function AboutPanel() {
    return (
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
                <p className="text-[clamp(1.125rem,1.6vw,1.375rem)] leading-[1.5] tracking-[-0.015em] text-foreground/85">{site.about}</p>
                <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
                    {stats.map((s) => (
                        <div key={s.label} className="flex flex-col bg-background p-4">
                            <dt className="order-2 text-[12px] text-muted-foreground">{s.label}</dt>
                            <dd className="text-3xl font-semibold tracking-[-0.04em] tabular-nums">{s.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="lg:col-span-7">
                <Eyebrow className="border-b border-foreground pb-2">Technical skills</Eyebrow>
                <dl className="grid md:grid-cols-2 md:gap-x-8">
                    {skillGroups.map((g) => (
                        <div key={g.label} className="border-b border-border py-3">
                            <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-subtle">{g.label}</dt>
                            <dd className="mt-1 text-[13px] leading-relaxed">{g.items.join(", ")}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="lg:col-span-12">
                <Eyebrow className="border-b border-foreground pb-2">How I work</Eyebrow>
                <ul className="grid gap-x-8 sm:grid-cols-2 xl:grid-cols-4">
                    {softSkills.map((s) => (
                        <li key={s.label} className="border-b border-border py-4">
                            <p className="text-[14px] font-medium">{s.label}</p>
                            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{s.detail}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

/**
 * V3 · Editorial index.
 * A magazine-style masthead carries identity and the contact path; below it, one tabbed area
 * (Index / Experience / About) so the page is never more than one section tall.
 */
export default function V3Page() {
    return (
        <>
            <VariantSwitcher current="/v3" className="sticky top-0 z-50" />
            <header className="mx-auto max-w-[1440px] px-5 pt-6 md:px-8 xl:px-12">
                <div className="flex items-center justify-between gap-4 font-mono text-[12px] text-muted-foreground">
                    <p>
                        Portfolio <span className="text-subtle">/ {new Date().getFullYear()}</span>
                    </p>
                    <div className="flex items-center gap-1">
                        <ThemeToggle />
                        <a
                            href={site.resumePdf}
                            download
                            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 font-sans text-sm font-medium text-foreground hover:bg-muted"
                        >
                            CV <ArrowDown className="size-3.5" aria-hidden />
                        </a>
                    </div>
                </div>

                <h1 className="mt-8 text-[clamp(2.75rem,8.4vw,8.25rem)] font-semibold leading-[0.92] tracking-[-0.055em] md:mt-12">
                    {site.name}
                </h1>

                <div className="mt-8 grid gap-8 border-t border-foreground py-6 md:mt-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
                    <div className="md:col-span-2 lg:col-span-6">
                        <Eyebrow>{site.roleLine}</Eyebrow>
                        <p className="mt-3 max-w-[60ch] text-[17px] leading-[1.5] tracking-[-0.015em] md:text-lg">{site.headline}</p>
                    </div>
                    <dl className="grid grid-cols-[auto_1fr] content-start gap-x-5 gap-y-2 text-[13px] lg:col-span-3">
                        <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-subtle pt-0.5">Status</dt>
                        <dd className="flex items-center gap-2">
                            <span className="size-1.5 shrink-0 rounded-full bg-foreground" aria-hidden />
                            {site.status}
                        </dd>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-subtle pt-0.5">Based</dt>
                        <dd>{site.location}</dd>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-subtle pt-0.5">Local</dt>
                        <dd className="font-mono text-[12px]">
                            <LocalTime timeZone={site.timeZone} />
                        </dd>
                        <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-subtle pt-0.5">Works</dt>
                        <dd>{site.remote}</dd>
                    </dl>
                    <div className="lg:col-span-3">
                        <a
                            href={`mailto:${site.email}`}
                            className="block break-all text-[15px] font-medium underline decoration-border-strong underline-offset-4 hover:decoration-foreground"
                        >
                            {site.email}
                        </a>
                        <ContactActions className="mt-4" socials={false} />
                        <ul className="mt-3 flex gap-4 text-[13px]">
                            {socialLinks.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-8 items-center text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                                    >
                                        {l.label}
                                        <span className="sr-only"> (opens in new tab)</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>

            <main id="main" className="[&_li]:text-left [&_p]:text-left [&_p]:hyphens-manual">
                <V3Tabs
                    counts={{ work: kindCounts.all, experience: roles.length }}
                    aside={
                        <a
                            href={`mailto:${site.email}`}
                            className="hidden shrink-0 text-sm text-muted-foreground hover:text-foreground lg:block"
                        >
                            {site.email}
                        </a>
                    }
                    panels={{
                        work: <ProjectIndex />,
                        experience: <ExperiencePanel />,
                        about: <AboutPanel />,
                    }}
                />
            </main>

            <footer className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-2 border-t border-border px-5 py-6 font-mono text-[12px] text-subtle md:px-8 xl:px-12">
                <p>
                    © {new Date().getFullYear()} {site.name}
                </p>
                <p>{site.location}</p>
            </footer>
        </>
    );
}
