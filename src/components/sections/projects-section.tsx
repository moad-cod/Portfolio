import { Reveal } from "@/components/animations/reveal";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section className="section-band" id="projects">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Case studies</p>
          <h2 className="section-title mx-auto">Featured Projects</h2>
          <p className="mt-5 text-muted">
            A collection of my most impactful work in data engineering, AI,
            machine learning, and full-stack development.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-amber to-transparent" />
        </Reveal>

        <div className="mt-20 grid gap-20">
          {projects.map((project, index) => (
            <ProjectShowcase index={index} key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
