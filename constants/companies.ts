export interface Company {
    id: string;
    name: string;
    role: string;
    url?: string;
    logo?: string;
    color: string;
    /** Contract engagements are listed in their own section, without dates. */
    contract?: boolean;
}

// Single source of truth for companies. Used by the home page Work section
// to group roles and projects (via `companyId`).
export const companies: Company[] = [
    {
        id: "home-grid",
        name: "Home Grid",
        role: "Fullstack Developer & Engineering Lead",
        url: "https://www.linkedin.com/company/home-grid/",
        logo: "/homegrid-logo.jpg",
        color: "text-green-500"
    },
    {
        id: "spurt",
        name: "Spurt",
        role: "Backend & Infrastructure Engineer",
        url: "https://www.linkedin.com/company/spurtgroup/",
        logo: "/spurtgroup_logo.jpg",
        color: "text-green-500"
    },
    {
        id: "bucks",
        name: "Bucks",
        role: "Frontend & Mobile Engineer",
        url: "https://www.usebucks.co/",
        logo: "/bucks-logo.svg",
        color: "text-blue-600",
        contract: true
    },
    {
        id: "nouvells",
        name: "Nouvells",
        role: "Full Stack Engineer",
        url: "https://www.nouvells.com",
        logo: "/nouvells-logo.svg",
        color: "text-blue-700",
        contract: true
    },
    {
        id: "meyou",
        name: "Me&You Technologies",
        role: "Full Stack Engineer",
        url: "https://www.meandyou.tech",
        logo: "/meyou-logo.svg",
        color: "text-rose-600",
        contract: true
    },
    {
        id: "churchlife",
        name: "Church Life",
        role: "Full Stack Engineer",
        url: "https://churchlife.live",
        logo: "/churchlife-logo.png",
        color: "text-amber-600",
        contract: true
    },
    {
        id: "zedbe",
        name: "Zedbe",
        role: "Full Stack Engineer",
        logo: "/zedbe-logo.svg",
        color: "text-emerald-700",
        contract: true
    },
    {
        id: "cvtocareer",
        name: "CVtoCareer",
        role: "Engineering Lead (promoted from Automation & Web Scraping Engineer)",
        url: "https://www.linkedin.com/company/cvtocareer/",
        logo: "/cvtocareer_logo.jpg",
        color: "text-indigo-500"
    },
    {
        id: "zedi",
        name: "Zedi Inc",
        role: "Frontend Engineer",
        url: "https://www.linkedin.com/company/thezedi-inc/",
        logo: "/zedi-logo.jpg",
        color: "text-orange-500"
    },
    {
        id: "roothub",
        name: "The Roothub",
        role: "Full Stack Developer & Tutor",
        url: "https://www.linkedin.com/company/the-roothub/",
        logo: "/roothub-logo.jpg",
        color: "text-yellow-500"
    },
    {
        id: "trusted-partners",
        name: "Trusted Partners",
        role: "Backend Engineer",
        url: "https://www.linkedin.com/company/trstd-prtnrs/",
        logo: "/trstd_prtnrs_logo.jpg",
        color: "text-blue-500"
    },
];

// Group for projects not tied to a company (side projects).
export const PERSONAL_GROUP_ID = "personal";
