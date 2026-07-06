import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className, showWordmark = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="logo-mark" aria-hidden="true">
        <svg
          className="h-full w-full"
          fill="none"
          role="img"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 49V15l13.8 18.5L38.7 15v34"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.5"
          />
          <path
            d="M31.5 18H53M38 32h12.5M31.5 46H53"
            stroke="var(--orange)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.5"
          />
          <path
            d="M49.5 12.5 55 18l-5.5 5.5"
            stroke="var(--amber)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span className="hidden text-sm font-semibold tracking-wide text-cream transition group-hover:text-amber sm:inline">
          Mouad Elbaz
        </span>
      ) : null}
    </span>
  );
}
