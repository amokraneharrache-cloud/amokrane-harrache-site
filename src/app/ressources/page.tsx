import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { pages } from "@/content/pages";
import { resourceArticles } from "@/content/resources";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";

export const metadata = createMetadata(pages.resources);

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: pages.resources.path,
            name: pages.resources.title,
            description: pages.resources.description,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: pages.resources.label, path: pages.resources.path },
          ]),
        ]}
      />
      <Hero
        eyebrow="RESSOURCES"
        title="Ressources sur l'automatisation IA, data et workflows métier"
        subtitle="Des articles courts et concrets pour comprendre comment automatiser des reportings, fichiers Excel, emails, documents et processus répétitifs en PME."
        primaryCta={{ label: "Lire les articles →", href: "#articles" }}
        secondaryCta={{ label: "Voir les démonstrateurs →", href: "/demonstrateurs" }}
        sideContent={<ResourcesVisual />}
        compactMobileTitle
      />

      <Section
        id="articles"
        eyebrow="ARTICLES"
        title="Guides courts pour cadrer avant d'automatiser"
        intro="Chaque article part d'un problème fréquent, précise les limites et renvoie vers l'offre la plus proche quand le sujet mérite d'être creusé."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {resourceArticles.map((article) => (
            <Card className="flex flex-col" key={article.slug}>
              <Badge>ARTICLE</Badge>
              <h2 className="mt-4 text-xl font-semibold leading-tight text-[#171713]">
                {article.title}
              </h2>
              <p className="mt-4 flex-1 leading-7 text-[#5F5A50]">
                {article.description}
              </p>
              <Button className="mt-6 w-full" href={article.page.path} variant="secondary">
                Lire l'article →
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="CADRAGE" title="Le bon réflexe : partir du processus">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Symptômes",
              text: "Tâches répétitives, fichiers fragiles, contrôles manuels ou informations difficiles à retrouver.",
            },
            {
              title: "Pré-requis",
              text: "Sources, règles métier, exemples réels, exceptions connues et validations attendues.",
            },
            {
              title: "Limites",
              text: "Données sensibles, réponses hors périmètre, règles floues et besoin de validation humaine.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <h2 className="text-lg font-semibold text-[#171713]">{item.title}</h2>
              <p className="mt-3 leading-7 text-[#5F5A50]">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Vous cherchez par où commencer ?"
        text="Décrivez un reporting, un fichier, un email type ou une procédure. On regarde si le sujet mérite un diagnostic, un audit ou un prototype."
        cta="Planifier un échange →"
      />
    </>
  );
}

function ResourcesVisual() {
  return (
    <div className="rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-5 shadow-[0_24px_70px_rgba(17,17,14,0.08)] sm:p-6">
      <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
        Lecture rapide
      </p>
      <div className="mt-5 overflow-hidden rounded-xl border border-[#DDD8CC]">
        <div className="grid grid-cols-[1.1fr_0.8fr_0.8fr] bg-[#EFEDE5] px-4 py-3 font-mono text-[11px] font-semibold uppercase text-[#8A857A]">
          <span>Sujet</span>
          <span>Risque</span>
          <span>Départ</span>
        </div>
        {[
          ["Reporting Excel", "Fragile", "Exports"],
          ["Audit PME", "Prioriser", "Processus"],
          ["Assistant IA", "Périmètre", "Sources"],
        ].map(([subject, risk, start]) => (
          <div
            className="grid grid-cols-[1.1fr_0.8fr_0.8fr] border-t border-[#DDD8CC] px-4 py-3 text-sm"
            key={subject}
          >
            <span className="font-semibold text-[#171713]">{subject}</span>
            <span className="text-[#C75A2A]">{risk}</span>
            <span className="text-[#0F7A4F]">{start}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-xl border border-[#D8E0FF] bg-[#F3F5FF] p-4 text-sm leading-6 text-[#3558D4]">
        Des articles pensés pour reconnaître un bon sujet avant de choisir un outil.
      </p>
    </div>
  );
}
