// Projects grouped under the experience they came from (used by the home page).
//
// Matching rule: a project's `companyId` (constants/projects.ts) is the company `id`
// (constants/companies.ts), and the same id is the `companyId` of the role in
// constants/resume.ts. Companies flagged `contract` become Contract groups; projects whose
// companyId is "personal" (or unknown) go in one Personal group at the end.
import { companies, PERSONAL_GROUP_ID, type Company } from "@/constants/companies";
import { experience } from "@/constants/resume";
import { projectEntries, type Kind, type ProjectEntry } from "./data";

export interface ExperienceGroup {
    /** Stable id, also used as the in-page anchor (#xp-home-grid). */
    id: string;
    kind: Kind;
    company?: Company;
    name: string;
    logo?: string;
    /** Role title from the resume (or the company record when the resume has none). */
    role: string;
    location?: string;
    /** "2025 – Present"; contract and personal groups have none by design. */
    period?: string;
    employment?: string;
    /** One-line summary shown on collapsed rows. */
    summary: string;
    points: string[];
    technologies: string[];
    projects: ProjectEntry[];
}

const anchor = (id: string) => `xp-${id}`;

const roleFor = (companyId: string) => experience.find((r) => r.companyId === companyId);

const toGroup = (company: Company): ExperienceGroup => {
    const role = roleFor(company.id);
    return {
        id: anchor(company.id),
        kind: company.contract ? "contract" : "work",
        company,
        name: company.name,
        logo: company.logo,
        role: role?.role ?? company.role,
        location: role?.location,
        period: role?.period?.replace(/\s*-\s*/, " – "),
        employment: role?.type,
        summary: role?.points[0] ?? "",
        points: role?.points ?? [],
        technologies: role?.technologies ?? [],
        projects: projectEntries.filter((e) => e.project.companyId === company.id),
    };
};

// Employment in resume order (newest first), then contract in resume order.
const resumeOrder = (c: Company) => {
    const i = experience.findIndex((r) => r.companyId === c.id);
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};

const companyGroups = companies
    .slice()
    .sort((a, b) => resumeOrder(a) - resumeOrder(b))
    .map(toGroup)
    .filter((g) => g.projects.length > 0 || g.points.length > 0);

const personal = projectEntries.filter(
    (e) => !e.project.companyId || e.project.companyId === PERSONAL_GROUP_ID || !companies.some((c) => c.id === e.project.companyId)
);

const personalGroup: ExperienceGroup = {
    id: anchor(PERSONAL_GROUP_ID),
    kind: "personal",
    name: "Personal",
    role: "Founder & creator",
    summary: "Products I've founded or built on my own, mostly open source.",
    points: [],
    technologies: Array.from(new Set(personal.flatMap((e) => e.project.tags ?? []))).slice(0, 10),
    projects: personal,
};

export const experienceGroups: ExperienceGroup[] = [
    ...companyGroups.filter((g) => g.kind === "work"),
    ...companyGroups.filter((g) => g.kind === "contract"),
    ...(personal.length ? [personalGroup] : []),
];

// Fail the build if a project is ever left out of the grouping.
const grouped = experienceGroups.reduce((n, g) => n + g.projects.length, 0);
if (grouped !== projectEntries.length) {
    throw new Error(`groups.ts: ${projectEntries.length - grouped} project(s) not matched to an experience`);
}
