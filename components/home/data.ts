// Data shaping for the home page. Everything is derived from constants/, so the page never
// drifts from the real content.
import type { Company } from "@/constants/companies";
import { contractGroups, personalProjects, projectSlug, site, workGroups } from "@/constants/site";
import type { Project } from "@/constants/types";

export type Kind = "work" | "contract" | "personal";

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

/** Collapsed rows only need a teaser: the first sentence of the subtitle. */
const firstSentence = (text = "") => text.split(/(?<=[.!?])\s+/)[0];

const shortPeriod = (period?: string) => (period ? period.replace(/\s*[-–]\s*/, " – ").replace(/Present/i, "Now") : "");

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

/** Every project: employment, contract, then personal. */
export const projectEntries: ProjectEntry[] = [
    ...workGroups.flatMap((g) => g.projects.map((p) => toEntry(p, "work", g.company))),
    ...contractGroups.flatMap((g) => g.projects.map((p) => toEntry(p, "contract", g.company))),
    ...personalProjects.map((p) => toEntry(p, "personal")),
];

/** "2017 - 2022" -> "2017 – 2022". */
export const period = (value?: string) => (value ?? "").replace(/\s*-\s*/, " – ");

export const socialLinks = [
    { label: "LinkedIn", href: site.socials.linkedin },
    { label: "GitHub", href: site.socials.github },
    { label: "X", href: site.socials.x },
];
