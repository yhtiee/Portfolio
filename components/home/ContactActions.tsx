import { ArrowDown, ArrowUpRight } from "lucide-react";
import CopyEmail from "@/components/site/CopyEmail";
import { site } from "@/constants/site";
import { cn } from "@/lib/utils";
import { socialLinks } from "./data";

/** The primary contact path: copy email + résumé, then socials. Same everywhere so it is learnable. */
export default function ContactActions({ className, socials = true }: { className?: string; socials?: boolean }) {
    return (
        <div className={cn("flex flex-wrap items-center gap-2", className)}>
            <CopyEmail email={site.email} />
            <a
                href={site.resumePdf}
                download
                className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm font-medium transition-colors hover:bg-muted"
            >
                <ArrowDown className="size-3.5" aria-hidden /> Résumé PDF
            </a>
            {socials &&
                socialLinks.slice(0, 2).map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center gap-1 rounded-md px-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                        {link.label} <ArrowUpRight className="size-3.5" aria-hidden />
                        <span className="sr-only">(opens in new tab)</span>
                    </a>
                ))}
        </div>
    );
}
