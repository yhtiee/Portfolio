import Image from "next/image";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import CopyEmail from "@/components/site/CopyEmail";
import LocalTime from "@/components/site/LocalTime";
import ThemeToggle from "@/components/site/ThemeToggle";
import { site } from "@/constants/site";
import { cn } from "@/lib/utils";
import { Eyebrow } from "../shared/CaseStudy";
import ContactActions from "../shared/ContactActions";
import { contracts, period, proofCompanies, roles, socialLinks, stats } from "../shared/data";
import VariantSwitcher from "../shared/VariantSwitcher";
import ProjectExplorer from "./ProjectExplorer";
import SkillsPanel from "./SkillsPanel";

const card = "rounded-xl border border-border bg-background";

const nav = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

function Timeline() {
    return (
        <div className="flex h-full min-h-0 flex-col">
            <div className="flex items-center justify-between border-b border-border px-4 py-3 md:px-5">
                <h2 id="experience-heading" className="text-[15px] font-semibold tracking-[-0.01em]">
                    Experience
                </h2>
                <span className="font-mono text-[11px] text-subtle">since 2020</span>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 md:px-5">
                <ol className="relative space-y-1 before:absolute before:inset-y-2 before:left-[3px] before:w-px before:bg-border">
                    {roles.map((role) => (
                        <li key={role.companyId + role.role} className="relative pl-5">
                            <span aria-hidden className="absolute left-0 top-[18px] size-[7px] rounded-full border border-foreground bg-background" />
                            <details className="group/r">
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 rounded-md py-2.5 hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-ring">
                                    <span className="min-w-0">
                                        <span className="block font-mono text-[11px] tabular-nums text-subtle">
                                            {period(role.period)}
                                            {role.type && ` · ${role.type}`}
                                        </span>
                                        <span className="mt-0.5 block text-[14px] font-medium leading-snug">{role.role}</span>
                                        <span className="block text-[13px] text-muted-foreground">{role.companyName}</span>
                                    </span>
                                    <Plus
                                        className="mt-1 size-4 shrink-0 text-subtle transition-transform duration-200 group-open/r:rotate-45"
                                        aria-hidden
                                    />
                                </summary>
                                <ul className="space-y-1.5 pb-3 pt-1">
                                    {role.points.map((p, i) => (
                                        <li key={i} className="grid grid-cols-[10px_1fr] gap-2 text-[13px] leading-relaxed text-muted-foreground">
                                            <span className="mt-[0.7em] h-px w-1.5 bg-subtle" aria-hidden />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                    ))}
                </ol>

                <Eyebrow className="mb-2 mt-6">Contract</Eyebrow>
                <ul className="divide-y divide-border">
                    {contracts.map((c) => (
                        <li key={c.companyId} className="flex items-center gap-3 py-2.5">
                            <span className="flex size-6 shrink-0 items-center justify-center overflow-hidden rounded border border-border bg-white">
                                {c.logo && <Image src={c.logo} alt="" width={16} height={16} className="object-contain" />}
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block text-[13px] font-medium">{c.companyName}</span>
                                <span className="block truncate text-[12px] text-muted-foreground">{c.location}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

/**
 * V2 · Bento dashboard.
 * lg+: three rows of cards (intro + numbers, projects + experience, skills + contact) that fit
 * in about 1.5 laptop screens; long lists scroll inside their card. Mobile: cards stack.
 */
export default function V2Page() {
    return (
        <>
            <VariantSwitcher current="/v2" className="sticky top-0 z-50" />
            <div className="min-h-dvh bg-muted/50">
                <header className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-4 px-4 md:px-6 xl:px-10">
                    <a href="#top" className="min-w-0 truncate text-sm font-semibold tracking-tight">
                        {site.name}
                        <span className="hidden font-normal text-muted-foreground sm:inline"> · {site.roleLine}</span>
                    </a>
                    <nav aria-label="Sections" className="flex items-center gap-1">
                        {nav.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                className="hidden rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground md:block"
                            >
                                {n.label}
                            </a>
                        ))}
                        <ThemeToggle />
                        <a
                            href={site.resumePdf}
                            download
                            className="ml-1 inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-sm font-medium transition-colors hover:bg-muted"
                        >
                            CV <ArrowDown className="size-3.5" aria-hidden />
                        </a>
                    </nav>
                </header>

                <main
                    id="main"
                    className="mx-auto grid max-w-[1440px] gap-3 px-4 pb-10 md:px-6 lg:grid-cols-12 xl:px-10 [&_li]:text-left [&_p]:text-left [&_p]:hyphens-manual"
                >
                    {/* Row 1: who + proof */}
                    <section id="top" aria-label="Introduction" className={cn(card, "p-5 md:p-7 lg:col-span-8 xl:p-8")}>
                        <p className="flex items-center gap-2 font-mono text-[12px] text-muted-foreground">
                            <span className="size-1.5 rounded-full bg-foreground" aria-hidden />
                            <span className="text-foreground">{site.status}</span>
                            <span aria-hidden>·</span>
                            <span className="hidden sm:inline">{site.remote}</span>
                        </p>
                        <h1 className="mt-5 text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1] tracking-[-0.045em]">{site.name}</h1>
                        <p className="mt-4 max-w-[70ch] text-[15px] leading-[1.6] text-foreground/80 md:text-base">{site.headline}</p>
                        <ContactActions className="mt-6" />
                    </section>

                    <section aria-label="At a glance" className={cn(card, "flex flex-col lg:col-span-4")}>
                        <dl className="grid flex-1 grid-cols-2">
                            {stats.map((s, i) => (
                                <div
                                    key={s.label}
                                    className={cn("flex flex-col justify-end p-4 md:p-5", i % 2 === 1 && "border-l border-border", i < 2 && "border-b border-border")}
                                >
                                    <dt className="order-2 mt-1 text-[12px] leading-snug text-muted-foreground">
                                        {s.label}
                                        <span className="hidden text-subtle xl:block">{s.detail}</span>
                                    </dt>
                                    <dd className="order-1 text-[clamp(1.75rem,2.6vw,2.5rem)] font-semibold leading-none tracking-[-0.04em] tabular-nums">
                                        {s.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border p-4 md:px-5">
                            <Eyebrow>Shipped at</Eyebrow>
                            {proofCompanies.map((c) =>
                                c.logo ? (
                                    <Image
                                        key={c.id}
                                        src={c.logo}
                                        alt={c.name}
                                        title={c.name}
                                        width={22}
                                        height={22}
                                        className="rounded-[4px] border border-border bg-white object-contain"
                                    />
                                ) : null
                            )}
                        </div>
                    </section>

                    {/* Row 2: the work */}
                    <section
                        id="projects"
                        aria-labelledby="projects-heading"
                        className={cn(card, "scroll-mt-12 overflow-hidden lg:col-span-8 lg:h-[640px] 2xl:h-[700px]")}
                    >
                        <ProjectExplorer />
                    </section>

                    <section
                        id="experience"
                        aria-labelledby="experience-heading"
                        className={cn(card, "scroll-mt-12 overflow-hidden lg:col-span-4 lg:h-[640px] 2xl:h-[700px]")}
                    >
                        <Timeline />
                    </section>

                    {/* Row 3: depth + action */}
                    <section id="skills" aria-labelledby="skills-heading" className={cn(card, "scroll-mt-12 lg:col-span-8")}>
                        <SkillsPanel />
                    </section>

                    <section
                        id="contact"
                        aria-labelledby="contact-heading"
                        className="scroll-mt-12 flex flex-col justify-between gap-8 rounded-xl bg-foreground p-5 text-background md:p-7 lg:col-span-4"
                    >
                        <div>
                            <h2 id="contact-heading" className="text-2xl font-semibold tracking-[-0.03em]">
                                Let&apos;s talk.
                            </h2>
                            <p className="mt-2 text-[14px] leading-relaxed text-background/70">
                                Hiring for a senior, lead or backend role, or need an engineer who can own a product end to end? Email is fastest.
                            </p>
                            <a
                                href={`mailto:${site.email}`}
                                className="mt-5 block break-all text-[17px] font-medium underline decoration-background/40 underline-offset-4 hover:decoration-background"
                            >
                                {site.email}
                            </a>
                            <div className="mt-4 flex flex-wrap gap-2 [&_button]:bg-background [&_button]:text-foreground">
                                <CopyEmail email={site.email} />
                                <a
                                    href={site.resumePdf}
                                    download
                                    className="inline-flex h-9 items-center gap-2 rounded-md border border-background/30 px-3 text-sm font-medium hover:bg-background/10"
                                >
                                    <ArrowDown className="size-3.5" aria-hidden /> Résumé PDF
                                </a>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
                                {socialLinks.map((l) => (
                                    <li key={l.label}>
                                        <a
                                            href={l.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex min-h-8 items-center gap-1 text-background/70 hover:text-background"
                                        >
                                            {l.label} <ArrowUpRight className="size-3.5" aria-hidden />
                                            <span className="sr-only">(opens in new tab)</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <p className="font-mono text-[12px] text-background/60">
                                {site.location} · <LocalTime timeZone={site.timeZone} />
                            </p>
                        </div>
                    </section>
                </main>
                <footer className="mx-auto max-w-[1440px] px-4 pb-8 font-mono text-[12px] text-subtle md:px-6 xl:px-10">
                    © {new Date().getFullYear()} {site.name}
                </footer>
            </div>
        </>
    );
}
