import LocalTime from "@/components/site/LocalTime";
import ThemeToggle from "@/components/site/ThemeToggle";
import { site } from "@/constants/site";
import ContactActions from "../shared/ContactActions";
import VariantSwitcher from "../shared/VariantSwitcher";
import { MobileNav, RailNav } from "./RailNav";
import { About, Contact, Experience, Projects, Skills } from "./Sections";

/**
 * V1 · Split / sticky rail.
 * lg+: a fixed identity rail (who, what, where you are, how to reach me) beside one scrolling
 * column of evidence. Below lg the rail becomes the intro and a sticky section strip takes over.
 */
export default function V1Page() {
    return (
        <>
            <VariantSwitcher current="/v1" className="sticky top-0 z-50" />
            <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:grid lg:grid-cols-[minmax(340px,5fr)_minmax(0,8fr)] lg:gap-14 xl:gap-24 xl:px-12">
                <aside className="pb-6 pt-10 md:pt-14 lg:sticky lg:top-8 lg:flex lg:h-[calc(100dvh-2rem)] lg:flex-col lg:justify-between lg:overflow-y-auto lg:py-14">
                    <div>
                        <p className="flex items-center gap-2 font-mono text-[12px] text-muted-foreground">
                            <span className="relative flex size-1.5" aria-hidden>
                                <span className="absolute inline-flex size-full rounded-full bg-foreground opacity-60 motion-safe:animate-ping [animation-duration:2s]" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
                            </span>
                            <span className="text-foreground">{site.status}</span>
                        </p>
                        <h1 className="mt-5 text-[clamp(2.25rem,4.2vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                            {site.name}
                        </h1>
                        <p className="mt-2 text-lg tracking-[-0.01em] text-muted-foreground">{site.roleLine}</p>
                        <p className="mt-5 max-w-[46ch] text-[15px] leading-[1.6] text-foreground/80">{site.headline}</p>
                        <div className="mt-10">
                            <RailNav />
                        </div>
                    </div>

                    <div className="mt-8 space-y-5">
                        <ContactActions />
                        <div className="flex items-center justify-between gap-3 border-t border-border pt-4 font-mono text-[12px] text-subtle">
                            <p>
                                {site.location.split(",")[0]} · <LocalTime timeZone={site.timeZone} />
                            </p>
                            <span className="hidden lg:block">
                                <ThemeToggle />
                            </span>
                        </div>
                    </div>
                </aside>

                <div className="min-w-0">
                    <MobileNav>
                        <ThemeToggle />
                    </MobileNav>
                    <main
                        id="main"
                        className="space-y-20 pb-16 pt-10 lg:space-y-24 lg:py-14 [&_li]:text-left [&_p]:text-left [&_p]:hyphens-manual"
                    >
                        <About />
                        <Experience />
                        <Projects />
                        <Skills />
                        <Contact />
                    </main>
                </div>
            </div>
        </>
    );
}
