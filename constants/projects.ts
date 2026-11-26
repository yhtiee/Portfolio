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
        subtitle: "A marketing-services platform that lets businesses order, pay for, and approve strategy, design, content, and media-buying work, with a role-based staff portal that sends each order to the right creative talent. Led the v2 rebuild of both apps.",
        description: "GrowthStack runs as two React and TypeScript apps on one REST backend. In the client dashboard, businesses sign up, place orders across 15 service types, pay through Flutterwave, and review or approve the work they receive. In the staff portal, superadmins, admins, and creative talents manage clients, assign and reassign tasks, and run a two-stage review where an admin approves a talent's work before the client sees it. I moved both apps from the v1 backend to a new API and built most of the v2 order, payment, and review flows.",
        myRole: [
            "Moved the client dashboard onto a new backend API and rebuilt sign-up, login, email verification, password reset, and multi-step business onboarding, so existing users kept a working account through the switch.",
            "Connected the order forms and order-history tables for design, content, strategy (brand, press, influencer), and media buying to the new orders API, with pagination, filters, and search so businesses can find any past order quickly.",
            "Built the Flutterwave checkout for unpaid orders and downloadable order PDFs, so businesses can pay and keep a record in one place.",
            "Built the deliverable review screens with in-app previews of image, video, and PDF submissions, plus client approval and revision requests, so clients can sign off without downloading files.",
            "Built the staff portal's role-based dashboard and navigation for superadmins, admins, and talents, along with admin and talent account management and invite-based account setup.",
            "Built task assignment and reassignment, the talent submission flow with Cloudinary uploads, and admin review and approval, so every piece of work is checked before it reaches the client."
        ],
        challenges: [
            {
                title: "Moving a live v1 frontend to a new backend",
                problem: "The v1 dashboard was built against an older API on Heroku, and the new GrowthStack backend changed the endpoints, the sign-in flow, and the order models.",
                approach: "Rewired sign-in, onboarding, and every order type to the new /v1 REST endpoints through Redux Toolkit async thunks, kept the shared axios auth-token setup, and sent users without a business profile to onboarding first."
            },
            {
                title: "One staff app for three roles",
                problem: "Superadmins, admins, and creative talents share one portal, but each role needs its own overview stats, task lists, navigation, and actions.",
                approach: "Gave each role its own overview and task-list endpoint and its own sidebar setup, and showed actions such as assign, reassign, review, and submit based on the user's role and the task's status."
            },
            {
                title: "A two-stage approval for creative work",
                problem: "A talent's submission has to pass an internal admin review before the client sees it, and feedback from both sides has to stay visible to everyone involved.",
                approach: "Built separate admin review and approval steps and separate client review and approval steps, with pop-up windows (modals) that show each party's reason and details, and kept admin feedback visible to talents until the client responds."
            },
            {
                title: "Mixed-media deliverables",
                problem: "Deliverables can be images, videos, PDFs, or bundles of several files, and clients need to preview them without downloading anything.",
                approach: "Uploaded files to Cloudinary by type (image, video, or raw), compressed images in the browser, zipped multi-file uploads with JSZip, and showed submissions inline with a PDF viewer and video player."
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
        subtitle: "A music-industry platform that helps artists, producers, and studio owners find each other, book studio sessions, sell beats, and work together. Built the first version of the marketing site and the studio-owner side of the product.",
        description: "Scrollz is a pnpm and Turborepo monorepo (one repository holding several apps) with two Next.js 15 and React 19 apps: the main web app and an internal admin dashboard, which share a UI kit, hooks, providers, and config packages. In the web app, artists browse and book recording studios, buy beats, take on collaborations, and message each other in real time, while studio owners list studios and manage their bookings. Payments go through Paystack and Flutterwave, the blog runs on Sanity, and semantic-release versions each release automatically.",
        myRole: [
            "Built the first version of the public marketing site, covering the home, about, blog, events, artiste, producer, and studios pages, with the hero animation, vertical and horizontal image carousels, services dropdown navigation, and mobile layouts throughout.",
            "Owned the studio-owner feature module end to end and wrote nearly all of its code, from creating a studio with multi-file media upload and editing its details, facilities, policies, gallery, and pricing to the My Studios listing, detail, and review pages.",
            "Built the studio-owner booking workflow with filterable booking lists, booking details, accepting and declining sessions, checking clients in and out, and rating or reporting a client, with Zod-validated forms at each step so bad input never reaches the server.",
            "Connected the module to the REST API with TanStack Query (8 query and 8 mutation hooks), a typed endpoint and service layer, and a scoped Zustand store for the active studio, so every screen shows current data.",
            "Built analytics for the studio-owner home dashboard with MUI X line charts of bookings over 7-day to 12-month ranges, plus a utility that fills in missing dates so days with no bookings still appear on the chart.",
            "Added a drag-and-drop event calendar with month, week, day, and agenda views (built on dnd-kit) to the shared UI package, and built the profile-settings screens."
        ],
        challenges: [
            {
                title: "Session lifecycle for studio owners",
                problem: "A studio booking moves through several states, from pending to accepted or declined, then checked in, checked out, and reviewed or reported, and each state needs its own actions while every screen stays consistent after each change.",
                approach: "Gave each step its own React Query mutation hook that calls a dedicated endpoint, with toast messages and shared query keys so booking details refresh after every action, validated every form (decline, report, review) with a Zod schema through React Hook Form, and filtered booking lists by status and client role through URL query state (nuqs)."
            },
            {
                title: "Uploading studio media without blocking the form",
                problem: "Creating or updating a studio means uploading several images and videos alongside a long form, and users need to see progress for each file.",
                approach: "Used the shared multi-file upload hook on the add-studio and update-gallery screens to track progress and results for each file, wrote the returned URLs back into the form, and sent the create or update request only after every upload finished."
            },
            {
                title: "Readable analytics from sparse data",
                problem: "The bookings analytics endpoint returns only the days with activity, so charts covering 7 days to 12 months came out with gaps and an uneven x-axis.",
                approach: "Wrote a fillDateGaps utility that builds the full daily range for the chosen period and fills missing days with zero, then plotted that series on the MUI X line chart and recalculated its width on resize so it fits every screen size."
            },
            {
                title: "One codebase for two apps",
                problem: "The web app and the admin dashboard had to share components, hooks, and config without drifting apart, while several engineers committed at the same time.",
                approach: "Set the repository up as a pnpm workspace run by Turborepo, with shared UI, hooks, lib, provider, types, and config packages, used Husky, lint-staged, and commitlint to enforce consistent commit messages, ran lint and build on every pull request with GitHub Actions, and let semantic-release generate versions and the changelog."
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
        subtitle: "A marketing website that lets Arcpenter, a Lagos carpentry and interior design company, show its work and publish new content without a developer. Built the Next.js frontend end to end and set up and modeled most of its Strapi CMS.",
        description: "Arcpenter's site shows the company's finished projects, services, team, and blog, and has a contact form, all for a client that needed to update content without a developer. Projects, services, team profiles, blog posts, and categories live in a Strapi 4 CMS (content management system) backed by PostgreSQL, with media stored on Cloudinary. The Next.js 13 App Router frontend loads that content through a shared Axios client and serves images through next/image, and contact inquiries go straight into an Airtable base.",
        myRole: [
            "Built the Next.js 13 App Router frontend, covering the home, about, projects, project detail, services, service detail, blog, article, category, and contact pages.",
            "Set up the Strapi 4 CMS with PostgreSQL and the Cloudinary upload provider, and modeled 7 content types (projects, project images, results, services, team, blogs, categories), so the client can add new work without a developer.",
            "Wrote a reusable useFetch hook on a preconfigured Axios instance to load Strapi content, with skeleton loaders and empty states so pages never look broken while loading or when there is no data.",
            "Built blog category filtering and search, keeping the active category in the URL so readers can share filtered views.",
            "Built custom interactive pieces, including a rotating Ferris-wheel image gallery, Swiper and React Slick project carousels, and scroll-triggered entrance animations.",
            "Connected the contact form to the Airtable REST API with on-screen confirmation messages, and maintained the site after launch through 2025."
        ],
        challenges: [
            {
                title: "Content the client can edit",
                problem: "Arcpenter needed to publish new projects, services, team members, and articles without a developer, and each project page is long, with a brief, approach, what we did, a gallery, and client results.",
                approach: "Modeled each page section as Strapi fields and relations (Project → Project Image, Result; Blog → Category, Team author) using rich-text fields, and rendered them on the frontend with react-markdown, so editors can change text and images directly."
            },
            {
                title: "Image-heavy pages on any device",
                problem: "Carpentry and interior work is shown through large photos, and the layouts were designed separately for mobile, tablet, and desktop.",
                approach: "Sent CMS uploads to Cloudinary and served them through next/image with approved remote domains, and at the 1024px breakpoint swapped in separate desktop and mobile versions of the hero, offers, products, testimonials, and FAQ sections instead of forcing one layout to fit every size."
            },
            {
                title: "Findable blog content",
                problem: "As the blog grew, readers needed to narrow articles by topic and find specific posts.",
                approach: "Pulled categories from Strapi and built category routes with search in the browser, keeping the category and search terms in the URL so filtered views survive a refresh and can be shared."
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
        subtitle: "A marketing website for TruQ, a Lagos logistics platform that connects businesses, individuals, and drivers with trucks and vans for moves and deliveries. Built the whole frontend alone, from the first setup to a full redesign.",
        description: "TruQ needed one site that speaks to several audiences, namely businesses, individuals, drivers, and partners, plus its Siju products for businesses and logistics. It is a JavaScript Next.js 13 App Router site styled with Tailwind CSS, with 23 routes including audience landing pages, pricing plans, a multi-step quote flow, trip tracking, careers, and a blog. Blog posts come from a Strapi headless CMS and render from Markdown, and images are served from Cloudinary through next/image.",
        myRole: [
            "Wrote every commit in the repository (180 commits and 149 merged pull requests, June 2023 to January 2024), working through tickets tracked in Jira.",
            "Built 23 App Router routes and about 74 components, including mega-menu navigation for desktop and mobile, the audience landing pages, and the pricing, careers, contact, and success pages.",
            "Connected the blog to the CMS through a shared Axios client and a useFetch hook that load the post list and single posts, rendered them with react-markdown, and added an empty state for when there are no posts.",
            "Added scroll-triggered entrance animations with Framer Motion's whileInView across the site, plus Swiper carousels for the hero, testimonials, and business logos.",
            "Carried out the December 2023 to January 2024 redesign of the Home, Business, Individual, and Drivers pages, with responsive layouts checked at every screen size."
        ],
        challenges: [
            {
                title: "One site, many audiences",
                problem: "Businesses, individuals, drivers, and partners each needed their own landing page and calls to action, and the navigation had to reach all of them without overwhelming visitors.",
                approach: "Grouped the routes under Customers, Partners, Company, and Resources mega-menus with separate desktop and mobile versions, and reused shared sections (headers, FAQ, stats, testimonials) across the audience pages."
            },
            {
                title: "Pricing for three audiences",
                problem: "Drivers, partners, and customers each have their own plans, offered monthly or yearly, plus a confirmation step before payment.",
                approach: "Built a tabbed pricing page with a monthly and yearly toggle for each audience, driven by plan data kept in local constants, linked each plan to a dynamic /pricing/[id] confirmation route, and added a feature-comparison table below."
            },
            {
                title: "Motion without hurting load",
                problem: "The redesign called for animated stats and section reveals, but they should only run when the user actually scrolls to them.",
                approach: "Used react-intersection-observer to start the stats counter only when its section comes into view, and Framer Motion's whileInView for entrance transitions."
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
        subtitle: "A marketing site and demo-request funnel that explains Zedi AI's AI-driven advertising and audience-targeting platform and turns visitors into sales leads. Built it alone, from first setup to production.",
        description: "Zedi AI needed a public site to explain its ad-targeting product and turn visitors into sales leads. It is built on the Next.js 13 App Router with Tailwind CSS as a single landing page with section-based navigation, responsive carousels, and a separate demo-booking page. Demo requests go straight into an Airtable base, so the business development team can follow up without a custom backend.",
        myRole: [
            "Built the whole site alone, from the create-next-app setup to production, across 75 commits and 35 merged pull requests.",
            "Built the landing sections (hero, intro, targeting, results, reporting, and a feature carousel) from the design, with responsive layouts tuned for mobile, tablet, and wide screens.",
            "Built the demo page and a form that sends leads to the Airtable REST API, with a success message on submission so visitors know their request arrived.",
            "Built the desktop navbar and an animated slide-in mobile menu with smooth-scroll links to page sections that also work from the demo page."
        ],
        challenges: [
            {
                title: "Section links across routes",
                problem: "The navbar links scroll to sections on the home page, but they also had to work from /demo, where those sections don't exist.",
                approach: "Made each nav link check the current page with usePathname and return to the home page's anchor before smooth-scrolling with scrollIntoView, and shared that logic between the desktop navbar and the mobile menu."
            },
            {
                title: "Carousels that fit every breakpoint",
                problem: "The feature cards and the product-category switcher needed different layouts on phones, tablets, and desktops without cut-off content or stray controls.",
                approach: "Used react-slick with responsive breakpoint settings and autoplay for the features, Swiper with a screen-width-based slidesPerView for the mobile category tabs, and hid slider arrows on larger screens."
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
        subtitle: "A cross-currency mobile banking app that lets Nigerians save, pay bills, and get support from their phone, built with Expo and React Native. Built its live goal savings, airtime and data purchases, in-app support chat, and biometric payment approval.",
        description: "Bucks is a borderless banking app for Nigerian users, with NGN and USD wallets, currency conversion, bank transfers, bill payments, savings, and tiered identity checks (KYC), on both iOS and Android. It is an Expo Router app in TypeScript, using React Query for server data, Axios service classes for each area of the app, Socket.IO for real-time chat, and EAS Build and Update for releases.",
        myRole: [
            "Built the savings product, with goal savings live in the app (create, top up, withdraw, activity, and goal tracking) and the locked and group savings flows built ahead of their APIs.",
            "Delivered about 34 savings screens, a shared library of 28 savings components, and a SavingsContext, roughly 15,000 lines of code in total.",
            "Integrated the goal-savings REST API (create, list, detail, contribute, withdraw, cancel) through React Query, with a mapping layer between the API's structured schedules and the labels users see.",
            "Added idempotency keys to withdrawals so a retried request can never take money from a user twice.",
            "Built the bill-payments module with live airtime and data purchases, a reusable confirmation pop-up, PIN or biometric approval, success receipts, and a monthly spend history on a /bills service layer.",
            "Built the cable TV, electricity, and internet payment flows so they are ready to switch on when their APIs arrive.",
            "Built in-app support chat on Socket.IO (join, send, live messages, read receipts) with live-support, Bucksy chat, and transaction-dispute screens, and extended it to a support flow before login so signed-out users can still reach the team.",
            "Added Face ID and fingerprint approval for payments through a biometric setup sheet and a reworked transaction PIN pop-up used across transfer, conversion, and statement flows.",
            "Integrated PDF statement download and email through the phone's native share sheet.",
            "Built the screens for budgeting and savings-plan flows, and shipped landing-page updates on the Next.js marketing site (SEO metadata, hero image, footer, and social links)."
        ],
        challenges: [
            {
                title: "Safe retries on money-moving requests",
                problem: "A withdrawal that times out may still have gone through on the server, so a blind retry could take the money twice.",
                approach: "Created one time-ordered idempotency key when the user commits to the action and sent the same key on every retry, retrying only when there was no response or a 5xx server error, while a 4xx means the request was rejected, so the next attempt gets a fresh key."
            },
            {
                title: "Shipping savings ahead of the backend",
                problem: "Goal savings had live endpoints, but locked and group savings did not, and the designs needed all three flows to work.",
                approach: "Built SavingsContext to merge API-backed goals from React Query with simulated locked and group pots stored on the device (AsyncStorage) behind one Pot model, so screens don't care where a pot comes from and each type can switch to the API once its endpoints are ready."
            },
            {
                title: "Translating savings schedules",
                problem: "The API stores contribution schedules as an uppercase frequency, a numeric day, and a 24-hour time, while users pick labels like \"Every Monday, 4:00pm\".",
                approach: "Wrote a dedicated two-way mapping module (ISO weekday numbering, ordinal days, time formatting) that keeps the conversion out of the screens and context."
            },
            {
                title: "Realtime support chat on mobile",
                problem: "Support needed live two-way chat, attachments, and read status, including for users who couldn't sign in.",
                approach: "Used one shared Socket.IO client on the /chat namespace (WebSocket transport) with promise-based join, send, and mark-read calls and a single new_message listener, and added a support entry point on the login and PIN screens that works without signing in."
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
        subtitle: "An AI-assisted talent marketplace where professionals take a screen-recorded AI interview before they are matched to company jobs. As the main engineer on the contract, built the admin console, the company dashboard and job management, and the interview's live S3 recording, voice detection, and pause and resume.",
        description: "Nouvells connects companies and AI labs with vetted professionals and agencies. Companies post jobs and run projects, while candidates sign up and then take an AI-driven screening interview, with a voice round and a Monaco coding round, all screen-recorded, before they are shortlisted. It is one Next.js 16 App Router app in TypeScript that holds the marketing site, sign-in, the talent and company dashboards, the interview, and an admin console. Supabase (Postgres, Auth, row-level security) is the backend, Server Actions hold the server logic, and an external AI engine runs the interview.",
        myRole: [
            "Built the live admin console for managing users, jobs, applicants, disputes, and the admin team, with an overview dashboard, sign-up charts, admin invites and roles, platform settings, and Excel exports.",
            "Wrote about 1,700 lines of server actions for the admin console across admin, dispute, export, and settings actions, plus 20+ admin components.",
            "Built the live company side, including the company dashboard, job creation with required-field checks, job editing and deletion, talent search and profiles, and application review.",
            "Integrated the talent onboarding and applications flows, including applying to a job during onboarding, so candidates can apply without finishing setup first.",
            "Built live interview recording that streams the screen to S3 in 5 MB parts during the session through presigned part URLs from Server Actions, with abort and cleanup so failed sessions leave no half-finished uploads.",
            "Wrote the scripts that set the bucket's CORS, lifecycle, and public-read rules.",
            "Built the interview's voice and session logic, including dynamic AI questions and answers, a voice-activity detector that adjusts to room noise, one recording kept across the voice and coding rounds, a cooldown and no-hire gate, and a pause and resume protected by row-level security with an expiry limit.",
            "Added send-once interview result emails (passed, not passed, not shortlisted) on Resend and React Email, timing data for each answer, and a SQL migration runner that applies each change as one transaction."
        ],
        challenges: [
            {
                title: "Recording a 30-minute interview without a long upload at the end",
                problem: "Uploading half an hour of screen video after the interview would be slow and fragile, and failed sessions could leave partial uploads in S3.",
                approach: "Fed a MediaRecorder with a 5-second timeslice into an S3 multipart upload during the interview, with Server Actions that start the upload, presign each 5 MB part, and then complete or abort it, so finishing takes seconds and failed sessions are aborted and their parts deleted."
            },
            {
                title: "One recording across two pages",
                problem: "Technical candidates move from the AI interview page to the coding page, which unmounts the recorder and would split or lose the recording.",
                approach: "Wrote a recording-handoff module that keeps the live recorder, its audio-mixing cleanup, and the mic tracks in module state, so whichever page ends the session finalizes it and one video covers both rounds."
            },
            {
                title: "Silent RLS failures on delete",
                problem: "The jobs table has no DELETE policy for users, so Postgres row-level security (RLS) quietly filtered company deletes to zero rows and returned no error, which looked like success.",
                approach: "Made the action check ownership against the caller's profile, then delete with the service-role client while re-checking company_id, using .select() to catch a delete that removed nothing and report the real reason, such as a foreign-key violation."
            },
            {
                title: "Exactly-once outcome emails that candidates can't re-trigger",
                problem: "Candidates have full RLS access to their own interview rows, so a 'sent' flag on that table could be reset through the public API to send the email again.",
                approach: "Used a separate table only the server can touch (RLS on, no policies) as a lock, where the server claims a session with insert ... on conflict do nothing returning, sends only if that insert won, and deletes the row if the send fails so it can retry."
            },
            {
                title: "Pause and resume without stretching the allowance",
                problem: "beforeunload and pagehide both fire when a tab closes, and a candidate could also try to pause an interview that is not theirs or not live.",
                approach: "Limited the pause update to live interviews and filtered it through RLS, so a repeated pause can't move paused_at forward and a non-owner gets no row back, while interviews paused past the limit are discarded upstream and onboarding is rolled back."
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
        subtitle: "A private couples app that helps two partners pair their phones, check in daily, play small decision games, and plan together, with an AI coach on the side. Built it end to end on contract with AI coding agents, covering the Expo and React Native app, the Supabase backend, and the marketing and legal website.",
        description: "Me&u is built for exactly two people, with one shared hub, two phones, and no feeds. Partners log their mood and social battery each day to grow a shared streak, settle small decisions with a coin flip, a wheel, a date setter, and a movie swipe picker, and keep a shared calendar, bucket list, gallery, and a wiki of details about each other. A private AI coach answers relationship questions. The website is live and the app is ready for the stores, with its store listing pending, and it is free with ads, with a planned $1 a month premium tier per person.",
        myRole: [
            "Built the Expo (SDK 57) and React Native app in TypeScript with 50 Expo Router route files, 55 components, and 24 hooks.",
            "Kept every screen reading data only through typed hooks, so moving from mock data to Supabase never touched a screen.",
            "Upgraded the app from Expo SDK 54 to 57.",
            "Designed the Supabase backend with 30 ordered SQL migrations, row-level security on every table, SECURITY DEFINER functions for pairing and quotas, real-time publishing of shared tables, and storage buckets for avatars, the gallery, and coach attachments.",
            "Wrote five Deno Edge Functions for a streaming Gemini coach, TMDB movie discovery, push notifications sent from a database webhook through Expo and FCM, account deletion, and leaving a hub.",
            "Built everything the app stores require, including in-app account deletion, in-app feedback and safety reports, AdMob with rewarded coach questions and tracking-consent prompts, EAS build channels with fingerprint-based over-the-air updates, and generated Play Store assets.",
            "Built the Me&u website (React, Vite, TypeScript) with a landing page of interactive demos and privacy, terms, child-safety, support, and account-deletion pages, using a custom Vite SEO plugin for metadata and JSON-LD and prerendering pages at build time so search engines can read them.",
            "Directed AI coding agents with plan-first specs, including a phased build plan checked against the product requirements (PRD), design tokens, and mockups, locked decisions, boundary rules checked in review, and a log of what changed.",
            "Owned the architecture, security, and product decisions, and shipped each phase only after type-check, lint, and bundle checks passed."
        ],
        challenges: [
            {
                title: "A paywall the client can't bypass",
                problem: "The coach's free limit of three questions a day and the premium flag protect the only paths to revenue, so a counter on the phone, or a premium column the app can write to, would let anyone give themselves an unlimited coach and an ad-free app.",
                approach: "Claimed the quota in one atomic server-side function before any AI call and let apps only read their usage. After premium moved from the couple to the person, a check showed the app could still write is_premium, because a column-level REVOKE does not override a table-level grant, so a migration removed the table-wide UPDATE and granted it back column by column without the entitlement columns, and every premium check now goes through one function that falls back to free if anything fails."
            },
            {
                title: "Streaming an AI coach without exposing the key",
                problem: "Anything prefixed EXPO_PUBLIC_ is compiled into the app, so calling Gemini from the phone would publish the key, and long replies also need to stream and be stoppable.",
                approach: "Kept the key in a Supabase Edge Function that streams Server-Sent Events (meta, delta, done, error) through a client carrying the caller's sign-in token (JWT), so row-level security still applies, and used a service-role client only for the private attachments bucket. A server-assigned sequence number under an advisory lock stops two devices from racing on the same thread."
            },
            {
                title: "Two phones, one shared state",
                problem: "Both partners look at the same rows on different devices, and a change on one phone must appear on the other without a reload.",
                approach: "Opened one real-time channel per couple, filtered by couple_id, and treated each change as a signal for the subscribed hook to re-run its own query instead of merging the payload, which avoids rebuilding joined queries on the phone and handling DELETE events that carry only a key. A refetch when a screen regains focus covers anything missed while the connection was down."
            },
            {
                title: "Pairing and deletion under strict RLS",
                problem: "Redeeming an invite code means reading a couple you are not yet part of, which row-level security forbids, and deleting an account has to remove the data and stored files, not just set a flag.",
                approach: "Left couples and members with no INSERT policies and routed pairing through narrow SECURITY DEFINER functions, with codes that expire after 7 days, skip easily misread characters, and are cleared once redeemed. The delete-account function removes stored files first, then hubs where the caller is the last member, then the sign-in account, and the per-user tables are removed with it."
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
        subtitle: "A Catholic app for multiple parishes that gives each parish its own Mass schedule, readings, groups, giving records, and notices, all run from the admin's phone. Built it end to end on contract with AI coding agents, covering the Expo and React Native app, the Supabase backend, and the public website.",
        description: "Church Life connects Catholic parishioners in Nigeria with their own parish. Members get their parish's Mass times and intentions, daily readings with a parish reflection, the Douay-Rheims Bible, hymns and prayers, parish groups with chat, celebrations, and an Ask a Question assistant that answers from Church documents. Parish admins publish content, admit members, assign duty roles, and confirm offerings, pledges, and Mass bookings, while platform super admins create parishes and appoint their first admins. No money moves through the app, because members pay by bank transfer and the parish confirms the record. The website is live, and the app is built on EAS with its store listings pending.",
        myRole: [
            "Built the Expo Router app in TypeScript with separate member, parish-admin, and super-admin areas across about 56 screens, using a Supabase service layer and TanStack Query hooks.",
            "Designed the Supabase backend with each parish's data kept separate through row-level security, 16 ordered migrations plus a Node runner that applies them without Docker, and SECURITY DEFINER functions with an audit log for platform administration.",
            "Wrote a Deno Edge Function that passes questions to Magisterium AI while keeping the API key on the server, limits each member to 30 questions a day, and stores the cited answers.",
            "Wrote a second Edge Function that sends push notifications when a database trigger fires through pg_net, using a service-role key held in Vault.",
            "Built in-app account deletion, required by both app stores, which removes personal data but keeps the parish's financial and Mass-intention records with the member detached.",
            "Built the Vite and React marketing site with the privacy, terms, support, and Google Play account-deletion pages the stores require, deployed on Vercel at churchlife.live.",
            "Directed AI coding agents from the client's product requirements (PRD), specifying each change and checking it against the live API, tsc, lint, and an Android build before committing it through feature-branch pull requests.",
            "Owned the architecture, security, and product decisions, including reverting an agent-built view switcher in favor of a simpler design."
        ],
        challenges: [
            {
                title: "Platform admin without rewriting 55 policies",
                problem: "No one could create a parish or give a new parish its first admin from the app, and around 55 row-level security policies across 11 tables check for role = 'parish_admin', so adding a new role value would have quietly removed abilities from whoever held it.",
                approach: "Made super admin a separate is_super_admin flag whose powers come only through a fixed set of SECURITY DEFINER functions that write to an admin_audit_log, so the existing policies stay as they were and the new powers form a small surface that is easy to review."
            },
            {
                title: "A private AI assistant that cannot be spoofed or overspent",
                problem: "Members ask about confession, marriage, and moral questions, so their history had to stay private even from parish admins, and the Magisterium API key and budget also needed protecting.",
                approach: "Built an Edge Function that identifies the caller from their own session token, checks that the conversation belongs to them, counts their questions over a rolling 24 hours (limit 30), and saves trimmed citations. Row-level security lets members only read and delete their own conversations, and with no insert policy no app can fake an answer that looks like it came from Church documents."
            },
            {
                title: "Locking down database-triggered push",
                problem: "Adding a notification row calls the send-push function, and the public anon key passes the platform's sign-in token (JWT) check, so anyone could have sent a push to any member.",
                approach: "Made the trigger send the service-role key from Vault through pg_net, and made the function accept only a token whose role claim is service_role, or one that matches the key in a constant-time comparison, before it looks up the member's Expo push token."
            },
            {
                title: "Deleting accounts without corrupting parish books",
                problem: "The app stores require in-app deletion, but cascading deletes would have changed parish donation totals and could have lost booked Mass intentions.",
                approach: "Wrote a migration that finds the existing foreign keys and rebuilds them as ON DELETE SET NULL for donations, pledges, and Mass bookings, so those records outlive the account, while notifications, chat, requests, and activity are deleted with it, and the privacy policy discloses this retention."
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
        subtitle: "An AI personal-finance app that links a user's bank through Plaid, shows their transactions live, and explains their spending in plain English. Built it end to end on contract, covering the Expo and React Native app and the Supabase backend, with Plaid webhooks and an AI router that moves from Claude to Gemini when needed.",
        description: "Zedbe is a pre-launch money app for US consumers. After linking a bank, users see their balance and transactions update live, open AI insights by day, week, month, or year, review subscriptions the app detects with keep, review, or cancel suggestions, and ask questions in a chat that answers from their own accounts. It only reads data and never moves money. I handed it over in September 2026 with a full technical handover, and it is not in the app stores yet, with bank linking still on Plaid's test environment (sandbox).",
        myRole: [
            "Built the Expo (SDK 57) and React Native app in TypeScript with 17 Expo Router screens, a token-based light and dark design system with code-drawn SVG illustrations, and React Context state behind a services layer, so no screen calls Supabase or the network directly.",
            "Upgraded the app from Expo SDK 54 to 57.",
            "Designed the Supabase backend with 9 SQL migrations, row-level security on every user table, a Plaid access-token column users can never read, real-time publishing of accounts and transactions, and pg_cron jobs that call functions through pg_net with the URL and secret held in Vault.",
            "Wrote 11 Deno Edge Functions for Plaid (link token, sandbox token, token exchange, a signature-verified webhook, throttled refresh, a reconcile sweep every 6 hours, institution search, OAuth redirect) and for AI (insights, subscriptions, chat).",
            "Built an AI provider router that tries Claude first and switches to Gemini on a missing key, rate limit, timeout, bad JSON, or refusal, so insights keep working if one provider fails.",
            "Computed every money figure in TypeScript and let the model write only the explanation, cached by a fingerprint of the data, so the app never shows made-up numbers.",
            "Grounded chat answers in a financial snapshot built on the server, with support for photo, PDF, and voice input.",
            "Wrote the technical handover, covering the status of each feature, architecture and data-flow diagrams, the security model, and a prioritized P0 to P2 list of what blocks a store release.",
            "Directed AI coding agents (Claude Code), including a project-specific agent skill written to draw on-brand react-native-svg illustrations from the design tokens.",
            "Owned the architecture, security, and product decisions."
        ],
        challenges: [
            {
                title: "Live transactions without polling the bank",
                problem: "Users expect new card charges to appear right away, but asking Plaid for updates from every device would hit rate limits and put Plaid credentials on the phone.",
                approach: "Had Plaid call a webhook function that checks Plaid's ES256 verification token (JWT) and the request-body hash, replies quickly, and runs a cursor-based /transactions/sync in the background. Rows go into Postgres and reach the app through Supabase Realtime, merged by transaction ID because Realtime can deliver a row twice, while a pg_cron sweep re-syncs quiet bank connections (Items), pull-to-refresh is throttled per Item on the server, and the app re-reads data when it comes back to the foreground."
            },
            {
                title: "Never skipping a transaction on a partial sync",
                problem: "Plaid's sync comes in pages, and the data can change partway through, so saving a cursor after a failed page would silently drop transactions forever.",
                approach: "Made the sync loop write every page first and save the cursor only after the whole loop finishes. If Plaid reports that the data changed mid-sync, it restarts from the original cursor with a capped number of retries, and every run is logged to an audit table (trigger, rows added, changed, or removed, duration, error)."
            },
            {
                title: "AI that can't invent numbers or go dark",
                problem: "A finance app can't show amounts a model made up, and an outage or quota limit at one AI provider shouldn't break the insights screen.",
                approach: "Calculated every figure in one shared module that always gives the same result for the same data, and asked the model only for text that fits a fixed JSON schema. Responses are cached in Postgres by a fingerprint of the underlying data, so unchanged data costs no AI call, and the router tries Claude, then Gemini, returning the real figures marked as degraded if every provider fails."
            },
            {
                title: "Keeping secrets off the device",
                problem: "Anything prefixed EXPO_PUBLIC_ is compiled into the app, and an earlier build had shipped privileged keys that way.",
                approach: "Moved every privileged call into Edge Functions that take the user ID only from the verified sign-in token (JWT), so an account ID in the request can narrow a query but never widen it. The Plaid access token is stored at exchange and never returned to the app, which now holds only the Supabase URL and public anon key, and rotating the keys was documented as step one of the handover."
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
        subtitle: "A multi-tenant web platform that helps home-care and foster-care agencies run their daily operations, from staff schedules to compliance documents. Led the engineering team and was the top contributor on both the frontend and the backend.",
        description: "Home Grid is an installable web app (Progressive Web App) that runs the daily operations of home-care and foster-care agencies, with each agency's data kept separate. It combines a document vault built to HIPAA requirements with e-signatures, AI-assisted staff scheduling with location-checked (geofenced) clock-in, a client and referral CRM, secure email and SMS, an AI knowledge base for SOPs and policies, and workforce and training-compliance reports. Organizations, managers, employees, client-portal contacts, and time-limited outside auditors each get their own view of the same platform.",
        myRole: [
            "Led a team of 3 full-stack engineers as Engineering Lead, reviewing and merging most of the team's pull requests across both repositories to keep code quality and delivery consistent.",
            "Made the most individual contributions on both the React frontend (263 commits) and the NestJS backend (154 commits).",
            "Architected and built the document vault to HIPAA requirements, with templates, PDF e-signatures, approvals, an audit trail, and access grants for outside auditors, so agencies can share records without giving out accounts.",
            "Built AI scheduling end to end, from readiness checks and Gemini-powered schedule drafts to manager review, geofenced clock-in, and the live attendance feed.",
            "Built the subscription and plan-entitlement system and the web push and email notification pipeline.",
            "Set up the GitHub Actions CI/CD pipelines that ship Dockerized staging and production builds to AWS EC2, so releases run without manual steps."
        ],
        challenges: [
            {
                title: "Tenant isolation and fine-grained access",
                problem: "Care agencies handle protected health information (PHI) covered by HIPAA, so one organization's data could never reach another, and each employee's access had to follow 40+ view, create, update, and delete permissions across directories, scheduling, the vault, CRM, billing, and the knowledge base, on top of four subscription tiers.",
                approach: "Verified Supabase Auth sign-in tokens (JWTs) with a custom guard, then used a role guard to work out whether the caller is an owner, manager, or employee and attach their organization's profile. Every service query is limited to that organization by its organization ID and checked against the permission flags, while PostgreSQL row-level security (RLS) enforces the same boundary inside the database. Plan entitlements use one shared mapping enforced on both the API and the frontend."
            },
            {
                title: "Sharing sensitive documents with outside auditors",
                problem: "Auditors needed to review specific documents without being given accounts, and access could never be left open by accident.",
                approach: "Gave auditors time-limited grants instead of accounts, where each grant covers selected documents, can require a multi-factor (MFA) code, and sets view-only, watermark, and screenshot rules. A nightly scheduled job revokes expired grants, and every vault action is written to an audit trail for each document and client."
            },
            {
                title: "AI schedules that can't be trusted blindly",
                problem: "Schedules had to respect working-hour rules, minimum rest periods, locations, and job roles, while generating them with an AI model can take minutes and the output isn't guaranteed to be well-formed.",
                approach: "Ran a readiness checklist first (staff, working-hour rules, geofences, job positions), then sent a detailed prompt to Gemini 2.5 Flash as a background job with a timeout. The JSON result is parsed and saved as a draft, and a manager review task is created before anything is published."
            },
            {
                title: "Keeping PHI away from AI",
                problem: "AI summaries of client records could not expose protected health information to the model or to the people reading them.",
                approach: "Limited the client AI assistant to redacted totals, removed PHI from both user input and model output, required numbered citations to records the server allows, and added rate limits."
            },
            {
                title: "Live operations in an installable PWA",
                problem: "Managers needed live attendance, staff needed reminders and alerts, and expiring certifications, training, and subscriptions had to be caught without anyone checking by hand.",
                approach: "Geofenced clock-in with a Haversine distance check and streamed live attendance to managers through a server-sent events feed. About a dozen scheduled jobs and an internal event bus handle expiries, daily Stripe billing, reminders, and Google Calendar sync, and notifications go out through SendGrid email, Twilio SMS, and web push (VAPID) via a custom Workbox service worker."
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
            "Row Level Security",
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
        subtitle: "A hiring marketplace that connects licensed Texas child-welfare facilities with pre-verified care professionals. Led the build by setting up both codebases and the CI/CD, reviewing and merging every pull request, and building the payments and the Home Grid single sign-on (SSO) integration.",
        description: "CareMatch is a hiring marketplace for the Texas child-welfare sector. Facilities such as residential treatment centers (RTCs), general residential operations (GROs), and child placing agencies (CPAs) post jobs, and credentialed professionals apply, interview over in-app video, and log their hours. The platform covers the whole path from match to hire to timesheet to earnings, and internal admin and super-admin consoles handle compliance, payroll, and reporting. CareMatch is also sold as a yearly add-on to Home Grid organizations, which sign in through Home Grid.",
        myRole: [
            "Set up the NestJS backend and Next.js frontend and later restructured both codebases.",
            "Wrote the Dockerfile and the GitHub Actions workflows that deploy staging and production to AWS EC2.",
            "Reviewed and merged all 112 pull requests across the two repositories for a team of three engineers.",
            "Designed and built Stripe Checkout fees for each job posting, with webhooks verified against the raw request body that publish jobs exactly once, refunds that take the posting down, a nightly job that closes expired postings, and PDF receipts for employers.",
            "Replaced an earlier subscription model, also built in-house, with this pay-per-posting model.",
            "Built the SSO handoff and entitlement sync between Home Grid and CareMatch on both sides, including the add-on billing module in the Home Grid backend and the integration module in CareMatch, so Home Grid customers switch products without signing in again.",
            "Built the first rules-based engine that matches candidates to jobs by scoring role, location, engagement type, pay, and skills, flagging compliance issues without excluding anyone, and running as a nightly batch job.",
            "Built frontend flows for talent applications, the job-posting checkout and receipts, a rich-text job description editor, file upload size limits, and sessions that persist through cookies."
        ],
        challenges: [
            {
                title: "Secure SSO between two separate products",
                problem: "Home Grid organizations that buy the add-on had to land in CareMatch already signed in, while the two products have separate user databases and a leaked or reused sign-in link must not grant access.",
                approach: "Had Home Grid's server create a 60-second HS256 token for the organization with a fixed audience and issuer, available only to org admins or managers with an active add-on. CareMatch pins the algorithm and records each token's ID (jti) before signing anyone in, so a reused link is rejected, and a scheduled job deletes spent IDs. CareMatch accepts both the current and the previous secret, so rotating the secret doesn't break sign-ins already in progress, and the first sign-in creates the employer account automatically."
            },
            {
                title: "Keeping access in sync after cancellation",
                problem: "If CareMatch only checked the add-on at sign-in, a canceled subscription would keep working until the user next came through Home Grid.",
                approach: "Made Home Grid send an HMAC-SHA256 signed entitlement webhook whenever the subscription changes, retrying 5xx failures and giving up on 4xx. CareMatch keeps the exact raw bytes of the request to check the signature with a timing-safe comparison before updating the employer's entitlement, and webhooks that arrive before the organization has a CareMatch account are handled explicitly."
            },
            {
                title: "One Stripe webhook, two billing systems",
                problem: "Stripe sends subscription events to every endpoint set up on Home Grid, so a second endpoint for CareMatch would see the core platform's events, and the shared subscriptions table couldn't tell whether an organization held a yearly add-on.",
                approach: "Built a separate carematch_subscriptions table with one row per organization, so entitlement comes from stored fields. Home Grid's existing webhook handler first asks the CareMatch handler whether an event belongs to it, using checkout metadata or the subscription ID, and passes it on if so, with yearly billing where renewals, failed payments, and cancellations each update the entitlement."
            },
            {
                title: "Pay-to-publish without double charges or ghost postings",
                problem: "Stripe can deliver a webhook more than once, checkouts can be abandoned, and refunds can arrive later, and any of these could leave a job live without payment or charge an employer twice.",
                approach: "Tied each publish attempt to a payment record whose ID travels in the Stripe metadata and made publishing run only once per record. Pending checkouts are reused or checked against Stripe, expired or failed sessions are closed out, and a refund takes the posting down and notifies the employer. Employers with the Home Grid add-on have the fee waived but still see the standard price."
            },
            {
                title: "Matching that explains itself and degrades gracefully",
                problem: "Facilities needed ranked candidates with reasons they could trust, including missing credentials, and matching couldn't stop working when the AI service was slow or down.",
                approach: "Built a rules engine that scores each candidate from 0 to 100, explains each factor, flags expired or missing credentials (BLS, CPR, RN, and similar) without excluding the candidate, and runs as a nightly batch. A teammate added a second layer that re-ranks results with Gemini embeddings and cosine similarity and writes explanations with a chat model, with a timeout and a fallback to the rules-based scores if Gemini fails."
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
        subtitle: "The shared core behind the SpurtX product suite (Sync, Score, Spot, Spur, and Spark), which runs single sign-on for every product plus billing, wallets, notifications, admin, and analytics, with an AI service alongside it. Was its top contributor and owned its deployment and monitoring.",
        description: "SpurtX Core is a NestJS and Prisma API that acts as the OAuth 2.0 sign-in server for every SpurtX product. It also owns users, companies, memberships, Stripe subscriptions, Fincra wallets, messaging, calendars, notifications, and the internal admin dashboard, with 27 modules, about 257 REST endpoints, and 46 PostgreSQL models across 51 migrations, plus a MongoDB event store for analytics. A companion Flask service (SpurtX AI) writes project summaries, prioritizes tasks, and screens applicants for the products, and checks the same sign-in tokens (JWTs) the core issues.",
        myRole: [
            "Built the core OAuth 2.0 authorize, code, and token endpoints, along with Google and Microsoft sign-in, email verification, and password reset and change flows, so Sync, Score, Toolkit, and the SpurtX hub all sign users in through one place.",
            "Wrote the service that copies core users into the legacy SSO database, so older products keep working during the move.",
            "Ran the move of identity data from the legacy SSO database into core.",
            "Built the Fincra wallet module with deposits, cross-currency deposits, payouts, bank accounts, transfer codes, and webhook signature checks.",
            "Built the analytics warehouse, where products send events into a MongoDB store (a second Prisma schema) and scheduled jobs roll them up into active users, churn and churn triggers, cohort retention, time to first value, feature adoption and crossover, NPS, and Spark adoption.",
            "Made the analytics rollups re-run automatically whenever a metric definition changes, so reports always match the latest definitions.",
            "Secured the admin dashboard with role permissions, module management, and audit logging across four services.",
            "Added admin password reset flows and an emailed one-time sign-in code that is stored hashed in Redis and protected by attempt caps, resend cooldowns, and a limit on how many codes can be requested.",
            "Owned deployment and monitoring, writing the Dockerfiles, the first GitHub Actions pipeline that deploys to EC2, and the ECR and ECS staging pipelines on Fargate with image tags that never change.",
            "Moved secrets out of image layers so they load at runtime, added Grafana Loki logging (batched and queued, with sensitive fields masked), and wrote the company's logging and log management policy.",
            "Built the shared plumbing in the SpurtX AI service, including checks on core-issued sign-in tokens (JWTs), a CORS allowlist, structured logging with S3 upload, warehouse events, Swagger docs, and CI/CD.",
            "Built a PostgreSQL response cache that calls the AI model again only when the data a feature reads has actually changed, so unchanged data costs no AI call."
        ],
        challenges: [
            {
                title: "One identity across five products",
                problem: "Sync and Toolkit each kept their own users, and the legacy SSO database still had foreign keys to its own users table, so moving sign-in into core could not break existing accounts or the companies linked to them.",
                approach: "Turned core into an OAuth 2.0 sign-in server with a list of allowed redirect URLs for each product, and wrote migration scripts that moved users, companies, and memberships into core. Every path that creates a user now goes through one sync service that copies the user into the SSO database, skips users already there, and safely handles duplicate-key errors, and a teammate later added PKCE and single-use authorization codes stored in Redis."
            },
            {
                title: "Caching AI output when nothing reports changes",
                problem: "The AI service reads databases owned by other teams, and nothing tells it when that data changes, while in the Sync schema task.updatedAt is set once when a row is created and never updated, so a cache keyed on updatedAt would keep serving outdated summaries.",
                approach: "Had each feature compute a cheap fingerprint (content hash) of the exact fields it reads and reuse a cached response until that fingerprint changes, with date-dependent inputs included in it. Degraded or fallback results are never cached, and the whole layer switches off when its database URL is not set."
            },
            {
                title: "Admin 2FA that can't be brute-forced or used to flood inboxes",
                problem: "An emailed admin sign-in code is only as strong as the limits around it, and even someone who only knows an admin's password could flood that admin's inbox by requesting codes.",
                approach: "Hashed the codes, compared them in constant time, and expired them after 10 minutes. Each challenge allows 5 wrong attempts and 3 resends with a 60-second cooldown, and each admin can start at most 5 challenges every 15 minutes, all tracked in Redis, while a production guard ignores the debug flag that returns the code in the response."
            },
            {
                title: "Deploying on a small shared EC2 host",
                problem: "Production builds ran on the same server as the live container and another service, so builds were killed for running out of memory, the disk filled up partway through a build, and secrets were built into an image layer.",
                approach: "Moved runtime config into a .env file passed to each container with --env-file, so it stays out of the image. Working with teammates, the pipeline now runs one deploy at a time, checks free disk space before stopping the old container, cleans up only this app's images, applies migrations, waits for a health check, and rebuilds the previous commit if anything fails."
            },
            {
                title: "Central logging without loops or leaks",
                problem: "Sending application logs to Loki from inside the app's own logger can loop forever when a send fails, and request bodies can contain credentials.",
                approach: "Wrote a batching Loki client that never logs through Nest's Logger, put log entries on a Bull queue so requests aren't slowed down, and masked sensitive fields in the request interceptor before anything is logged."
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
        subtitle: "The project-management tool in the SpurtX suite, covering projects, milestones, tasks, team messaging, wallets, and subscriptions. Took over as the main backend owner and rebuilt its monitoring, admin permissions, notification delivery, and container deployment pipeline.",
        description: "Sync is a NestJS and PostgreSQL backend in one codebase (a monolith) with 427 REST routes across 37 controllers, 60 TypeORM entities, and six Socket.IO gateways for real-time messaging. It runs alongside spurtx-core through a second database connection and service-to-service APIs, so users, companies, notifications, calendar events, and analytics events are shared across the SpurtX tools. From late 2024 I wrote about 88% of its commits, covering product features, security fixes, logging, and CI/CD.",
        myRole: [
            "Built the logging pipeline with a request interceptor that tags each request with an ID, masking of sensitive fields, a Bull queue that writes log files by category that rotate at 1 MB and are archived to S3, and a batching Grafana Loki client.",
            "Wrote the company's logging and log-management policy document.",
            "Replaced SSH git-pull deploys with a GitHub Actions pipeline that signs in to AWS through OIDC or keys, builds with Docker Buildx and the GitHub Actions layer cache, pushes to ECR with both :latest and a permanent commit-SHA tag, and forces an ECS rollout on Fargate.",
            "Added a /health endpoint so container health checks have a stable target.",
            "Fixed the issues from Sync's penetration test by putting guards back on the project detail, member, milestone, and proposal routes, adding per-project permission checks to bulk milestone creation, and limiting user search to the caller's project network instead of fuzzy-matching the whole user table on email and phone.",
            "Connected Sync's admin routes to the permission matrix owned by spurtx-core, with one decorator that maps HTTP verbs to permission actions, a global guard that refuses any admin route missing the permission check, and an interceptor that writes an audit entry for every successful change.",
            "Integrated Sync with spurtx-core through a second TypeORM connection, mirrored users, companies, notifications, calendar events, and cross-app prompts, analytics events for the data warehouse, and internal endpoints protected by a shared service token compared in constant time.",
            "Shipped core product features, including Gemini 2.5 Flash task generation and project descriptions, Google and Outlook Calendar sync, Stripe subscriptions with free trials and signed webhooks, Fincra wallet deposits and payouts across currencies, the move from Nodemailer to SES, and 23 scheduled jobs for due-date and re-engagement emails."
        ],
        challenges: [
            {
                title: "Observability that can't take down the API",
                problem: "Logs had to reach Grafana Cloud Loki while a local file and S3 archive stayed the main record, and a Loki outage or slowdown must never block a request or run the memory-limited server out of memory.",
                approach: "Wrote a Loki client that never throws and never waits on the network, which batches entries (100 per send or every 5 seconds), caps its buffer at 10,000 by dropping the oldest entries, retries only on 5xx or 429, and stops sending for 60 seconds after 5 failures in a row. It flushes on shutdown (SIGTERM) and is shared by the Nest logger and the Bull log worker, with Loki sending wrapped in its own try/catch so the file and S3 path keeps working."
            },
            {
                title: "Admin permissions owned by another service",
                problem: "Sync's admin APIs had to follow a permission matrix kept in spurtx-core without copying it, and a route that checked identity but forgot to check permissions would go unnoticed until someone abused it.",
                approach: "Added an @AdminAccess(module) decorator that applies the admin sign-in guard and the permission guard and maps GET, POST, PUT, and DELETE to view, create, update, and delete. A global AdminRouteIntegrityGuard reads each route's guard metadata and returns 500 for any route missing the permission check, and an audit interceptor logs every successful change under the same module."
            },
            {
                title: "Closing access-control holes from a pentest",
                problem: "Several project endpoints had their guards commented out, bulk milestone creation accepted any project IDs, and user search loaded every user and fuzzy-matched on email and phone number.",
                approach: "Put back GetProjectDetailsGuard and ProjectOwnerGuard where needed, made bulk creation reject any project where the caller isn't the owner or a PROJECT_ADMIN_MEMBER, and limited search to users who share a project with the caller, returning a smaller response with no contact fields."
            },
            {
                title: "Replacing ad-hoc notifications with a catalog",
                problem: "Notification code was scattered across services, each sending its own email, push, or WhatsApp message with no shared idea of user preferences, deep links, or duplicate prevention.",
                approach: "Defined a catalog of 39 events in 8 categories that sets each event's channels (in-app, email, OneSignal push, WhatsApp through spurtx-core) and checks user preferences before sending, with a missing settings label failing at startup. Events the system infers keep their old delivery until their hand-written emails are removed, so nobody gets mailed twice."
            },
            {
                title: "Living alongside the platform's core database",
                problem: "Sync had its own Postgres schema (kept in sync by TypeORM), but users, companies, notifications, calendar events, and prompts also had to appear in spurtx-core's database, whose structure Sync must not change.",
                approach: "Ran a second named TypeORM connection to the core database with schema sync turned off, and added services that write invited members, password changes, notifications, calendar events, and data-warehouse events through it, while internal reads, such as spurtx-core's subscription lookup, go through a service-token guard."
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
        subtitle: "Version 2 of Spurt's PHP product Core, rebuilt as a NestJS and TypeScript backend that helps businesses send invoices, take bookings, and run events and newsletters. Started the codebase and was its only engineer for its first six months.",
        description: "Score gives consultants, business owners, and agencies in the SpurtX suite one backend for invoices, clients, bookings with Google Calendar and Meet, events, and newsletters. It shares users, companies, and admins with the rest of SpurtX through the central single sign-on. The team grew it into a 30-controller NestJS API with about 260 routes on top of the foundation I laid, and I later came back to add the admin permission and audit layer and an AWS deployment pipeline.",
        myRole: [
            "Started the NestJS codebase with two TypeORM connections (the Score database and the shared SpurtX SSO database), global input validation, an exception filter, and Passport sign-in guards (JWT and local).",
            "Built invoicing end to end, including the invoice entity and DTOs, client management, invoice emails with HTML templates, public invoice preview links protected by client one-time codes (OTP) and client codes, tax and discount fields, and revenue analytics endpoints.",
            "Built the first bookings and consultants modules, a Google Calendar OAuth flow that stores refresh tokens and creates events with Google Meet links, and public booking endpoints, so clients can book a consultant and get a meeting link straight away.",
            "Added scheduled jobs for invoice reminders and daily, weekly, and monthly recurring invoices, plus a Stripe Checkout and webhook subscription module that was later retired when billing moved to the SSO layer.",
            "Set up the original Dockerfile, docker-compose, and Cloud Build pipeline to deploy staging on Google Cloud Run.",
            "Wrote the production compose file, a /health endpoint, and a GitHub Actions workflow that pushes SHA-tagged images to Amazon ECR and rolls out the ECS service on Fargate.",
            "Moved admin identity to the shared SSO admin table behind an environment-variable switch, and enforced the spurtx-core permission matrix with a global guard and an audit interceptor that hides credentials, both covered by Jest tests."
        ],
        challenges: [
            {
                title: "One identity across a multi-product ecosystem",
                problem: "Score had to recognize the same users, companies, and admins as spurtx-core, Sync, and Toolkit, while also keeping its own data for invoices, bookings, and events.",
                approach: "Ran two named TypeORM connections from the first commit, one to a Score Postgres database and one to the shared SSO database, checked SSO-issued sign-in tokens (JWTs) with a Passport strategy, and read company details from the SSO records instead of copying them into Score."
            },
            {
                title: "Admin permissions without a silent bypass",
                problem: "spurtx-core's admin permission matrix is keyed by SSO admin ID, but Score identified admins by SSO user ID in its own table, so permissions couldn't be enforced at all.",
                approach: "Switched admin lookup to the shared SSO admin table, chosen by ADMIN_IDENTITY_SOURCE so going back is a config change rather than a rollback. A global guard works out the required action from the HTTP verb and returns a 500 for any admin route with no permission declaration, so an unprotected admin route can't ship, and an interceptor audits only successful changes and exports and hides passwords and tokens."
            },
            {
                title: "Recurring billing and reminders",
                problem: "Invoices needed automatic reminders and regeneration on daily, weekly, and monthly schedules without anyone starting them by hand.",
                approach: "Wrote scheduled jobs that scan for invoices that are due or recurring and send reminders or issue the next invoice, which the team later moved onto Redis-backed BullMQ queues and workers for retries and isolation."
            },
            {
                title: "Changing deployment targets",
                problem: "The service first shipped to Google Cloud Run through Cloud Build, then had to move to AWS without building secrets into images and with a way to tell which commit was running in staging.",
                approach: "Wrote a GitHub Actions workflow that signs in with OIDC (falling back to static keys), builds with a Buildx layer cache, pushes both :latest and a permanent commit-SHA tag to ECR, then forces a new ECS deployment and fails loudly if the cluster or service isn't set up. A /health route registered before the global /api prefix gives container health checks a stable target."
            },
            {
                title: "Calendar-native bookings",
                problem: "Bookings had to land on the consultant's own calendar with a meeting link, which meant keeping long-lived Google access on the server.",
                approach: "Built a Google OAuth consent flow that requests offline access and stores refresh tokens per user, and created calendar events with conferenceData so Google attaches a Meet link, which the team later extended into a shared calendar-sync service."
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
            "AWS ECR/ECS (Fargate)",
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
        subtitle: "A career platform that helps job seekers with expert guidance, AI tools, and automated job applications. As Engineering Lead, split the single (monolithic) web app into separate client and admin codebases so each could ship on its own.",
        description: "CvtoCareer helps job seekers in a competitive market with expert guidance, AI-assisted CV rewrites and role suggestions, coach bookings, and automated applications. I first shipped features on the existing platform, then, after my promotion to Engineering Lead, led its split from one codebase into separate client and admin apps on Next.js and Material UI, deployed on Vercel, with Redis caching and MongoDB storage.",
        myRole: [
            "Shipped and deployed features on the existing CvtoCareer web platform before being promoted to Engineering Lead.",
            "Led the split of the monolithic app into separate client and admin codebases (Next.js, Material UI, Vercel), so each side can be developed, deployed, and scaled on its own.",
            "Guided the team through the migration and integrated AI features (Gemini and OpenAI) for CV rewrites and job-role suggestions, so each job seeker gets a stronger CV and a clear list of roles to target."
        ],
        challenges: [
            {
                title: "One codebase serving two very different users",
                problem: "Job-seeker features and admin tools lived in one codebase, so every release touched both, deployments were risky, and teams couldn't work independently.",
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
        status: "Live",
        companyId: "personal",
        role: "Co-founder & CTO",
        title: "HandLancer",
        team: "Solo engineer",
        subtitle: "A marketplace that helps people in Nigeria hire vetted artisans, with escrow protecting every payment, live in Uyo as an installable web app with an Expo mobile app and an admin console on the same Supabase backend. Co-founder, CTO, and only engineer, who designed and built every part of it.",
        description: "HandLancer connects people who need home services (plumbers, electricians, carpenters, cleaners, and more) with vetted local artisans, starting in Uyo, Nigeria. Customers post a job, compare itemized quotes, and fund an escrow from an in-app wallet, and the money is released in two stages, once for materials and once for workmanship, only after the customer approves. A person reviews every artisan before they can quote. The marketplace is live as an installable web app (PWA) at handlancer.com/app with the full feature set, including jobs, quotes, escrow, wallet top-ups and withdrawals, chat, disputes, and reviews. The Expo mobile app runs on the same backend, and its store listings are pending.",
        myRole: [
            "Built the installable web app (PWA) at handlancer.com/app as a full copy of the mobile app, with 35 screens across the customer and artisan flows, TanStack Query and one Supabase Realtime channel that keep every screen current, a service worker with an offline fallback, and an install prompt for Android and iOS.",
            "Built the iOS and Android app in Expo (React Native, Expo Router, TypeScript, TanStack Query), with separate customer and artisan flows covering jobs, quotes, chat, wallet, escrow, disputes, reviews, and push notifications.",
            "Designed the Supabase backend across 25 versioned SQL migrations, with row-level security on every table and SECURITY DEFINER functions as the only way to move wallet balances, fund escrow, release milestones, resolve disputes, and pay out, so no one can change money from the app.",
            "Integrated Flutterwave through Supabase Edge Functions for wallet top-ups, bank-account lookup, and automatic withdrawals.",
            "Connected each PIN-checked withdrawal to a payout function through a Postgres trigger, showed fees before anyone pays, and let the admin console retry or settle a payout by hand.",
            "Built artisan vetting with a multi-step application that includes work photos, an admin review queue (approve, request changes, suspend), and up to three reminder emails for artisans who never finish applying.",
            "Gave approved artisans a public profile page with a generated share image, so they can promote their work.",
            "Built transactional email on Resend, with a Supabase Auth email hook and 30+ product emails sent from Postgres triggers through pg_net, plus per-user preferences, throttling, and a delivery log.",
            "Built the Next.js 16 website, including a search-friendly marketing site (a 125-service catalogue, city and guide pages, JSON-LD) and an admin console limited to approved accounts for users, artisan applications, jobs, disputes, transactions, withdrawals, waitlist invitations, and analytics.",
            "Directed AI coding agents (Claude Code, Google Antigravity) as the only developer, having the agent document the existing design system before feature work, then shipping work as small reviewed pull requests, such as a phased SEO rollout, with Claude co-authorship recorded on 20 commits."
        ],
        challenges: [
            {
                title: "Money that clients can't touch",
                problem: "A wallet-and-escrow marketplace can't let the app write balances, and payouts need to be split between materials and labor.",
                approach: "Gave wallets and transactions no app write policies at all, so every balance change goes through SECURITY DEFINER Postgres functions that lock rows (SELECT ... FOR UPDATE), check who the caller is and what state the job is in, and write a ledger entry. Escrow releases a materials portion and a workmanship portion as separate milestones, and a dispute freezes any release."
            },
            {
                title: "Paying out without losing money",
                problem: "Withdrawals had been settled by hand, and automating them meant deciding what to do when Flutterwave refuses a transfer or doesn't answer at all.",
                approach: "Debited the wallet when the withdrawal is requested and had a trigger send it to a payout Edge Function after the database commit, so already-installed mobile apps got payouts without an update. The function claims the row, asks Flutterwave for the fee, and records sending, submitted, not sent, or unknown, returning money to the wallet only when Flutterwave confirms the transfer never left, while a timeout is marked unknown and goes to a person because it proves nothing."
            },
            {
                title: "A PIN lockout that never locked",
                problem: "An audit of the transfer PIN found three holes: a wrong PIN raised an error that undid its own attempt counter so the lockout never triggered, an empty PIN passed the check, and the change-PIN screen allowed unlimited guesses.",
                approach: "Made a refused PIN return instead of raising an error, so the counter saves, while the response still sets HTTP 400 so app builds already installed behave the same. Empty PINs are rejected, PIN changes count as attempts, weak PINs like 1111 or 1234 are refused, and a forgotten PIN can be reset only with the session, a 15-minute code sent to the confirmed email, and the account password."
            },
            {
                title: "Top-ups that couldn't credit twice",
                problem: "Flutterwave sends three different webhook payload shapes, and matching only one of them silently dropped real top-ups, while the crediting function read the balance, added to it, and wrote it back, so two deliveries at once could both credit.",
                approach: "Made the Edge Function handle all three shapes, check the verif-hash, and re-confirm the charge with Flutterwave's API. The credit now inserts the ledger row first against a unique reference, and only the delivery that wins that insert updates the wallet."
            },
            {
                title: "A full app in the browser that stays honest about money",
                problem: "Customers and artisans on low-end phones needed the whole marketplace without installing from a store, but an offline cache must never show an old balance or let a payment be attempted offline.",
                approach: "Had the service worker cache only static files, photos, and page shells under /app and never touch Supabase, so balances, jobs, and payments are always live. Money actions switch off when offline behind a banner, and iPhone HEIC photos are detected from their bytes and converted in the browser, because Chrome can't display them."
            },
            {
                title: "Shareable profiles without opening the table",
                problem: "Artisans wanted a link they could share on WhatsApp, but profiles are readable only by signed-in users, and opening the table to anonymous visitors would expose every column of every row.",
                approach: "Wrote one SECURITY DEFINER function that returns a single approved artisan with named fields only, leaving out phone, email, exact location, and review text, so work is still arranged through escrow. The page builds a share image from the artisan's photo, fixing the JPEG orientation first."
            }
        ],
        impact: [
            "First job completed on the platform, worth over ₦40,000",
            "9 artisans vetted and approved, and 2 customers onboarded"
        ],
        tags: [
            "Next.js",
            "React",
            "PWA",
            "React Native",
            "Expo",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Row-Level Security",
            "Edge Functions",
            "Flutterwave",
            "Resend",
            "TanStack Query",
            "Tailwind CSS",
            "AI-assisted development"
        ],
        features: [
            "Installable web app (PWA) with an offline fallback and an install prompt",
            "Customer and artisan roles with separate flows",
            "Job posting, itemized quotes and hiring",
            "In-app wallet funded through Flutterwave, with fees shown before paying",
            "Two-stage escrow: materials, then workmanship",
            "Automatic Flutterwave withdrawals, with admin retry and manual settlement",
            "Transfer PIN with server-side lockout and an email-verified reset",
            "Disputes with admin refund or release",
            "Realtime chat (one thread per customer–artisan pair)",
            "Artisan applications reviewed by a person, with reminder emails",
            "Public artisan profiles with generated share images",
            "30+ transactional emails with per-user preferences",
            "Push notifications on mobile, fanned out from Postgres triggers",
            "Admin console with waitlist invitations and analytics export to PowerPoint, Excel and images"
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
        subtitle: "An AI agent that helps people in Nigeria with everyday life by checking power status, setting reminders and watches, and guiding them through local errands in English and Pidgin. Wrote the 3,000-line product spec and directed AI coding agents milestone by milestone, from the foundations to the agent pipeline.",
        description: "Oya is a chat-based agent for people whose days are shaped by power cuts, paperwork, and unreliable local information, launching first in Uyo, Akwa Ibom. Users chat with it in a web app, and it answers through typed server tools and cards built on the server rather than free-form AI text. It is in active development, with five build milestones done (foundations, identity, core data and task engine, conversation core, power and reminders), the landing page and app deployed, and AI-powered chat kept off in production until its test suites (evals) pass.",
        myRole: [
            "Wrote the product and technical spec (SPEC.md, about 3,000 lines), with hard rules for grounding, confirmations, row-level security, money, and safety, a task state machine, a 30-category roadmap, and a milestone build plan with acceptance criteria.",
            "Built Oya with AI help (Claude Code and Google Antigravity), with agents working from the spec one milestone at a time on separate branches, logging their choices in a decisions log (27 entries) and any changes from the spec in a questions file.",
            "Reviewed each milestone against its acceptance checklist, merged it by pull request, and kept CI and Dependabot as quality gates.",
            "Designed the agent pipeline with an emergency pre-filter in both the browser and the server, a structured-output router and safety gate, skills with approved tool lists, and a grounding check that releases AI text sentence by sentence only when every amount, time, and date appears in that turn's tool results.",
            "Made actions safe to run by having the server issue single-use confirmations claimed atomically in Postgres, so double taps, expired or tampered requests, and other users' IDs can't run an action, proven by a 22-case confirmation-integrity test suite.",
            "Built the AI model layer with routing by purpose across Groq, Gemini, and Anthropic, retries and fallback, a circuit breaker whose state is stored in Postgres, token and cost logging, per-user budgets, and a CI check that refuses to turn on a model without a recent passing eval report.",
            "Built the data and background layer on Supabase with 17 migrations, each with row-level security and explicit grants (enforced by a CI script), PostGIS areas, a durable job runner on a pg_cron tick using FOR UPDATE SKIP LOCKED and a reaper, plus web push and in-app notifications."
        ],
        challenges: [
            {
                title: "Keeping an LLM from inventing facts",
                problem: "Prices, times, and power status shown to users must be true, but AI models make up numbers and phone numbers.",
                approach: "Let the model write only short chat text while server code builds the cards from tool results. A grounding checker standardizes amounts (\"₦3,000\", \"3k\", \"3000 naira\"), times, and dates and blocks any sentence whose facts aren't in this turn's tool results, and phone numbers are never allowed in AI text."
            },
            {
                title: "Side effects that can't fire twice",
                problem: "Taps, retried requests, and \"yes\" replies sent at the same time could run a reminder, watch, or message more than once, or for the wrong user.",
                approach: "Made every tool that changes something create a stored confirmation that can only run through a single-use claim_confirmation function in Postgres. A message ID from the app makes retried turns safe to repeat, and integration tests cover double taps, expiry, replaced confirmations, and attempts to act on other users' data (IDOR)."
            },
            {
                title: "Crowdsourced power status that resists spoofing",
                problem: "Outage reports come from users, so a few new accounts could flip a neighborhood's status and set off alerts.",
                approach: "Ran a trust-weighted status algorithm in Postgres where trust moves +0.1 or −0.15 per report, the first report must come from a trusted reporter, disagreement shows as \"uncertain\", and old data as \"unknown\". Watches fire once per confirmed change, respect quiet hours, and are capped at 4 a day, with integration tests for each rule."
            },
            {
                title: "Shipping an agent on a free model tier",
                problem: "Groq's free tier allows about 200k tokens a day per model, which is too little for evals and real traffic, and there was no budget for a paid provider yet.",
                approach: "Gave each purpose its own routing settings with a Gemini fallback switched off, and treated rate limits as used-up quota rather than outages so they don't trip the circuit breaker. An eval runner paced to the free tier scores router accuracy and safety recall, and production falls back to button mode until the evals pass."
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
        subtitle: "A free web platform that helps forex traders go from zero to a statistically tested strategy through a step-by-step path: learn, write your own rules, keep a journal, then prove it. Specified, designed, and built it end to end, Django REST API and React PWA, by directing AI coding agents from a self-written product and technical spec.",
        description: "EdgeProof is built to replace hope with evidence for retail forex traders, most of whom lose money, and it offers no trade signals and no copy trading. Users move through gates that unlock only when their own data shows they're ready, starting with a seven-level interactive Academy with exams marked on the server, then a guided strategy rulebook builder with clarity checks enforced in code, an offline-first trade journal with honest statistics, and a Fundamental Bias Scanner that scores 28 currency pairs from public economic data. The Phase 1 MVP is nearly complete and deployed, with testing workflows, the edge verdict, and forward testing on the roadmap.",
        myRole: [
            "Wrote the 600-line product and technical spec (phases, gates, data model, API, AI guardrails, compliance) and the DESIGN.md brand and design system.",
            "Drove Claude Code and Google Antigravity from that spec in phased builds, reviewing their output against a tracked roadmap, design critiques, and automated tests.",
            "Built the Django 5 and Django REST Framework backend as separate domain apps (accounts, academy, gates, strategy, testing, analytics, scanner, AI, audit) behind a versioned /api/v1, with rotating sign-in tokens (JWT), Argon2 password hashing, field-level encryption, and an audit log.",
            "Built the React 19, TypeScript, and Tailwind CSS installable web app (PWA) with a lesson player of 17 interactive simulators, exams marked on the server, an offline-first journal that syncs later, and a multi-step rulebook builder that runs the same clarity checks in the browser and on the server.",
            "Built a numpy analytics engine (expectancy with block-bootstrap ranges, 10,000-path Monte Carlo drawdown, profit factor, rule-following) so traders see honest ranges instead of single flattering numbers.",
            "Built a Fundamental Bias Scanner that pulls CFTC, BIS, OECD, Eurostat, FRED, SNB, Twelve Data, and Myfxbook data into scored currency-pair rankings that explain themselves.",
            "Added an AI tutor with guardrails behind a swappable Gemini and Groq provider layer, with streaming, masking of personal details (PII), daily caps per user, answer caching, a monthly spending cutoff, and a server-side check that blocks trade-signal language.",
            "Shipped it on free hosting tiers, with a static Vercel build that forwards /api to a Dockerized Gunicorn service on Render, PostgreSQL, and GitHub Actions scheduled jobs that call HMAC-signed internal endpoints for the background sweep and scanner data jobs."
        ],
        challenges: [
            {
                title: "Background jobs with no worker",
                problem: "Free container hosts sleep when idle and allow only one web process, so there's nowhere to run a queue worker or scheduler for data imports, retries, and cleanup.",
                approach: "Had GitHub Actions scheduled jobs send HMAC-signed, timestamped requests to internal endpoints and retry while a sleeping host wakes up. The API runs each job in a background thread tracked by a Job row, and a sweep that is safe to repeat picks up anything unfinished."
            },
            {
                title: "Honest statistics, not flattering numbers",
                problem: "Small samples of trades make win rates and expectancy look far more certain than they are, which misleads beginners.",
                approach: "Wrote the metrics as numpy code that always gives the same result for the same data, with hand-checked tests. Expectancy comes with a weekly block-bootstrap range and drawdown with a 10,000-path Monte Carlo, and the screen shows every estimate on a range bar with its zero line and sample size."
            },
            {
                title: "AI that teaches but never tips",
                problem: "An AI tutor in a trading product could hand out buy or sell calls, invent figures, or run up provider bills.",
                approach: "Built one server-side tutor service that treats lesson content and user text as data, masks names and emails, and rejects signal-like language and any numbers not in the inputs. It allows one rewrite before a safe refusal and enforces daily caps per user, cached answers, a timeout, and a monthly cost cutoff across Gemini and Groq fallbacks."
            },
            {
                title: "Explainable macro scoring from messy public data",
                problem: "Free economic data sources update irregularly, several mirrors went out of date, and backtests easily leak future information.",
                approach: "Gave each currency and factor an ordered chain of sources where the freshest reading wins and out-of-date data is excluded and flagged. Factor scores are pure functions, and a 3-year weekly replay applies approximate release delays to avoid look-ahead and publishes hit rates by label with sample sizes."
            },
            {
                title: "Clarity checks that agree everywhere",
                problem: "Gate 3 depends on whether a strategy's rules are objective, and checking only in the browser could be bypassed while checking only on the server makes the builder feel slow.",
                approach: "Defined the rulebook as a versioned JSON Schema with a shared vocabulary of structured conditions and banned vague words, and wrote the same checks in TypeScript and Python, verified against 12 sample strategies, including deliberately flawed ones."
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
        subtitle: "An AI learning agent that helps Nigerian university students learn from their own courses and notes through interactive, verified lessons, practice, exam prep, and virtual labs, and pays them through PayPal when what they share or teach helps someone else. Built for the PayPal AI Hackathon by writing the spec, then designing and building it end to end with AI coding agents.",
        description: "Ifiok (\"the AI learning agent\") gives each student an agent built on their own course. Students add a course and its outline, topics link to shared concepts, and the AI writes lessons as data in a fixed block format that the app's own components display, grounded in the student's uploaded notes with page citations. Every number a student sees is calculated by an engine, not the AI model. Around the lessons are practice questions marked on the server that highlight weak areas, exam prep from past questions, and virtual labs. Students earn when their shared notes, explainers, or tutoring help others, through a monthly pool paid with PayPal Payouts and peer tutoring that PayPal holds until the session happens, and an AI tutoring agent drafts bookings within a spending limit the student sets. It is live on Next.js and Supabase, with all payments in the PayPal test environment (sandbox) in US dollars for the hackathon, and real payouts will move to a Nigerian provider in naira afterwards, because PayPal accounts in Nigeria can't receive money.",
        myRole: [
            "Wrote a 13-part product and engineering spec before any code (product, features, architecture, data model, AI, lesson and lab engine, economy, brand, security, cost, build plan, testing, review log), checking its schema and row-level security rules in PostgreSQL first, and kept 60+ numbered decisions in the review log as the build changed it.",
            "Drove Claude Code and Google Antigravity from that spec through a ticketed build plan, with a CLAUDE.md of hard guardrails, one ticket per session with tests and \"Done when\" checks, and `pnpm check` (types, lint, unit and database tests, formatting) as the quality gate.",
            "Designed an AI gateway that works with any provider, covering policy, a kill switch, caps, atomic quota reservation, routing with retry and fallback across Groq, Gemini, and Anthropic, JSON validation with one repair pass, cost logging, and refunds on failure, behind 13 typed AI skills, with model IDs kept in database settings rather than code.",
            "Built the lesson format, a zod-validated Lesson DSL with 14 block types and a verifier (maths equivalence, KaTeX, plots, source references), so every lesson is checked before a student sees it.",
            "Built uploads of notes, textbooks, and past questions (PDF and Word read on the phone, scans read by Gemini) that ground lessons with page citations.",
            "Built practice questions marked on the server that highlight weak areas, exam prep that turns past questions into a study plan, worked solutions, and a timed paper, and virtual labs on a seeded experiment engine.",
            "Integrated PayPal on the server only, using Orders v2 to authorise and then capture or void tutoring payments, Payouts for the monthly contributor pool and tutors' shares, and webhooks whose signature is checked on the raw body before the item is fetched again from PayPal.",
            "Made every change to money state a single SQL function that is safe to repeat, so no payment moves twice.",
            "Built the tutoring agent and the contributor side, with AI checks on shared notes for copyright signs, personal details, and duplicates, reviewed written, voice, and video explainers with Whisper captions, usage points, and a separate admin interface with AG Grid tables for payouts and tutoring disputes.",
            "Locked down the data layer with 44 migrations, row-level security on every table, and 17 pgTAP test suites (run in PGlite locally and Docker in CI), plus 13 Playwright end-to-end tests against the real AI and PayPal sandbox."
        ],
        challenges: [
            {
                title: "Keeping AI-written lessons safe and correct",
                problem: "AI model output can contain wrong maths, invented claims, or unsafe markup, and students would see it.",
                approach: "Had the model return Lesson DSL JSON only, checked by zod and a verifier (mathjs equivalence, KaTeX pre-render, plot evaluation, source checks). Failing or sensitive lessons go to review instead of being published, practice questions whose stated answer disagrees with the engine are dropped, and AI-generated HTML or JavaScript is never displayed."
            },
            {
                title: "An agent that can spend money, but only with permission",
                problem: "The tutoring agent picks a topic, a tutor, and a time and drafts a paid booking, and a model could invent a tutor, ignore the student's budget, or quote numbers that don't exist.",
                approach: "Filtered tutors on the server to the student's own spending limit and passed them to the model as reference codes (W1, T1), never names or IDs. The server then checks every reference, the time, and every number in the agent's reason, and falls back to plain rules if anything fails, while the draft is stored with a database check that keeps it within the limit and only the student's approval on PayPal creates the payment hold."
            },
            {
                title: "Money that never moves twice",
                problem: "PayPal webhooks can be replayed or arrive out of order, and a request retried after a network failure could capture a payment or send a payout twice.",
                approach: "Ran each booking as one state machine in a single SQL function that is safe to repeat, stored the IDs of handled webhooks, and sent a PayPal-Request-Id with every money-moving request so the app can safely retry after network failures, with tests that replay webhooks three times. The monthly pool split runs in SQL with database checks that payouts never exceed the pool and no one gets more than 20%."
            },
            {
                title: "PayPal that can't pay Nigeria",
                problem: "Testing showed that PayPal accounts in Nigeria can send money but not receive it, and the sandbox doesn't hold naira, while the product's real prices are in naira.",
                approach: "Kept sandbox money in US dollars as whole cents in its own sandbox tables, never converted or mixed with naira, and put payments behind one provider interface (pay out, hold, capture, void), so after the hackathon a Nigerian provider can replace PayPal in kobo while the pool split, booking state machine, and screens stay the same."
            },
            {
                title: "Long AI jobs without extra infrastructure",
                problem: "Lesson generation takes too long for a single request, and the cost plan ruled out a separate queue service.",
                approach: "Used pgmq queues inside Supabase, a worker Edge Function started by pg_net and a one-minute pg_cron sweep, an enqueue_job_once function that is safe to repeat, and limits on attempts and visibility. The app follows progress in real time, and the same worker releases unconfirmed tutoring holds 24 hours after a session."
            },
            {
                title: "Running on free-tier model limits",
                problem: "Groq's free models allow about 1,000 requests a day and 8,000 tokens a minute, and long generations often hit rate limits (429s) or got cut off.",
                approach: "Set up routing in config (the large gpt-oss model for lessons and the tutoring agent, the small one for frequent calls, Gemini for images), switched straight to the fallback provider on a 429, and reserved quota before each call and refunded it on failure."
            }
        ],
        tags: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "pgvector",
            "pgmq",
            "PayPal API",
            "Groq",
            "Gemini",
            "Anthropic Claude",
            "Zod",
            "TanStack Query",
            "AG Grid",
            "Playwright",
            "mathjs",
            "AI-assisted development"
        ],
        features: [
            "Student-created courses, with outlines drafted by AI or extracted from a photo or PDF",
            "Interactive lessons: plots with sliders, steppers, checkpoints, diagrams, flashcards",
            "Lessons grounded in the student's own notes and textbooks, with page citations",
            "Server-marked practice with weak areas, evidence and the most common mistake",
            "Exam prep: past questions tagged by topic, a study plan to the exam date, worked solutions and a timed paper",
            "Virtual labs on a seeded experiment engine with least-squares fits and a printable report",
            "Shared notes and written, voice or video explainers, checked by AI and reviewed",
            "Monthly contributor pool split by usage points (20% cap), paid with PayPal Payouts",
            "Peer tutoring: PayPal authorises at booking, captures after the session, voids on a no-show",
            "AI tutoring agent that drafts bookings within the student's spending limit",
            "AI explanations of each payout that keep only numbers from the ledger",
            "Admin interface with AG Grid tables for payouts and tutoring disputes",
            "Multi-provider AI gateway with quotas, kill switch and cost tracking",
            "RLS on every table, tested with pgTAP; Playwright end-to-end tests"
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
        subtitle: "A small web app that reads forex economic news and market mood and suggests whether each currency looks likely to rise (bullish) or fall (bearish).",
        description: "Fundamental Analysis fetches forex economic news, runs economic reports and central-bank statements through the Gemini API to judge their tone (sentiment analysis), and turns the result into a simple bullish or bearish reading for each currency. It is an early side project built with Next.js and Tailwind CSS, and the idea later grew into EdgeProof's Fundamental Bias Scanner.",
        myRole: [
            "Built the Next.js and Tailwind CSS app, the news-fetching pipeline, and the Gemini-based sentiment analysis that gives a bullish or bearish reading for each currency, so traders get a quick read on the news without going through every report."
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
        subtitle: "Python engines that apply to jobs for CvtoCareer's clients across major job boards automatically. Maintained the existing engines, then built and led the build of new ones.",
        description: "CvtoCareer's automation engines apply to jobs on behalf of its career-service clients. I maintained and extended the engines for SEEK, LinkedIn, Jobserve, and Indeed, then built and oversaw new engines for Adzuna, Reed, CareerOne, Jora, Monster, CV-Library, Michael Page, and Randstad, so clients could apply to many relevant roles quickly.",
        myRole: [
            "Maintained and added features to the existing engines for SEEK, LinkedIn, Jobserve, and Indeed.",
            "Built, and led the build of, new engines for Adzuna, Reed, CareerOne, Jora, Monster, CV-Library, Michael Page, and Randstad, so clients reach more job boards each week.",
            "Containerized the engines with Docker on DigitalOcean and kept them running as job-board layouts changed."
        ],
        challenges: [
            {
                title: "Many job boards, each built differently",
                problem: "Every board has its own page structure, content loaded by JavaScript, rate limits, and frequent layout changes, so engines broke whenever a site changed.",
                approach: "Built Python engines on Selenium and Playwright for pages that load content dynamically, with separate code for each site that was quick to adapt, request throttling and retries, and constant monitoring so breakages were caught and fixed fast."
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