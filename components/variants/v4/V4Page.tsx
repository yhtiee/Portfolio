import { ArrowUpRight } from "lucide-react";
import LocalTime from "@/components/site/LocalTime";
import ThemeToggle from "@/components/site/ThemeToggle";
import { education, resumeSkillGroups } from "@/constants/resume";
import { site } from "@/constants/site";
import { Eyebrow } from "../shared/CaseStudy";
import ContactActions from "../shared/ContactActions";
import { period, socialLinks, stats } from "../shared/data";
import VariantSwitcher from "../shared/VariantSwitcher";
import V4Timeline from "./V4Timeline";

const gutter = "mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12";

/**
 * V4 · Career timeline with nested work.
 * A compact masthead, then one timeline where each role holds the projects built there.
 * Roles start collapsed (except the current one) so the whole career fits in ~2 screens.
 */
export default function V4Page() {
    return (
        <>
            <VariantSwitcher current="/v4" className="sticky top-0 z-50" />

            <header className={`${gutter} grid gap-8 border-b border-border pb-8 pt-8 md:pt-12 lg:grid-cols-12 lg:gap-12`}>
                <div className="lg:col-span-7">
                    <div className="flex items-center justify-between gap-4">
                        <p className="flex items-center gap-2 font-mono text-[12px] text-muted-foreground">
                            <span className="size-1.5 rounded-full bg-foreground" aria-hidden />
                            <span className="text-foreground">{site.status}</span>
                        </p>
                        <span className="lg:hidden">
                            <ThemeToggle />
                        </span>
                    </div>
                    <h1 className="mt-4 text-[clamp(2.25rem,4.4vw,3.5rem)] font-semibold leading-[1] tracking-[-0.045em]">{site.name}</h1>
                    <p className="mt-2 text-lg tracking-[-0.01em] text-muted-foreground">{site.roleLine}</p>
                    <p className="mt-4 max-w-[68ch] text-[15px] leading-[1.6] text-foreground/80">{site.headline}</p>
                </div>
                <div className="flex flex-col justify-between gap-6 lg:col-span-5">
                    <div className="hidden justify-end lg:flex">
                        <ThemeToggle />
                    </div>
                    <dl className="grid grid-cols-4 border-y border-border">
                        {stats.map((s, i) => (
                            <div key={s.label} className={i ? "border-l border-border py-3 pl-3" : "py-3 pr-3"}>
                                <dt className="sr-only">{s.label}</dt>
                                <dd>
                                    <span className="block text-xl font-semibold tracking-[-0.03em] tabular-nums md:text-2xl">{s.value}</span>
                                    <span className="block text-[11px] leading-tight text-muted-foreground">{s.label}</span>
                                </dd>
                            </div>
                        ))}
                    </dl>
                    <ContactActions />
                </div>
            </header>

            <main id="main" className={`${gutter} [&_li]:text-left [&_p]:text-left [&_p]:hyphens-manual`}>
                <V4Timeline />

                <section aria-labelledby="skills-heading" className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-8">
                        <h2 id="skills-heading" className="mb-4 border-b border-foreground pb-2 text-xl font-semibold tracking-[-0.02em]">
                            Core skills
                        </h2>
                        <dl className="grid gap-x-8 sm:grid-cols-2 xl:grid-cols-3">
                            {resumeSkillGroups.map((g) => (
                                <div key={g.label} className="border-b border-border py-3">
                                    <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-subtle">{g.label}</dt>
                                    <dd className="mt-1 text-[13px] leading-relaxed">{g.items.join(", ")}</dd>
                                </div>
                            ))}
                        </dl>
                        {education.map((e) => (
                            <p key={e.institution} className="mt-4 text-[13px] text-muted-foreground">
                                <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.06em] text-subtle">Education</span>
                                {e.degree}, {e.institution} · {period(e.period)}
                            </p>
                        ))}
                    </div>

                    <div id="contact" className="lg:col-span-4">
                        <h2 className="mb-4 border-b border-foreground pb-2 text-xl font-semibold tracking-[-0.02em]">Contact</h2>
                        <p className="text-[14px] leading-relaxed text-muted-foreground">
                            Hiring for a senior, lead or backend role, or need an engineer who can own a product end to end? Email is fastest.
                        </p>
                        <a
                            href={`mailto:${site.email}`}
                            className="mt-4 block break-all text-[17px] font-medium underline decoration-border-strong underline-offset-4 hover:decoration-foreground"
                        >
                            {site.email}
                        </a>
                        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                            {socialLinks.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-8 items-center gap-1 text-muted-foreground hover:text-foreground"
                                    >
                                        {l.label} <ArrowUpRight className="size-3.5" aria-hidden />
                                        <span className="sr-only">(opens in new tab)</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <Eyebrow className="mt-6">
                            {site.location} · <LocalTime timeZone={site.timeZone} />
                        </Eyebrow>
                    </div>
                </section>
            </main>
            <footer className={`${gutter} border-t border-border py-6 font-mono text-[12px] text-subtle`}>
                © {new Date().getFullYear()} {site.name}
            </footer>
        </>
    );
}
