# My Portfolio

A clean Next.js portfolio starter using the App Router, TypeScript, Tailwind CSS, ESLint, the `src/` directory, and the `@/*` import alias.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

If your OS file watcher limit is exhausted, run the dev server with polling:

```bash
WATCHPACK_POLLING=true npx next dev --webpack
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Structure

```txt
src/
  app/
  components/
    animations/
    layout/
    sections/
    ui/
  lib/
  styles/
```

## Animation Stack

- `motion`: React UI animation for component states, page transitions, and small interactive flourishes.
- `gsap` and `@gsap/react`: advanced timelines, scroll choreography, pinned sections, and precise animation sequencing.
- `lenis`: site-wide smooth scrolling.
- `three`, `@react-three/fiber`, and `@react-three/drei`: lightweight 3D/WebGL hero moments and richer interactive sections.
- `lottie-react`: exported JSON animations for icons, loaders, and micro-interactions.
- `split-type`: text splitting for character, word, and line-based typography animation.
- `clsx` and `tailwind-merge`: clean conditional class handling through `src/lib/cn.ts`.

The current homepage includes placeholder Hero, About, Projects, Skills, and Contact sections plus one starter example for Motion, Lenis, GSAP, React Three Fiber, and Lottie.
