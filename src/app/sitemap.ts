import type { MetadataRoute } from "next";

import { allPages } from "@/content/pages";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return allPages.map((page) => ({
    url: new URL(page.path, siteConfig.url).toString(),
    lastModified,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.priority ?? 0.7,
  }));
}
