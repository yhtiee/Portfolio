import { ArrowUpRight } from "lucide-react";
import LocalTime from "@/components/site/LocalTime";
import { education, skillGroups, softSkills } from "@/constants/resume";
import { site } from "@/constants/site";
import { Eyebrow } from "../shared/CaseStudy";
import ContactActions from "../shared/ContactActions";
import { period, socialLinks, stats } from "../shared/data";
import VariantSwitcher from "../shared/VariantSwitcher";
import V5App from "./V5App";

/** The "Profile" entry: about, numbers, skills and contact in one wide pane. */
function Profile() {
    return (
        <div className="space-y-10">
            <div className="grid gap-8 xl:grid-cols-12">
                <div className="xl:col-span-7">
                    <h2 className="text-[22px] font-semibold tracking-[-0.03em]">About</h2>
                    <p className="mt-3 text-[16px] leading-[1.6] text-foreground/85">{site.headline}</p>
                    <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground">{site.about}</p>
                </div>
                <div className="space-y-5 xl:col-span-5">
                    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
                        {stats.map((s) => (
                            <div key={s.label} className="flex flex-col bg-background p-4">
                                <dt className="order-2 text-[12px] text-muted-foreground">{s.label}</dt>
                                <dd className="text-2xl font-semibold tracking-[-0.03em] tabular-nums">{s.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div id="contact">
                        <a
                            href={`mailto:${site.email}`}
                            className="block break-all text-[16px] font-medium underline decoration-border-strong underline-offset-4 hover:decoration-foreground"
                        >
                            {site.email}
                        </a>
                        <ContactActions className="mt-3" socials={false} />
                        <ul className="mt-3 flex flex-wrap gap-x-5 text-sm">
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
                        <p className="mt-2 font-mono text-[12px] text-subtle">
                            {site.location} · <LocalTime timeZone={site.timeZone} />
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <Eyebrow className="border-b border-foreground pb-2">Technical skills</Eyebrow>
                <dl className="grid gap-x-8 md:grid-cols-2 2xl:grid-cols-3">
                    {skillGroups.map((g) => (
                        <div key={g.label} className="border-b border-border py-3">
                            <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-subtle">{g.label}</dt>
                            <dd className="mt-1 text-[13px] leading-relaxed">{g.items.join(", ")}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div>
                <Eyebrow className="border-b border-foreground pb-2">How I work</Eyebrow>
                <ul className="grid gap-x-8 md:grid-cols-2 2xl:grid-cols-4">
                    {softSkills.map((s) => (
                        <li key={s.label} className="border-b border-border py-3">
                            <p className="text-[14px] font-medium">{s.label}</p>
                            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{s.detail}</p>
                        </li>
                    ))}
                </ul>
                {education.map((e) => (
                    <p key={e.institution} className="mt-4 text-[13px] text-muted-foreground">
                        <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.06em] text-subtle">Education</span>
                        {e.degree}, {e.institution} · {period(e.period)}
                    </p>
                ))}
            </div>
        </div>
    );
}

/**
 * V5 · Master–detail.
 * Desktop is one screen, like a mail client: experiences grouped by type, the selected role
 * with its projects, and the case study. Mobile drills down list → role → case study.
 */
export default function V5Page() {
    return (
        <>
            <VariantSwitcher current="/v5" className="sticky top-0 z-50" />
            <main id="main" className="[&_li]:text-left [&_p]:text-left [&_p]:hyphens-manual">
                <V5App profile={<Profile />} />
            </main>
        </>
    );
}
