import type { Project } from "./types";

export const projects: Project[] = [
    {
        id: "14",
        status: "Live",
        companyId: "zedi",
        role: "Frontend Engineer",
        title: "GrowthStack",
        team: "Solo frontend on v2 (v1 by 4 engineers)",
        period: "2023 – 2024",
        subtitle: "A marketing-services platform where businesses order, pay for and approve strategy, design, content and media-buying work, backed by a role-based staff portal that routes each order to creative talent. I led the v2 rebuild of both apps.",
        description: "GrowthStack has two React and TypeScript apps on one REST backend. In the client dashboard, businesses onboard, place orders across 15 service types, pay through Flutterwave, and review or approve deliverables. In the staff portal, superadmins, admins and creative talents manage clients, assign and reassign tasks, and run a two-stage review in which an admin approves a talent's submission before it reaches the client. I moved both apps from the v1 backend to a new API and built most of the v2 order, payment and review flows.",
        myRole: [
            "Moved the client dashboard to a new backend API and rebuilt sign-up, login, email verification, password reset and multi-step business onboarding.",
            "Wired order forms and order-history tables for design, content, strategy (brand, press, influencer) and media buying to the new orders API, with pagination, filters and search.",
            "Built the Flutterwave checkout for unpaid orders and the downloadable order PDFs.",
            "Built the deliverable review screens: in-app preview of image, video and PDF submissions, plus client approval and revision requests.",
            "Built the staff portal's role-based dashboard and navigation for superadmins, admins and talents, along with admin and talent account management and invite-based account setup.",
            "Built task assignment and reassignment, the talent submission flow with Cloudinary uploads, and admin review and approval ahead of client sign-off."
        ],
        challenges: [
            {
                title: "Moving a live v1 frontend to a new backend",
                problem: "The v1 dashboard was built against an older API on Heroku. The new GrowthStack backend changed the endpoints, the auth flow and the order models.",
                approach: "Rewired auth, onboarding and every order type to the new /v1 REST endpoints through Redux Toolkit async thunks. Kept the shared axios auth-token setup, and routed users without a business profile to onboarding."
            },
            {
                title: "One staff app for three roles",
                problem: "Superadmins, admins and creative talents share one portal, but each role needs different overview stats, task lists, navigation and actions.",
                approach: "Each role gets its own overview and task-list endpoint and its own sidebar config. Actions such as assign, reassign, review and submit appear based on the user's role and the task's status."
            },
            {
                title: "A two-stage approval for creative work",
                problem: "A talent's submission has to pass an internal admin review before the client sees it, and both parties' feedback has to stay visible to everyone involved.",
                approach: "Built separate admin-review and approval steps and separate client-review and approval steps, with modals that show each party's reason and details. Talents can see admin feedback until the client has responded."
            },
            {
                title: "Mixed-media deliverables",
                problem: "Deliverables can be images, videos, PDFs or bundles of several files, and clients need to preview them without downloading anything.",
                approach: "Files upload to Cloudinary by type (image, video or raw), images are compressed in the browser, multi-file uploads are zipped with JSZip, and submissions are previewed inline with a PDF viewer and video player."
            }
        ],
        impact: [
            "5+ client businesses served"
        ],
        tags: [
            "React",
            "TypeScript",
            "Redux Toolkit",
            "React Router",
            "Tailwind CSS",
            "Ant Design",
            "Formik",
            "Yup",
            "Axios",
            "Flutterwave",
            "Cloudinary",
            "Netlify"
        ],
        features: [
            "Business sign-up, email verification and multi-step onboarding",
            "Orders across 15 service types in strategy, design, content and media buying",
            "Flutterwave checkout for unpaid orders",
            "Downloadable order PDFs",
            "In-app preview of image, video and PDF deliverables",
            "Client approval and revision requests on submissions",
            "Role-based staff portal for superadmins, admins and talents",
            "Task assignment and reassignment to creative talents",
            "Admin review and approval before client delivery",
            "Admin and talent management with invite-based account setup",
            "Paginated, filterable, searchable order and task tables",
            "Responsive layouts for both apps"
        ],
        demoUrl: "https://growthstack.netlify.app/",
        image: "/growthstack.png",
        images: []
    },
    {
        id: "3",
        status: "Live",
        companyId: "zedi",
        role: "Frontend Engineer",
        title: "Scrollz",
        team: "3 frontend engineers",
        period: "2024 – 2025",
        subtitle: "A music-industry platform where artists, producers and studio owners find each other, book studio sessions, sell beats and collaborate. I built the marketing site's first version and the studio-owner side of the product.",
        description: "Scrollz is a pnpm and Turborepo monorepo with two Next.js 15 / React 19 apps: the main web app and an internal admin dashboard. They share a UI kit, hooks, providers and config packages. In the web app, artists browse and book recording studios, buy beats, take on collaborations and message each other in real time. Studio owners list studios and run the bookings for them. Payments go through Paystack and Flutterwave, the blog runs on Sanity, and releases are versioned automatically with semantic-release.",
        myRole: [
            "Built the first version of the public marketing site: home, about, blog, events, artiste, producer and studios pages, including the hero animation, the vertical and horizontal image carousels, the services dropdown navigation and mobile responsiveness throughout.",
            "Owned the studio-owner feature module end to end, writing nearly all of its code: creating a studio with multi-file media upload, editing details, facilities, policies, gallery and pricing, and the My Studios listing, detail and review pages.",
            "Built the studio-owner booking workflow: filterable booking lists, booking details, accepting and declining sessions, checking clients in and out, rating or reporting a client, and Zod-validated forms for each step.",
            "Wired the module to the REST API with TanStack Query (8 query and 8 mutation hooks), a typed endpoint and service layer, and a scoped Zustand store for the active studio.",
            "Built the studio-owner home dashboard analytics: MUI X line charts of bookings over 7-day to 12-month ranges, plus a date-gap-filling utility so days with no bookings still show on the chart.",
            "Added a drag-and-drop event calendar (month, week, day and agenda views, built on dnd-kit) to the shared UI package, and built the profile-settings screens."
        ],
        challenges: [
            {
                title: "Session lifecycle for studio owners",
                problem: "A studio booking goes through several states: pending, then accepted or declined, then checked in, checked out, and reviewed or reported. Each state needs its own actions, and the screens had to stay consistent after every change.",
                approach: "Each transition got its own React Query mutation hook calling a dedicated endpoint, with toast feedback and shared query keys so booking details refresh after an action. Every form (decline, report, review) is validated with a Zod schema through React Hook Form, and the booking lists are filtered by status and client role through URL query state (nuqs)."
            },
            {
                title: "Uploading studio media without blocking the form",
                problem: "Creating or updating a studio means uploading several images and videos alongside a long form, and users needed to see progress for each file.",
                approach: "The add-studio and update-gallery screens use the shared multi-file upload hook. They track progress and results for each file, write the returned URLs back into the form state, and only submit the create or update request once the uploads are done."
            },
            {
                title: "Readable analytics from sparse data",
                problem: "The bookings analytics endpoint returns only the days that had activity, so charts over 7 days to 12 months came out with gaps and an uneven x-axis.",
                approach: "A fillDateGaps utility builds the full daily range for the selected period and fills missing days with zero. The MUI X line chart then plots that series, and its width is recalculated on resize so it works at every breakpoint."
            },
            {
                title: "One codebase for two apps",
                problem: "The web app and the admin dashboard had to share components, hooks and config without drifting apart, while several engineers committed in parallel.",
                approach: "The repo is a pnpm workspace orchestrated by Turborepo, with shared UI, hooks, lib, provider, types and config packages. Husky and lint-staged hooks plus commitlint enforce conventional commits, GitHub Actions runs lint and build on every pull request, and semantic-release generates versions and the changelog."
            }
        ],
        impact: [
            "5+ recording studios listed"
        ],
        tags: [
            "Next.js",
            "React",
            "TypeScript",
            "TanStack Query",
            "Tailwind CSS",
            "shadcn/ui",
            "Zustand",
            "React Hook Form",
            "Zod",
            "Framer Motion",
            "MUI X Charts",
            "Turborepo"
        ],
        features: [
            "Separate profiles for artistes, producers and studio owners, with a choice of default login profile",
            "Studio discovery and session booking",
            "Studio-owner tools for listing studios and managing facilities, policies, gallery and pricing",
            "Accepting and declining bookings, with client check-in and check-out",
            "Post-session reviews, ratings and client reports",
            "Booking analytics dashboard for studio owners",
            "Beat marketplace and purchased-beats library",
            "Collaboration requests and real-time messaging (Socket.IO)",
            "Wallet, earnings and withdrawal history",
            "Paystack and Flutterwave payments",
            "Sanity-powered blog",
            "Admin dashboard for users, studios, bookings, collaborations and issue reports"
        ],
        image: "/scrollz.png",
        demoUrl: "https://scrollz-web.netlify.app/",
        images: []
    },
    {
        id: "1",
        status: "Live",
        companyId: "zedi",
        role: "Frontend Engineer",
        title: "Arcpenter",
        team: "2 engineers",
        period: "2023 – 2025",
        subtitle: "A Strapi-driven marketing website for Arcpenter, a Lagos carpentry and interior design company. I built the Next.js frontend end to end and set up and modeled most of its Strapi CMS.",
        description: "Arcpenter's site shows the company's completed projects, services, team and blog, and has a contact form, all for a client that needed to update content without a developer. Projects, services, team profiles, blog posts and categories live in a Strapi 4 CMS backed by PostgreSQL, with media stored on Cloudinary. The Next.js 13 App Router frontend loads that content through a shared Axios client and serves the images through next/image. Contact inquiries go straight into an Airtable base.",
        myRole: [
            "Built the Next.js 13 App Router frontend, covering home, about, projects, project detail, services, service detail, blog, article, category and contact pages.",
            "Set up the Strapi 4 CMS with PostgreSQL and the Cloudinary upload provider, and modeled 7 content types (projects, project images, results, services, team, blogs, categories).",
            "Wrote a reusable useFetch hook on top of a preconfigured Axios instance to load Strapi content, with skeleton loaders and empty states for the loading and no-data cases.",
            "Built blog category filtering and search, with the active category stored in the URL so filtered views can be shared.",
            "Built custom interactive pieces: a rotating Ferris-wheel image gallery, Swiper and React Slick project carousels, and scroll-triggered entrance animations.",
            "Connected the contact form to the Airtable REST API with toast feedback, and maintained the site after launch through 2025."
        ],
        challenges: [
            {
                title: "Content the client can edit",
                problem: "Arcpenter needed to publish new projects, services, team members and articles without a developer, and each project page is long-form: brief, approach, what we did, a gallery and client results.",
                approach: "Modeled each page section as Strapi fields and relations (Project → Project Image, Result; Blog → Category, Team author) using rich-text fields. The frontend renders them with react-markdown, so editors can change copy and imagery directly."
            },
            {
                title: "Image-heavy pages on any device",
                problem: "Carpentry and interior work is shown through large photos, and the layouts were designed separately for mobile, tablet and desktop.",
                approach: "Routed CMS uploads to Cloudinary and served them through next/image with whitelisted remote domains. At the 1024px breakpoint the site swaps in separate desktop and mobile versions of the hero, offers, products, testimonials and FAQ sections instead of forcing one layout to fit every size."
            },
            {
                title: "Findable blog content",
                problem: "As the blog grew, readers needed to narrow articles by topic and find specific posts.",
                approach: "Pulled categories from Strapi and built category routes with client-side search. The category and search state live in the URL query string, so filtered views survive a refresh and can be shared."
            }
        ],
        tags: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Sass",
            "Strapi",
            "PostgreSQL",
            "Cloudinary",
            "Airtable",
            "Framer Motion",
            "Swiper",
            "Netlify"
        ],
        features: [
            "Strapi 4 CMS for projects, services, team and blog",
            "Project case-study pages built from related Strapi models",
            "Rich-text blog and service pages rendered with react-markdown",
            "Blog category filters and search, with state kept in the URL",
            "Contact form that posts to Airtable, with toast notifications",
            "Cloudinary media served through next/image",
            "Rotating Ferris-wheel gallery and Swiper/Slick carousels",
            "Scroll-triggered animations with react-intersection-observer and Framer Motion",
            "Skeleton loaders and empty states for CMS-driven pages",
            "Separate layouts for mobile, tablet and desktop"
        ],
        image: "/arcpenter-hero.png",
        demoUrl: "https://arcpenter.netlify.app/",
        images: []
    },
    {
        id: "2",
        status: "Live",
        companyId: "zedi",
        role: "Frontend Engineer",
        title: "TruQ",
        team: "Solo build",
        period: "2023 – 2024",
        subtitle: "Marketing website for TruQ, a Lagos-based logistics platform that connects businesses, individuals and drivers with trucks and vans for moves and deliveries. I built the whole frontend myself, from the first scaffold to a full redesign.",
        description: "TruQ needed one site that speaks to several audiences: businesses, individuals, drivers and partners, plus its Siju products for businesses and logistics. It is a JavaScript Next.js 13 App Router site styled with Tailwind CSS, with 23 routes including audience landing pages, pricing plans, a multi-step quote flow, trip tracking, careers and a blog. Blog posts are fetched from a Strapi headless CMS and rendered from Markdown, and images are served from Cloudinary through next/image.",
        myRole: [
            "Wrote every commit in the repo (180 commits and 149 merged pull requests, June 2023 to January 2024), working through Jira-tracked tickets.",
            "Built 23 App Router routes and about 74 components, including mega-menu navigation for desktop and mobile, the audience landing pages, pricing, careers, contact and success pages.",
            "Connected the blog to the CMS: a shared Axios client and a useFetch hook load the post list and individual posts, which render with react-markdown and show an empty state when there are no posts.",
            "Added scroll-triggered entrance animations with Framer Motion's whileInView across the site, plus Swiper carousels for the hero, testimonials and business logos.",
            "Implemented the December 2023 to January 2024 redesign of the Home, Business, Individual and Drivers pages, with responsive passes for every breakpoint."
        ],
        challenges: [
            {
                title: "One site, many audiences",
                problem: "Businesses, individuals, drivers and partners each needed their own landing page and calls to action, and the navigation had to reach all of them without overwhelming visitors.",
                approach: "Grouped the routes under Customers, Partners, Company and Resources mega-menus with separate desktop and mobile versions, and reused shared section components (headers, FAQ, stats, testimonials) across the audience pages."
            },
            {
                title: "Pricing for three audiences",
                problem: "Drivers, partners and customers each have their own plans, offered monthly or yearly, plus a confirmation step before payment.",
                approach: "Built a tabbed pricing page with a monthly/yearly toggle for each audience, backed by plan data kept in local constants. Each plan links to a dynamic /pricing/[id] confirmation route, and a feature-comparison table sits below."
            },
            {
                title: "Motion without hurting load",
                problem: "The redesign called for animated stats and section reveals, but they should only run when the user actually scrolls to them.",
                approach: "Used react-intersection-observer to start the stats counter only when the section is in view, and Framer Motion's whileInView for entrance transitions."
            }
        ],
        tags: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Framer Motion",
            "Strapi",
            "Axios",
            "Swiper",
            "Cloudinary"
        ],
        features: [
            "Separate landing pages for businesses, individuals, drivers and partners",
            "Desktop and mobile mega-menu navigation",
            "CMS-driven blog with Markdown rendering and an empty state",
            "Tabbed pricing with monthly and yearly plans for each audience",
            "Two-step quote flow with a vehicle-type picker",
            "Scroll-triggered Framer Motion animations and an in-view stats counter",
            "Swiper carousels for the hero, testimonials and business logos",
            "Careers listing, job details and application pages"
        ],
        image: "/truq.png",
        demoUrl: "https://truq.netlify.app/",
        images: []
    },
    {
        id: "15",
        status: "Live",
        companyId: "zedi",
        role: "Frontend Engineer",
        title: "Zedi AI",
        team: "Solo build",
        period: "2023",
        subtitle: "Marketing site and demo-request funnel for Zedi AI, an AI-driven programmatic advertising and audience-targeting platform. I built it alone, from scaffold to production.",
        description: "Zedi AI needed a public site to explain its ad-targeting product and turn visitors into sales leads. It is built on the Next.js 13 App Router with Tailwind CSS: a single-page landing experience with section-based navigation, responsive carousels and a dedicated demo-booking page. Demo requests go straight into an Airtable base, so the business development team could follow up without a custom backend.",
        myRole: [
            "Built the whole site solo, from the create-next-app scaffold to production, across 75 commits and 35 merged pull requests.",
            "Implemented the landing sections (hero, intro, targeting, results, reporting and a feature carousel) from the design, with responsive layouts tuned for mobile, tablet and wide screens.",
            "Built the demo page and form that posts leads to the Airtable REST API, with a success modal on submission.",
            "Built the desktop navbar and an animated slide-in mobile menu with smooth-scroll links to page sections that also work from the demo route."
        ],
        challenges: [
            {
                title: "Section links across routes",
                problem: "The navbar links scroll to sections on the home page, but they also had to work from /demo, where those sections don't exist.",
                approach: "Each nav handler checks the current path with usePathname and routes back to the home page's anchor before smooth-scrolling with scrollIntoView. The same logic is shared by the desktop navbar and the mobile menu."
            },
            {
                title: "Carousels that fit every breakpoint",
                problem: "The feature cards and the product-category switcher needed different layouts on phones, tablets and desktops without content clipping or stray controls.",
                approach: "Used react-slick with responsive breakpoint settings and autoplay for the features, and Swiper with a viewport-driven slidesPerView for the mobile category tabs. Slider arrows are hidden on larger screens."
            }
        ],
        tags: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Airtable",
            "Swiper",
            "React Slick"
        ],
        features: [
            "Single-page landing site with smooth-scroll section navigation",
            "Demo-booking page with lead capture to Airtable",
            "Success modal confirming demo requests",
            "Autoplaying, breakpoint-aware feature carousel",
            "Tabbed product-category showcase with a swipeable mobile variant",
            "Animated slide-in mobile navigation menu"
        ],
        image: "/zedi-ai.png",
        demoUrl: "https://zedi-ai.netlify.app",
        images: []
    },
    {
        id: "16",
        status: "Live in stores",
        companyId: "bucks",
        role: "Frontend & Mobile Engineer",
        title: "Bucks",
        team: "3 engineers",
        subtitle: "Cross-currency mobile banking app for Nigerians, built with Expo and React Native. I built its live goal savings and airtime/data purchases, in-app support chat and biometric payment approval.",
        description: "Bucks is a borderless banking app for Nigerian users. It offers NGN and USD wallets, currency conversion, bank transfers, bill payments, savings and tiered KYC, and ships on iOS and Android. It is an Expo Router app in TypeScript with React Query for server state, Axios service classes per domain, Socket.IO for realtime chat and EAS Build/Update for releases.",
        myRole: [
            "Built the savings product: goal savings is live in the app (create, top-up, withdraw, activity and goal tracking), and I also built the locked and group savings flows ahead of their APIs. Together that is about 34 screens, a shared library of 28 savings components and a SavingsContext, roughly 15,000 lines.",
            "Integrated the goal-savings REST API (create, list, detail, contribute, withdraw, cancel) behind React Query. Wrote a mapping layer between the API's structured schedules and the UI's labels, and added idempotency keys so withdrawal retries can't debit twice.",
            "Built the bill-payments module: airtime and data purchases are live, with a reusable confirmation modal, PIN or biometric authorization, success receipts and a monthly spend history on a /bills service layer. Cable TV, electricity and internet flows are built and waiting on their APIs.",
            "Built in-app support chat on Socket.IO (join, send, live messages, read receipts) with live-support, Bucksy chat and transaction-dispute screens. Extended it to a pre-login support flow so signed-out users can reach the team.",
            "Added Face ID / fingerprint approval for payments: a biometric setup sheet and a reworked transaction PIN modal used across transfer, conversion and statement flows. Also integrated PDF statement download and email with the native share sheet.",
            "Built the UI layers for budgeting and savings-plan flows, and shipped landing-page updates on the Next.js marketing site (SEO metadata, hero image, footer and social links)."
        ],
        challenges: [
            {
                title: "Safe retries on money-moving requests",
                problem: "A withdrawal that times out may still have gone through on the server, so a blind retry could take the money twice.",
                approach: "Generate one time-ordered idempotency key when the user commits to the action and resend it on every retry. Retry only when there was no response or a 5xx error. A 4xx means the request was rejected, so the next attempt gets a fresh key."
            },
            {
                title: "Shipping savings ahead of the backend",
                problem: "Goal savings had live endpoints, but locked and group savings did not, and the designs needed all three flows to work.",
                approach: "SavingsContext merges API-backed goals from React Query with simulated locked and group pots stored in AsyncStorage, behind one Pot model. Screens don't care which source a pot comes from, and each type can switch to the API when its endpoints are ready."
            },
            {
                title: "Translating savings schedules",
                problem: "The API stores contribution schedules as an uppercase frequency, a numeric day and a 24-hour time, while users pick labels like \"Every Monday, 4:00pm\".",
                approach: "A dedicated two-way mapping module (ISO weekday indexing, ordinal days, time formatting) keeps the conversion out of screens and context."
            },
            {
                title: "Realtime support chat on mobile",
                problem: "Support needed live two-way chat, attachments and read state, including for users who couldn't sign in.",
                approach: "A singleton Socket.IO client on the /chat namespace (WebSocket transport) with promise-wrapped emits for join, send and mark-read and a single new_message listener, paired with an unauthenticated support entry point on the login and PIN screens."
            }
        ],
        tags: [
            "React Native",
            "Expo",
            "Expo Router",
            "TypeScript",
            "React Query",
            "Axios",
            "Socket.IO",
            "Reanimated",
            "Expo Local Authentication",
            "AsyncStorage",
            "EAS",
            "Next.js",
            "Tailwind CSS"
        ],
        features: [
            "Goal savings with schedules, top-ups and withdrawals (live)",
            "Locked and group savings flows built ahead of their APIs",
            "Idempotency-keyed savings withdrawals",
            "Airtime and data purchases (live); cable, electricity and internet flows ready for their APIs",
            "Monthly bills spend history",
            "Face ID / fingerprint approval for payments, with PIN fallback",
            "Realtime support chat over Socket.IO, also available before login",
            "Transaction dispute flow from chat",
            "PDF account statements: download, share or email",
            "Budget and savings-plan flows",
            "NGN/USD wallets, conversion and transfers (team)",
            "Tiered KYC via the Dojah SDK (team)"
        ],
        image: "/bucks.png",
        demoUrl: "https://www.usebucks.co/",
        images: []
    },
    {
        id: "17",
        status: "Live",
        companyId: "nouvells",
        role: "Full Stack Engineer",
        title: "Nouvells",
        team: "3 engineers",
        subtitle: "AI-assisted talent marketplace where professionals sit a screen-recorded AI interview before they are matched to company jobs. As the main engineer on the contract, I built the admin console, the company dashboard and job management, and the interview's live S3 recording, voice detection and pause/resume.",
        description: "Nouvells connects companies and AI labs with vetted professionals and agencies. Companies post jobs and run projects. Candidates onboard, then sit an AI-driven screening interview with a voice round and a Monaco coding round, all screen-recorded, before they are shortlisted. It is one Next.js 16 App Router app in TypeScript that holds the marketing site, auth, the talent and company dashboards, the interview and an admin console. Supabase (Postgres, Auth, RLS) is the backend, Server Actions hold the server logic and an external AI engine runs the interview.",
        myRole: [
            "Built the admin console (live): user, job, applicant, dispute and admin-team management, with an overview dashboard, signup charts, admin invites and roles, platform settings and Excel exports. That is about 1,700 lines of server actions across admin, dispute, export and settings actions, plus 20+ admin components.",
            "Built the company side (live): the company dashboard, job creation with mandatory-field validation, job edit and delete, talent search and profiles, and application review. I also integrated the talent onboarding and applications flows, including applying to a job during onboarding.",
            "Built interview recording (live). The screen is streamed to S3 as a multipart upload during the session (5 MB parts, presigned part URLs from Server Actions), with abort and cleanup so failed sessions leave no orphaned uploads. Wrote the scripts that set bucket CORS, lifecycle and public-read rules.",
            "Built the interview's voice and session logic: dynamic AI question-and-answer, a voice-activity detector that calibrates to room noise, one recording kept across the voice and coding rounds, a cooldown and no-hire gate, and an RLS-guarded pause/resume with an expiry limit.",
            "Added send-once interview outcome emails (passed, not passed, not shortlisted) on Resend and React Email, per-answer latency telemetry, and a transactional SQL migration runner."
        ],
        challenges: [
            {
                title: "Recording a 30-minute interview without a long upload at the end",
                problem: "Uploading half an hour of screen video after the interview would be slow and fragile, and failed sessions could leave partial uploads in S3.",
                approach: "A MediaRecorder with a 5-second timeslice feeds an S3 multipart upload during the interview. Server Actions start the upload, presign each 5 MB part, then complete or abort it. Finishing therefore takes seconds, and failed sessions are aborted so their parts are deleted."
            },
            {
                title: "One recording across two pages",
                problem: "Technical candidates move from the AI interview page to the coding page, which unmounts the recorder and would split or lose the recording.",
                approach: "A recording-handoff module parks the live recorder, its audio-mixing cleanup and the mic tracks in module state. Whichever page ends the session finalizes it, so one video covers both rounds."
            },
            {
                title: "Silent RLS failures on delete",
                problem: "The jobs table has no DELETE policy for users, so Postgres RLS filtered company deletes to zero rows and returned no error, which looked like success.",
                approach: "The action checks ownership against the caller's profile, then deletes with the service-role client while re-checking company_id. It uses .select() to detect a delete that removed nothing and reports the real reason, such as a foreign-key violation."
            },
            {
                title: "Exactly-once outcome emails that candidates can't re-trigger",
                problem: "Candidates have full RLS access to their own interview rows, so a 'sent' flag on that table could be reset through the public API to send the email again.",
                approach: "A separate service-role-only table (RLS on, no policies) acts as the lock. The server claims a session with insert ... on conflict do nothing returning, sends only if the insert won, and deletes the row if the send fails so it can retry."
            },
            {
                title: "Pause and resume without stretching the allowance",
                problem: "beforeunload and pagehide both fire when a tab closes, and a candidate could also try to pause an interview that is not theirs or not live.",
                approach: "The pause update is limited to live statuses and filtered by RLS, so a repeat pause can't move paused_at forward and a non-owner gets no row back. Interviews paused past the limit are discarded upstream and onboarding is rolled back."
            }
        ],
        impact: [
            "Live with 3 companies and 5+ candidates on the platform"
        ],
        tags: [
            "Next.js",
            "React",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Row Level Security",
            "Server Actions",
            "TanStack Query",
            "Redux Toolkit",
            "AWS S3",
            "Resend",
            "React Email",
            "Tailwind CSS",
            "Vercel"
        ],
        features: [
            "Admin console: users, jobs, applicants, disputes, admin team, settings (live)",
            "Excel exports of users, jobs, disputes, admins and applicants (live)",
            "Company dashboard with job create, edit and delete and talent profiles (live)",
            "AI screening interview with dynamic questions and a Monaco coding round",
            "Live S3 multipart screen recording with presigned part URLs (live)",
            "Voice-activity detection that calibrates to room noise (live)",
            "Interview cooldown and no-hire gating on the dashboard",
            "Pause/resume with an expiry limit",
            "Send-once interview outcome emails",
            "Per-answer latency telemetry and a transactional SQL migration runner",
            "Role-based route protection in Next.js middleware (team, extended by me)",
            "Marketing site migration and redesign (team)"
        ],
        image: "/nouvells.png",
        demoUrl: "https://www.nouvells.com",
        images: []
    },
    {
        id: "18",
        status: "Pre-launch",
        companyId: "meyou",
        role: "Full Stack Engineer",
        title: "Me&u",
        team: "Solo build (AI-assisted)",
        subtitle: "A private couples app where two partners pair their phones, check in daily, play small decision games and plan together, with an AI coach on the side. On contract, I built it end to end with AI coding agents: the Expo/React Native app, the Supabase backend and the marketing and legal website.",
        description: "Me&u is built for exactly two people: one hub, two phones, no feeds. Partners log mood and social battery each day to grow a shared streak, settle small decisions with a coin flip, a wheel, a date setter and a movie swipe picker, and keep a shared calendar, bucket list, gallery and a wiki of details about each other. A private AI coach answers relationship questions. The website is live and the app is store-ready, with its store listing pending; it is free with ads, with a planned $1/month per-person premium tier.",
        myRole: [
            "Built the Expo (SDK 57) / React Native app in TypeScript: 50 Expo Router route files, 55 components and 24 hooks. Screens read data only through typed hooks, so the move from mock data to Supabase never touched a screen. Upgraded the app from SDK 54 to 57.",
            "Designed the Supabase backend: 30 ordered SQL migrations, Row Level Security on every table, SECURITY DEFINER RPCs for pairing and quotas, Realtime publication of shared tables, and storage buckets for avatars, the gallery and coach attachments.",
            "Wrote five Deno Edge Functions: a streaming Gemini coach, TMDB movie discovery, push delivery from a database webhook through Expo/FCM, account deletion and leaving a hub.",
            "Built what the app stores require: in-app account deletion, in-app feedback and safety reports, AdMob with rewarded coach questions and tracking-transparency consent, EAS build channels with fingerprint-based OTA updates, and generated Play Store assets.",
            "Built the Me&u website (React, Vite, TypeScript): a landing page with interactive demos, and privacy, terms, child-safety, support and account-deletion pages, with a custom Vite SEO plugin for metadata and JSON-LD and pages prerendered at build time.",
            "Directed AI coding agents with plan-first specs: a phased implementation plan reconciled against the PRD, design tokens and mock, locked decisions, boundary rules checked in review, and a log of what changed. I owned architecture, security and product decisions and shipped each phase only after type-check, lint and bundle checks."
        ],
        challenges: [
            {
                title: "A paywall the client can't bypass",
                problem: "The coach's free limit of three questions a day and the premium flag guard the only revenue paths. A client-side counter, or a premium column the client can write, would let anyone give themselves an unlimited coach and an ad-free app.",
                approach: "The quota is claimed in one atomic server-side function before any model call, and clients can only read their usage. After moving premium from the couple to the person, a check showed the client could still write is_premium, because a column-level REVOKE does not override a table-level grant. A migration drops the table-wide UPDATE and grants it back column by column without the entitlement columns, and premium checks go through one RPC that fails closed to free."
            },
            {
                title: "Streaming an AI coach without exposing the key",
                problem: "Anything prefixed EXPO_PUBLIC_ is compiled into the app bundle, so calling Gemini from the device would publish the key. Long replies also need to stream and be stoppable.",
                approach: "A Supabase Edge Function holds the key and streams Server-Sent Events (meta, delta, done, error). It uses one client that carries the caller's JWT, so RLS still applies, and a service-role client only for the private attachments bucket. A server-assigned sequence number under an advisory lock stops two devices from racing on the same thread."
            },
            {
                title: "Two phones, one shared state",
                problem: "Both partners look at the same rows on different devices, and a change on one phone must appear on the other without a reload.",
                approach: "One Realtime channel per couple, filtered by couple_id. A change is treated as a signal: the subscribed hook re-runs its own query instead of merging the payload, which avoids rebuilding joined queries on the client and DELETE events that carry only a key. A refetch when a screen regains focus covers events missed while the socket was down."
            },
            {
                title: "Pairing and deletion under strict RLS",
                problem: "Redeeming an invite code means reading a couple you are not yet a member of, which RLS forbids. Deleting an account has to remove the data and stored files, not just set a flag.",
                approach: "There are no INSERT policies on couples or members; pairing goes through narrow SECURITY DEFINER functions, and codes expire after 7 days, skip easily misread characters and are nulled once redeemed. The delete-account function removes storage files first, then hubs where the caller is the last member, then the auth user, and the per-user tables cascade from there."
            }
        ],
        impact: [
            "Delivered end to end in 8 weeks: app, backend and website"
        ],
        tags: [
            "React Native",
            "Expo",
            "Expo Router",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Row Level Security",
            "Supabase Edge Functions",
            "Deno",
            "Gemini API",
            "Firebase Cloud Messaging",
            "AdMob",
            "EAS",
            "Vite",
            "AI-assisted development"
        ],
        features: [
            "Invite-code and QR pairing of two phones into one hub",
            "Daily mood and social-battery check-in with a trigger-maintained shared streak and levels",
            "Coin flip, whose-turn wheel, date setter, TMDB movie swipe picker and custom trivia",
            "Shared calendar with countdowns and reminders synced to both phones",
            "Shared goals, bucket list, gallery and a partner-details wiki",
            "Private AI coach streamed over SSE, with a server-enforced daily quota",
            "Real-time sync between partners over Supabase Realtime",
            "Push notifications sent from a database webhook through Expo/FCM",
            "AdMob ads and rewarded coach questions, gated on per-person premium",
            "In-app account deletion and safety reporting for store compliance",
            "Prerendered marketing site with JSON-LD, sitemap and policy pages"
        ],
        image: "/meyou.png",
        demoUrl: "https://www.meandyou.tech",
        links: [
            { label: "App code", href: "https://github.com/yhtiee/Me-You-Mobile-Application" },
            { label: "Website code", href: "https://github.com/yhtiee/Me-You-Website" }
        ],
        images: []
    },
    {
        id: "19",
        status: "Pre-launch",
        companyId: "churchlife",
        role: "Full Stack Engineer",
        title: "Church Life",
        team: "Solo build (AI-assisted)",
        subtitle: "A multi-parish Catholic app that gives each parish its own Mass schedule, readings, groups, giving records and notices, run from the admin's phone. On contract, I built it end to end with AI coding agents: the Expo/React Native app, the Supabase backend and the public website.",
        description: "Church Life connects Catholic parishioners in Nigeria with their own parish. Members get their parish's Mass times and intentions, daily readings with a parish reflection, the Douay-Rheims Bible, hymns and prayers, parish groups with chat, celebrations, and an Ask a Question assistant that answers from Church documents. Parish admins publish content, admit members, assign duty roles and confirm offerings, pledges and Mass bookings, while platform super admins create parishes and appoint their first admins. No money moves through the app: members pay by bank transfer and the parish verifies the record. The website is live; the app is built on EAS and its store listings are pending.",
        myRole: [
            "Built the Expo Router app in TypeScript with separate member, parish-admin and super-admin areas across about 56 screens, using a Supabase service layer and TanStack Query hooks.",
            "Designed the Supabase backend: parish-scoped multi-tenancy with Row Level Security, 16 ordered migrations plus a Node runner for applying them without Docker, and SECURITY DEFINER functions with an audit log for platform administration.",
            "Wrote two Deno Edge Functions: a Magisterium AI proxy that keeps the API key on the server, enforces a 30-question daily limit per member and stores cited answers, and a push sender fired by a database trigger through pg_net with a service-role key held in Vault.",
            "Implemented in-app account deletion, required by both stores, which removes personal data but keeps the parish's financial and Mass-intention records with the member detached.",
            "Built the Vite/React marketing site with the privacy, terms, support and Google Play account-deletion pages the stores require, deployed on Vercel at churchlife.live.",
            "Directed AI coding agents from the client's PRD, with each change specified and then verified against the live API, tsc, lint and an Android bundle before it was committed through feature-branch PRs. I owned architecture, security and product decisions, including reverting an agent-built view switcher for a simpler design."
        ],
        challenges: [
            {
                title: "Platform admin without rewriting 55 policies",
                problem: "No one could create a parish or give a new parish its first admin from the app. Around 55 RLS policies across 11 tables test for role = 'parish_admin', so adding a new role value would have quietly removed abilities from whoever held it.",
                approach: "Super admin became a separate is_super_admin flag, and its powers are granted only through a fixed set of SECURITY DEFINER functions that write to an admin_audit_log. The existing policies stay as they were, and the new powers form a small surface that can be reviewed."
            },
            {
                title: "A private AI assistant that cannot be spoofed or overspent",
                problem: "Members ask about confession, marriage and moral questions, so their history had to stay private even from parish admins. The Magisterium API key and budget also needed protecting.",
                approach: "An Edge Function resolves the caller from their own session token, checks that the conversation belongs to them, counts their questions over a rolling 24 hours (limit 30), and saves trimmed citations. RLS allows members only to read and delete their own conversations, and with no insert policy no client can fabricate an answer that looks like it came from Church documents."
            },
            {
                title: "Locking down database-triggered push",
                problem: "Inserting a notification row calls the send-push function. The public anon key passes the platform's JWT check, so anyone could have sent a push to any member.",
                approach: "The trigger sends the service-role key from Vault through pg_net. The function accepts only a token whose role claim is service_role, or one that matches the key in a constant-time comparison, before it looks up the member's Expo push token."
            },
            {
                title: "Deleting accounts without corrupting parish books",
                problem: "The stores require in-app deletion, but cascading deletes would have changed parish donation totals and could have lost booked Mass intentions.",
                approach: "A migration finds the existing foreign keys and rebuilds them as ON DELETE SET NULL for donations, pledges and Mass bookings, so those records outlive the account, while notifications, chat, requests and activity cascade away. The privacy policy discloses this retention."
            }
        ],
        impact: [
            "Delivered end to end in 8 weeks: app, backend and website"
        ],
        tags: [
            "React Native",
            "Expo",
            "Expo Router",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Row Level Security",
            "Deno Edge Functions",
            "TanStack Query",
            "Expo Notifications",
            "EAS Build",
            "Vite",
            "Vercel",
            "AI-assisted development"
        ],
        features: [
            "Parish-scoped data: Mass schedules, devotions, readings and notices per parish",
            "Mass intention booking with a reference the parish confirms",
            "One verification queue for offerings, parish support and celebration gifts",
            "Bank-transfer giving records; the app never takes card payments",
            "Vocation groups, secured groups, duty roles, and group and parish transfer requests",
            "Group chat and announcements, with push notifications fired from database triggers",
            "Ask a Question: Magisterium AI answers with cited Church documents",
            "Celebrations with wishes that can be sent anonymously",
            "Super admin console with server-side search, filters and pagination",
            "In-app account deletion plus a web deletion-request form",
            "Douay-Rheims Bible, hymns, Rosary and Order of Mass bundled offline",
            "EAS development, preview and production builds with EAS Update channels"
        ],
        image: "/churchlife.png",
        demoUrl: "https://churchlife.live",
        links: [
            { label: "App code", href: "https://github.com/yhtiee/Church-Life-Mobile-Application" },
            { label: "Website code", href: "https://github.com/yhtiee/Church-Life-Website" }
        ],
        images: []
    },
    {
        id: "20",
        status: "Handed over",
        companyId: "zedbe",
        role: "Full Stack Engineer",
        title: "Zedbe",
        team: "Solo build (AI-assisted)",
        subtitle: "An AI personal-finance companion that links a user's bank through Plaid, streams their transactions live and explains their spending in plain English. On contract, I built it end to end: the Expo/React Native app and the Supabase backend, with Plaid webhooks and a Claude-to-Gemini AI router.",
        description: "Zedbe is a pre-launch money app for US consumers. After linking a bank, users see their balance and transactions update live, open day/week/month/year AI insights, review auto-detected subscriptions with keep/review/cancel verdicts, and ask questions in a chat grounded in their own accounts. It is read-only and never moves money. I handed it over in September 2026 with a full technical handover; it is not in the app stores yet, with bank linking still on Plaid's sandbox.",
        myRole: [
            "Built the Expo (SDK 57) / React Native app in TypeScript: 17 Expo Router screens, a token-based light/dark design system with code-drawn SVG illustrations, and React Context state behind a services layer so no screen calls Supabase or fetch directly. Upgraded the app from SDK 54 to 57.",
            "Designed the Supabase backend: 9 SQL migrations with Row Level Security on every user table, a Plaid access-token column users can never read, Realtime publication of accounts and transactions, and pg_cron jobs that call functions through pg_net with the URL and secret held in Vault.",
            "Wrote 11 Deno Edge Functions for Plaid (link token, sandbox token, token exchange, a signature-verified webhook, throttled refresh, a 6-hourly reconcile sweep, institution search, OAuth redirect) and AI (insights, subscriptions, chat).",
            "Built the AI layer: a provider router that tries Claude first and fails over to Gemini on a missing key, rate limit, timeout, bad JSON or refusal. Metrics are computed in TypeScript and the model only writes the narrative, cached by data fingerprint. Chat answers are grounded in a server-built financial snapshot and support photo, PDF and voice input.",
            "Wrote the technical handover: feature-by-feature status, architecture and data-flow diagrams, the security model, and a prioritized P0–P2 list of what blocks a store release.",
            "Worked with AI coding agents (Claude Code), including a repo-specific agent skill I wrote for drawing on-brand react-native-svg illustrations from the design tokens. I owned architecture, security and product decisions."
        ],
        challenges: [
            {
                title: "Live transactions without polling the bank",
                problem: "Users expect new card charges to appear right away, but polling Plaid from every device would hit rate limits and put Plaid credentials on the phone.",
                approach: "Plaid calls a webhook function that checks Plaid's ES256 verification JWT and the request-body hash, acknowledges quickly and runs a cursored /transactions/sync in the background. Rows go into Postgres and reach the app over Supabase Realtime, merged by transaction id because Realtime can deliver a row twice. A pg_cron sweep re-syncs quiet Items, pull-to-refresh is throttled per Item on the server, and the app re-reads on foreground."
            },
            {
                title: "Never skipping a transaction on a partial sync",
                problem: "Plaid's sync is paginated, and the data can change mid-pagination. Saving a cursor after a failed page would silently drop transactions forever.",
                approach: "The sync loop writes every page first and commits the cursor only after the whole loop drains. If Plaid reports that the data changed mid-pagination, it restarts from the original cursor with a capped number of retries, and every run is logged to an audit table (trigger, rows added/modified/removed, duration, error)."
            },
            {
                title: "AI that can't invent numbers or go dark",
                problem: "A finance app can't show a model's made-up amounts, and an outage or quota hit at one AI provider shouldn't break the insights screen.",
                approach: "A pure shared module computes every figure deterministically, and the model is asked only for prose against a fixed JSON schema. Responses are cached in Postgres by a fingerprint of the underlying data, so unchanged data costs no model call. The router tries Claude, then Gemini, and if every provider fails the real figures come back marked degraded."
            },
            {
                title: "Keeping secrets off the device",
                problem: "Anything prefixed EXPO_PUBLIC_ is compiled into the app bundle, and an earlier build had shipped privileged keys that way.",
                approach: "I moved every privileged call into Edge Functions that take the user id only from the verified JWT; an account id in the request can narrow a query but never widen it. The Plaid access token is stored at exchange and never returned to the app, so the app holds only the Supabase URL and anon key, and key rotation was documented as step one of the handover."
            }
        ],
        impact: [
            "Delivered end to end in 4 weeks and handed over with only future-roadmap features open"
        ],
        tags: [
            "React Native",
            "Expo",
            "Expo Router",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Row Level Security",
            "Supabase Realtime",
            "Supabase Edge Functions",
            "Deno",
            "Plaid",
            "Claude API",
            "Gemini API",
            "EAS",
            "AI-assisted development"
        ],
        features: [
            "Plaid bank linking with server-side token exchange and multi-account switching",
            "Live transaction feed: Plaid webhook → Postgres → Supabase Realtime",
            "Cursor-safe sync with a 6-hourly pg_cron reconcile sweep",
            "AI Insights by day, week, month and year, with figures computed in code",
            "Daily spending digest on the home screen",
            "Ask Zedbe chat grounded in the user's own accounts, with photo, PDF and voice input",
            "Claude-first AI router with Gemini failover and a figures-only fallback",
            "Rule-based subscription detection over 13 months, with price-rise tracking and AI verdicts",
            "Renewal reminders, cancellation links and cancellation tracking",
            "Token-based light/dark theme and code-drawn SVG illustrations",
            "EAS build profiles with OTA update channels"
        ],
        images: []
    },
    {
        id: "4",
        status: "Live",
        companyId: "home-grid",
        role: "Fullstack Developer & Engineering Lead",
        title: "Home Grid",
        team: "3 engineers (as lead)",
        period: "2025 – Present",
        subtitle: "A multi-tenant operations platform for home-care and foster-care agencies. I led the engineering team and was the top contributor across both the frontend and the backend.",
        description: "Home Grid is a multi-tenant Progressive Web App that runs the day-to-day operations of home-care and foster-care agencies. It combines a compliance-grade document vault with e-signatures, AI-assisted staff scheduling with geofenced clock-in, a client and referral CRM, secure email and SMS communications, an AI knowledge base for SOPs and policies, and workforce and training-compliance reporting. Organizations, managers, employees, client-portal contacts and time-boxed external auditors each get their own scoped view of the same platform.",
        myRole: [
            "Led a team of 3 full-stack engineers as Engineering Lead, and reviewed and merged most of the team's pull requests across both repos.",
            "Top individual contributor on both the React frontend (263 commits) and the NestJS backend (154 commits).",
            "Architected and built the document vault: templates, PDF e-signatures, approvals, audit trail and external auditor grants.",
            "Built AI scheduling end to end: readiness checks, Gemini-powered generation, manager review, geofenced clock-in and the live attendance feed.",
            "Built the subscription and plan-entitlement system and the web push and email notification pipeline.",
            "Set up the GitHub Actions CI/CD pipelines that ship Dockerized staging and production builds to AWS EC2."
        ],
        challenges: [
            {
                title: "Tenant isolation and fine-grained access",
                problem: "Care agencies handle protected health information. One organization's data could never reach another, and each employee's access had to follow 40+ view/create/update/delete flags across directories, scheduling, vault, CRM, billing and the knowledge base, on top of four subscription tiers.",
                approach: "Supabase Auth JWTs are verified by a custom guard, then a role guard works out whether the caller is an owner, manager or employee and attaches the tenant profile. Every service query is scoped to that organization and checked against the permission flags. Plan entitlements use one shared mapping, enforced on both the API and the client."
            },
            {
                title: "Sharing sensitive documents with outside auditors",
                problem: "Auditors needed to review specific documents without being given accounts, and access could never be left open by accident.",
                approach: "Auditors get grants instead of accounts. Each grant covers selected documents, can require an MFA code, and sets view-only, watermark and screenshot rules. A nightly cron job revokes expired grants, and every vault action is written to a per-document, per-client audit trail."
            },
            {
                title: "AI schedules that can't be trusted blindly",
                problem: "Schedules had to respect working-hour rules, minimum rest periods, locations and job roles. Generating them with an LLM can take minutes, and the output isn't guaranteed to be well-formed.",
                approach: "A readiness checklist runs first (staff, working-hour rules, geofences, job positions). A constraint-rich prompt then goes to Gemini 2.5 Flash as a background job with a timeout. The JSON result is parsed and saved as a draft, and a manager review task is created before anything is published."
            },
            {
                title: "Keeping PHI away from AI",
                problem: "AI summaries of client records could not expose protected health information to the model or to the people reading them.",
                approach: "The client AI assistant works only on redacted aggregates, scrubs PHI from both user input and model output, requires numbered citations to server-allowlisted records, and is rate-limited."
            },
            {
                title: "Live operations in an installable PWA",
                problem: "Managers needed live attendance, staff needed reminders and alerts, and expiring certifications, training and subscriptions had to be caught without anyone checking by hand.",
                approach: "Clock-in is geofenced with a Haversine radius check, and a server-sent events feed streams live attendance to managers. About a dozen cron jobs and an internal event bus handle expiries, Stripe daily billing, reminders and Google Calendar sync. Notifications go out through SendGrid email, Twilio SMS and VAPID web push via a custom Workbox service worker."
            }
        ],
        impact: [
            "14 organizations onboarded, 10 active, with about 30 staff using it",
            "5 organizations on paid subscriptions",
            "Staff scheduling cut from about a day to 20 minutes of manager review",
            "50+ compliance documents managed in the vault"
        ],
        tags: [
            "TypeScript",
            "React",
            "Vite",
            "NestJS",
            "Supabase",
            "PostgreSQL",
            "TypeORM",
            "TanStack Query",
            "shadcn/ui",
            "Google Gemini",
            "Stripe",
            "Docker",
            "AWS EC2",
            "Vercel"
        ],
        features: [
            "Document vault with templates, PDF e-signatures, and per-org case-file IDs",
            "Time-boxed external auditor access with MFA, view-only, and watermark controls",
            "AI-generated staff schedules from working-hour, rest-period, location, and role rules",
            "Geofenced clock-in/out with a real-time SSE attendance feed",
            "AI SOP & policy assistant answering from versioned, org-specific documents",
            "PHI-scrubbed AI client summaries with source citations",
            "Granular RBAC: 40+ per-module permissions layered on four subscription tiers",
            "Audit trails for vault actions, communications, and every login (IP, device, location)",
            "Email, SMS, and web push notifications with MFA-gated messaging",
            "Client CRM, referral pipeline, tasks, and a secure client portal",
            "Stripe subscriptions, add-ons, and automated daily billing",
            "Workforce, shift-variance, and training-compliance reports with Excel export"
        ],
        image: "/hgrid-new.png",
        demoUrl: "https://www.hgrid.co/",
        images: []
    },
    {
        id: "11",
        status: "Live",
        companyId: "home-grid",
        role: "Fullstack Developer & Engineering Lead",
        title: "CareMatch",
        team: "3 engineers (as lead)",
        period: "2026",
        subtitle: "A hiring marketplace that connects licensed Texas child welfare facilities with pre-verified care professionals. I led the build: I set up both codebases and the CI/CD, reviewed and merged every pull request, and built the payments and the Home Grid single sign-on (SSO) integration.",
        description: "CareMatch is a talent marketplace for the Texas child welfare sector. Facilities such as residential treatment centers (RTCs), general residential operations (GROs) and child placing agencies (CPAs) post jobs. Credentialed professionals apply, interview over in-app video, and log their hours. The platform covers the whole path from match to hire to timesheet to earnings. Internal admin and super-admin consoles handle compliance, payroll and reporting. CareMatch is also sold as an annual add-on to Home Grid organizations, which sign in through Home Grid.",
        myRole: [
            "Set up the NestJS backend and Next.js frontend and later restructured both codebases. Wrote the Dockerfile and the GitHub Actions workflows that deploy staging and production to AWS EC2.",
            "Reviewed and merged all 112 pull requests across the two repos for a team of three engineers.",
            "Designed and built Stripe Checkout fees for each job posting. Webhooks are verified against the raw request body and publish jobs idempotently, refunds take the posting down, a nightly cron closes expired postings, and employers get PDF receipts. This replaced an earlier subscription model that I had also built.",
            "Built the SSO handoff and entitlement sync between Home Grid and CareMatch on both sides: the add-on billing module in the Home Grid backend and the integration module in CareMatch.",
            "Built the first rules-based candidate-to-job matching engine. It scores role, location, engagement type, pay and skills, flags compliance issues without excluding anyone, and runs as a nightly batch job.",
            "Built frontend flows for talent applications, the job-posting checkout and receipts, a rich-text job description editor, file upload size limits, and cookie-based session persistence."
        ],
        challenges: [
            {
                title: "Secure SSO between two separate products",
                problem: "Home Grid organizations that buy the add-on had to land in CareMatch already signed in. The two products have separate user databases, and a leaked or replayed sign-in link must not grant access.",
                approach: "Home Grid's server creates a 60-second HS256 token for the organization, with a fixed audience and issuer. Only org admins or managers with an active add-on can get one. CareMatch pins the algorithm and records each token's ID (jti) before signing anyone in, so a replayed link is rejected. A cron deletes spent IDs. CareMatch accepts both the current and the previous secret, so rotating the secret doesn't break logins already in progress. The first sign-in creates the employer account automatically."
            },
            {
                title: "Keeping access in sync after cancellation",
                problem: "If CareMatch only checked the add-on at sign-in, a canceled subscription would keep working until the user next came through Home Grid.",
                approach: "Home Grid pushes an HMAC-SHA256 signed entitlement webhook whenever the subscription changes. It retries 5xx failures and gives up on 4xx. CareMatch keeps the exact raw bytes of the request to check the signature with a timing-safe comparison, then updates the employer's entitlement. Webhooks that arrive before the organization has a CareMatch account are handled explicitly."
            },
            {
                title: "One Stripe webhook, two billing systems",
                problem: "Stripe sends subscription events to every endpoint configured on Home Grid. A second endpoint for CareMatch would see the core platform's events. The shared subscriptions table also couldn't tell whether an organization held an annual add-on.",
                approach: "Built a separate carematch_subscriptions table with one row per organization, so entitlement is derived from stored fields. Home Grid's existing webhook handler first asks the CareMatch handler whether an event belongs to it, using checkout metadata or the subscription ID, and passes it on if so. Billing is annual, and renewals, failed payments and cancellations each change the entitlement."
            },
            {
                title: "Pay-to-publish without double charges or ghost postings",
                problem: "Stripe can deliver a webhook more than once, checkouts can be abandoned, and refunds can arrive later. Any of these could leave a job live without payment or charge an employer twice.",
                approach: "Each publish attempt is tied to a payment record whose ID travels in the Stripe metadata. Publishing is idempotent on that record, pending checkouts are reused or reconciled with Stripe, and expired or failed sessions are closed out. A refund takes the posting down and notifies the employer. Employers with the Home Grid add-on have the fee waived, but still see the standard price."
            },
            {
                title: "Matching that explains itself and degrades gracefully",
                problem: "Facilities needed ranked candidates with reasons they could trust, including credential gaps. Matching couldn't stop working when the AI service was slow or unavailable.",
                approach: "A deterministic rules engine scores each candidate from 0 to 100 and explains each factor. It flags expired or missing credentials (BLS, CPR, RN and similar) without excluding the candidate, and runs as a nightly batch. A teammate added a second layer that re-ranks results with Gemini embeddings and cosine similarity and writes explanations with a chat model. It has a timeout and falls back to the rules-based scores if Gemini fails."
            }
        ],
        impact: [
            "10 facilities onboarded",
            "20 job posts published"
        ],
        tags: [
            "TypeScript",
            "NestJS",
            "Next.js",
            "React",
            "PostgreSQL",
            "TypeORM",
            "Stripe",
            "Google Gemini",
            "Supabase Storage",
            "Amazon Chime SDK",
            "TanStack Query",
            "Tailwind CSS",
            "Docker",
            "GitHub Actions"
        ],
        features: [
            "Four portals (talent, employer, admin, super admin) behind JWT role guards and Next.js middleware",
            "Rules-based match scoring with explanations, plus optional Gemini embedding re-ranking",
            "Soft compliance checks that flag missing or expired credentials without excluding candidates",
            "Stripe Checkout fees per job posting, with idempotent webhooks, refunds and PDF receipts",
            "SSO from Home Grid with single-use, 60-second signed tokens",
            "HMAC-signed entitlement webhooks that keep add-on access in sync",
            "Team permissions for each facility (jobs, talent, time, finance) with member invites",
            "Interview scheduling and in-app video calls on the Amazon Chime SDK",
            "Timesheets with an approve/reject workflow, pay periods, adjustments and earnings statements",
            "Admin consoles with audit logs, reports and data exports",
            "Branded transactional emails (React Email and SendGrid) alongside in-app notifications",
            "Staging and production deploys to AWS EC2 via Docker and GitHub Actions"
        ],
        image: "/carematch.png",
        images: []
    },
    {
        id: "8",
        status: "Live",
        companyId: "spurt",
        role: "Backend & Infrastructure Engineer",
        title: "SpurtX",
        team: "6 engineers",
        period: "2025 – 2026",
        subtitle: "The shared core behind the SpurtX product suite (Sync, Score, Spot, Spur and Spark). It runs single sign-on for every product, plus billing, wallets, notifications, admin and analytics, and an AI service sits alongside it. I was its top contributor and owned its deployment and observability.",
        description: "SpurtX Core is a NestJS and Prisma API that acts as the OAuth 2.0 authorization server for all SpurtX products. It also owns users, companies, memberships, Stripe subscriptions, Fincra wallets, messaging, calendars, notifications and the internal admin dashboard. It has 27 modules, about 257 REST endpoints and 46 PostgreSQL models across 51 migrations, plus a MongoDB event store for analytics. A companion Flask service (SpurtX AI) produces project summaries, task prioritization and applicant screening for the products, and verifies the same core-issued JWTs.",
        myRole: [
            "Built the core OAuth 2.0 authorize, code and token endpoints, along with Google and Microsoft sign-in, email verification and password reset and change flows. Sync, Score, Toolkit and the SpurtX hub sign in through these. I also wrote the service that copies core users into the legacy SSO database.",
            "Ran the move of identity data from the legacy SSO database into core, and built the Fincra wallet module: deposits, cross-currency deposits, payouts, bank accounts, transfer codes and webhook signature checks.",
            "Built the analytics warehouse. Products emit events into a MongoDB store (a second Prisma schema), and scheduled jobs roll them up into active users, churn and churn triggers, cohort retention, time-to-first-value, feature adoption and crossover, NPS and Spark adoption. Rollups re-run automatically when a metric definition changes.",
            "Secured the admin dashboard with role permissions, module management and audit logging across four services. Admins get password reset flows and an emailed one-time code at sign-in: the code is stored hashed in Redis and protected by attempt caps, resend cooldowns and a limit on how many codes can be requested.",
            "Owned deployment and observability. I wrote the Dockerfiles, the first GitHub Actions pipeline that deploys to EC2, and the ECR/ECS staging pipelines with immutable image tags. I moved secrets out of image layers so they load at runtime, added Grafana Loki logging (batched and queued, with sensitive fields masked) and wrote the company's logging and log management policy.",
            "Built the shared plumbing in the SpurtX AI service: verification of core-issued JWTs, a CORS allowlist, structured logging with S3 upload, warehouse event emission, Swagger docs and CI/CD. I also built a PostgreSQL response cache that calls the model again only when the data a feature reads has actually changed."
        ],
        challenges: [
            {
                title: "One identity across four products",
                problem: "Sync and Toolkit each kept their own users, and the legacy SSO database still held foreign keys to its own users table. Moving sign-in into core could not break existing accounts or the companies linked to them.",
                approach: "Core became an OAuth 2.0 authorization server, with a list of allowed redirect URIs for each product. Migration scripts moved users, companies and memberships into core. Every path that creates a user now goes through one sync service that copies the user into the SSO database, skips users already there, and safely handles duplicate-key errors. A teammate later added PKCE and single-use authorization codes stored in Redis."
            },
            {
                title: "Caching AI output when nothing reports changes",
                problem: "The AI service reads databases owned by other teams, and nothing notifies it when that data changes. In the Sync schema, task.updatedAt is set once when a row is created and never updated, so a cache keyed on updatedAt would keep serving outdated summaries.",
                approach: "Each feature computes a cheap content hash of the exact fields it reads. A cached response is reused until that hash changes, and inputs that depend on the date are included in the hash. Degraded or fallback results are never cached, and the whole layer switches off when its database URL is not set."
            },
            {
                title: "Admin 2FA that can't be brute-forced or used to flood inboxes",
                problem: "An emailed admin sign-in code is only as strong as the limits around it. Even someone who only knows an admin's password could spam that admin's inbox by requesting codes.",
                approach: "Codes are hashed, compared in constant time and expire after 10 minutes. Each challenge allows 5 wrong attempts and 3 resends with a 60-second cooldown, and each admin can start at most 5 challenges per 15 minutes, all tracked in Redis. A production guard ignores the debug flag that returns the code in the response."
            },
            {
                title: "Deploying on a small shared EC2 host",
                problem: "Production builds ran on the same box as the live container and another service. Builds were killed for running out of memory, the disk filled up partway through a build, and secrets were built into an image layer.",
                approach: "I moved runtime config into a .env file passed to each container with --env-file, so it stays out of the image. Together with teammates, the pipeline now runs one deploy at a time, checks free disk space before stopping the old container, only cleans up images labeled as this app's, applies migrations, waits for a health check, and rebuilds the previous commit if anything fails."
            },
            {
                title: "Central logging without loops or leaks",
                problem: "Sending application logs to Loki from inside the app's own logger can recurse when a push fails, and request bodies can contain credentials.",
                approach: "A batching Loki client never logs through Nest's Logger. Log entries go onto a Bull queue so requests aren't slowed down, and the request interceptor masks sensitive fields before anything is logged."
            }
        ],
        impact: [
            "35,325 users migrated onto the shared single sign-on",
            "Releases cut from ~30-minute manual deploys to under 5 minutes"
        ],
        tags: [
            "NestJS",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "OAuth 2.0",
            "Stripe",
            "Python",
            "Flask",
            "Docker",
            "GitHub Actions",
            "AWS",
            "Grafana Loki"
        ],
        features: [
            "OAuth 2.0 single sign-on with PKCE for Sync, Score, Toolkit and the SpurtX hub",
            "Google and Microsoft sign-in, email verification and refresh tokens",
            "Stripe subscriptions with tool-count pricing and webhooks",
            "Fincra multi-currency wallets, bank accounts and payouts",
            "Admin dashboard API with permissions, audit logs and email 2FA",
            "Analytics warehouse: active users, churn, cohort retention, TTFV and NPS",
            "Company onboarding checklists shared across products",
            "Google and Outlook calendar connections with Meet attendance",
            "Real-time messaging over Socket.IO",
            "Email (AWS SES), WhatsApp and in-app notifications",
            "Centralized logging to Grafana Loki",
            "AI response cache keyed on content fingerprints"
        ],
        image: "/spurt.png",
        demoUrl: "https://www.spurtx.tools/",
        images: []
    },
    {
        id: "5",
        status: "Live",
        companyId: "spurt",
        role: "Backend & Infrastructure Engineer",
        title: "Sync",
        team: "6 engineers",
        period: "2024 – 2026",
        subtitle: "The project-management toolkit in the SpurtX ecosystem, covering projects, milestones, tasks, team messaging, wallets and subscriptions. I took over as primary backend owner and rebuilt its observability, admin authorization, notification delivery and container deployment pipeline.",
        description: "Sync is a NestJS and PostgreSQL monolith with 427 REST routes across 37 controllers, 60 TypeORM entities and six Socket.IO gateways for real-time messaging. It runs alongside spurtx-core through a second database connection and service-to-service APIs, so users, companies, notifications, calendar events and analytics events are shared across the SpurtX tools. From late 2024 I wrote about 88% of its commits, covering product features, security fixes, logging and CI/CD.",
        myRole: [
            "Built the logging pipeline: correlation-ID request interceptor, masking of sensitive fields, a Bull queue writing per-category log files that rotate at 1 MB and are archived to S3, and a batching Grafana Loki client. Also wrote the company's logging and log-management policy document.",
            "Replaced SSH git-pull deploys with a GitHub Actions pipeline: OIDC or key-based AWS auth, Docker Buildx with GitHub Actions layer cache, push to ECR with both :latest and an immutable commit-SHA tag, and a forced ECS rollout. Added a /health endpoint for container health checks.",
            "Fixed the issues from Sync's penetration test: put guards back on project detail, member, milestone and proposal routes; added per-project authorization to bulk milestone creation; and limited user search to the caller's project network instead of fuzzy-matching the whole user table on email and phone.",
            "Wired Sync's admin routes to the permission matrix owned by spurtx-core: one decorator maps HTTP verbs to permission actions, a global guard refuses any admin route missing the permission check, and an interceptor writes an audit entry for every successful change.",
            "Integrated Sync with spurtx-core: a second TypeORM connection, mirrored users, companies, notifications, calendar events and cross-app prompts, analytics events for the data warehouse, and internal endpoints protected by a shared service token compared in constant time.",
            "Shipped core product features: Gemini 2.5 Flash task generation and project descriptions, Google and Outlook Calendar sync, Stripe subscriptions with free trials and signed webhooks, Fincra wallet deposits and payouts across currencies, the move from Nodemailer to SES, and 23 scheduled jobs for due-date and re-engagement emails."
        ],
        challenges: [
            {
                title: "Observability that can't take down the API",
                problem: "Logs had to reach Grafana Cloud Loki while a local file and S3 archive stayed the system of record. A Loki outage or slowdown must never block a request or run the memory-limited host out of memory.",
                approach: "Wrote a Loki client that never throws and never waits on the network. It batches entries (100 per push or every 5 s), caps its buffer at 10k by dropping the oldest entries, retries only on 5xx or 429, and stops sending for 60 s after 5 consecutive failures. It flushes on SIGTERM and is shared by the Nest logger and the Bull log worker, with Loki shipping isolated in its own try/catch so the file/S3 path keeps working."
            },
            {
                title: "Admin permissions owned by another service",
                problem: "Sync's admin APIs had to obey a permission matrix kept in spurtx-core without copying it. A route that checked identity but forgot to check permissions would go unnoticed until someone abused it.",
                approach: "Added an @AdminAccess(module) decorator that applies the admin JWT guard and the permission guard and maps GET/POST/PUT/DELETE to view/create/update/delete. A global AdminRouteIntegrityGuard reads each route's guard metadata and returns 500 for any route missing the permission check, and an audit interceptor logs every successful change under the same module."
            },
            {
                title: "Closing access-control holes from a pentest",
                problem: "Several project endpoints had their guards commented out. Bulk milestone creation accepted any project IDs, and user search loaded every user and fuzzy-matched on email and phone number.",
                approach: "Put back GetProjectDetailsGuard and ProjectOwnerGuard where needed. Bulk creation now rejects any project where the caller isn't the owner or a PROJECT_ADMIN_MEMBER. Search is limited to users who share a project with the caller and returns a smaller response with no contact fields."
            },
            {
                title: "Replacing ad-hoc notifications with a catalog",
                problem: "Notification code was scattered across services, each sending its own email, push or WhatsApp message with no shared idea of user preferences, deep links or deduplication.",
                approach: "Defined a catalog of 39 events in 8 categories that sets each event's channels (in-app, email, OneSignal push, WhatsApp via spurtx-core) and checks user preferences before sending. A missing settings label fails at startup. Events the system infers keep the old delivery behavior until their hand-written emails are removed, so nobody gets mailed twice."
            },
            {
                title: "Living alongside the platform's core database",
                problem: "Sync had its own Postgres schema (auto-synced by TypeORM), but users, companies, notifications, calendar events and prompts also had to appear in spurtx-core's database, which Sync must not change structurally.",
                approach: "Ran a second named TypeORM connection to the core database with schema sync off, and added services that write invited members, password changes, notifications, calendar events and data-warehouse events through it. Internal reads, such as spurtx-core's subscription lookup, go through a service-token guard."
            }
        ],
        impact: [
            "50+ projects run across 10+ teams"
        ],
        tags: [
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "TypeORM",
            "Redis",
            "Bull",
            "Socket.IO",
            "Docker",
            "GitHub Actions",
            "AWS",
            "Grafana Loki",
            "Stripe",
            "Gemini API",
            "Jest"
        ],
        features: [
            "Projects, milestones and tasks with owner, project-admin and member guards",
            "Bulk milestone creation and status changes processed through a Bull/Redis queue",
            "AI task breakdowns and project descriptions with Gemini 2.5 Flash",
            "Real-time direct, group, milestone and DAO chat over Socket.IO gateways",
            "39-event notification catalog across in-app, email, push and WhatsApp, with per-user preferences",
            "Google and Outlook Calendar sync using OAuth refresh tokens",
            "Stripe subscriptions with free trials and signed webhook handling",
            "Fincra wallets with cross-currency deposits and payouts",
            "23 scheduled jobs for due-date reminders, re-engagement and subscription expiry",
            "Admin console gated by spurtx-core's permission matrix, with automatic audit logs",
            "Structured logs shipped to Grafana Loki and archived to S3",
            "Swagger/OpenAPI documentation served at /docs"
        ],
        image: "/sync.png",
        demoUrl: "https://teamsync.tools/",
        images: []
    },
    {
        id: "6",
        status: "Live",
        companyId: "spurt",
        role: "Founding Backend Engineer",
        title: "Score",
        team: "3 engineers",
        period: "2025 – 2026",
        subtitle: "Version 2 of Spurt's PHP product Core, rebuilt as a NestJS/TypeScript backend for invoicing, bookings, events and newsletters. I founded the codebase and was its only engineer for its first six months.",
        description: "Score gives consultants, business owners and agencies in the SpurtX ecosystem one backend for invoices, clients, bookings with Google Calendar and Meet, events and newsletters. It shares users, companies and admins with the rest of SpurtX through the central SSO. The team grew it into a 30-controller NestJS API with about 260 routes on top of the foundation I laid, and I later came back to add the admin permission and audit layer and an AWS deployment pipeline.",
        myRole: [
            "Bootstrapped the NestJS codebase: two TypeORM connections (the Score database and the shared SpurtX SSO database), global validation pipes, an exception filter, and Passport JWT/local auth guards.",
            "Built invoicing end to end: invoice entity and DTOs, client management, send-invoice emails with HTML templates, public invoice preview links gated by client OTP and client codes, tax/discount fields, and revenue analytics endpoints.",
            "Built the first bookings and consultants modules, plus a Google Calendar OAuth flow that stores refresh tokens and creates events with Google Meet links, and public booking endpoints.",
            "Added scheduled jobs for invoice reminders and daily, weekly and monthly recurring invoices, plus a Stripe Checkout and webhook subscription module (later retired when billing moved to the SSO layer).",
            "Set up the original Dockerfile, docker-compose and Cloud Build pipeline to deploy staging on Google Cloud Run; later wrote the production compose file, a /health endpoint, and a GitHub Actions workflow that pushes SHA-tagged images to Amazon ECR and rolls the ECS service.",
            "Moved admin identity to the shared SSO admin table behind an environment-variable switch, and enforced the spurtx-core permission matrix with a global guard and an audit interceptor that redacts credentials, both covered by Jest specs."
        ],
        challenges: [
            {
                title: "One identity across a multi-product ecosystem",
                problem: "Score had to recognize the same users, companies and admins as spurtx-core, Sync and Toolkit, but it also needed its own data for invoices, bookings and events.",
                approach: "From the first commit, the backend ran two named TypeORM connections: a Score Postgres database and the shared SSO database. JWTs issued by the SSO are validated with a Passport strategy, and company context is resolved from SSO entities rather than copied into Score."
            },
            {
                title: "Admin permissions without a silent bypass",
                problem: "spurtx-core's admin permission matrix is keyed by SSO admin ID, but Score identified admins by SSO user ID in its own table, so permissions couldn't be enforced at all.",
                approach: "Admin lookup now uses the shared SSO admin table, selected by ADMIN_IDENTITY_SOURCE so reverting is a config change rather than a rollback. A global guard derives the required action from the HTTP verb and returns a 500 for any admin route that has no permission declaration, so an unguarded admin route can't ship. An interceptor audits only successful mutating requests and exports, and redacts passwords and tokens."
            },
            {
                title: "Recurring billing and reminders",
                problem: "Invoices needed automatic reminders and regeneration on daily, weekly and monthly schedules without anyone triggering them by hand.",
                approach: "Scheduled cron jobs scan for invoices that are due or recurring and send reminders or issue the next invoice. The team later moved this work onto Redis-backed BullMQ queues and workers for retries and isolation."
            },
            {
                title: "Changing deployment targets",
                problem: "The service first shipped to Google Cloud Run through Cloud Build, then had to move to AWS without baking secrets into images and with a way to tell which commit was running in staging.",
                approach: "A GitHub Actions workflow authenticates with OIDC (falling back to static keys), builds with a Buildx layer cache, and pushes both :latest and an immutable commit-SHA tag to ECR. It then forces a new ECS deployment and fails loudly if the cluster or service isn't configured. A /health route registered before the global /api prefix gives container health checks a stable target."
            },
            {
                title: "Calendar-native bookings",
                problem: "Bookings had to land on the consultant's own calendar with a meeting link, which meant keeping long-lived Google access on the server.",
                approach: "A Google OAuth consent flow requests offline access and stores refresh tokens per user. Calendar events are created with conferenceData so Google attaches a Meet link. The team later extended this into a shared calendar-sync service."
            }
        ],
        impact: [
            "10+ businesses onboarded",
            "30+ invoices and 50+ bookings processed"
        ],
        tags: [
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "TypeORM",
            "Redis",
            "BullMQ",
            "Stripe",
            "Google Calendar API",
            "Docker",
            "GitHub Actions",
            "AWS ECR/ECS",
            "Google Cloud Run",
            "Grafana Loki",
            "Jest"
        ],
        features: [
            "Invoices with tax, discounts, email delivery and OTP-gated public preview links",
            "Recurring invoices and payment reminders on cron and BullMQ schedules",
            "Client management with generated client codes and email verification",
            "Bookings with availability, attendance tracking and team-member assignment",
            "Google Calendar sync with auto-generated Google Meet links",
            "Stripe payments for paid bookings",
            "Revenue, booking and event analytics endpoints",
            "Newsletters with CSV subscriber import and queued campaign sends",
            "Events with registrations and audience analytics",
            "AI-assisted website onboarding using Gemini",
            "SSO-backed admin console with a permission matrix and audit trail",
            "Structured logging shipped to Grafana Loki, with S3 log archiving"
        ],
        image: "/score.png",
        demoUrl: "https://staging--spurt-score.netlify.app/",
        images: []
    },
    {
        id: "7",
        status: "Live",
        companyId: "cvtocareer",
        role: "Engineering Lead",
        title: "CvtoCareer",
        subtitle: "A career platform that gives job seekers expert guidance, AI tools and application automation. As Engineering Lead, I split the monolithic web app into separate client and admin codebases so each could ship on its own.",
        description: "CvtoCareer helps job seekers in a competitive market with expert guidance, AI-assisted CV revamps and role suggestions, coach bookings and application automation. I first shipped features on the existing platform, then, after my promotion to Engineering Lead, led its restructure from one codebase into separate client and admin apps on Next.js and Material UI, deployed on Vercel, with Redis caching and MongoDB storage.",
        myRole: [
            "Shipped and deployed features on the existing CvtoCareer web platform before being promoted to Engineering Lead.",
            "Led the restructure of the monolithic app into separate client and admin codebases (Next.js, Material UI, Vercel), so each side could be developed, deployed and scaled independently.",
            "Guided the team through the migration and integrated AI features (Gemini and OpenAI) for CV revamps and job-role suggestions."
        ],
        challenges: [
            {
                title: "One codebase serving two very different users",
                problem: "Job-seeker features and admin tooling lived in one monolith, so every release touched both, deployments were risky and teams couldn't work independently.",
                approach: "Split the platform into a client app and an admin app in separate codebases on Next.js and Material UI, each deployed on its own, with Redis caching and MongoDB behind them."
            }
        ],
        impact: [
            "Led a team of 5 to 10 engineers, designers and QA"
        ],
        tags: [
            "Next.js",
            "TypeScript",
            "Material UI",
            "Vercel",
            "Redis",
            "MongoDB",
            "Gemini API",
            "OpenAI API"
        ],
        features: [
            "Separate client and admin apps",
            "AI CV revamp",
            "AI job-role suggestions",
            "Payments (Stripe, PayPal)",
            "Reporting and analytics",
            "Calendar booking with career coaches"
        ],
        image: "/cv.png",
        demoUrl: "https://www.cvtocareer.com/",
        images: []
    },
    {
        id: "24",
        status: "Pre-launch",
        companyId: "personal",
        role: "Co-founder & CTO",
        title: "HandLancer",
        team: "Solo engineer",
        subtitle: "An escrow-protected marketplace for hiring verified artisans in Nigeria, built as an Expo app, a Next.js web app and an admin console on one Supabase backend. I'm the co-founder and CTO and the only engineer, and I designed and built every part of it.",
        description: "HandLancer connects people who need home services (plumbers, electricians, carpenters, cleaners and more) with vetted local artisans, starting in Uyo, Nigeria. Customers post a job, compare itemized quotes and fund an escrow from an in-app wallet. Money is released in two stages, once for materials and once for workmanship, and only after the customer approves. The product is pre-launch: the marketing site and waitlist are live at handlancer.com, and the mobile and web apps are in testing.",
        myRole: [
            "Built the iOS/Android client in Expo (React Native, Expo Router, TypeScript, TanStack Query). It has separate customer and artisan flows covering jobs, quotes, chat, wallet, escrow, disputes, reviews and push notifications.",
            "Designed the Supabase backend across 22 versioned SQL migrations: row-level security on every table, plus SECURITY DEFINER functions as the only way to move wallet balances, fund escrow, release milestones and resolve disputes.",
            "Integrated Flutterwave payments through Supabase Edge Functions for wallet top-ups, bank-account resolution and withdrawals, with a signature-checked, re-verified and idempotent webhook.",
            "Built the Next.js 16 website: an SEO-structured marketing site (a 125-service catalogue, city and guide pages, JSON-LD) with a Supabase waitlist, a browser/PWA version of the marketplace, and an allowlisted admin console for users, artisans, jobs, disputes, transactions and analytics.",
            "Directed AI coding agents (Claude Code, Google Antigravity) as the sole developer. Before feature work I had the agent document the existing design system, then shipped work as small reviewed PRs, for example a phased SEO rollout, with Claude co-authorship recorded on 20 commits."
        ],
        challenges: [
            {
                title: "Money that clients can't touch",
                problem: "A wallet-and-escrow marketplace can't let a mobile client write balances, and payouts need to be split between materials and labor.",
                approach: "Wallets and transactions have no client write policies at all. Every balance change goes through SECURITY DEFINER Postgres functions that lock rows (SELECT ... FOR UPDATE), check who the caller is and what state the job is in, and write a ledger entry. Escrow releases a materials portion and a workmanship portion as separate milestones, and a dispute freezes release."
            },
            {
                title: "Trustworthy payment webhooks",
                problem: "Flutterwave sends three different webhook payload shapes depending on the account, and only matching one of them silently dropped real top-ups.",
                approach: "The Edge Function normalizes all three shapes, checks the verif-hash, then re-verifies the charge against Flutterwave's API before crediting. Credits are idempotent on tx_ref, so a retried webhook never double-credits."
            },
            {
                title: "Brute-force-resistant transfer PIN",
                problem: "Releasing escrow and withdrawing funds needed a second factor on top of the session.",
                approach: "The transfer PIN is bcrypt-hashed with pgcrypto and checked inside the release and withdrawal functions. Failed attempts are counted server-side, and the account locks for 15 minutes once the limit is reached."
            },
            {
                title: "Push notifications that silently failed",
                problem: "Notification rows were being saved and badges updated, but nothing reached the device, and nothing looked broken.",
                approach: "I traced it to missing Android FCM registration and fixed it. Push is now fanned out from Postgres triggers through a send-push Edge Function, with an in-app diagnostic that reports which link in the delivery chain is broken."
            },
            {
                title: "Admin access separate from app accounts",
                problem: "The admin console shares a Supabase project with the consumer app, so a valid app login must not grant admin access.",
                approach: "A Next.js proxy keeps sessions fresh. Every admin page and Server Action calls requireAdmin(), which verifies the JWT and checks an admin_users allowlist on each request, so removing a row revokes access immediately."
            }
        ],
        tags: [
            "React Native",
            "Expo",
            "TypeScript",
            "Next.js",
            "React",
            "Supabase",
            "PostgreSQL",
            "Row-Level Security",
            "Edge Functions",
            "Flutterwave",
            "TanStack Query",
            "Tailwind CSS",
            "Push Notifications",
            "AI-assisted development"
        ],
        features: [
            "Customer and artisan roles with separate tab flows",
            "Job posting, itemized quotes and hiring",
            "In-app wallet funded through Flutterwave",
            "Two-stage escrow: materials, then workmanship",
            "PIN-gated escrow release and withdrawals",
            "Disputes with admin refund or release",
            "Realtime chat (one thread per customer–artisan pair)",
            "Push notifications fanned out from Postgres triggers",
            "Ratings and reviews with recalculated provider scores",
            "Artisan onboarding with admin approval before quoting",
            "Browser/PWA version of the marketplace",
            "Admin analytics with PowerPoint/Excel/image export"
        ],
        image: "/handlancer.png",
        demoUrl: "https://www.handlancer.com",
        links: [
            { label: "App code", href: "https://github.com/yhtiee/Handlancer-Mobile-Application" },
            { label: "Website code", href: "https://github.com/yhtiee/Handlancer-Website" }
        ],
        images: []
    },
    {
        id: "23",
        status: "Live (early)",
        companyId: "personal",
        role: "Creator",
        title: "Oya",
        team: "Solo build (AI-assisted)",
        subtitle: "Oya is an AI agent for everyday life in Nigeria that checks power status, sets reminders and watches, and guides people through local errands in English and Pidgin. I wrote the 3,000-line product spec and directed AI coding agents milestone by milestone, from foundations through the agent pipeline.",
        description: "Oya is a conversational agent for people whose days are shaped by power cuts, paperwork and unreliable local information, launching first in Uyo, Akwa Ibom. Users chat with it in a web app, and it answers through typed server tools and server-built cards rather than free-form model text. It is in active development: five build milestones (foundations, identity, core data and task engine, conversation core, power and reminders) are done, the landing page and app are deployed, and model-backed chat stays off in production until its eval suites pass.",
        myRole: [
            "Wrote the product and technical spec (SPEC.md, about 3,000 lines): hard rules for grounding, confirmations, RLS, money and safety, a task state machine, a 30-category roadmap and a milestone build plan with acceptance criteria.",
            "Built Oya with AI help (Claude Code and Google Antigravity). Agents worked from the spec one milestone at a time on separate branches, logged their choices in a decisions log (27 entries) and spec deviations in a questions file. I reviewed each milestone against its acceptance checklist, merged it by pull request, and kept CI and Dependabot as gates.",
            "Designed the agent pipeline: a browser- and server-side emergency pre-filter, a structured-output router and safety gate, skills with allow-listed tools, and a grounding check that releases model text sentence by sentence only when every amount, time and date appears in that turn's tool results.",
            "Made side effects safe. Confirmations are server-issued and single-use, claimed atomically in Postgres, so double taps, expired or tampered payloads and cross-user IDs can't run an action. A 22-case confirmation-integrity suite proves this.",
            "Built the LLM layer: per-purpose model routing for Groq, Gemini and Anthropic, retries and fallback, a circuit breaker whose state is stored in Postgres, token and cost logging, per-user budgets, and a CI check that refuses to enable a model without a recent passing eval report.",
            "Built the data and background layer on Supabase: 17 migrations, each with RLS and explicit grants (enforced by a CI script), PostGIS areas, a durable job runner on a pg_cron tick using FOR UPDATE SKIP LOCKED and a reaper, plus web push and in-app notifications."
        ],
        challenges: [
            {
                title: "Keeping an LLM from inventing facts",
                problem: "Prices, times and power status shown to users must be true, but models hallucinate numbers and phone numbers.",
                approach: "The model writes short conversational text only, and server code builds the cards from tool results. A grounding checker normalizes amounts (\"₦3,000\", \"3k\", \"3000 naira\"), times and dates, and blocks any sentence whose facts aren't in this turn's tool results. Phone numbers are never allowed in model text."
            },
            {
                title: "Side effects that can't fire twice",
                problem: "Taps, retried POSTs and concurrent \"yes\" replies could run a reminder, watch or message more than once, or for the wrong user.",
                approach: "Every side-effecting tool creates a stored confirmation, and running it goes through a single-use claim_confirmation function in Postgres. A client message ID makes retried turns idempotent, and integration tests cover double taps, expiry, superseded confirmations and IDOR attempts."
            },
            {
                title: "Crowdsourced power status that resists spoofing",
                problem: "Outage reports come from users, so a few new accounts could flip a neighborhood's status and trigger alerts.",
                approach: "A trust-weighted status algorithm runs in Postgres: trust moves +0.1 or −0.15 per report, the bootstrap rule requires a trusted reporter, disagreement shows as \"uncertain\" and stale data as \"unknown\". Watches fire once per confirmed change, respect quiet hours and are capped at 4 a day, with integration tests for each rule."
            },
            {
                title: "Shipping an agent on a free model tier",
                problem: "Groq's free tier allows about 200k tokens a day per model, which is too little for evals and real traffic, and there was no budget for a paid provider yet.",
                approach: "Each purpose has its own routing config with a disabled Gemini fallback. Rate limits are treated as quota, not outages, so they don't trip the breaker. An eval runner paced to the free tier scores router accuracy and safety recall, and production falls back to button mode until the evals pass."
            }
        ],
        tags: [
            "Next.js",
            "TypeScript",
            "React",
            "Supabase",
            "PostgreSQL",
            "PostGIS",
            "Vercel AI SDK",
            "Groq",
            "Google Gemini",
            "Tailwind CSS",
            "Vitest",
            "GitHub Actions",
            "Sentry",
            "AI-assisted development"
        ],
        features: [
            "NDJSON-streamed chat with server-built info, confirm, power and emergency cards",
            "Emergency phrase pre-filter in browser and server; offline emergency card via service worker",
            "Structured-output router, safety classifier and self-harm support flow",
            "18 typed agent tools behind per-skill allow-lists",
            "Grounding check on every sentence the model writes",
            "Single-use, atomically claimed confirmations for side effects",
            "Trust-weighted crowdsourced power status with watches and quiet hours",
            "English and Pidgin reminder parsing with repeats and snooze",
            "Durable Postgres job queue on a pg_cron tick with reaper and heartbeat",
            "Custom email and password auth signing Supabase-compatible ES256 tokens; TOTP MFA for ops",
            "Ops console: take over a conversation, hand it back, verified local alerts",
            "Eval harness: 100 router utterances and a 110-case safety suite, enforced in CI"
        ],
        image: "/oya.png",
        demoUrl: "https://oya-ai-agent.vercel.app",
        repoUrl: "https://github.com/yhtiee/Oya-AI-Agent",
        images: []
    },
    {
        id: "22",
        status: "Live (beta)",
        companyId: "personal",
        role: "Creator",
        title: "EdgeProof",
        team: "Solo build (AI-assisted)",
        subtitle: "A free, evidence-first web platform that takes forex traders from zero to a statistically tested edge through a gated path: learn, write your own rules, journal, then prove it. I specified, designed and built it end to end, Django REST API and React PWA, by directing AI coding agents from my own product and technical spec.",
        description: "EdgeProof is built to replace hope with evidence for retail forex traders, most of whom lose money. It offers no signals and no copy trading. Users move through gates that unlock only when their own data shows they're ready: a seven-level interactive Academy with server-graded exams, a guided strategy rulebook builder with code-enforced clarity checks, an offline-first trade journal with honest statistics, and a Fundamental Bias Scanner that scores 28 currency pairs from public macro data. The Phase 1 MVP is nearly complete and deployed; testing workflows, the edge verdict and forward testing are on the roadmap.",
        myRole: [
            "Wrote the 600-line product and technical specification (phases, gates, data model, API, AI guardrails, compliance) and the DESIGN.md brand and design system, then drove Claude Code and Google Antigravity from them in phased builds, reviewing output against a tracked roadmap, design critiques and automated tests.",
            "Built the Django 5 / DRF backend as domain apps (accounts, academy, gates, strategy, testing, analytics, scanner, AI, audit) exposing a versioned /api/v1 with rotating-refresh JWT auth, Argon2 hashing, field-level envelope encryption and an audit log.",
            "Built the React 19 + TypeScript + Tailwind CSS installable PWA: lesson player with 17 interactive simulators, server-graded exams, an offline-first journal outbox and a multi-step rulebook builder that runs the same clarity checks in the browser and on the server.",
            "Implemented a numpy analytics engine (expectancy with block-bootstrap ranges, 10,000-path Monte Carlo drawdown, profit factor, rule-following) and a Fundamental Bias Scanner that ingests CFTC, BIS, OECD, Eurostat, FRED, SNB, Twelve Data and Myfxbook data into scored, explainable pair rankings.",
            "Added a guardrailed AI tutor behind a swappable Gemini/Groq provider layer with streaming, PII masking, per-user daily caps, answer caching, a monthly spend circuit breaker and a server-side check that blocks trade-signal language.",
            "Shipped it on free tiers: a Vercel static build proxying /api to a Dockerized Gunicorn service on Render, PostgreSQL, and GitHub Actions cron jobs that call HMAC-signed internal endpoints for the background sweep and scanner data jobs."
        ],
        challenges: [
            {
                title: "Background jobs with no worker",
                problem: "Free container hosts sleep when idle and allow a single web process, so there's nowhere to run a queue worker or scheduler for data ingestion, retries and cleanup.",
                approach: "GitHub Actions cron jobs make HMAC-signed, timestamped POSTs to internal endpoints and retry while a sleeping host wakes. The API runs each job in a background thread tracked by a Job row, and an idempotent sweep picks up anything unfinished."
            },
            {
                title: "Honest statistics, not flattering numbers",
                problem: "Small samples of trades make win rates and expectancy look far more certain than they are, and that misleads beginners.",
                approach: "Metrics are deterministic numpy code with hand-checked tests. Expectancy comes with a weekly block-bootstrap range and drawdown with a 10,000-path Monte Carlo, and the UI shows every estimate on a range bar with its zero line and sample size."
            },
            {
                title: "AI that teaches but never tips",
                problem: "An AI tutor in a trading product could hand out buy/sell calls, invent figures or run up provider bills.",
                approach: "One server-side tutor service wraps lesson content and user text as data and masks names and emails. It rejects signal-like language and any numbers not in the inputs, allows one rewrite before a safe refusal, and enforces daily per-user caps, cached answers, a timeout and a monthly cost breaker across Gemini and Groq fallbacks."
            },
            {
                title: "Explainable macro scoring from messy public data",
                problem: "Free macro sources update irregularly, several mirrors went stale, and backtests easily leak future information.",
                approach: "Each currency and factor uses an ordered source chain where the freshest observation wins and stale data is excluded and flagged. Factor scores are pure functions, and a 3-year weekly replay applies approximate release lags to avoid look-ahead and publishes hit rates by label with sample sizes."
            },
            {
                title: "Clarity checks that agree everywhere",
                problem: "Gate 3 depends on whether a strategy's rules are objective. Checking only in the browser could be bypassed, and checking only on the server makes the builder feel slow.",
                approach: "The rulebook is a versioned JSON Schema with a shared vocabulary of structured conditions and banned vague words. The same checks are implemented in TypeScript and Python and verified against 12 fixture strategies, including deliberately flawed ones."
            }
        ],
        tags: [
            "Django",
            "Django REST Framework",
            "Python",
            "PostgreSQL",
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "TanStack Query",
            "PWA",
            "numpy",
            "Gemini API",
            "GitHub Actions",
            "AI-assisted development"
        ],
        features: [
            "Gated path (Gates 1–3) enforced on the server with an audit log",
            "7-level Academy: 98 lessons, 353-question bank, 58 server-graded exams with placement tests",
            "17 interactive simulators (position size, expectancy, drawdown, risk of ruin and more)",
            "Offline-first trade journal with an ordered sync outbox and idempotent client IDs",
            "Rulebook builder with code-enforced clarity checks and versioned strategies",
            "Bootstrap and Monte Carlo metrics shown as range bars, never single flattering numbers",
            "Fundamental Bias Scanner: 28 pairs and 8 currencies scored from 8 macro and positioning factors",
            "Streaming AI tutor and plain-language explanations with signal-blocking guardrails and cost caps",
            "Rotating refresh-cookie JWT auth that revokes every session when an old token is reused",
            "Dark mode, colour-blind mode, reduced motion and a 360 px baseline",
            "Gemini lesson-drafting pipeline with citation checks and a human-review gate before publishing"
        ],
        image: "/edgeproof.png",
        demoUrl: "https://edge-proof.vercel.app",
        repoUrl: "https://github.com/yhtiee/EdgeProof",
        images: []
    },
    {
        id: "21",
        status: "Live (MVP)",
        companyId: "personal",
        role: "Creator",
        title: "Ifiok",
        team: "Solo build (AI-assisted)",
        subtitle: "Ifiok is an AI learning app that turns Nigerian university students' own courses into interactive, verified lessons. I wrote the spec, then designed and built it end to end with AI coding agents.",
        description: "Ifiok (\"the AI learning agent\") is a student-led learning platform for Nigerian university students: students create their own courses and outlines, topics resolve to shared concepts, and the AI writes lessons as data in a fixed block language that the app's own components render. Every number a student sees is computed by mathjs, not the model, and lessons only go live after automated checks. It is live as an early MVP on Next.js and Supabase.",
        myRole: [
            "Wrote a 13-part product and engineering spec before any code (product, features, architecture, data model, AI, lesson engine, economy, brand, security, cost, build plan, testing, review log), with its schema and RLS rules checked in PostgreSQL first.",
            "Drove Claude Code and Google Antigravity from that spec through a ticketed build plan: a CLAUDE.md with 14 hard guardrails, one ticket per session with tests and \"Done when\" checks, `pnpm check` as the gate, and spec changes recorded as numbered decisions in a review log.",
            "Designed a provider-agnostic AI gateway (policy, kill switch, caps, atomic quota reservation, routing with retry and fallback across Groq, Gemini and Anthropic, JSON validation with one repair pass, cost logging, refund on failure), with model IDs kept in database config rather than code.",
            "Built the lesson pipeline: a zod-validated Lesson DSL with 14 block types, a verifier that checks schema, size, maths equivalence, KaTeX, plots and source references, a claim check for non-STEM lessons, and publish-or-review versioning.",
            "Built a Postgres-native job system: pgmq queues, a Deno Edge Function worker started by pg_net and swept by pg_cron, with retries, visibility timeouts and Realtime job status.",
            "Locked down the data layer with 22 migrations, RLS on every table and pgTAP tests (run in PGlite locally and Docker in CI), plus age-gated onboarding, consent and personal-data redaction before free-tier model calls."
        ],
        challenges: [
            {
                title: "Keeping AI-written lessons safe and correct",
                problem: "LLM output can contain wrong maths, invented claims or unsafe markup, and students would see it.",
                approach: "The model returns Lesson DSL JSON only, which is validated by zod and a verifier (mathjs equivalence, KaTeX pre-render, plot evaluation, source-ref checks). Failing or sensitive lessons go to review instead of publishing, and AI-generated HTML or JS is never rendered."
            },
            {
                title: "Running a pilot on free-tier model limits",
                problem: "Groq's free models allow about 1,000 requests a day and 8,000 tokens a minute, and long generations often hit 429s or got truncated.",
                approach: "Config-driven routing (the large gpt-oss model for lesson generation, the small one for frequent calls, Gemini for image skills), an immediate switch to the fallback provider on 429, repairs sent to whichever provider is up, and quota reserved before each call and refunded on failure."
            },
            {
                title: "Long AI jobs without extra infrastructure",
                problem: "Lesson generation takes too long for a request handler, and the cost plan ruled out a separate queue service.",
                approach: "pgmq queues inside Supabase, a worker Edge Function triggered by pg_net and a one-minute pg_cron sweep, idempotent enqueue_job_once, and attempt and visibility limits. The client follows progress over Realtime."
            },
            {
                title: "Sharing code between Next.js and Deno",
                problem: "The gateway, prompts, verifier and job handlers have to run both in the Next.js server and in Supabase Edge Functions.",
                approach: "A pure-TypeScript @ifiok/core workspace package, synced into the functions folder by a script, with `pnpm check` failing if the copies drift."
            }
        ],
        tags: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "pgvector",
            "pgmq",
            "Groq",
            "Gemini",
            "Anthropic Claude",
            "Zod",
            "TanStack Query",
            "Tailwind CSS",
            "mathjs",
            "AI-assisted development"
        ],
        features: [
            "Student-created courses, with outlines drafted by AI or extracted from a photo or PDF",
            "Topics resolved to shared concepts through embeddings (gte-small, pgvector)",
            "Interactive lessons: plots with sliders, steppers, checkpoints (order and match), diagrams, flashcards",
            "Maths pre-rendered with KaTeX when a lesson is saved; numbers computed by mathjs",
            "Lesson verification gate and claim check before publishing",
            "Background lesson generation with live job status",
            "Multi-provider AI gateway with quotas, kill switch and cost tracking",
            "Email and password auth, 18+ age gate, consent and onboarding flow",
            "RLS on every table, tested with pgTAP",
            "Mobile-first, accessible UI (jsx-a11y lint) and an SEO landing page with JSON-LD"
        ],
        image: "/ifiok.png",
        demoUrl: "https://ifiok-ai-agent.vercel.app/",
        repoUrl: "https://github.com/yhtiee/Ifiok-AI-Agent",
        images: []
    },
    {
        id: "9",
        companyId: "personal",
        role: "Creator",
        title: "Fundamental Analysis",
        subtitle: "A small web app that reads forex fundamental news and sentiment and suggests whether each currency looks bullish or bearish.",
        description: "Fundamental Analysis fetches forex fundamental news, runs it through the Gemini API for sentiment analysis of economic reports and central-bank statements, and turns the result into a simple bullish or bearish reading per currency. It is an early side project built with Next.js and Tailwind CSS, and the idea later grew into EdgeProof's Fundamental Bias Scanner.",
        myRole: [
            "Built the Next.js and Tailwind CSS app, the news-fetching pipeline and the Gemini-based sentiment analysis that produces a bullish or bearish reading per currency."
        ],
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Gemini API"
        ],
        features: [
            "Forex news ingestion",
            "AI sentiment analysis of economic news",
            "Bullish or bearish reading per currency"
        ],
        image: "/fund.png",
        demoUrl: "https://fundamentals-sentiment-analysis.vercel.app/",
        repoUrl: "https://github.com/yhtiee/Fundamentals-Sentiment-Analysis",
        images: []
    },
    {
        id: "10",
        status: "Live",
        companyId: "cvtocareer",
        role: "Automation & Web Scraping Engineer",
        title: "Job Application Automation Engines",
        subtitle: "Python engines that automate job applications for CvtoCareer's clients across major job boards. I maintained the existing engines, then built and led the build of new ones.",
        description: "CvtoCareer's automation engines apply to jobs on behalf of its career-service clients. I maintained and extended the engines for SEEK, LinkedIn, Jobserve and Indeed, then built and oversaw new engines for Adzuna, Reed, CareerOne, Jora, Monster, CV-Library, Michael Page and Randstad, so clients could apply to many relevant roles efficiently.",
        myRole: [
            "Maintained and added features to the existing engines for SEEK, LinkedIn, Jobserve and Indeed.",
            "Built, and led the build of, new engines for Adzuna, Reed, CareerOne, Jora, Monster, CV-Library, Michael Page and Randstad.",
            "Containerized the engines with Docker on DigitalOcean and kept them running as job-board layouts changed."
        ],
        challenges: [
            {
                title: "Many job boards, each built differently",
                problem: "Every board has its own page structure, dynamic JavaScript content, rate limits and frequent layout changes, so engines broke whenever a site changed.",
                approach: "Python engines on Selenium and Playwright for dynamic pages, modular per-site code that was quick to adapt, request throttling and retries, and continuous monitoring so breakages were caught and fixed fast."
            }
        ],
        impact: [
            "About 200 applications submitted per client each week",
            "One career-changing client landed a new role after four months of automated applications"
        ],
        tags: [
            "Python",
            "Selenium",
            "Playwright",
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "Docker",
            "DigitalOcean"
        ],
        features: [
            "12 job boards covered",
            "Browser automation for dynamic pages",
            "Per-site modular engines",
            "Throttling, retries and monitoring",
            "Dockerized deployment on DigitalOcean"
        ],
        image: "/auto.png",
        images: []
    },
];