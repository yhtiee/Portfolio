import type { Metadata } from "next";
import V5Page from "@/components/variants/v5/V5Page";
import { site } from "@/constants/site";

// Design review route: kept out of search; the live site stays at /.
export const metadata: Metadata = {
    title: `V5 · Master–detail · ${site.name}`,
    robots: { index: false },
    alternates: { canonical: "/" },
};

export default function Page() {
    return <V5Page />;
}
