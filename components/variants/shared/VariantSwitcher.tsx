import Link from "next/link";
import { cn } from "@/lib/utils";

const versions = [
    { href: "/v1", label: "V1", name: "Split rail" },
    { href: "/v2", label: "V2", name: "Bento" },
    { href: "/v3", label: "V3", name: "Editorial" },
    { href: "/", label: "Current", name: "site" },
];

/** Review-only strip so the owner can flip between the design variants. */
export default function VariantSwitcher({ current, className }: { current: "/v1" | "/v2" | "/v3"; className?: string }) {
    return (
        <nav
            aria-label="Design variants"
            className={cn("border-b border-border bg-background font-mono text-[11px] text-muted-foreground", className)}
        >
            <div className="mx-auto flex h-8 max-w-[1440px] items-center gap-1 overflow-x-auto px-4 md:px-6 xl:px-10">
                <span className="mr-2 shrink-0 uppercase tracking-[0.08em] text-subtle">Design</span>
                {versions.map((v, i) => (
                    <span key={v.href} className="flex shrink-0 items-center gap-1">
                        {i > 0 && <span aria-hidden className="text-subtle">·</span>}
                        <Link
                            href={v.href}
                            aria-current={v.href === current ? "page" : undefined}
                            title={v.name}
                            className={cn(
                                "rounded px-1.5 py-0.5 transition-colors hover:text-foreground",
                                v.href === current && "bg-foreground text-background hover:text-background"
                            )}
                        >
                            {v.label}
                            <span className="hidden sm:inline"> {v.name}</span>
                        </Link>
                    </span>
                ))}
            </div>
        </nav>
    );
}
