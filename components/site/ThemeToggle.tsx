"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

export const THEME_STORAGE_KEY = "theme";

const subscribe = (onChange: () => void) => {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
};

const isDark = () => document.documentElement.dataset.theme === "dark";

// Light is the default. Choosing dark sets data-theme="dark" on <html> and remembers it;
// the inline script in app/layout.tsx re-applies it before paint on the next visit.
export default function ThemeToggle() {
    const dark = useSyncExternalStore(subscribe, isDark, () => false);

    const toggle = () => {
        const next = isDark() ? "light" : "dark";
        if (next === "dark") document.documentElement.dataset.theme = "dark";
        else delete document.documentElement.dataset.theme;
        try {
            localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch {
            // Storage blocked (private mode): the choice just won't persist.
        }
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Dark mode"
            aria-pressed={dark}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
        >
            {/* Icons swap via CSS so the server-rendered markup is always right. */}
            <Moon className="size-4 dark:hidden" aria-hidden />
            <Sun className="hidden size-4 dark:block" aria-hidden />
        </button>
    );
}
