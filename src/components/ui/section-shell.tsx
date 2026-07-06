import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionShellProps = ComponentPropsWithoutRef<"section"> & {
  eyebrow: string;
  children: ReactNode;
};

export function SectionShell({
  className,
  children,
  eyebrow,
  ...props
}: SectionShellProps) {
  return (
    <section
      className={cn("mx-auto flex w-full max-w-7xl flex-col px-6 py-24 md:py-32", className)}
      {...props}
    >
      <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-amber">
        {eyebrow}
      </p>
      {children}
    </section>
  );
}
