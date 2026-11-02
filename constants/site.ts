import { companies, PERSONAL_GROUP_ID } from "./companies";
import { projects } from "./projects";
import { experience } from "./resume";
import type { Project } from "./types";

export const site = {
    name: "Utibeabasi Ekpenyong",
    shortName: "Ut",
    url: "https://ut-software-engineer.vercel.app",
    roleLine: "Full Stack Engineer",
    headline:
        "I take web, mobile and backend products from first spec to production, and lead the teams that build them, for companies in the US, UK, Australia and Nigeria.",
    // Headline numbers shown under the hero; each one is backed by a resume bullet.
    proof: [
        { value: "35,325", label: "users moved onto one sign-on at Spurt" },
        { value: "1 day → 20 min", label: "staff scheduling time at Home Grid" },
        { value: "30 → <5 min", label: "release time at Spurt" },
    ],
    // Short version of the headline for search results and link previews (~150 characters).
    description:
        "Full stack engineer and team lead shipping web, mobile and backend products to production for companies in the US, UK and Australia.",
    status: "Open to full-time and contract roles",
    location: "Uyo, Akwa Ibom, Nigeria",
    utcOffset: "UTC+1",
    timeZone: "Africa/Lagos",
    remote: "Remote · working with US & AU teams",
    email: "utibeabasiekpenyong@gmail.com",
    resumePdf: "/Utibeabasi-Ekpenyong-Resume.pdf",
    socials: {
        github: "https://github.com/yhtiee",
        linkedin: "https://www.linkedin.com/in/utibeabasi-ekpenyong-4768a017a/",
        x: "https://x.com/Yhutiee_dev",
    },
    // Second paragraph under the hero headline: scope, markets and what I'm best at.
    about:
        "Engineering Lead at Home Grid and CvtoCareer, backend and infrastructure engineer at Spurt, and sole engineer on contract builds in fintech, healthcare and AI. Strongest where product, data and reliability meet: payments, multi-tenant security, real-time sync and LLM features.",
    // Resume "Professional Summary" (~60 words: role, signature outcomes, stack).
    summary:
        "Full stack engineer and engineering lead who takes web, mobile and backend products from spec to production. Led teams at Home Grid and CvtoCareer; at Spurt, moved 35,325 users onto a shared single sign-on and cut releases from 30 minutes to under 5. Works in TypeScript, NestJS, PostgreSQL, React/Next.js and React Native, with Stripe payments and LLM features (Claude, Gemini).",
};

/** URL-safe id for a project, used for in-page deep links (/#home-grid-app). */
export const projectSlug = (project: Project) =>
    (project.title ?? "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

/** Company sections use a prefixed id so they never collide with project slugs. */
export const companyAnchor = (companyId: string) => `at-${companyId}`;

/**
 * The Work section: one block per company (newest first, as in the resume) with its
 * roles and the projects built there. Companies with neither roles nor projects are skipped.
 */
const groupsFor = (list: typeof companies) => list
    .map((company) => ({
        company,
        roles: experience.filter((role) => role.companyId === company.id),
        projects: projects.filter((project) => project.companyId === company.id),
    }))
    .filter((group) => group.roles.length > 0 || group.projects.length > 0);

export const workGroups = groupsFor(companies.filter((company) => !company.contract));

/** Contract engagements: shown in their own section, without dates. */
export const contractGroups = groupsFor(companies.filter((company) => company.contract));

export const personalProjects = projects.filter(
    (project) => !project.companyId || project.companyId === PERSONAL_GROUP_ID || !companies.some((c) => c.id === project.companyId)
);

// Fail the build loudly if two projects would share a deep link.
const slugs = projects.map(projectSlug);
const duplicate = slugs.find((slug, i) => slugs.indexOf(slug) !== i);
if (duplicate) throw new Error(`Duplicate project slug: ${duplicate}`);
