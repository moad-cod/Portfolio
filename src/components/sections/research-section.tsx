import { Reveal } from "@/components/animations/reveal";
import { research } from "@/lib/portfolio-data";

export function ResearchSection() {
  return (
    <section className="section-band" id="research">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="section-eyebrow">Research</p>
          <h2 className="section-title">Research Interests</h2>
          <p className="section-copy mt-6 max-w-3xl">{research.description}</p>
        </Reveal>
        <Reveal className="glass-card mt-10 border-amber/40">
          <p className="section-eyebrow">Current research direction</p>
          <h3 className="max-w-4xl text-2xl font-bold leading-snug text-cream md:text-3xl">{research.direction}</h3>
          <p className="mt-5 max-w-3xl leading-7 text-muted">{research.support}</p>
        </Reveal>
      </div>
    </section>
  );
}
