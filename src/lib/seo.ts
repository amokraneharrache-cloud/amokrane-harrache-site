import type { Metadata } from "next";

import type { PageDefinition } from "@/content/pages";
import { siteConfig } from "@/lib/site";

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata(
  page: PageDefinition,
  options: {
    openGraphType?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
  } = {},
): Metadata {
  const url = absoluteUrl(page.path);
  const image = {
    url: "/og-default.png",
    width: 1200,
    height: 630,
    alt: siteConfig.name,
  };

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
      type: options.openGraphType || "website",
      images: [image],
      ...(options.openGraphType === "article"
        ? {
            publishedTime: options.publishedTime,
            modifiedTime: options.modifiedTime || options.publishedTime,
            authors: [siteConfig.ownerName],
          }
        : {}),
    } as Metadata["openGraph"],
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
