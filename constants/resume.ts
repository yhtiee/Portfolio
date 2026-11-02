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
            "Led a 3-engineer team building Home Grid, a multi-tenant healthcare-operations platform, and its sister marketplace CareMatch: 14 organizations onboarded, 5 on paid plans.",
            "Cut staff schedule creation from about a day to 20 minutes with AI-assisted scheduling (Gemini) that enforces labor rules and keeps managers in the approval loop.",
            "Launched CareMatch, a Texas child-welfare hiring marketplace now used by 10 facilities, with Stripe pay-to-post billing and single sign-on as a paid Home Grid add-on.",
            "Built the compliance document vault (e-signatures, audit trails, time-limited auditor access) and role-based access with four Stripe subscription tiers.",
            "Set up CI/CD (GitHub Actions, Docker) shipping staging and production to AWS EC2."
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
            "Built OAuth 2.0 single sign-on shared by four SpurtX products and migrated 35,325 existing users onto it.",
            "Cut releases from ~30-minute manual deploys to under 5 minutes by moving SpurtX services to Docker and GitHub Actions on AWS (ECR/ECS, EC2).",
            "Owned the backend of Sync, a project-management product used by 10+ teams across 50+ projects, adding AI task generation, Stripe subscriptions and calendar sync.",
            "Founded Score, the NestJS rebuild of Spurt's PHP invoicing and bookings product, as its only engineer for six months; it now serves 10+ businesses.",
            "Closed penetration-test findings and moved admin APIs in four services behind one central permission system with audit logs and admin 2FA."
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
            "Shipped savings, airtime and data purchases, biometric payment approval and realtime support chat in a live React Native banking app."
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
            "Built the admin console, company job management and live recording of 30-minute AI interviews for a UK talent marketplace now live with 3 companies."
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
            "Delivered Me&u, a couples app with a streaming AI coach, end to end in 8 weeks: React Native app, Supabase backend and website."
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
            "Delivered Church Life, a multi-parish Catholic app, end to end in 8 weeks, with per-parish data isolation and an AI Q&A assistant."
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
            "Delivered Zedbe, an AI personal-finance app, end to end in 4 weeks: live bank transactions through Plaid and AI spending insights with a Claude-to-Gemini fallback."
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
            "Promoted to Engineering Lead of a 5–10 person team of engineers, designers and QA; split the monolithic web platform into client and admin apps that ship independently.",
            "Built 7+ job-application automation engines (Python, Selenium, Playwright) submitting about 200 applications per client each week across LinkedIn, Indeed and SEEK.",
            "Built scraping pipelines aggregating 50,000+ job postings a week with Redis-coordinated Python workers and Flask APIs."
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
            "Led the v2 rebuild of GrowthStack, a marketing-services platform serving 5+ client businesses: ordering across 15 service types, Flutterwave checkout and deliverable approval.",
            "Built the studio-owner side of Scrollz, a Next.js music-industry platform with 5+ studios listed: listings, the full booking lifecycle and an analytics dashboard.",
            "Shipped client websites for TruQ, Zedi AI and Arcpenter, including a Strapi CMS that lets the client publish content without a developer."
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
            "Built REST APIs in Django and Flask and tuned PostgreSQL queries and schemas for client web applications."
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
            "Mentored 50+ students to professional proficiency with a full-stack JavaScript curriculum I designed, and built a React learning platform that replaced manual HR processes."
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
    { label: "Technical leadership", detail: "Led teams of 3 to 10 at Home Grid and CvtoCareer, owning code review and delivery." },
    { label: "End-to-end ownership", detail: "Shipped whole products alone, from database and payments to the app stores." },
    { label: "Product thinking", detail: "Start from the business outcome, then turn the spec into a phased plan." },
    { label: "Remote collaboration", detail: "Shipped for companies in the US, UK, Australia and Nigeria." },
];

export const education: Education[] = [
    {
        institution: "University of Uyo",
        degree: "Bachelor of Engineering in Computer Engineering",
        period: "2017 - 2022"
    }
];
