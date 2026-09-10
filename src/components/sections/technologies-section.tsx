import { Reveal } from "@/components/animations/reveal";
import { TechMarquee } from "@/components/ui/tech-marquee";

import { technologyCategories, priorityTechnologies } from "@/lib/portfolio-data";

export function TechnologiesSection() {
  return (
    <section className="section-band" id="technologies">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">STACK</p>
          <h2 className="section-title mx-auto">Technologies</h2>
          <p className="mt-5 text-muted">
            Tools I use across data engineering, AI research, backend systems, and cloud infrastructure.
          </p>
        </Reveal>
        <Reveal className="mt-14">
          <TechMarquee />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {technologyCategories.map((category) => (
            <Reveal className="card" key={category.name}>
              <h3 className="mb-5 text-xl font-semibold text-cream">{category.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((name) => <li key={name} className={`rounded-md border px-3 py-2 text-sm ${priorityTechnologies.includes(name) ? "border-amber/40 bg-amber/10 font-semibold text-amber" : "border-border text-muted"}`}>{name}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
