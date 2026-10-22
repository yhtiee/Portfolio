import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site, companyAnchor, contractGroups, workGroups } from "@/constants/site";
import CopyEmail from "./CopyEmail";
import LocalTime from "./LocalTime";

const reveal = "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500 motion-safe:fill-mode-both";

export default function Hero() {
    // "Worked with" strip: the companies that have shipped projects on this page.
    const proof = [...workGroups, ...contractGroups].filter((group) => group.projects.length > 0).map((group) => group.company);

    return (
        <section id="top" aria-label="Introduction" className="pt-16 md:pt-24 pb-14 md:pb-20">
            <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12px] text-muted-foreground ${reveal}`}>
                <span className="relative flex size-1.5" aria-hidden>
                    <span className="absolute inline-flex size-full rounded-full bg-foreground opacity-60 motion-safe:animate-ping [animation-duration:2s]" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
                </span>
                <span className="text-foreground">{site.status}</span>
                <span aria-hidden>·</span>
                <span>{site.location}</span>
                <span aria-hidden>·</span>
                <LocalTime timeZone={site.timeZone} />
            </p>

            <h1 className={`mt-6 text-[clamp(2.4rem,7vw,3.75rem)] leading-[1.02] tracking-[-0.04em] font-semibold ${reveal} [animation-delay:60ms]`}>
                {site.name}
            </h1>
            <p className={`mt-3 text-[15px] text-muted-foreground ${reveal} [animation-delay:120ms]`}>{site.roleLine}</p>

            <p className={`mt-6 max-w-[60ch] text-left hyphens-none text-lg md:text-xl leading-[1.5] tracking-[-0.015em] text-foreground/85 ${reveal} [animation-delay:180ms]`}>
                {site.headline}
            </p>
            <p className={`mt-4 max-w-[62ch] text-[15px] leading-[1.7] text-muted-foreground ${reveal} [animation-delay:210ms]`}>
                {site.about}
            </p>

            <div className={`mt-8 flex flex-wrap items-center gap-2 ${reveal} [animation-delay:240ms]`}>
                <CopyEmail email={site.email} />
                <a
                    href={site.resumePdf}
                    download
                    className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors"
                >
                    <ArrowDown className="size-3.5" aria-hidden /> Résumé PDF
                </a>
                <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 h-9 px-3 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                    LinkedIn <ArrowUpRight className="size-3.5" aria-hidden />
                    <span className="sr-only">(opens in new tab)</span>
                </a>
                <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 h-9 px-3 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                    GitHub <ArrowUpRight className="size-3.5" aria-hidden />
                    <span className="sr-only">(opens in new tab)</span>
                </a>
            </div>

            <div className={`mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 ${reveal} [animation-delay:300ms]`}>
                <span className="font-mono text-[12px] text-subtle">Shipped at</span>
                {proof.map((company) => (
                    <a
                        key={company.id}
                        href={`#${companyAnchor(company.id)}`}
                        className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {company.logo && (
                            <Image
                                src={company.logo}
                                alt=""
                                width={20}
                                height={20}
                                className="rounded-[4px] object-contain"
                            />
                        )}
                        {company.name}
                    </a>
                ))}
            </div>
        </section>
    );
}
