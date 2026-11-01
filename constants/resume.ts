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
            "Led a team of 3 full-stack engineers across Home Grid, a multi-tenant healthcare-operations PWA (React/Vite, NestJS 11, Supabase Postgres), and its sister marketplace CareMatch; 14 organizations onboarded (10 active, 5 on paid plans); top contributor in both repos and reviewer of the team's pull requests (all 112 on CareMatch).",
            "Architected a compliance-grade document vault with PDF templates and e-signatures (pdf-lib), per-document audit trails, and time-boxed external auditor access with MFA, view-only and watermark rules, revoked automatically every night.",
            "Built AI-assisted staff scheduling on Gemini 2.5 Flash that encodes working-hour, rest-period, location and job-role rules, runs as a background job with timeouts, and routes every result through manager review, cutting schedule creation from about a day to 20 minutes; paired with geofenced clock-in and a live attendance feed.",
            "Designed layered access control (Supabase JWT guard → role guard → 40+ per-module permission flags) and four-tier Stripe subscription entitlements, enforced on both the API and the client.",
            "Set up the GitHub Actions CI/CD pipeline shipping Dockerized staging and production builds to AWS EC2, plus about a dozen scheduled jobs for billing, expiry tracking, reminders and Google Calendar sync.",
                        "Built CareMatch, a Texas child-welfare hiring marketplace (NestJS, Next.js, PostgreSQL) now used by 10 facilities with 20 job posts, including Stripe Checkout fees for each job posting with idempotent webhook publishing, automatic takedown on refund, scheduled expiry and PDF receipts.",
            "Integrated CareMatch as a paid Home Grid add-on using single-use, 60-second SSO tokens and HMAC-signed entitlement webhooks, and routed both products' events through Home Grid's single Stripe webhook."
        ],
        technologies: ["TypeScript", "React", "Next.js", "Vite", "NestJS", "Supabase", "PostgreSQL", "Google Gemini", "Stripe", "Docker", "AWS EC2"]
    },
    {
        company: "Spurt (USA, remote)",
        companyId: "spurt",
        location: "USA (remote)",
        role: "Backend & Infrastructure Engineer",
        period: "2024 - 2026",
        type: "Full-time",
        points: [
            "Built the OAuth 2.0 single sign-on endpoints in the NestJS/Prisma SpurtX core, with Google and Microsoft sign-in, used by four products (Sync, Score, Toolkit and the SpurtX hub), and migrated 35,325 legacy users onto it.",
            "Owned the Sync backend (NestJS, PostgreSQL), used by 10+ teams across 50+ projects, from late 2024, writing about 88% of its commits: AI task generation with Gemini, Stripe subscriptions, Fincra wallets, Google and Outlook Calendar sync, and a 39-event notification catalog across email, push and WhatsApp.",
            "Founded Score, the NestJS successor to Spurt's PHP product Core, now serving 10+ businesses, and was its only engineer for six months, building invoicing, client OTP verification, bookings with Google Calendar and Meet, and cron-driven recurring invoices on dual Postgres connections shared with the SpurtX SSO.",
            "Built a MongoDB-backed analytics warehouse with scheduled rollups for active users, churn, cohort retention, time to first value, feature adoption and NPS, feeding the admin dashboard.",
            "Secured the platform: fixed Sync's penetration-test findings, tied admin APIs in four services to a central permission matrix with a global guard that refuses unchecked routes and automatic audit logs, and added rate-limited emailed 2FA for admins backed by Redis.",
            "Owned Docker and GitHub Actions deploys to AWS (EC2, ECR/ECS with commit-tagged images) across the SpurtX services, cutting releases from ~30-minute manual deploys to under 5 minutes, plus Grafana Loki logging that never blocks requests and the company's logging policy."
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
            "Shipped live goal savings in the Bucks React Native app (React Query, idempotency-keyed withdrawals) and built the locked and group savings flows ahead of their APIs.",
            "Shipped live airtime and data purchases and Face ID / fingerprint payment approval; built cable, electricity and internet flows ready for their APIs.",
            "Built realtime in-app support chat on Socket.IO, including a pre-login support flow and a transaction-dispute flow, plus PDF statement download and sharing."
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
            "Built the admin console and company job management for an AI-vetted talent marketplace on Next.js Server Actions and Supabase with Row Level Security.",
            "Built screen recording for 30-minute AI interviews that streams to S3 by multipart upload during the session, so finishing takes seconds.",
            "Added voice-activity detection, pause/resume and send-once outcome emails to the AI interview, guarded by Row Level Security."
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
            "Built Me&u, a couples app, end to end in 8 weeks: Expo/React Native client, Supabase backend (30 migrations, RLS), five Edge Functions, a streaming Gemini AI coach and push notifications."
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
            "Built Church Life, a multi-parish Catholic app, end to end in 8 weeks in Expo/React Native on Supabase, with RLS tenancy, Edge Functions for AI Q&A and push, and in-app account deletion."
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
            "Built Zedbe, an AI finance app, end to end in 4 weeks: Expo/React Native client and Supabase backend with Plaid webhooks streaming transactions over Realtime, RLS and 11 Edge Functions.",
            "Built a Claude-to-Gemini AI router for spending insights, subscription verdicts and grounded chat, with figures computed in code and narratives cached by data fingerprint."
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
            "Joined as an Automation & Web Scraping Engineer and was promoted to Engineering Lead of a 5–10 person team of engineers, designers and QA, leading the move of the CvtoCareer web platform from a monolith to micro-frontends (Next.js, Material UI, Vercel).",
            "Built and maintained 7+ job-application automation engines submitting about 200 applications per client each week across LinkedIn, Indeed, SEEK and Jobserve (Python, Selenium, Playwright, Puppeteer).",
            "Added AI question extraction and answering to the application engines, and Gemini-powered resume enhancement to the web app.",
            "Built scraping pipelines aggregating 50,000+ job postings a week, with async Python workers coordinated through Redis, Flask APIs serving the data, and Docker deployments on DigitalOcean."
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
            "Led the v2 rebuild of GrowthStack, Zedi's marketing-services platform serving 5+ client businesses (React, TypeScript, Redux Toolkit), moving the client dashboard to a new backend API and rebuilding auth, onboarding, ordering across 15 service types, Flutterwave checkout and in-app review of image, video and PDF deliverables.",
            "Built GrowthStack's role-based staff portal for superadmins, admins and creative talents, covering task assignment and reassignment, talent submissions uploaded to Cloudinary, and a two-stage admin-then-client approval flow.",
            "Built the studio-owner side of Scrollz, a Next.js and TypeScript music-industry platform with 5+ studios listed, in a Turborepo monorepo: studio listing and editing, the booking lifecycle (accept or decline, check-in and check-out, reviews and reports) and a bookings analytics dashboard, with TanStack Query, Zustand and Zod.",
            "Built the Next.js frontend and Strapi CMS (PostgreSQL, Cloudinary) for Arcpenter, an interior design company, with 7 content models so the client can publish projects, services and articles without developer help.",
            "Built the TruQ logistics website (23 routes, CMS-driven blog, full redesign) and the Zedi AI marketing and demo-booking site solo, and contributed pages to the Zedi Africa and ZedFlo agency websites."
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
            "Built REST APIs with Django and Flask for client web applications.",
            "Tuned PostgreSQL queries and schemas for client systems."
        ],
        technologies: ["Django", "Flask", "Python", "PostgreSQL", "REST APIs"]
    },
    {
        company: "The Roothub (Uyo, Nigeria)",
        companyId: "roothub",
        location: "Uyo, Nigeria",
        role: "Full Stack Developer & Tutor",
        period: "2021 - 2022",
        type: "Full-time",
        points: [
            "Mentored 50+ students to professional proficiency by designing and delivering a comprehensive Full Stack JavaScript curriculum.",
            "Built an internal learning management system in React that replaced manual HR processes.",
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
    { label: "Cloud & DevOps", items: ["AWS (EC2, ECR/ECS, S3, SES)", "Docker", "GitHub Actions CI/CD", "Vercel", "Netlify", "Render", "Google Cloud Run", "DigitalOcean", "Grafana Loki", "Sentry", "Linux", "Git"] },
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
    { label: "Cloud & DevOps", items: ["AWS (EC2, ECR/ECS, S3)", "Docker", "GitHub Actions", "Vercel", "Grafana Loki", "Sentry"] },
    { label: "Payments & AI", items: ["Stripe", "Flutterwave", "Plaid", "Claude API", "Gemini API", "OpenAI API"] },
];

export interface SoftSkill {
    label: string;
    /** One line of proof from real work. */
    detail: string;
}

export const softSkills: SoftSkill[] = [
    { label: "Technical leadership", detail: "Led a 5–10 person team at CvtoCareer and a team of three at Home Grid (including CareMatch), owning code review and merges (all 112 pull requests on CareMatch)." },
    { label: "Ownership", detail: "Built products end to end alone, from the database and payments to the app stores, and co-founded HandLancer as CTO." },
    { label: "Written communication", detail: "Write the specs, decision logs, technical handovers and engineering policies that teams and agents build from." },
    { label: "Product thinking", detail: "Turn PRDs into phased plans, flag product and pricing decisions, and keep UX simple and honest." },
    { label: "Remote collaboration", detail: "Shipped for companies in the US, UK, Australia and Nigeria across time zones." },
    { label: "Security mindset", detail: "Fixed penetration-test findings and default to row-level security, server-held secrets and audited admin access." },
    { label: "Mentoring", detail: "Taught full-stack JavaScript to 50+ students at The Roothub." },
    { label: "Adaptability", detail: "Moved across Django, NestJS, Next.js and Expo, and ran framework upgrades in production codebases." },
];

export const education: Education[] = [
    {
        institution: "University of Uyo",
        degree: "Bachelor of Engineering in Computer Engineering",
        period: "2017 - 2022"
    }
];
