"use client";

import { useSyncExternalStore } from "react";

const subscribe = (onTick: () => void) => {
    const timer = setInterval(onTick, 30_000);
    return () => clearInterval(timer);
};

const formatTime = (timeZone: string) =>
    new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
    }).format(new Date());

// Live local time, e.g. "14:02 GMT+1". The server renders a blank placeholder (no
// mismatch); its reserved width means nothing shifts when the time appears.
export default function LocalTime({ timeZone }: { timeZone: string }) {
    const time = useSyncExternalStore(
        subscribe,
        () => formatTime(timeZone),
        () => null
    );

    return <span className="inline-block min-w-[9ch] tabular-nums">{time ?? " "}</span>;
}
