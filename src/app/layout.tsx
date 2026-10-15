import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { SiteShell } from "@/components/layout/site-shell";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mouad Elbaz | Data, Python Backend & AI/ML",
  description:
    "Portfolio of Mouad Elbaz, a junior engineer building data pipelines, Python backend services, and AI/ML systems.",
  metadataBase: new URL("https://mouadelbaz.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mouad Elbaz | Data, Python Backend & AI/ML",
    description: "Building data pipelines, Python services, and reproducible AI/ML systems.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mouad Elbaz | Data, Python Backend & AI/ML",
    description: "Building data pipelines, Python services, and reproducible AI/ML systems.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (() => {
            const media = window.matchMedia('(prefers-color-scheme: light)');
            let saved;
            try { saved = localStorage.getItem('portfolio-theme'); } catch {}
            const valid = value => value === 'light' || value === 'dark';
            const apply = () => {
              document.documentElement.dataset.theme = valid(saved) ? saved : (media.matches ? 'light' : 'dark');
            };
            apply();
            window.addEventListener('portfolio-theme-change', () => { saved = document.documentElement.dataset.theme; });
            media.addEventListener('change', () => {
              apply();
            });
            window.addEventListener('storage', event => {
              if (event.key === 'portfolio-theme' || event.key === null) { saved = event.newValue; apply(); }
            });
          })();
        ` }} />
      </head>
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
