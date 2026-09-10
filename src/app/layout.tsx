import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mouad Elbaz | Data Engineer & AI Research Engineer",
  description:
    "Portfolio of Mouad Elbaz, a Data Engineer and AI Research Engineer working on scalable data pipelines, RAG systems, LLM fine-tuning, machine learning, and reproducible AI research.",
  metadataBase: new URL("https://mouadelbaz.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mouad Elbaz | Data Engineer & AI Research Engineer",
    description: "Building data pipelines, RAG systems, and reproducible ML/LLM experiments.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mouad Elbaz | Data Engineer & AI Research Engineer",
    description: "Building data pipelines, RAG systems, and reproducible ML/LLM experiments.",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
