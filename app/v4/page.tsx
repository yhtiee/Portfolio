import type { Metadata } from "next";
import V4Page from "@/components/variants/v4/V4Page";
import { site } from "@/constants/site";

// Design review route: kept out of search; the live site stays at /.
export const metadata: Metadata = {
    title: `V4 · Timeline · ${site.name}`,
    robots: { index: false },
    alternates: { canonical: "/" },
};

export default function Page() {
    return <V4Page />;
}
