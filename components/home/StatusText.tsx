import { cn } from "@/lib/utils";

/** Project status as a dot + text: filled dot when live, hollow otherwise. */
export default function StatusText({ status, className }: { status?: string; className?: string }) {
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
