import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mouad Elbaz | Data Engineering & AI Portfolio",
  description:
    "Portfolio of Mouad Elbaz, a data engineering and machine learning student building RAG systems, data platforms, and AI dashboards.",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
