import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { demonstrators } from "@/content/demonstrators";
import { pages } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";

export const metadata = createMetadata(pages.demonstrators);

const reassurance =
  "Ces démonstrateurs ne sont pas présentés comme des missions client. Ils servent à montrer une approche : problème métier, données, règles, workflow, limites et validation humaine.";

export default function DemonstratorsPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: pages.demonstrators.path,
            name: pages.demonstrators.title,
            description: pages.demonstrators.description,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: pages.demonstrators.label, path: pages.demonstrators.path },
          ]),
        ]}
      />
      <Hero
        eyebrow="DÉMONSTRATEURS"
        title="Démonstrateurs IA, data et automatisation"
        subtitle="Des exemples concrets pour visualiser comment un fichier, un reporting, un document ou une base de connaissance peut être transformé en workflow fiable, contrôlé et maintenable."
        differentiator={reassurance}
        primaryCta={{ label: "Voir les exemples →", href: "#exemples" }}
        secondaryCta={{ label: "Planifier un échange →", href: "/contact" }}
        sideContent={<DemonstratorOverview />}
        compactMobileTitle
      />

      <Section
        id="exemples"
        eyebrow="EXEMPLES"
        title="Trois démonstrateurs pour rendre l'approche tangible"
        intro="Chaque card part d'un problème métier, explicite ce que le démonstrateur montre, puis rappelle les limites à garder visibles."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {demonstrators.map((demonstrator) => (
            <Card className="flex flex-col" key={demonstrator.slug}>
              <div className="flex flex-wrap gap-2">
                <Badge>DÉMONSTRATEUR</Badge>
                {demonstrator.slug === "assistant-excel" ? (
                  <Badge className="border-[#D5E7DA] bg-[#F0FAF4] text-[#0F7A4F]">
                    Vidéo disponible
                  </Badge>
                ) : null}
              </div>
              <h2 className="mt-4 text-xl font-semibold leading-tight text-[#171713]">
                {demonstrator.page.label}
              </h2>
              <dl className="mt-5 grid flex-1 gap-4 text-sm">
                <div>
                  <dt className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">
                    Problème traité
                  </dt>
                  <dd className="mt-1 leading-6 text-[#5F5A50]">
                    {demonstrator.card.problem}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
                    Ce que le démonstrateur montre
                  </dt>
                  <dd className="mt-1 leading-6 text-[#5F5A50]">
                    {demonstrator.card.shows}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs font-semibold uppercase text-[#8A857A]">
                    Limites
                  </dt>
                  <dd className="mt-1 leading-6 text-[#5F5A50]">
                    {demonstrator.card.limits}
                  </dd>
                </div>
              </dl>
              <Button className="mt-6 w-full" href={demonstrator.page.path} variant="secondary">
                Voir le démonstrateur →
              </Button>
            </Card>
          ))}
        </div>
        <Card className="mt-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <p className="leading-7 text-[#5F5A50]">
              Vous avez un cas proche ? Les services d'automatisation IA
              permettent de passer d'un démonstrateur à un diagnostic, un
              prototype ou un workflow réel.
            </p>
            <Button href="/services" variant="secondary">
              Voir les services →
            </Button>
          </div>
        </Card>
      </Section>

      <Section className="bg-[#11110E]">
        <div className="grid gap-8 text-white lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">
              CADRAGE
            </p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-normal sm:text-[40px]">
              Des exemples d'approche, pas des preuves client
            </h2>
          </div>
          <div className="grid gap-4">
            <p className="text-lg leading-8 text-[#F7F5EF]">{reassurance}</p>
            <p className="rounded-xl border border-white/10 bg-white/[0.08] p-4 leading-7 text-[#F7F5EF]">
              Le point important n'est pas de promettre un résultat standard,
              mais de montrer comment cadrer les données, les règles, les
              exceptions et les validations avant de déployer.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Vous voulez tester l'approche sur un vrai processus ?"
        text="Un fichier exemple, un reporting ou un dossier documentaire suffit souvent pour cadrer un diagnostic ou un prototype limité."
        cta="Planifier un échange →"
      />
    </>
  );
}

function DemonstratorOverview() {
  return (
    <div className="rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-5 shadow-[0_24px_70px_rgba(17,17,14,0.08)] sm:p-6">
      <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
        Schéma de workflow
      </p>
      <div className="mt-5 grid gap-3">
        {[
          ["Entrée", "Fichier, export ou documents autorisés"],
          ["Contrôle", "Règles, cohérence, périmètre et anomalies"],
          ["Sortie", "Synthèse, rapport ou réponse sourcée"],
          ["Validation", "Décision humaine sur les points sensibles"],
        ].map(([label, text], index) => (
          <div
            className="grid grid-cols-[44px_1fr] gap-4 rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4"
            key={label}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8EDFF] font-mono text-sm font-semibold text-[#3558D4]">
              0{index + 1}
            </span>
            <div>
              <p className="font-semibold text-[#171713]">{label}</p>
              <p className="mt-1 text-sm leading-6 text-[#5F5A50]">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-xl border border-[#D5E7DA] bg-[#F0FAF4] p-4 text-sm leading-6 text-[#0F6B47]">
        Le workflow doit rester compréhensible, testable et reprenable.
      </p>
    </div>
  );
}
