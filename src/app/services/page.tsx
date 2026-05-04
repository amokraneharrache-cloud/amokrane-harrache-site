import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { OfferGrid } from "@/components/blocks/OfferGrid";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { Section } from "@/components/ui/Section";
import { offers } from "@/content/offers";
import { pages } from "@/content/pages";
import { servicePages } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";

export const metadata = createMetadata(pages.services);

const servicesFaq = [
  {
    question: "Je ne sais pas quelle offre choisir, par où commencer ?",
    answer:
      "Décrivez le processus, les fichiers ou les emails concernés. Si plusieurs sujets se mélangent, l'audit est souvent le meilleur point de départ ; si le sujet est très précis, un Diagnostic Express peut suffire.",
  },
  {
    question: "Quelle différence entre Diagnostic Express et Audit ?",
    answer:
      "Le Diagnostic Express analyse un irritant précis. L'Audit Automatisation IA compare plusieurs tâches ou processus, priorise les sujets et construit une feuille de route.",
  },
  {
    question: "Faut-il déjà avoir un cahier des charges ?",
    answer:
      "Non. Quelques exemples concrets suffisent souvent : fichier, export, email type, PDF, capture d'écran ou description des contrôles actuels.",
  },
];

const domains = [
  "Reporting Excel fragile",
  "Exports CSV à retraiter",
  "Contrôles de données",
  "Emails entrants à qualifier",
  "PDF ou documents à extraire",
  "Assistant interne sur procédures",
];

const steps = [
  { title: "Comprendre", description: "Fichiers, outils, règles, exceptions et validations." },
  { title: "Choisir le bon format", description: "Diagnostic, audit, prototype ou déploiement selon le risque." },
  { title: "Tester sur du concret", description: "Un exemple réel vaut mieux qu'une promesse générique." },
  { title: "Déployer et documenter", description: "Le workflow doit pouvoir être compris et repris." },
  { title: "Maintenir", description: "Les fichiers, règles et outils évoluent ; l'automatisation aussi." },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: pages.services.path,
            name: pages.services.title,
            description: pages.services.description,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: pages.services.label, path: pages.services.path },
          ]),
        ]}
      />
      <Hero
        eyebrow="SERVICES"
        title="Services d'automatisation IA pour équipes métier et PME"
        subtitle="Des interventions concrètes pour réduire les tâches manuelles, fiabiliser vos workflows et gagner du temps sur les reportings, données, emails, documents et assistants internes."
        primaryCta={{ label: "Trouver le bon point de départ →", href: "#quelle-offre-choisir" }}
        secondaryCta={{ label: "Demander un audit →", href: "/audit-automatisation-ia" }}
        reassurance="Diagnostic Express dès 590 € HT · Audit automatisation IA à partir de 1 900 € HT"
      />

      <Section
        id="quelle-offre-choisir"
        eyebrow="CHOIX"
        title="Quelle offre choisir ?"
        intro="Le bon format dépend surtout de votre niveau de clarté : un irritant isolé, plusieurs sujets à prioriser, un prototype à tester ou un workflow à maintenir."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {offers.map((offer) => (
            <Card className={offer.badge ? "border-[#B7C5FF] bg-[#F7F8FF]" : undefined} key={offer.title}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  {offer.badge ? <Badge>{offer.badge}</Badge> : null}
                  <h3 className={offer.badge ? "mt-4 text-xl font-semibold text-[#171713]" : "text-xl font-semibold text-[#171713]"}>
                    {offer.title}
                  </h3>
                </div>
                <p className="rounded-lg border border-[#D8E0FF] bg-[#F3F5FF] px-3 py-2 font-mono text-sm font-semibold text-[#3558D4]">
                  {offer.budget}
                </p>
              </div>
              <dl className="mt-5 grid gap-4 text-sm leading-6 text-[#5F5A50]">
                <div>
                  <dt className="font-semibold text-[#171713]">Situation</dt>
                  <dd className="mt-1">{offer.situation}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#171713]">Prochaine étape</dt>
                  <dd className="mt-1">{offer.nextStep}</dd>
                </div>
              </dl>
              <Button className="mt-6" href={offer.href} variant="secondary">
                {offer.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="OFFRES" title="Commencer petit, cadrer proprement, déployer seulement si utile">
        <OfferGrid offers={offers} compact />
      </Section>

      <Section
        eyebrow="DOMAINES"
        title="Les processus que je traite le plus souvent"
        intro="Les domaines ci-dessous reviennent souvent dans les équipes métier : fichiers, données, documents, emails et connaissances internes à rendre plus fiables."
      >
        <ServiceGrid services={servicePages} />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <div className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 text-[#5F5A50]" key={domain}>
              {domain}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#11110E]">
        <div className="grid gap-8 text-white lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">Cadrage</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-normal sm:text-[40px]">
              Pas une vitrine IA, un travail sur vos processus réels
            </h2>
          </div>
          <div className="grid gap-4">
            <p className="text-lg leading-8 text-[#F7F5EF]">
              Les meilleurs sujets sont souvent prosaïques : un fichier envoyé chaque lundi, un contrôle que personne ne veut refaire, un PDF à relire ou une boîte mail qui déborde.
            </p>
            <Button href="/cas-usages" variant="dark">
              Voir les cas d'usage →
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="MÉTHODE" title="Comment se passe la suite">
        <ProcessSteps steps={steps} />
      </Section>

      <Section eyebrow="FAQ" title="Questions fréquentes">
        <FAQ items={servicesFaq} />
      </Section>

      <CTASection
        title="Vous ne savez pas encore quelle offre choisir ?"
        text="Décrivez le processus. Le premier échange sert à choisir entre diagnostic, audit, prototype ou aucun projet pour l'instant."
        cta="Trouver le bon point de départ →"
      />
    </>
  );
}
