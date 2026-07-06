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
        <div className="text-center lg:text-left">
          <Reveal delay={0.02}>
            <p className="mx-auto mb-5 max-w-fit text-xs font-semibold uppercase tracking-[0.18em] text-amber sm:text-sm lg:mx-0">
              DATA PLATFORMS · AI SYSTEMS · PRODUCT DASHBOARDS
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mx-auto max-w-4xl text-6xl font-black leading-none tracking-normal text-cream sm:text-7xl lg:mx-0 lg:text-8xl">
            {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mx-auto mt-7 max-w-2xl text-xl font-semibold leading-snug text-cream md:text-2xl lg:mx-0">
              {profile.role}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 min-h-8 text-lg font-semibold md:text-xl">
              <RoleRotator roles={profile.rotatingRoles} />
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg lg:mx-0">
              {profile.summary}
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a className="button-primary" href={profile.resumeHref}>
                View Resume
              </a>
              <a className="button-secondary" href="#projects">
                View Projects
              </a>
            </div>
          </Reveal>
        </div>

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
