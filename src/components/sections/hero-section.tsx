import Image from "next/image";

import { Reveal } from "@/components/animations/reveal";
import { RoleRotator } from "@/components/animations/role-rotator";
import { profile } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden px-6 pb-24 pt-32 md:pt-40"
      id="home"
    >
      <div className="absolute left-1/2 top-16 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-amber/20 blur-[150px]" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-48 bg-gradient-to-b from-transparent to-background" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-amber">
            Data platforms. AI systems. Product dashboards.
          </p>
          <h1 className="max-w-4xl text-6xl font-black leading-none tracking-normal text-cream sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-xl font-semibold text-cream md:text-2xl">
            I&apos;m a {profile.role}
          </p>
          <p className="mt-3 text-lg font-medium">
            <RoleRotator roles={profile.rotatingRoles} />
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            {profile.summary}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a className="button-primary" href={profile.resumeHref}>
              View Resume
            </a>
            <a className="button-secondary" href="#projects">
              View Projects
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:justify-self-end" delay={0.15}>
          <div className="profile-card group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-border bg-surface p-3 shadow-amber">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(225,139,41,0.28),transparent_38%),linear-gradient(145deg,rgba(51,62,50,0.38),transparent_45%)]" />
            <Image
              alt="Portrait of Mouad Elbaz"
              className="relative h-full w-full rounded-[1.45rem] object-cover grayscale-[12%] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              height={2048}
              priority
              src={profile.imageSrc}
              width={2048}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
