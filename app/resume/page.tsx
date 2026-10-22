import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowLeft } from "lucide-react";
import ResumeDocument from "@/components/resume/Resume";
import { site } from "@/constants/site";

// Printable resume. scripts/resume-pdf.mjs prints this page to the downloadable PDF,
// so it carries no site chrome. Visitors use the PDF; this page stays out of search.
export const metadata: Metadata = {
    title: `Résumé · ${site.name}`,
    robots: { index: false },
    alternates: { canonical: "/" },
};

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-gray-50 print:bg-white print:min-h-0 text-black py-10 px-4 sm:px-6 print:p-0 font-sans">
            <div className="max-w-4xl mx-auto print:max-w-none">
                <div className="flex justify-between items-center mb-6 no-print">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
                        <ArrowLeft className="w-4 h-4" aria-hidden /> Back to site
                    </Link>
                    <a
                        href={site.resumePdf}
                        download
                        className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-black text-white text-sm font-medium hover:opacity-85 transition-opacity"
                    >
                        <ArrowDown className="w-4 h-4" aria-hidden /> Download PDF
                    </a>
                </div>

                <ResumeDocument />
            </div>
        </div>
    );
}
