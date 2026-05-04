import { allPages } from "@/content/pages";
import { offers } from "@/content/offers";
import { siteConfig } from "@/lib/site";

export function GET() {
  const lines = [
    "# Amokrane Harrache",
    "",
    "> Consultant en automatisation IA pour équipes métier et PME : reportings Excel, données, emails, documents, relances, contrôles et assistants internes.",
    "",
    "## Pages principales",
    "",
    ...allPages.map((page) => "- [" + page.label + "](" + new URL(page.path, siteConfig.url).toString() + "): " + page.description),
    "",
    "## Offres",
    "",
    ...offers.map((offer) => "- " + offer.title + " : " + offer.price + "."),
    "",
    "## Notes",
    "",
    "- Les exemples ne sont pas des témoignages clients.",
    "- Les résultats dépendent du processus, des données sources, des règles métier et des validations.",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
