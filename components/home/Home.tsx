import { ArrowUpRight } from "lucide-react";
import LocalTime from "@/components/site/LocalTime";
import ThemeToggle from "@/components/site/ThemeToggle";
import { projects } from "@/constants/projects";
import { education, resumeSkillGroups, softSkills } from "@/constants/resume";
import { site } from "@/constants/site";
import ContactActions from "./ContactActions";
import { period, socialLinks } from "./data";
import Experience from "./Experience";

const gutter = "mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12";

// Headline numbers for this page. Years is fixed copy (owner's choice), not computed.
const stats = [
    { value: "5+", label: "years shipping" },
    { value: "14", label: "organizations on Home Grid" },
    { value: String(projects.length), label: "products shipped" },
];

/**
 * The home page: compact masthead → Experience (employment timeline, contract work,
 * personal products) → skills and how I work → contact.
 */
export default function Home() {
    return (
        <>
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-1.5 focus:text-sm focus:text-background"
            >
                Skip to content
            </a>

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
                    <dl className="grid grid-cols-3 border-y border-border">
                        {stats.map((s, i) => (
                            <div key={s.label} className={i ? "border-l border-border py-3 pl-4" : "py-3 pr-4"}>
                                <dt className="sr-only">{s.label}</dt>
                                <dd>
                                    <span className="block text-2xl font-semibold tracking-[-0.03em] tabular-nums">{s.value}</span>
                                    <span className="block text-[12px] leading-tight text-muted-foreground">{s.label}</span>
                                </dd>
                            </div>
                        ))}
                    </dl>
                    <ContactActions />
                </div>
            </header>

            <main id="main" className={`${gutter} [&_li]:text-left [&_p]:text-left [&_p]:hyphens-manual`}>
                <Experience />

                <section aria-label="Skills" className="mt-16 grid gap-10 border-t border-border pt-10 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                        <h2 id="skills" className="mb-3 border-b border-foreground pb-2 text-xl font-semibold tracking-[-0.02em]">
                            Core skills
                        </h2>
                        <dl className="grid gap-x-8 sm:grid-cols-2">
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

                    <div className="lg:col-span-7">
                        <h2 className="mb-3 border-b border-foreground pb-2 text-xl font-semibold tracking-[-0.02em]">How I work</h2>
                        <ul className="grid gap-x-8 sm:grid-cols-2">
                            {softSkills.map((s) => (
                                <li key={s.label} className="border-b border-border py-3">
                                    <p className="text-[14px] font-medium">{s.label}</p>
                                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">{s.detail}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section
                    id="contact"
                    aria-labelledby="contact-heading"
                    className="mt-14 grid gap-6 border-t-2 border-foreground py-8 md:grid-cols-12 md:items-end md:gap-10"
                >
                    <div className="md:col-span-7">
                        <h2 id="contact-heading" className="text-2xl font-semibold tracking-[-0.03em]">
                            Let&apos;s talk.
                        </h2>
                        <p className="mt-2 max-w-[60ch] text-[14px] leading-relaxed text-muted-foreground">
                            Hiring for a senior, lead or backend role, or need an engineer who can own a product end to end? Email is the
                            fastest way to reach me.
                        </p>
                        <a
                            href={`mailto:${site.email}`}
                            className="mt-4 block break-all text-[clamp(1.125rem,2vw,1.5rem)] font-medium tracking-[-0.02em] underline decoration-border-strong underline-offset-[6px] hover:decoration-foreground"
                        >
                            {site.email}
                        </a>
                    </div>
                    <div className="space-y-3 md:col-span-5 md:justify-self-end md:text-right">
                        <ContactActions className="md:justify-end" socials={false} />
                        <ul className="flex flex-wrap gap-x-5 text-sm md:justify-end">
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
                        <p className="font-mono text-[12px] text-subtle">
                            {site.location} · <LocalTime timeZone={site.timeZone} />
                        </p>
                    </div>
                </section>
            </main>
            <footer className={`${gutter} border-t border-border py-6 font-mono text-[12px] text-subtle`}>
                © {new Date().getFullYear()} {site.name}
            </footer>
        </>
    );
}
