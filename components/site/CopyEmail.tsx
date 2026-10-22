"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailProps {
    email: string;
    variant?: "primary" | "ghost";
}

// One click copies the address; the toast confirms. The visible mailto link next to it
// still works without JavaScript.
export default function CopyEmail({ email, variant = "primary" }: CopyEmailProps) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const timer = setTimeout(() => setCopied(false), 1600);
        return () => clearTimeout(timer);
    }, [copied]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

    const styles =
        variant === "primary"
            ? "bg-foreground text-background hover:opacity-85"
            : "border border-border hover:bg-muted";

    return (
        <>
            <button
                type="button"
                onClick={copy}
                className={`inline-flex items-center gap-2 h-9 px-3 rounded-md text-sm font-medium transition-[opacity,background-color] duration-150 cursor-pointer ${styles}`}
            >
                {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
                {copied ? "Copied" : "Copy email"}
            </button>
            <div
                role="status"
                aria-live="polite"
                className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-foreground text-background text-sm px-4 py-2 pointer-events-none transition-all duration-200 ease-[var(--ease-snappy)] ${
                    copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
            >
                {copied ? `${email} copied` : ""}
            </div>
        </>
    );
}
