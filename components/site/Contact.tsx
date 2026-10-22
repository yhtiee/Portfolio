import { ArrowUpRight } from "lucide-react";
import { site } from "@/constants/site";
import CopyEmail from "./CopyEmail";
import LocalTime from "./LocalTime";

const links = [
    { label: "LinkedIn", href: site.socials.linkedin },
    { label: "GitHub", href: site.socials.github },
    { label: "X", href: site.socials.x },
];

export default function Contact() {
    return (
        <footer id="contact" aria-labelledby="contact-heading" className="pt-14 md:pt-20 pb-10 border-t border-border scroll-mt-20">
            <h2 id="contact-heading" className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold tracking-[-0.03em]">
                Let&apos;s talk.
            </h2>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
                Hiring for a senior, lead or backend role, or building something that needs an engineer who can own it end to end? Email is the fastest way to reach me.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={`mailto:${site.email}`} className="text-lg font-medium underline underline-offset-4 decoration-border-strong hover:decoration-foreground break-all">
                    {site.email}
                </a>
                <CopyEmail email={site.email} variant="ghost" />
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {links.map((link) => (
                    <li key={link.label}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                            {link.label} <ArrowUpRight className="size-3.5" aria-hidden />
                            <span className="sr-only">(opens in new tab)</span>
                        </a>
                    </li>
                ))}
                <li>
                    <a href={site.resumePdf} download className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        Résumé PDF
                    </a>
                </li>
            </ul>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-2 font-mono text-[12px] text-subtle">
                <p>© {new Date().getFullYear()} {site.name}</p>
                <p className="flex items-center gap-2">
                    {site.location} · <LocalTime timeZone={site.timeZone} />
                </p>
            </div>
        </footer>
    );
}
