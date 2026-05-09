import { CTASection } from "@/components/blocks/CTASection";
import { OfferGrid } from "@/components/blocks/OfferGrid";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { offers } from "@/content/offers";
import { pages } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { webpageSchema } from "@/lib/schema";

export const metadata = createMetadata(pages.home);

const proofPoints = [
  {
    title: "3 démonstrateurs interactifs",
    text: "Excel, reporting, assistant documentaire.",
  },
  {
    title: "Prix publics",
    text: "Diagnostic dès 590 € HT, audit dès 1 900 € HT.",
  },
  {
    title: "Validation humaine",
    text: "Les étapes sensibles restent contrôlées.",
  },
  {
    title: "Expertise data / workflows métier",
    text: "Fichiers, règles, contrôles et processus réels.",
  },
];

const demos = [
  {
    title: "Assistant Excel",
    text: "Détecter colonnes, anomalies simples et points à vérifier.",
    href: "/demonstrateurs/assistant-excel",
    cta: "Tester la démo Excel",
  },
  {
    title: "Reporting automatisé",
    text: "Consolider des exports, contrôler les écarts, préparer un rapport.",
    href: "/demonstrateurs/reporting-automatise",
    cta: "Voir le workflow reporting",
  },
  {
    title: "Assistant documentaire",
    text: "Répondre à partir d'un périmètre documentaire défini.",
    href: "/demonstrateurs/assistant-documentaire",
    cta: "Tester l'assistant documentaire",
  },
];

const businessProblems = [
  {
    title: "Reportings Excel et CSV répétitifs",
    text: "Des exports à consolider, vérifier, commenter et diffuser chaque semaine ou chaque mois.",
  },
  {
    title: "Emails, documents et relances manuelles",
    text: "Des demandes à qualifier, des PDF à relire, des relances à suivre sans dépendre de la mémoire de l'équipe.",
  },
  {
    title: "Données dispersées et contrôles fragiles",
    text: "Des règles métier implicites, des écarts repérés trop tard et des validations difficiles à tracer.",
  },
];

const automationPrinciples = [
  "Je pars des fichiers, données et processus réels.",
  "Les règles métier sont documentées.",
  "Les étapes sensibles restent validées par une personne.",
  "Je ne vends pas d'agent magique autonome.",
  "Je suis data engineer, orienté workflows concrets.",
];

const methodSteps = [
  {
    title: "Cadrer",
    description: "Identifier le fichier, les règles, les risques et la validation à conserver.",
  },
  {
    title: "Prototyper",
    description: "Tester un workflow court sur des données représentatives avant de déployer.",
  },
  {
    title: "Déployer",
    description: "Documenter, intégrer et rendre l'automatisation maintenable par l'équipe.",
  },
];

const homepageOffers = offers.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webpageSchema({
          path: pages.home.path,
          name: pages.home.title,
          description: pages.home.description,
        })}
      />
      <HomeHero />

      <ProofBand />

      <Section
        className="bg-[#FBFAF5]"
        eyebrow="DÉMOS INTERACTIVES"
        title="Voyez concrètement ce qui peut être automatisé"
        intro="Trois démonstrateurs pour tester l'approche sur des cas proches du terrain : fichier Excel, reporting automatisé, assistant documentaire."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {demos.map((demo) => (
            <Card className="flex h-full flex-col border-[#C8C1B3] bg-white" key={demo.title}>
              <Badge className="border-[#D5E7DA] bg-[#F0FAF4] text-[#0F7A4F]">
                Démo interactive disponible
              </Badge>
              <h3 className="mt-5 text-xl font-semibold leading-tight text-[#171713]">
                {demo.title}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-[#5F5A50]">{demo.text}</p>
              <Button className="mt-6 w-full" href={demo.href} variant="secondary">
                {demo.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="bg-[#EFEDE5]"
        eyebrow="PROBLÈMES PRIORITAIRES"
        title="Les meilleurs sujets sont souvent les plus répétitifs"
        intro="Pas besoin d'un grand programme IA : un processus fréquent, fragile ou pénible suffit souvent à créer de la valeur."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {businessProblems.map((problem) => (
            <Card className="h-full bg-[#FBFAF5]" key={problem.title}>
              <h3 className="text-xl font-semibold leading-tight text-[#171713]">
                {problem.title}
              </h3>
              <p className="mt-4 leading-7 text-[#5F5A50]">{problem.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        className="bg-[#F7F5EF]"
        eyebrow="COMMENCER AU BON NIVEAU"
        title="Trois points d'entrée clairs"
        intro="Prix publics, périmètre court et livrables concrets : on choisit le bon niveau selon votre maturité."
      >
        <OfferGrid compact offers={homepageOffers} />
        <div className="mt-8">
          <Button href="/services" variant="secondary">
            Voir toutes les offres
          </Button>
        </div>
      </Section>

      <AutomationPrinciplesSection />

      <Section
        className="bg-[#EFEDE5]"
        eyebrow="MÉTHODE"
        title="Une méthode courte pour avancer sans usine à gaz"
      >
        <ProcessSteps steps={methodSteps} />
        <div className="mt-8">
          <Button href="/methode" variant="secondary">
            Voir la méthode détaillée
          </Button>
        </div>
      </Section>

      <CTASection
        title="Vous avez un fichier, un reporting ou un processus qui revient chaque semaine ?"
        text="Décrivez-moi ce que vous faites aujourd'hui à la main. Je vous dirai si une automatisation simple, fiable et maintenable est réaliste."
        cta="Me parler de votre besoin"
      />
    </>
  );
}

function HomeHero() {
  return (
    <section className="border-b border-[#DDD8CC] bg-[#F7F5EF] py-12 sm:py-20 lg:py-16">
      <Container>
        <div className="grid min-w-0 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="min-w-0">
            <Badge>
              <span className="sm:hidden">AUTOMATISATION IA · PME & MÉTIER</span>
              <span className="hidden sm:inline">
                CONSULTANT AUTOMATISATION IA · PME & ÉQUIPES MÉTIER
              </span>
            </Badge>
            <h1 className="mt-6 max-w-4xl text-[36px] font-semibold leading-[1.06] tracking-normal text-[#171713] sm:text-[58px]">
              Automatisez vos reportings, fichiers et relances{" "}
              <span className="block text-[#3558D4]">sans perdre le contrôle</span>
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#5F5A50] sm:mt-6 sm:text-xl sm:leading-9">
              Je transforme vos tâches Excel, CSV, emails, documents et
              contrôles métier en workflows fiables, testés et maintenables. IA
              quand elle est utile, automatisation classique quand elle suffit.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Button className="w-full sm:w-auto" href="/contact">
                Planifier un échange
              </Button>
              <Button
                className="w-full sm:w-auto"
                href="/demonstrateurs/assistant-excel"
                variant="secondary"
              >
                Tester une démo interactive
              </Button>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#8A857A] sm:mt-5">
              Diagnostic Express dès 590 € HT · Audit automatisation IA à partir
              de 1 900 € HT
            </p>
          </div>
          <HeroWorkflowSnapshot />
        </div>
      </Container>
    </section>
  );
}

function HeroWorkflowSnapshot() {
  return (
    <div className="hidden lg:block">
      <div className="rounded-2xl border border-[#171713] bg-[#11110E] p-4 text-white shadow-[0_28px_80px_rgba(17,17,14,0.18)]">
        <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
          <p className="font-mono text-xs font-semibold uppercase text-[#DDEFE7]">
            Workflow métier
          </p>
          <p className="mt-3 text-xl font-semibold leading-tight">
            Du fichier brut au contrôle validé
          </p>
          <div className="mt-5 grid gap-2.5">
            {[
              ["01", "Entrée", "Excel, CSV, emails ou documents"],
              ["02", "Règles", "Contrôles, écarts, exceptions"],
              ["03", "Sortie", "Rapport, synthèse ou relance prête"],
              ["04", "Validation", "Décision humaine avant diffusion"],
            ].map(([number, label, text]) => (
              <div
                className="grid grid-cols-[38px_1fr] gap-3 rounded-xl border border-white/10 bg-white/[0.08] p-3"
                key={label}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8EDFF] font-mono text-xs font-semibold text-[#3558D4]">
                  {number}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-white">{label}</p>
                  <p className="mt-1 text-sm leading-6 text-[#E9E4D8]">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-xl border border-[#F0C7B2] bg-[#FFF3ED] p-3 text-sm font-medium leading-6 text-[#7A3B20]">
            Anti-bullshit : si une règle simple suffit, on n'ajoute pas d'IA.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProofBand() {
  return (
    <section className="border-b border-[#2E2E27] bg-[#11110E] py-5 text-white sm:py-6">
      <Container>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((proof) => (
            <li className="min-w-0 border-l border-white/20 pl-4" key={proof.title}>
              <p className="font-semibold leading-6 text-white">{proof.title}</p>
              <p className="mt-1 text-sm leading-6 text-[#E9E4D8]">{proof.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function AutomationPrinciplesSection() {
  return (
    <section className="bg-[#11110E] py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#DDEFE7]">
              CADRAGE
            </p>
            <h2 className="mt-3 max-w-3xl text-[30px] font-semibold leading-tight tracking-normal sm:text-[40px]">
              Une automatisation cadrée, pas une IA magique
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E9E4D8]">
              L'objectif n'est pas de rendre un processus opaque. Il doit rester
              testable, compréhensible et reprenable.
            </p>
          </div>
          <ul className="grid gap-3">
            {automationPrinciples.map((principle) => (
              <li
                className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.08] p-4 text-[#F7F5EF]"
                key={principle}
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DDEFE7] font-mono text-sm font-semibold text-[#0F7A4F]"
                >
                  ✓
                </span>
                <span className="leading-7">{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
