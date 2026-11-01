import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/constants/site";

export const alt = `${site.name}, ${site.roleLine}: problem solver first, engineer second.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Two-colour share card (white on black text, with the profile illustration), generated at build time.
export default async function OpengraphImage() {
    const photo = await readFile(join(process.cwd(), "public/og-portrait.png"));
    const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

    return new ImageResponse(
        (
            <div style={{ width: "100%", height: "100%", display: "flex", background: "#ffffff", color: "#0a0a0a" }}>
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "56px 24px 56px 72px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#525252" }}>
                        <div style={{ width: 10, height: 10, borderRadius: 5, background: "#0a0a0a" }} />
                        {site.status}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2.5, lineHeight: 1 }}>{site.name}</div>
                        <div style={{ marginTop: 12, fontSize: 28, color: "#525252" }}>{site.roleLine}</div>
                        <div style={{ marginTop: 24, width: 80, height: 4, background: "#0a0a0a" }} />
                        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", fontSize: 34, fontWeight: 600, letterSpacing: -1, lineHeight: 1.2 }}>
                            <span>Problem solver first,</span>
                            <span>engineer second.</span>
                        </div>
                        <div style={{ marginTop: 12, fontSize: 24, lineHeight: 1.4, color: "#525252" }}>
                            Products that are easy to use, reliable in production and ready to grow.
                        </div>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 600 }}>{site.url.replace("https://", "")}</div>
                </div>
                <div style={{ display: "flex", width: 480, height: 630 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element -- satori renders plain <img> only */}
                    <img src={photoSrc} width={480} height={630} alt="" style={{ objectFit: "cover" }} />
                </div>
            </div>
        ),
        size
    );
}
