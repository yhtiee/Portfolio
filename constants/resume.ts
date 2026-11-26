// Single source of truth for work history, skills and education.
// Used by the home page, the /resume page and (via /resume) the downloadable PDF.

export interface Experience {
    /** Display name with location, as shown on the resume. */
    company: string;
    companyId: string;
    location: string;
    role: string;
    /** Omitted for contract work, which is listed without dates. */
    period?: string;
    /** Listed under "Contract" instead of the main work history. */
    contract?: boolean;
    /** Employment type shown next to the dates, e.g. "Full-time", "Part-time". */
    type?: string;
    points: string[];
    technologies: string[];
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
}

export const experience: Experience[] = [
    {
        company: "Home Grid (Texas, USA)",
        companyId: "home-grid",
        location: "Texas, USA",
        role: "Fullstack Developer & Engineering Lead",
        period: "2025 - Present",
        type: "Full-time",
        points: [
            "Led a team of 3 engineers building Home Grid, a multi-tenant web platform that helps healthcare agencies run their daily operations, and made the most commits on both repositories (417), with 14 organizations onboarded and 5 on paid plans.",
            "Built AI scheduling with Google Gemini that drafts staff schedules within working-hour, rest-period, and role rules for managers to approve, cutting schedule creation from about a day to 20 minutes.",
            "Launched CareMatch, a hiring marketplace for Texas child-welfare facilities now used by 10 facilities with 20 job posts, and reviewed and merged all 112 of its pull requests.",
            "Engineered Stripe pay-to-post billing with idempotent webhooks and refunds, plus single sign-on (SSO) from Home Grid through single-use 60-second tokens, so agencies can buy CareMatch as a paid Home Grid add-on.",
            "Architected data isolation built to HIPAA requirements with organization IDs and PostgreSQL row-level security (RLS), role-based access control (RBAC) with 40+ permissions across four tiers, and a document vault with e-signatures, audit trails, and time-limited auditor access holding 50+ documents.",
            "Automated staging and production releases to AWS EC2 with Docker and GitHub Actions, plus about a dozen scheduled jobs for document expiries, billing, and reminders, so releases and routine tasks run without manual steps."
        ],
        technologies: ["TypeScript", "React", "Next.js", "Vite", "NestJS", "Supabase", "PostgreSQL", "Row-Level Security (RLS)", "Google Gemini", "Stripe", "Docker", "AWS EC2"]
    },
    {
        company: "Spurt (USA, remote)",
        companyId: "spurt",
        location: "USA (remote)",
        role: "Backend & Infrastructure Engineer",
        period: "2024 - 2026",
        type: "Full-time",
        points: [
            "Built OAuth 2.0 single sign-on (SSO) with Google and Microsoft sign-in, shared by all five SpurtX products, and migrated 35,325 existing users onto it so each person signs in once across the suite.",
            "Containerized SpurtX services with Docker and automated releases through GitHub Actions to AWS (ECR, ECS on Fargate, EC2), cutting deploys from about 30 minutes of manual work to under 5 minutes.",
            "Owned the backend of Sync, a project-management product used by 10+ teams across 50+ projects, writing about 88% of its commits from late 2024, including AI task generation, Stripe subscriptions, and calendar sync.",
            "Founded Score, a NestJS rebuild of Spurt's PHP invoicing and bookings product, as its only engineer for six months, and grew it into a product that now serves 10+ businesses and has processed 30+ invoices and 50+ bookings.",
            "Hardened security after a penetration test by fixing Sync's findings and moving admin APIs in four services behind one central permission system with audit logs and rate-limited two-factor authentication (2FA) for admins.",
            "Stood up a MongoDB analytics warehouse that tracks active users, churn, cohort retention, and NPS, plus Grafana Loki logging that masks sensitive fields and never blocks a request."
        ],
        technologies: ["TypeScript", "NestJS", "Prisma", "TypeORM", "PostgreSQL", "MongoDB", "Redis", "Python", "Flask", "Docker", "GitHub Actions", "AWS", "Grafana Loki"]
    },
    {
        company: "Bucks (Lagos, Nigeria)",
        companyId: "bucks",
        location: "Lagos, Nigeria",
        role: "Frontend & Mobile Engineer",
        contract: true,
        points: [
            "Shipped savings, airtime, and data purchases, biometric approval on payments, and real-time support chat in a live React Native banking app, so users can pay securely and get help without leaving the app."
        ],
        technologies: ["React Native", "Expo", "TypeScript", "React Query", "Socket.IO", "Axios", "EAS", "Next.js", "Tailwind CSS"]
    },
    {
        company: "Nouvells (London, United Kingdom)",
        companyId: "nouvells",
        location: "London, United Kingdom",
        role: "Full Stack Engineer",
        contract: true,
        points: [
            "Created the admin console, company job management, and live recording of 30-minute AI interviews for a UK talent marketplace now live with 3 companies, so hiring teams can replay each interview."
        ],
        technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "AWS S3", "TanStack Query", "Resend", "Tailwind CSS"]
    },
    {
        company: "Me&You Technologies (Calabar, Nigeria)",
        companyId: "meyou",
        location: "Calabar, Nigeria",
        role: "Full Stack Engineer",
        contract: true,
        points: [
            "Delivered Me&u, a couples app, end to end in 8 weeks across the React Native app, Supabase backend, and website, with an AI coach that streams its replies so chats feel live."
        ],
        technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Gemini API", "Firebase Cloud Messaging", "Vite"]
    },
    {
        company: "Church Life Limited (Calabar, Nigeria)",
        companyId: "churchlife",
        location: "Calabar, Nigeria",
        role: "Full Stack Engineer",
        contract: true,
        points: [
            "Produced Church Life, a Catholic app for multiple parishes, end to end in 8 weeks, with an AI question-and-answer assistant and each parish's data kept separate so members see only their own parish."
        ],
        technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Deno", "Vite", "Vercel"]
    },
    {
        company: "Zedbe (United States)",
        companyId: "zedbe",
        location: "United States",
        role: "Full Stack Engineer",
        contract: true,
        points: [
            "Delivered Zedbe, an AI personal-finance app, end to end in 4 weeks, with live bank transactions through Plaid and AI spending insights that fall back from Claude to Gemini so insights keep working if one provider fails."
        ],
        technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Plaid", "Claude API", "Gemini API"]
    },
    {
        company: "CvtoCareer (Sydney, Australia)",
        companyId: "cvtocareer",
        location: "Sydney, Australia",
        role: "Engineering Lead (promoted from Automation & Web Scraping Engineer)",
        period: "2023 - 2025",
        type: "Part-time",
        points: [
            "Promoted to Engineering Lead after shipping features on the existing platform, then led a 5- to 10-person team of engineers, designers, and QA.",
            "Directed the split of the single (monolithic) web platform into separate client and admin apps with Next.js and Material UI, so each side deploys on its own without risking the other.",
            "Expanded job-application automation from 4 to 12 job boards with Python, Selenium, and Playwright, submitting about 200 applications per client each week across LinkedIn, Indeed, SEEK, and others.",
            "Developed scraping pipelines with Redis-coordinated Python workers and Flask APIs, containerized with Docker on DigitalOcean, collecting 50,000+ job postings a week to feed the application engine.",
            "Integrated the Gemini and OpenAI APIs into the platform to generate AI CV rewrites and job-role suggestions for each job seeker."
        ],
        technologies: ["Python", "TypeScript", "Next.js", "Flask", "Selenium", "Playwright", "Puppeteer", "Redis", "MongoDB", "PostgreSQL", "Docker", "DigitalOcean"]
    },
    {
        company: "Zedi Inc (Lagos, Nigeria)",
        companyId: "zedi",
        location: "Lagos, Nigeria",
        role: "Frontend Engineer",
        period: "2023 - 2025",
        type: "Full-time",
        points: [
            "Rebuilt both apps of GrowthStack v2, a marketing-services platform for 5+ client businesses, as sole frontend engineer, adding ordering across 15 service types, Flutterwave checkout, and deliverable approval so businesses order, pay, and sign off in one place.",
            "Owned the studio-owner side of Scrollz, a Next.js music-industry platform with 5+ studios listed, building listings, the full booking lifecycle, and an analytics dashboard.",
            "Wrote every commit of TruQ's 23-route Next.js marketing site (180 commits, 149 merged pull requests) as its sole developer, including a redesign of its four main pages.",
            "Shipped the Arcpenter and Zedi AI websites, including a Strapi CMS with 7 content types so the client can publish without a developer, and an Airtable lead funnel that captures demo requests."
        ],
        technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "TanStack Query", "Zustand", "Tailwind CSS", "Strapi", "Turborepo", "Flutterwave", "Cloudinary"]
    },
    {
        company: "Trusted Partners (Riyadh, Saudi Arabia)",
        companyId: "trusted-partners",
        location: "Riyadh, Saudi Arabia",
        role: "Backend Engineer",
        period: "2022 - 2023",
        type: "Part-time",
        points: [
            "Engineered the backend of a security tool that checks the software inside devices (firmware) for weak spots, writing Django features that analyzed firmware for security vulnerabilities in Python.",
            "Scored each firmware finding by severity with CVSS-based vulnerability scoring, so client teams could fix the riskiest issues first.",
            "Developed REST APIs in Django and Flask that delivered analysis results to client web frontends, and tuned PostgreSQL queries and schemas for faster data access."
        ],
        technologies: ["Django", "Flask", "Python", "PostgreSQL", "REST APIs", "CVSS"]
    },
    {
        company: "The Roothub (Uyo, Nigeria)",
        companyId: "roothub",
        location: "Uyo, Nigeria",
        role: "Full Stack Developer & Tutor",
        period: "2021 - 2022",
        type: "Full-time",
        points: [
            "Authored a full-stack JavaScript curriculum and mentored 50+ students through it, from their first web pages to professional-level work.",
            "Created a React learning platform that moved the hub's manual HR processes into one app."
        ],
        technologies: ["React.js", "Django", "JavaScript", "Python", "MySQL"]
    }
];

export interface SkillGroup {
    label: string;
    items: string[];
}

/**
 * Technical skills, grouped and ordered strongest-first. Every item is backed by a project
 * or role on the site (see constants/projects.ts), so nothing here is aspirational.
 */
export const skillGroups: SkillGroup[] = [
    { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"] },
    { label: "Backend", items: ["Node.js", "NestJS", "Django", "Django REST Framework", "Flask", "Deno", "REST APIs", "WebSockets (Socket.IO)", "Server-Sent Events", "OAuth 2.0 / SSO", "JWT auth", "Background jobs & queues (Bull, BullMQ, pgmq, pg_cron)"] },
    { label: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "Material UI", "Ant Design", "Framer Motion", "Redux Toolkit", "Zustand", "TanStack Query", "React Hook Form", "Zod", "PWA"] },
    { label: "Mobile", items: ["React Native", "Expo", "Expo Router", "EAS Build & Update", "Reanimated", "Push notifications (Expo, FCM)", "Biometric auth", "App Store & Play Store compliance"] },
    { label: "Data", items: ["PostgreSQL", "Supabase (Auth, RLS, Realtime, Storage, Edge Functions)", "MongoDB", "Redis", "MySQL", "Prisma", "TypeORM", "pgvector", "PostGIS", "Database migrations"] },
    { label: "AI & LLMs", items: ["Claude API", "Gemini API", "OpenAI API", "Groq", "Vercel AI SDK", "Multi-provider routing & fallback", "Streaming responses", "Guardrails & grounding checks", "LLM evals", "Embeddings"] },
    { label: "Cloud & DevOps", items: ["AWS (EC2, ECR, ECS Fargate, S3, SES)", "Docker", "GitHub Actions CI/CD", "Vercel", "Netlify", "Render", "Google Cloud Run", "DigitalOcean", "Grafana Loki", "Sentry", "Linux", "Git"] },
    { label: "Payments & APIs", items: ["Stripe", "Flutterwave", "Plaid", "Fincra", "Firebase Cloud Messaging", "Google Calendar API", "SendGrid", "Resend", "Twilio", "Cloudinary", "Strapi", "Airtable", "AdMob"] },
    { label: "Testing", items: ["Vitest", "Jest", "Playwright", "pytest", "pgTAP"] },
    { label: "Automation", items: ["Selenium", "Playwright", "Puppeteer", "BeautifulSoup", "XPath", "Web scraping pipelines"] },
    { label: "Workflow", items: ["Claude Code", "Google Antigravity", "Spec-first development", "Code review", "CI/CD"] },
];

/**
 * Condensed skills for the resume PDF (~40 items, 6 groups), as the hiring-panel review
 * recommended. The site shows the full `skillGroups` list and the soft skills.
 */
export const resumeSkillGroups: SkillGroup[] = [
    { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
    { label: "Backend", items: ["Node.js", "NestJS", "Django", "Flask", "REST APIs", "WebSockets", "OAuth 2.0 / SSO", "Background jobs & queues"] },
    { label: "Frontend & Mobile", items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS", "TanStack Query", "Redux Toolkit"] },
    { label: "Data", items: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "Prisma", "TypeORM"] },
    { label: "Cloud & DevOps", items: ["AWS (EC2, ECR, ECS Fargate, S3)", "Docker", "GitHub Actions", "Vercel", "Grafana Loki", "Sentry"] },
    { label: "Payments & AI", items: ["Stripe", "Flutterwave", "Plaid", "Claude API", "Gemini API", "OpenAI API"] },
];

export interface SoftSkill {
    label: string;
    /** One line of proof from real work. */
    detail: string;
}

export const softSkills: SoftSkill[] = [
    { label: "Technical leadership", detail: "Led teams of 3 to 10 people at Home Grid and CvtoCareer, owning code review and on-time delivery." },
    { label: "End-to-end ownership", detail: "Shipped whole products alone, from the database and payments through to app store release." },
    { label: "Product thinking", detail: "Start from the business goal, then turn the spec into a step-by-step build plan." },
    { label: "Remote collaboration", detail: "Shipped for remote teams in the US, UK, Australia, and Nigeria." },
];

export const education: Education[] = [
    {
        institution: "University of Uyo",
        degree: "Bachelor of Engineering in Computer Engineering",
        period: "2017 - 2022"
    }
];
