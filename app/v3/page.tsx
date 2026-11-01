import type { Metadata } from "next";
import V3Page from "@/components/variants/v3/V3Page";
import { site } from "@/constants/site";

// Design review route: kept out of search; the live site stays at /.
export const metadata: Metadata = {
    title: `V3 · Editorial · ${site.name}`,
    robots: { index: false },
    alternates: { canonical: "/" },
};

export default function Page() {
    return <V3Page />;
}
