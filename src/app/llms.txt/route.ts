import { demonstrators } from "@/content/demonstrators";
import { allPages } from "@/content/pages";
import { resourceArticles } from "@/content/resources";
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
    "## Démonstrateurs",
    "",
    ...demonstrators.map(
      (demo) =>
        "- [" +
        demo.page.label +
        "](" +
        new URL(demo.page.path, siteConfig.url).toString() +
        "): exemple pédagogique, pas une mission client.",
    ),
    "",
    "## Ressources",
    "",
    ...resourceArticles.map(
      (article) =>
        "- [" +
        article.title +
        "](" +
        new URL(article.page.path, siteConfig.url).toString() +
        "): " +
        article.description,
    ),
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
