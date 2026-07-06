import { Reveal } from "@/components/animations/reveal";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section className="section-band" id="experience">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Applied work in public-sector systems.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <Reveal className="glass-card" delay={index * 0.1} key={experience.title}>
              <p className="text-sm font-medium text-amber">{experience.date}</p>
              <h3 className="mt-4 text-2xl font-bold text-cream">
                {experience.title}
              </h3>
              <p className="mt-2 text-muted">
                {experience.company} · {experience.location}
              </p>
              <p className="mt-5 leading-7 text-muted">{experience.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
