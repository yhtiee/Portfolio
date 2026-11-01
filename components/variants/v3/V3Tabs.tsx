"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const tabs = [
    { value: "work", label: "Index" },
    { value: "experience", label: "Experience" },
    { value: "about", label: "About & skills" },
] as const;

type Value = (typeof tabs)[number]["value"];

const isTab = (v: string): v is Value => tabs.some((t) => t.value === v);

/**
 * Segmented content area. The active tab lives in the URL hash (#experience) so it can be
 * shared and survives reload; a deep link to a project (#carematch) lands on the index.
 */
export default function V3Tabs({
    counts,
    panels,
    aside,
}: {
    counts: Partial<Record<Value, number>>;
    panels: Record<Value, React.ReactNode>;
    aside?: React.ReactNode;
}) {
    const [value, setValue] = useState<Value>("work");

    useEffect(() => {
        const sync = () => {
            const hash = decodeURIComponent(window.location.hash.slice(1));
            if (isTab(hash)) setValue(hash);
            else if (hash) {
                const details = document.getElementById(hash)?.querySelector("details");
                if (details) {
                    setValue("work");
                    details.open = true;
                }
            }
        };
        sync();
        window.addEventListener("hashchange", sync);
        return () => window.removeEventListener("hashchange", sync);
    }, []);

    const change = (v: string) => {
        if (!isTab(v)) return;
        setValue(v);
        history.replaceState(null, "", v === "work" ? window.location.pathname : `#${v}`);
    };

    return (
        <Tabs value={value} onValueChange={change} className="gap-0">
            <div className="sticky top-8 z-40 border-b border-border bg-background/90 backdrop-blur-md">
                <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-4 px-5 md:px-8 xl:px-12">
                    <TabsList className="-mx-1 h-auto max-w-full justify-start gap-1 overflow-x-auto bg-transparent p-1">
                        {tabs.map((t) => (
                            <TabsTrigger
                                key={t.value}
                                value={t.value}
                                className="h-9 flex-none cursor-pointer rounded-full border border-transparent px-4 text-[14px] text-muted-foreground data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none dark:data-[state=active]:border-foreground dark:data-[state=active]:bg-transparent"
                            >
                                {t.label}
                                {counts[t.value] !== undefined && (
                                    <span className="font-mono text-[11px] text-subtle">{counts[t.value]}</span>
                                )}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {aside}
                </div>
            </div>
            <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-8 md:px-8 md:pt-10 xl:px-12">
                {tabs.map((t) => (
                    // forceMount keeps every panel in the HTML (search engines, find-in-page, deep links).
                    <TabsContent key={t.value} value={t.value} forceMount className="data-[state=inactive]:hidden">
                        {panels[t.value]}
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    );
}
