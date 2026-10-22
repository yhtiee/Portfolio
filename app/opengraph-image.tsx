import { ImageResponse } from "next/og";
import { site } from "@/constants/site";

export const alt = `${site.name}, Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Black & white share card, generated at build time.
export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    background: "#0a0a0a",
                    color: "#ededed",
                }}
            >
                <div style={{ fontSize: 24, color: "#8f8f8f", letterSpacing: 1 }}>{site.roleLine}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{site.name}</div>
                    <div style={{ fontSize: 34, lineHeight: 1.35, color: "#bdbdbd", maxWidth: 1000 }}>{site.headline}</div>
                </div>
                <div style={{ fontSize: 24, color: "#8f8f8f" }}>{site.url.replace("https://", "")}</div>
            </div>
        ),
        size
    );
}
