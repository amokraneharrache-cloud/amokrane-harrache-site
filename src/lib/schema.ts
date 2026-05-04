import { siteConfig } from "@/lib/site";

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.ownerName,
    url: siteConfig.url,
    areaServed: ["France", "Île-de-France", "À distance"],
    description: siteConfig.description,
  };
}

export function webpageSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "Person",
      name: siteConfig.ownerName,
    },
    areaServed: "France",
  };
}

export function faqPageSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function personSchema() {
  const sameAs = Object.values(siteConfig.socialLinks).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.ownerName,
    url: absoluteUrl("/a-propos"),
    jobTitle: "Data engineer spécialisé en automatisation métier",
    description: siteConfig.description,
    knowsAbout: [
      "Automatisation métier",
      "Intégration IA",
      "Data engineering",
      "Reporting Excel",
      "Traitement de données",
      "Workflows documentés",
    ],
    areaServed: ["France", "Île-de-France", "À distance"],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    sameAs: sameAs.length ? sameAs : undefined,
  };
}
