import Image from "next/image";
import { User } from "lucide-react";
import { companyAnchor, contractGroups, personalProjects, workGroups } from "@/constants/site";
import { projects } from "@/constants/projects";
import type { Experience } from "@/constants/resume";
import ProjectItem from "./ProjectItem";

const VISIBLE_POINTS = 2;

// "2023 - 2024" + "2024 - 2025" -> "2023 – 2025"; any "Present" wins.
const periodRange = (roles: Experience[]) => {
    const years = roles.flatMap((role) => (role.period ?? "").split(/\s*[-–]\s*/));
    const numeric = years.map(Number).filter(Boolean);
    const start = Math.min(...numeric);
    const end = years.some((y) => /present/i.test(y)) ? "Present" : Math.max(...numeric);
    return roles.length ? `${start} – ${end}` : "";
};

const Role = ({ role }: { role: Experience }) => {
    const visible = role.points.slice(0, VISIBLE_POINTS);
    const more = role.points.slice(VISIBLE_POINTS);
    const bullet = (point: string, i: number) => (
        <li key={i} className="grid grid-cols-[12px_1fr] gap-2 text-[14px] leading-relaxed text-muted-foreground">
            <span className="mt-[0.7em] h-px w-2 bg-subtle" aria-hidden />
            <span>{point}</span>
        </li>
    );

    return (
        <div className="space-y-2">
            <div className="flex items-baseline justify-between gap-4">
                <p className="text-[15px] font-medium">{role.role}</p>
                {(role.period || role.type) && (
                    <p className="shrink-0 font-mono text-[12px] text-subtle tabular-nums">
                        {[role.period?.replace(" - ", " – "), role.type].filter(Boolean).join(" · ")}
                    </p>
                )}
            </div>
            <ul className="space-y-1.5">{visible.map(bullet)}</ul>
            {more.length > 0 && (
                <details className="group/more">
                    <summary className="list-none cursor-pointer inline-flex items-center gap-1 rounded font-mono text-[12px] text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring">
                        <span className="group-open/more:hidden">+{more.length} more</span>
                        <span className="hidden group-open/more:inline">Show less</span>
                    </summary>
                    <ul className="mt-1.5 space-y-1.5">{more.map(bullet)}</ul>
                </details>
            )}
        </div>
    );
};

const ProjectList = ({ items, label = true }: { items: typeof projects; label?: boolean }) => (
    <div className={label ? "mt-6" : ""}>
        {label && (
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.08em] text-subtle">
                Projects <span className="text-subtle/70">· {items.length}</span>
            </p>
        )}
        <div>
            {items.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    </div>
);

type Group = (typeof workGroups)[number];

const CompanyBlock = ({ group: { company, roles, projects: items } }: { group: Group }) => (
    <div id={companyAnchor(company.id)} className="scroll-mt-20 py-10 first:pt-0">
        <div className="mb-5 flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
                {company.logo ? (
                    <Image src={company.logo} alt="" width={24} height={24} className="rounded-[3px] object-contain" />
                ) : (
                    <User className="size-4 text-black" aria-hidden />
                )}
            </span>
            <div className="min-w-0 flex-grow">
                <h4 className="text-[17px] font-semibold tracking-[-0.01em]">{company.name}</h4>
                {roles[0] && <p className="text-[13px] text-muted-foreground">{roles[0].location}</p>}
            </div>
            {/* With one role its own line already shows the dates. */}
            {roles.length > 1 && (
                <p className="shrink-0 font-mono text-[12px] text-subtle tabular-nums">{periodRange(roles)}</p>
            )}
        </div>

        <div className="space-y-6">
            {roles.map((role) => (
                <Role key={role.role} role={role} />
            ))}
        </div>

        {items.length > 0 && <ProjectList items={items} />}
    </div>
);

// Experience, Contract work and Personal projects each open with a heavy rule and a
// heading, so the three kinds of work read as clearly separate parts of the page.
const SubsectionHeader = ({ id, title, note, first = false }: { id: string; title: string; note: string; first?: boolean }) => (
    <div id={id} className={`scroll-mt-20 border-t-2 border-foreground pt-5 mb-8 ${first ? "" : "mt-16"}`}>
        <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.02em]">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{note}</p>
    </div>
);

// Opens a deep-linked project (/#carematch) before first paint so there's no layout jump.
const openHashScript = `(function(){try{var h=decodeURIComponent(location.hash.slice(1));if(!h)return;var a=document.getElementById(h);var d=a&&a.querySelector('details.project');if(d)d.open=true;}catch(e){}})();`;

export default function Work() {
    return (
        <section id="work" aria-labelledby="work-heading" className="py-14 md:py-20 border-t border-border">
            <div className="mb-8 flex items-baseline justify-between gap-4">
                <h2 id="work-heading" className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                    Work
                </h2>
            </div>

            <SubsectionHeader
                id="experience"
                title="Experience"
                note="Roles I've held, with the products I built there."
                first
            />
            <div className="divide-y divide-border">
                {workGroups.map((group) => (
                    <CompanyBlock key={group.company.id} group={group} />
                ))}
            </div>

            {contractGroups.length > 0 && (
                <>
                    <SubsectionHeader
                        id="contract"
                        title="Contract work"
                        note="Products I've built for clients on contract."
                    />
                    <div className="divide-y divide-border">
                        {contractGroups.map((group) => (
                            <CompanyBlock key={group.company.id} group={group} />
                        ))}
                    </div>
                </>
            )}

            {personalProjects.length > 0 && (
                <>
                    <SubsectionHeader
                        id={companyAnchor("personal")}
                        title="Personal projects"
                        note="Products I've founded or built on my own, mostly open source."
                    />
                    <ProjectList items={personalProjects} label={false} />
                </>
            )}

            <script dangerouslySetInnerHTML={{ __html: openHashScript }} />
        </section>
    );
}
