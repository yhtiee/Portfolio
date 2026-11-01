// Data shaping shared by the three design variants (/v1, /v2, /v3).
// Everything here is derived from constants/, so the variants never drift from the real content.
import type { Company } from "@/constants/companies";
import { projects } from "@/constants/projects";
import { experience, type Experience } from "@/constants/resume";
import { contractGroups, personalProjects, projectSlug, site, workGroups } from "@/constants/site";
import type { Project } from "@/constants/types";

export type Kind = "work" | "contract" | "personal";

export const kindLabel: Record<Kind, string> = {
    work: "Employment",
    contract: "Contract",
    personal: "Personal",
};

export interface ProjectEntry {
    project: Project;
    slug: string;
    kind: Kind;
    company?: Company;
    /** Display year, e.g. "2025 – Now", "2023", or "" when the data has no period. */
    year: string;
    teaser: string;
    links: { label: string; href: string }[];
}

/** The collapsed row only needs a teaser: the first sentence of the subtitle. */
export const firstSentence = (text = "") => text.split(/(?<=[.!?])\s+/)[0];

const shortPeriod = (period?: string) => {
    if (!period) return "";
    return period.replace(/\s*[-–]\s*/, " – ").replace(/Present/i, "Now");
};

const toEntry = (project: Project, kind: Kind, company?: Company): ProjectEntry => ({
    project,
    slug: projectSlug(project),
    kind,
    company,
    year: shortPeriod(project.period),
    teaser: firstSentence(project.subtitle || project.description),
    links: [
        ...(project.demoUrl ? [{ label: "Live site", href: project.demoUrl }] : []),
        ...(project.repoUrl ? [{ label: "Code", href: project.repoUrl }] : []),
        ...(project.links ?? []),
    ],
});

/** Every project, in the same order as the current home page: employment, contract, personal. */
export const projectEntries: ProjectEntry[] = [
    ...workGroups.flatMap((g) => g.projects.map((p) => toEntry(p, "work", g.company))),
    ...contractGroups.flatMap((g) => g.projects.map((p) => toEntry(p, "contract", g.company))),
    ...personalProjects.map((p) => toEntry(p, "personal")),
];

export const kindCounts: Record<Kind | "all", number> = {
    all: projectEntries.length,
    work: projectEntries.filter((e) => e.kind === "work").length,
    contract: projectEntries.filter((e) => e.kind === "contract").length,
    personal: projectEntries.filter((e) => e.kind === "personal").length,
};

/** Dated roles (employment history), newest first as in the resume. */
export const roles: (Experience & { logo?: string; companyName: string })[] = workGroups.flatMap((g) =>
    g.roles.map((role) => ({ ...role, logo: g.company.logo, companyName: g.company.name }))
);

/** Contract engagements (no dates by design). */
export const contracts: (Experience & { logo?: string; companyName: string })[] = experience
    .filter((role) => role.contract)
    .map((role) => {
        const company = contractGroups.find((g) => g.company.id === role.companyId)?.company;
        return { ...role, logo: company?.logo, companyName: company?.name ?? role.company };
    });

export const period = (value?: string) => (value ?? "").replace(/\s*-\s*/, " – ");

const START_YEAR = 2020;

/** Headline numbers, each one taken from the site copy or counted from the data. */
export const stats = [
    { value: `${new Date().getFullYear() - START_YEAR}+`, label: "years shipping", detail: `Building professionally since ${START_YEAR}` },
    { value: "35,325", label: "users migrated", detail: "Onto the SSO I built at Spurt" },
    { value: "14", label: "organizations", detail: "Onboarded to Home Grid" },
    { value: String(projects.length), label: "products", detail: "Shipped or in flight, listed below" },
];

export const socialLinks = [
    { label: "LinkedIn", href: site.socials.linkedin },
    { label: "GitHub", href: site.socials.github },
    { label: "X", href: site.socials.x },
];

/** Company logos for the "shipped at" proof strip. */
export const proofCompanies = [...workGroups, ...contractGroups]
    .filter((g) => g.projects.length > 0)
    .map((g) => g.company);
