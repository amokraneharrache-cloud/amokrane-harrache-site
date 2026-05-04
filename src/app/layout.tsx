import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <JsonLd data={organizationSchema()} />
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
