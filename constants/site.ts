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
        "Problem solver first, engineer second. I work with clients and teams to understand what success looks like for them, then build the product that gets them there: easy to use, reliable in production and ready to grow with the business.",
    // Short version of the headline for search results and link previews (~150 characters).
    description:
        "Full stack engineer who works with clients and teams to build products that are easy to use, reliable in production and ready to grow.",
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
        "I've shipped for teams in the US, UK, Australia and Nigeria: as Engineering Lead at Home Grid and CvtoCareer, as the backend and infrastructure engineer behind Spurt's product suite, and as the sole engineer on contract builds in fintech, healthcare and AI. I do my best work where product, data and reliability meet: payments and escrow, multi-tenant security, real-time sync, and LLM features with real guardrails.",
    // Resume "Professional Summary" (also used for metadata where a longer blurb fits).
    summary:
        "Full-stack engineer and engineering lead who takes products from spec to production across web, mobile and backend. As Engineering Lead at Home Grid and CvtoCareer, I led small teams, owned code review and shipped multi-tenant SaaS for US and Australian companies; at Spurt I built OAuth single sign-on that moved 35,325 users across four products and cut releases from 30 minutes to under 5. I work mainly in TypeScript, NestJS, PostgreSQL/Supabase, Next.js and React Native, integrate payments (Stripe, Flutterwave, Plaid) and LLMs (Claude, Gemini) with production guardrails, and use AI coding agents in a spec-first, review-gated workflow.",
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
