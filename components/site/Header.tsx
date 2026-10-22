import { ArrowDown } from "lucide-react";
import { site } from "@/constants/site";
import ThemeToggle from "./ThemeToggle";

const links = [
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-1.5 focus:text-sm focus:text-background"
            >
                Skip to content
            </a>
            <div className="mx-auto max-w-[720px] px-5 md:px-6 h-14 flex items-center justify-between gap-4">
                <a href="#top" className="text-sm font-semibold tracking-tight">
                    <span className="hidden sm:inline">{site.name}</span>
                    <span className="sm:hidden">{site.shortName} Ekpenyong</span>
                </a>
                <nav aria-label="Sections" className="flex items-center gap-1 sm:gap-2">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-2 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <ThemeToggle />
                    <a
                        href={site.resumePdf}
                        download
                        className="ml-1 inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors"
                    >
                        CV <ArrowDown className="size-3.5" aria-hidden />
                    </a>
                </nav>
            </div>
        </header>
    );
}
