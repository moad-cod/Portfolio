import { socialLinks } from "@/lib/portfolio-data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-[#050403] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center text-sm text-muted md:flex-row md:justify-between md:text-left">
        <p>Made with ❤️ by Mouad Elbaz</p>
        <div className="flex items-center gap-3">
          <a
            aria-label="LinkedIn"
            className="icon-button"
            href={socialLinks[0].href}
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            aria-label="GitHub"
            className="icon-button"
            href={socialLinks[1].href}
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            aria-label="X/Twitter"
            className="icon-button text-xs font-bold"
            href={socialLinks[2].href}
            rel="noreferrer"
            target="_blank"
          >
            X
          </a>
        </div>
        <p>© 2026 Mouad Elbaz. All rights reserved.</p>
      </div>
    </footer>
  );
}
