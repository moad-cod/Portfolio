import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";

import { ResearchSection } from "@/components/sections/research-section";
import { EvidenceSection } from "@/components/sections/evidence-section";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <EvidenceSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechnologiesSection />
      <ResearchSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
