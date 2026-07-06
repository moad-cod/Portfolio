import { Reveal } from "@/components/animations/reveal";
import { certifications, education } from "@/lib/portfolio-data";

export function EducationSection() {
  return (
    <section className="section-band" id="education">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Learning path</p>
          <h2 className="section-title mx-auto">Education</h2>
        </Reveal>
        <div className="relative mt-16 grid gap-7 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border md:before:left-8">
          {education.map((item, index) => (
            <Reveal className="relative pl-12 md:pl-20" delay={index * 0.1} key={item.title}>
              <span className="absolute left-0 top-6 grid size-8 place-items-center rounded-full border border-amber bg-background text-xs text-amber shadow-amber md:left-4">
                {index + 1}
              </span>
              <article className="glass-card transition duration-300 hover:-translate-y-1 hover:border-amber/45">
                <h3 className="text-2xl font-bold text-cream">{item.title}</h3>
                <p className="mt-3 text-muted">{item.school}</p>
                <p className="mt-2 text-sm font-medium text-amber">{item.date}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="text-center text-2xl font-bold text-cream">
            Certifications
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {certifications.map((certification) => (
              <div className="rounded-lg border border-border bg-surface/70 px-4 py-3 text-sm text-muted" key={certification}>
                {certification}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
