import Home from "@/components/home/Home";
import { companies } from "@/constants/companies";
import { experience, education, skillGroups } from "@/constants/resume";
import { site } from "@/constants/site";

// Person schema so search engines understand who this page is about.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Software Engineer",
  description: site.headline,
  sameAs: Object.values(site.socials),
  worksFor: experience
    .filter((role) => /present/i.test(role.period ?? ""))
    .map((role) => ({
      "@type": "Organization",
      name: companies.find((company) => company.id === role.companyId)?.name ?? role.company,
    })),
  alumniOf: education.map((item) => ({ "@type": "CollegeOrUniversity", name: item.institution })),
  knowsAbout: Array.from(new Set(skillGroups.flatMap((group) => group.items))),
};

export default function Page() {
  return (
    <>
      <Home />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
