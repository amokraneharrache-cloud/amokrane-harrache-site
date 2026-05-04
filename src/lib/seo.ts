import type { Metadata } from "next";

import type { PageDefinition } from "@/content/pages";
import { siteConfig } from "@/lib/site";

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata(page: PageDefinition): Metadata {
  const url = absoluteUrl(page.path);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/og-default.png",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/og-default.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
