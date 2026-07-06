import type { ReactNode } from "react";

import { SmoothScrollProvider } from "@/components/animations/smooth-scroll-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen overflow-hidden bg-background text-foreground">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </SmoothScrollProvider>
  );
}
