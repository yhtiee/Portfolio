import type { Metadata } from "next";
import V1Page from "@/components/variants/v1/V1Page";
import { site } from "@/constants/site";

// Design review route: kept out of search; the live site stays at /.
export const metadata: Metadata = {
    title: `V1 · Split rail · ${site.name}`,
    robots: { index: false },
    alternates: { canonical: "/" },
};

export default function Page() {
    return <V1Page />;
}
