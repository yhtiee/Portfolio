import type { Metadata } from "next";
import V2Page from "@/components/variants/v2/V2Page";
import { site } from "@/constants/site";

// Design review route: kept out of search; the live site stays at /.
export const metadata: Metadata = {
    title: `V2 · Bento · ${site.name}`,
    robots: { index: false },
    alternates: { canonical: "/" },
};

export default function Page() {
    return <V2Page />;
}
