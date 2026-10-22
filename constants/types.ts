export interface ProjectChallenge {
    title: string;
    problem: string;
    approach: string;
}

export interface Project {
    id?: string | undefined;
    companyId?: string | undefined;
    role?: string | undefined;
    team?: string | undefined;
    period?: string | undefined;
    /** Short launch status shown on the row, e.g. "Live", "Pre-launch", "Handed over". */
    status?: string | undefined;
    // Case-study format. When `challenges` is set it replaces the older
    // `challenge` / `solution` paragraphs.
    myRole?: string[] | undefined;
    challenges?: ProjectChallenge[] | undefined;
    impact?: string[] | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    description?: string | undefined;
    tags?: string[] | undefined;
    image?: string | undefined;
    images?: string[] | undefined;
    challenge?: string | undefined;
    solution?: string | undefined;
    features?: string[] | undefined;
    demoUrl?: string | undefined;
    repoUrl?: string | undefined;
    /** Extra labeled links, e.g. several public repos: [{ label: "App code", href }]. */
    links?: { label: string; href: string }[] | undefined;
}
