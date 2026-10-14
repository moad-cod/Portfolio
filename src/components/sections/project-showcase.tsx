"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { ExternalIcon, GithubIcon } from "@/components/ui/icons";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import type { projects } from "@/lib/portfolio-data";

type Project = (typeof projects)[number];

type ProjectShowcaseProps = {
  project: Project;
  index: number;
};

const ease = [0.22, 1, 0.36, 1] as const;
const projectIds: Record<string, string> = {
  "01": "project-ccsr",
  "02": "project-qwen-medquad",
  "03": "project-operational-intelligence",
  "04": "project-plantguard",
};
const projectSummaries: Record<string, string> = {
  "01": "Reliable ingestion, retrieval, and research workflows",
  "02": "Medical QA preparation and QLoRA fine-tuning",
  "03": "Enterprise ELT, RAG, and ML dashboard",
  "04": "Plant disease classification with OOD detection",
};

function ProjectVisual({ project, displayNumber }: { project: Project; displayNumber: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const screenshots = project.images;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [28, -28]);

  if (screenshots.length > 0) {
    const [mainImage, ...thumbnailImages] = screenshots;
    const visibleThumbnails = thumbnailImages.slice(0, 4);
    const hasGallery = screenshots.length > 1;

    return (
      <motion.div className="project-visual group" ref={ref} style={{ y }}>
        <div className="flex items-center justify-between border-b border-border pb-4">
          <span className="text-sm text-muted">real.screenshots</span>
          <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs text-amber shadow-amber">
            {screenshots.length} {screenshots.length === 1 ? "view" : "views"}
          </span>
        </div>

        <button
          aria-label={`Open ${project.title} image gallery at image 1`}
          className="project-screenshot-main relative mt-6 block w-full text-left"
          onClick={() => setActiveImageIndex(0)}
          type="button"
        >
          <Image
            alt={`${project.title} project screenshot`}
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={mainImage}
          />
          <span className="absolute bottom-3 right-3 rounded-full border border-amber/40 bg-background/85 px-3 py-1 text-xs font-semibold text-amber backdrop-blur">
            {hasGallery ? "View gallery" : "View image"}
          </span>
        </button>

        {visibleThumbnails.length > 0 ? (
          <div className="mt-4 grid grid-cols-4 gap-3">
            {visibleThumbnails.map((image, index) => (
              <button
                aria-label={`Open ${project.title} image gallery at image ${index + 2}`}
                className="project-screenshot-thumb relative"
                key={image}
                onClick={() => setActiveImageIndex(index + 1)}
                type="button"
              >
                <Image
                  alt={`${project.title} screenshot ${index + 2}`}
                  className="object-cover transition duration-500 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 10vw, 22vw"
                  src={image}
                />
              </button>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex items-end justify-between">
          <p className="max-w-56 text-sm text-muted">
            {project.imageCaption}
          </p>
          <span aria-hidden="true" className="text-7xl font-black text-amber/35">{displayNumber}</span>
        </div>

        <ImageLightbox
          activeIndex={activeImageIndex}
          caption={project.imageCaption ?? `${project.title} screenshots`}
          images={screenshots}
          onClose={() => setActiveImageIndex(null)}
          onIndexChange={setActiveImageIndex}
        />
      </motion.div>
    );
  }

  return (
    <motion.div className="project-visual group" ref={ref} style={{ y }}>
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-sm text-muted">System overview</span>
        <span className="rounded-full bg-green/40 px-3 py-1 text-xs text-cream">
          {project.number === "01" ? "Local-first RAG" : "Fine-tuning research"}
        </span>
      </div>
      <div className="mt-8 grid gap-3 text-center text-sm font-semibold sm:grid-cols-3">
        {(project.number === "01" ? ["Documents", "Durable ingestion", "Retrieval + tracing"] : ["MedQuAD data", "Group-safe split", "Qwen3-4B QLoRA"]).map((step, index) => (
          <div className="rounded-lg border border-border bg-background/65 px-3 py-5 text-cream" key={step}>
            <span className="mb-2 block text-amber">0{index + 1}</span>{step}
          </div>
        ))}
      </div>
      {project.number === "02" && <p className="mt-4 text-xs text-muted">Four-system evaluation: planned</p>}
      <div className="mt-8 flex items-end justify-between">
        <p className="max-w-48 text-sm text-muted">{project.title}</p>
        <span aria-hidden="true" className="text-7xl font-black text-amber/35">{displayNumber}</span>
      </div>
    </motion.div>
  );
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const displayNumber = String(index + 1).padStart(2, "0");
  const shouldReduceMotion = useReducedMotion();
  const isEven = index % 2 === 0;
  const visualFrom = isEven ? -56 : 56;
  const contentFrom = isEven ? 56 : -56;
  const viewport = { once: true, amount: 0.28 };

  const slideTransition = {
    duration: 0.9,
    ease,
  };

  const visible = { opacity: 1, x: 0, y: 0 };

  const visual = (
    <motion.div
      initial={shouldReduceMotion ? visible : { opacity: 0, x: visualFrom }}
      transition={slideTransition}
      viewport={viewport}
      whileInView={visible}
    >
      <ProjectVisual project={project} displayNumber={displayNumber} />
    </motion.div>
  );

  const content = (
    <motion.div
      initial={shouldReduceMotion ? visible : { opacity: 0, x: contentFrom }}
      transition={{ ...slideTransition, delay: 0.08 }}
      viewport={viewport}
      whileInView={visible}
    >
      <motion.p
        className="text-7xl font-black text-amber"
        initial={shouldReduceMotion ? visible : { opacity: 0, y: 18 }}
        transition={{ duration: 0.7, ease, delay: 0.15 }}
        viewport={viewport}
        whileInView={visible}
      >
        {displayNumber}
      </motion.p>
      <motion.p
        className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-amber"
        initial={shouldReduceMotion ? visible : { opacity: 0, y: 12 }}
        transition={{ duration: 0.65, ease, delay: 0.22 }}
        viewport={viewport}
        whileInView={visible}
      >
        {project.type}
      </motion.p>
      {project.status ? (
        <motion.span
          className="mt-4 inline-flex rounded-full border border-amber/50 bg-amber/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber shadow-amber"
          initial={shouldReduceMotion ? visible : { opacity: 0, y: 10 }}
          transition={{ duration: 0.55, ease, delay: 0.25 }}
          viewport={viewport}
          whileInView={visible}
        >
          {project.status}
        </motion.span>
      ) : null}
      <motion.h3
        className="mt-4 text-3xl font-bold text-cream md:text-5xl"
        initial={shouldReduceMotion ? visible : { opacity: 0, y: 16 }}
        transition={{ duration: 0.75, ease, delay: 0.28 }}
        viewport={viewport}
        whileInView={visible}
      >
        {project.title}
      </motion.h3>
      <p className="mt-3 text-lg font-medium text-amber">{projectSummaries[project.number]}</p>
      <motion.div
        className="glass-card mt-7"
        initial={shouldReduceMotion ? visible : { opacity: 0, y: 22 }}
        transition={{ duration: 0.8, ease, delay: 0.42 }}
        viewport={viewport}
        whileInView={visible}
      >
        <p className="leading-7 text-muted">{project.description}</p>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li className="flex gap-3" key={highlight}>
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="mt-6 flex flex-wrap gap-2"
        initial="hidden"
        transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.045, delayChildren: 0.58 }}
        viewport={viewport}
        variants={{ hidden: {}, show: {} }}
        whileInView="show"
      >
        {project.technologies.slice(0, 5).map((technology) => (
          <motion.span
            key={technology}
            variants={{
              hidden: shouldReduceMotion ? visible : { opacity: 0, y: 12, scale: 0.96 },
              show: visible,
            }}
            transition={{ duration: 0.45, ease }}
          >
            <Badge>{technology}</Badge>
          </motion.span>
        ))}
      </motion.div>
      <details className="mt-7 rounded-xl border border-border bg-surface/75 p-5">
        <summary className="cursor-pointer font-semibold text-amber">Implementation details<span className="sr-only"> — {project.title}</span></summary>
        <ul className="mt-5 grid list-disc gap-2 pl-5 text-sm leading-6 text-muted">
          {project.highlights.slice(3).map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(5).map((technology) => <Badge key={technology}>{technology}</Badge>)}</div>
        {project.researchDesign.length > 0 && (
          <div className="mt-6 text-sm leading-6 text-muted">
            <h4 className="font-semibold text-cream">Research design · Controlled 2×2 comparison</h4>
            <ul className="mt-3 list-disc pl-5">{project.researchDesign.map((system) => <li key={system}>{system}</li>)}</ul>
            <p className="mt-4">{project.planned}</p>
          </div>
        )}
      </details>
      <motion.a
        className="button-secondary mt-7 gap-2"
        href={project.github}
        initial={shouldReduceMotion ? visible : { opacity: 0, y: 16 }}
        rel="noreferrer"
        target="_blank"
        transition={{ duration: 0.65, ease, delay: 0.78 }}
        viewport={viewport}
        whileInView={visible}
      >
        <GithubIcon className="size-4" />
        GitHub
        <ExternalIcon className="size-4" />
      </motion.a>
    </motion.div>
  );

  return (
    <article id={projectIds[project.number]} className="grid scroll-mt-28 gap-9 lg:grid-cols-2 lg:items-center">
      <div className={isEven ? "lg:order-2" : undefined}>{content}</div>
      <div className={isEven ? "lg:order-1" : undefined}>{visual}</div>
    </article>
  );
}
