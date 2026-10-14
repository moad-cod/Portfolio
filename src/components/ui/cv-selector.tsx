import { resumes } from "@/lib/portfolio-data";

export function CvSelector({ compact = false }: { compact?: boolean }) {
  return (
    <details className="cv-selector relative w-full max-w-sm sm:w-auto">
      <summary className="button-secondary cursor-pointer justify-center gap-2 marker:hidden [&::-webkit-details-marker]:hidden">
        Choose a CV <span aria-hidden="true">↓</span>
      </summary>
      <div className={`z-20 mt-2 w-full rounded-xl border border-border bg-surface p-3 shadow-amber ${compact ? "sm:absolute sm:right-0 sm:w-80" : "sm:absolute sm:left-0 sm:w-80"}`}>
        <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-muted">Select a role · PDF in English</p>
        <ul className="grid gap-2">
          {resumes.map((resume) => (
            <li className="rounded-lg border border-border p-3" key={resume.href}>
              <p className="font-semibold text-cream">{resume.label}</p>
              <div className="mt-2 flex gap-4 text-sm">
                <a className="text-amber underline underline-offset-4" href={resume.href} target="_blank" rel="noreferrer">View PDF<span className="sr-only"> — {resume.label}</span></a>
                <a className="text-amber underline underline-offset-4" href={resume.href} download={resume.filename}>Download<span className="sr-only"> — {resume.label}</span></a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
