import { cn } from "@/lib/utils";
import { kindLabel, type Kind } from "./data";

/**
 * The single visual rule for work type, in two colours only:
 *   Employment = solid (filled) tag
 *   Contract   = outlined tag
 *   Personal   = dashed tag
 * Square corners keep these distinct from the round project status marks.
 */
const styles: Record<Kind, string> = {
    work: "border border-foreground bg-foreground text-background",
    contract: "border border-foreground text-foreground",
    personal: "border border-dashed border-foreground/70 text-foreground",
};

export function TypeTag({ kind, className, short = false }: { kind: Kind; className?: string; short?: boolean }) {
    return (
        <span
            className={cn(
                "inline-flex h-5 shrink-0 items-center rounded-[3px] px-1.5 font-mono text-[10px] uppercase leading-none tracking-[0.06em]",
                styles[kind],
                className
            )}
        >
            {short ? kindLabel[kind].slice(0, 3) : kindLabel[kind]}
        </span>
    );
}

/** Tiny key; the tags explain themselves, but the legend makes the rule explicit once. */
export function TypeLegend({ className }: { className?: string }) {
    return (
        <p className={cn("flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] text-muted-foreground", className)}>
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-subtle">Key</span>
            {(["work", "contract", "personal"] as Kind[]).map((k) => (
                <TypeTag key={k} kind={k} />
            ))}
        </p>
    );
}

/** Project status as a dot + text (filled dot when live), never a tag, so it can't be mistaken for type. */
export function StatusText({ status, className }: { status?: string; className?: string }) {
    if (!status) return null;
    const live = status.startsWith("Live");
    return (
        <span className={cn("inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] text-muted-foreground", className)}>
            <span
                aria-hidden
                className={cn("size-1.5 rounded-full border border-foreground", live ? "bg-foreground" : "bg-transparent")}
            />
            {status}
        </span>
    );
}
