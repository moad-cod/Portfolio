"use client";

import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Lenis belongs at the app shell level for site-wide smooth scrolling.
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let frameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return children;
}
