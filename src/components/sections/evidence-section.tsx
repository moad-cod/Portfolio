import { Reveal } from "@/components/animations/reveal";

const evidence = [
  { value: "200,000+", label: "enterprise records integrated", href: "#project-operational-intelligence" },
  { value: "16,357", label: "medical QA records cleaned", href: "#project-qwen-medquad" },
  { value: "38", label: "plant disease categories", href: "#project-plantguard" },
];

export function EvidenceSection() {
  return (
    <section aria-label="Selected project evidence" className="px-6 py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {evidence.map((item) => (
          <Reveal key={item.value} className="card">
            <a className="group block" href={item.href}>
              <span className="block text-4xl font-black text-amber">{item.value}</span>
              <span className="mt-2 block text-sm text-muted group-hover:text-cream">{item.label} <span aria-hidden="true">↗</span></span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
