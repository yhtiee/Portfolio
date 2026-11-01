"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { education, skillGroups, softSkills } from "@/constants/resume";
import { period } from "../shared/data";

const trigger =
    "h-8 flex-none cursor-pointer rounded-md px-3 text-[13px] text-muted-foreground data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background";

/** Skills in one compact card: technical, soft and education behind three tabs. */
export default function SkillsPanel() {
    return (
        <Tabs defaultValue="technical" className="gap-0">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 md:px-5">
                <h2 id="skills-heading" className="text-[15px] font-semibold tracking-[-0.01em]">
                    Skills
                </h2>
                <TabsList className="h-auto gap-1 bg-transparent p-0">
                    <TabsTrigger value="technical" className={trigger}>
                        Technical
                    </TabsTrigger>
                    <TabsTrigger value="soft" className={trigger}>
                        Soft skills
                    </TabsTrigger>
                    <TabsTrigger value="education" className={trigger}>
                        Education
                    </TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="technical" className="p-4 md:p-5">
                <dl className="grid gap-x-8 gap-y-3 md:grid-cols-2">
                    {skillGroups.map((g) => (
                        <div key={g.label} className="grid gap-1 sm:grid-cols-[104px_1fr] sm:gap-3">
                            <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.06em] text-subtle">{g.label}</dt>
                            <dd className="text-[13px] leading-relaxed">{g.items.join(", ")}</dd>
                        </div>
                    ))}
                </dl>
            </TabsContent>

            <TabsContent value="soft" className="p-4 md:p-5">
                <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">
                    {softSkills.map((s) => (
                        <li key={s.label}>
                            <p className="text-[14px] font-medium">{s.label}</p>
                            <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">{s.detail}</p>
                        </li>
                    ))}
                </ul>
            </TabsContent>

            <TabsContent value="education" className="p-4 md:p-5">
                {education.map((e) => (
                    <div key={e.institution}>
                        <p className="text-[15px] font-medium">{e.degree}</p>
                        <p className="mt-0.5 text-[13px] text-muted-foreground">
                            {e.institution} · <span className="font-mono text-[12px]">{period(e.period)}</span>
                        </p>
                    </div>
                ))}
            </TabsContent>
        </Tabs>
    );
}
