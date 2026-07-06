"use client";

import { useState } from "react";

import { socialLinks } from "@/lib/portfolio-data";
import { cn } from "@/lib/cn";
import {
  CloseIcon,
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
  SunMoonIcon,
} from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDimmed, setIsDimmed] = useState(false);

  function toggleTheme() {
    setIsDimmed((current) => {
      const next = !current;
      document.documentElement.dataset.theme = next ? "dimmed" : "cinematic";
      return next;
    });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
      >
        <a
          aria-label="Mouad Elbaz home"
          className="group transition duration-300 hover:scale-[1.03]"
          href="#home"
        >
          <Logo showWordmark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            aria-label="Toggle visual theme"
            aria-pressed={isDimmed}
            className="icon-button"
            onClick={toggleTheme}
            type="button"
          >
            <SunMoonIcon className="size-4" />
          </button>
          <a
            aria-label="LinkedIn profile"
            className="icon-button"
            href={socialLinks[0].href}
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            aria-label="GitHub profile"
            className="icon-button"
            href={socialLinks[1].href}
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="icon-button md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-border bg-background/95 px-6 transition-all md:hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 py-5">
            {navItems.map((item) => (
              <a
                className="nav-link py-2"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a className="icon-button" href={socialLinks[0].href} rel="noreferrer" target="_blank">
                <LinkedinIcon className="size-4" />
              </a>
              <a className="icon-button" href={socialLinks[1].href} rel="noreferrer" target="_blank">
                <GithubIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
