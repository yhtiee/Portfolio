"use client";

import { useEffect } from "react";

const openFromHash = (focus: boolean) => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const details = document.getElementById(id)?.querySelector<HTMLDetailsElement>("details.project");
    if (!details) return;
    details.open = true;
    if (focus) details.querySelector("summary")?.focus({ preventScroll: true });
};

/**
 * Keeps the URL in step with expanded projects so any open case study is shareable
 * (/#carematch). Uses replaceState so toggling doesn't fill the Back history.
 * The first open-on-load happens in an inline script before paint (see Work.tsx).
 */
export default function ProjectHashSync() {
    useEffect(() => {
        const onToggle = (event: Event) => {
            const details = event.target as HTMLElement;
            if (!(details instanceof HTMLDetailsElement) || !details.classList.contains("project")) return;
            const id = details.closest("article")?.id;
            if (!id) return;
            const current = decodeURIComponent(window.location.hash.slice(1));
            if (details.open && current !== id) {
                history.replaceState(null, "", `#${id}`);
            } else if (!details.open && current === id) {
                history.replaceState(null, "", window.location.pathname + window.location.search);
            }
        };
        const onHashChange = () => openFromHash(true);

        // `toggle` doesn't bubble, so listen in the capture phase.
        document.addEventListener("toggle", onToggle, true);
        window.addEventListener("hashchange", onHashChange);
        return () => {
            document.removeEventListener("toggle", onToggle, true);
            window.removeEventListener("hashchange", onHashChange);
        };
    }, []);

    return null;
}
