"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { ExternalIcon, GithubIcon } from "@/components/ui/icons";
import type { projects } from "@/lib/portfolio-data";

type Project = (typeof projects)[number];

type ProjectShowcaseProps = {
  project: Project;
  index: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectVisual({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
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

    return (
      <motion.div className="project-visual group" ref={ref} style={{ y }}>
        <div className="flex items-center justify-between border-b border-border pb-4">
          <span className="text-sm text-muted">real.screenshots</span>
          <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs text-amber shadow-amber">
            {screenshots.length} views
          </span>
        </div>

        <div className="project-screenshot-main relative mt-6">
          <Image
            alt={`${project.title} dashboard screenshot`}
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={mainImage}
          />
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {visibleThumbnails.map((image, index) => (
            <div className="project-screenshot-thumb relative" key={image}>
              <Image
                alt={`${project.title} screenshot ${index + 2}`}
                className="object-cover transition duration-500 group-hover:scale-105"
                fill
                sizes="(min-width: 1024px) 10vw, 22vw"
                src={image}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-end justify-between">
          <p className="max-w-56 text-sm text-muted">
            Dashboard, analytics, ELT, RAG, and operational intelligence views.
          </p>
          <span className="text-7xl font-black text-amber/35">{project.number}</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className="project-visual group" ref={ref} style={{ y }}>
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-sm text-muted">system.preview</span>
        <span className="rounded-full bg-green/40 px-3 py-1 text-xs text-cream">
          live model
        </span>
      </div>
      <div className="mt-8 grid gap-4">
        <div className="h-3 w-2/3 rounded-full bg-amber/70 transition duration-500 group-hover:bg-orange" />
        <div className="h-3 w-1/2 rounded-full bg-muted/40" />
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="h-24 rounded-lg border border-border bg-background/65 transition duration-500 group-hover:border-amber/40" />
          <div className="h-24 rounded-lg border border-border bg-amber/15 transition duration-500 group-hover:bg-amber/25" />
          <div className="h-24 rounded-lg border border-border bg-green/35 transition duration-500 group-hover:border-orange/40" />
        </div>
      </div>
      <div className="mt-8 flex items-end justify-between">
        <p className="max-w-48 text-sm text-muted">{project.title}</p>
        <span className="text-7xl font-black text-amber/35">{project.number}</span>
      </div>
    </motion.div>
  );
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
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
      <ProjectVisual project={project} />
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
        className="text-7xl font-black text-amber/30"
        initial={shouldReduceMotion ? visible : { opacity: 0, y: 18 }}
        transition={{ duration: 0.7, ease, delay: 0.15 }}
        viewport={viewport}
        whileInView={visible}
      >
        {project.number}
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
      <motion.div
        className="glass-card mt-7"
        initial={shouldReduceMotion ? visible : { opacity: 0, y: 22 }}
        transition={{ duration: 0.8, ease, delay: 0.42 }}
        viewport={viewport}
        whileInView={visible}
      >
        <p className="leading-7 text-muted">{project.description}</p>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted">
          {project.highlights.slice(0, 5).map((highlight) => (
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
        {project.technologies.map((technology) => (
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
        View Code
        <ExternalIcon className="size-4" />
      </motion.a>
    </motion.div>
  );

  return (
    <article className="grid gap-9 lg:grid-cols-2 lg:items-center">
      {isEven ? (
        <>
          {visual}
          {content}
        </>
      ) : (
        <>
          <div className="lg:order-2">{visual}</div>
          <div>{content}</div>
        </>
      )}
    </article>
  );
}
