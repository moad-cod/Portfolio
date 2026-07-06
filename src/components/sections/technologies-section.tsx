import { Reveal } from "@/components/animations/reveal";
import { TechMarquee } from "@/components/ui/tech-marquee";

export function TechnologiesSection() {
  return (
    <section className="section-band" id="technologies">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">STACK</p>
          <h2 className="section-title mx-auto">Technologies</h2>
          <p className="mt-5 text-muted">
            Tools I use across data engineering, AI, backend systems, security,
            and modern full-stack applications.
          </p>
        </Reveal>
        <Reveal className="mt-14">
          <TechMarquee />
        </Reveal>
      </div>
    </section>
  );
}
