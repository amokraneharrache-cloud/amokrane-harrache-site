import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { OfferGrid } from "@/components/blocks/OfferGrid";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { offers } from "@/content/offers";
import { pages } from "@/content/pages";
import { useCases } from "@/content/useCases";
import { createMetadata } from "@/lib/seo";
import { webpageSchema } from "@/lib/schema";

export const metadata = createMetadata(pages.home);

const problems = [
  "Reporting Excel fragile",
  "Données à retraiter chaque semaine",
  "Documents traités à la main",
  "Emails répétitifs",
  "Relances oubliées",
  "Contrôles manuels",
  "Copier-coller entre outils",
];

const implementations = [
  "Automatisations Excel & reporting",
  "Traitement de données automatisé",
  "Workflows emails & documents",
  "Assistants IA internes",
  "Contrôles et alertes",
  "Relances semi-automatisées",
];

const trustBullets = [
  "Compréhension des données, fichiers, exports et règles métier",
  "Automatisations testables avant déploiement",
  "Documentation et transfert de compétence",
  "Validation humaine sur les étapes sensibles",
  "Approche pragmatique, sans promesse magique",
];

const securityPrinciples = [
  "Accès limités aux outils nécessaires",
  "Données sensibles traitées avec prudence",
  "Validation humaine sur les étapes critiques",
  "Workflows documentés",
  "Limites de l'IA expliquées dès le cadrage",
  "Aucune automatisation déployée sans test",
];

const notDoing = [
  "Je ne vends pas de transformation IA abstraite.",
  "Je ne propose pas d'agent autonome magique.",
  "Je ne promets pas de ROI garanti.",
  "Je ne remplace pas vos équipes.",
];

const demos = [
  {
    title: "Assistant IA pour fichier Excel",
    text: "Analyse d'un fichier, détection d'anomalies et synthèse exploitable.",
    href: "/demonstrateurs/assistant-excel",
  },
  {
    title: "Workflow reporting automatisé",
    text: "Consolidation de plusieurs exports, contrôles et génération d'un rapport.",
    href: "/demonstrateurs/reporting-automatise",
  },
  {
    title: "Assistant documentaire interne",
    text: "Recherche et synthèse à partir de procédures ou documents internes.",
    href: "/demonstrateurs/assistant-documentaire",
  },
];

const exampleRequests = [
  "Chaque semaine, on consolide plusieurs fichiers Excel.",
  "On reçoit trop d'emails à trier et qualifier.",
  "Nos relances clients sont suivies à la main.",
  "On veut interroger nos procédures internes avec un assistant IA.",
  "On recopie des informations depuis des PDF.",
  "On veut fiabiliser un contrôle avant import ou envoi.",
];

const methodSteps = [
  {
    title: "Comprendre",
    description: "vos fichiers, outils, contraintes et exceptions.",
  },
  {
    title: "Prioriser",
    description: "classer les sujets selon gain, complexité et risque.",
  },
  {
    title: "Prototyper",
    description: "tester un cas réel avant de déployer.",
  },
  {
    title: "Déployer",
    description: "intégrer le workflow à vos outils.",
  },
  {
    title: "Documenter",
    description: "rendre l'automatisation compréhensible et reprenable.",
  },
  {
    title: "Maintenir",
    description: "corriger, suivre et améliorer dans le temps.",
  },
];

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
      <Hero
        eyebrow="CONSULTANT AUTOMATISATION IA · PME & ÉQUIPES MÉTIER"
        title="Automatisez vos tâches répétitives avec l'IA"
        highlight="l'IA"
        subtitle="J'aide les PME à transformer leurs tâches répétitives — reportings Excel, données, emails, documents et relances — en workflows fiables, contrôlés et maintenables."
        mobileSubtitle="J'aide les PME à automatiser les tâches qui ralentissent leurs équipes : reportings Excel, données, emails, documents, relances et contrôles."
        benefits={[
          "Moins de copier-coller",
          "Moins de reporting manuel",
          "Workflows maintenables",
        ]}
        differentiator="Pas de chatbot gadget : on part de vos fichiers, vos outils et vos processus réels."
        primaryCta={{ label: "Planifier un échange →", href: "/contact" }}
        secondaryCta={{ label: "Voir les cas d'usage →", href: "/cas-usages" }}
        reassurance="Diagnostic Express dès 590 € HT - Audit automatisation IA à partir de 1 900 € HT"
        visual
      />

      <Section
        className="bg-[#F7F5EF]"
        eyebrow="CE QUE VOUS VIVEZ PEUT-ÊTRE"
        title="Vos équipes perdent encore du temps sur des tâches qui pourraient être fiabilisées"
        intro="Les meilleurs sujets d'automatisation ne sont pas toujours spectaculaires. Ce sont souvent les tâches fréquentes, fragiles ou difficiles à transmettre."
      >
        <ProblemGrid items={problems} />
      </Section>

      <Section
        className="bg-[#EFEDE5]"
        eyebrow="UN EXEMPLE CONCRET"
        title="Du reporting manuel au workflow fiable"
        intro="Le bon sujet d'automatisation se reconnaît souvent dans un processus simple à expliquer, mais pénible à produire chaque mois."
      >
        <div className="grid overflow-hidden rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] shadow-[0_24px_70px_rgba(17,17,14,0.08)] md:grid-cols-2">
          <div className="border-b border-[#DDD8CC] p-6 sm:p-8 md:border-b-0 md:border-r">
            <p className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">
              Avant
            </p>
            <p className="mt-4 text-lg leading-8 text-[#5F5A50]">
              Un reporting mensuel dépend de plusieurs fichiers Excel, exports
              manuels, copier-coller et contrôles faits à la main. Selon le
              contexte, une personne peut y passer plusieurs heures.
            </p>
          </div>
          <div className="bg-[#11110E] p-6 text-white sm:p-8">
            <p className="font-mono text-xs font-semibold uppercase text-[#DDEFE7]">
              Après
            </p>
            <p className="mt-4 text-lg leading-8 text-[#F7F5EF]">
              Les fichiers sont consolidés automatiquement, les anomalies sont
              signalées, le rapport est généré et une validation humaine reste
              possible avant envoi.
            </p>
            <Button
              className="mt-6 !border-white !bg-white !text-[#11110E] hover:!bg-[#F7F5EF]"
              href="/cas-usages"
              variant="secondary"
            >
              Voir les cas d'usage →
            </Button>
          </div>
        </div>
      </Section>

      <Section
        className="bg-[#F7F5EF]"
        eyebrow="APPROCHE"
        title="Une approche data, métier et automatisation"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-lg leading-8 text-[#5F5A50]">
              Je ne pars pas d'un outil IA à vendre. Je pars de vos fichiers,
              vos données, vos étapes et vos contraintes réelles.
            </p>
            <Button className="mt-6" href="/a-propos" variant="secondary">
              À propos d'Amokrane Harrache
            </Button>
          </div>
          <div className="rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-5 sm:p-6">
            <ul className="divide-y divide-[#DDD8CC]">
              {trustBullets.map((item) => (
                <li className="flex gap-3 py-3 first:pt-0 last:pb-0" key={item}>
                  <span aria-hidden="true" className="font-mono text-[#3558D4]">→</span>
                  <span className="text-[#5F5A50]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF]" title="Qui intervient ?">
        <div className="rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-6 shadow-[0_18px_50px_rgba(17,17,14,0.05)] sm:p-8 lg:max-w-4xl">
          <p className="text-lg leading-8 text-[#5F5A50]">
            Je suis Amokrane Harrache, data engineer spécialisé dans
            l'automatisation métier et l'intégration IA. Mon rôle : comprendre
            comment vos données circulent, où vos équipes perdent du temps,
            puis construire des workflows fiables avec les bons outils — IA
            quand elle est utile, automatisation classique quand elle suffit.
          </p>
          <Button className="mt-6" href="/a-propos" variant="secondary">
            À propos d'Amokrane Harrache →
          </Button>
        </div>
      </Section>

      <Section
        className="bg-[#EFEDE5]"
        eyebrow="CE QUE JE METS EN PLACE"
        title="Des automatisations concrètes, pas une couche d'IA inutile"
        intro="L'objectif est de transformer des processus manuels en workflows fiables, documentés et maintenables."
      >
        <CompactImplementationList items={implementations} />
      </Section>

      <Section
        className="bg-[#F7F5EF]"
        eyebrow="COMMENCER AU BON NIVEAU"
        title="Commencer au bon niveau"
      >
        <OfferGrid compact offers={offers} />
      </Section>

      <Section
        className="bg-[#EFEDE5]"
        eyebrow="COMMENT ON TRAVAILLE"
        title="Une méthode simple pour éviter l'usine à gaz"
      >
        <ProcessSteps steps={methodSteps} />
      </Section>

      <Section
        className="bg-[#F7F5EF]"
        eyebrow="CAS D'USAGE"
        title="Exemples de processus à automatiser"
      >
        <UseCasePreview />
      </Section>

      <Section
        className="bg-[#EFEDE5]"
        eyebrow="AUTOMATISER SANS PERDRE LE CONTRÔLE"
        title="Des automatisations que vous comprenez et maîtrisez"
      >
        <Card className="p-6 sm:p-8">
          <p className="mb-6 max-w-3xl text-lg leading-8 text-[#5F5A50]">
            L'objectif n'est pas d'automatiser à tout prix, mais de créer des
            workflows que vos équipes comprennent, valident et peuvent reprendre.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {securityPrinciples.map((item) => (
              <li className="flex gap-3 text-[#5F5A50]" key={item}>
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DDEFE7] font-mono text-sm font-semibold text-[#0F7A4F]">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section className="bg-[#11110E]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">
              Cadrage
            </p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-normal text-white sm:text-[40px]">
              Ce que je ne fais pas
            </h2>
            <p className="mt-5 leading-7 text-[#E9E4D8]">
              Je préfère un périmètre clair, utile et vérifiable à une promesse
              spectaculaire qui ne tient pas dans le quotidien des équipes.
            </p>
          </div>
          <div>
            <ul className="grid gap-3 md:grid-cols-2">
              {notDoing.map((item) => (
                <li className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-[#F7F5EF]" key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.08] p-4 font-medium italic leading-7 text-white">
              Je pars de vos tâches réelles, de vos outils et de vos contraintes
              pour construire des automatisations utiles et maîtrisables.
            </p>
          </div>
        </div>
      </Section>

      <Section
        className="bg-[#F7F5EF]"
        eyebrow="DÉMONSTRATEURS"
        title="Voir des démonstrateurs concrets"
        intro="Des exemples pour comprendre comment un reporting, un fichier Excel ou une base documentaire peut devenir un workflow contrôlé."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {demos.map((demo) => (
            <Card key={demo.title}>
              <Badge>DÉMONSTRATEUR</Badge>
              <h3 className="mt-4 text-lg font-semibold text-[#171713]">{demo.title}</h3>
              <p className="mt-3 leading-7 text-[#5F5A50]">{demo.text}</p>
              <Button className="mt-5 w-full" href={demo.href} variant="secondary">
                Voir le démonstrateur →
              </Button>
            </Card>
          ))}
        </div>
        <Button className="mt-8" href="/demonstrateurs">
          Voir les démonstrateurs →
        </Button>
      </Section>

      <Section
        className="bg-[#EFEDE5]"
        eyebrow="DEMANDES CONCRÈTES"
        title="Exemples de demandes à me soumettre"
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {exampleRequests.map((request) => (
            <li
              className="rounded-full border border-[#DDD8CC] bg-[#FBFAF5] px-4 py-3 text-[#5F5A50] shadow-[0_10px_30px_rgba(17,17,14,0.04)]"
              key={request}
            >
              “{request}”
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        title="Vous avez un fichier, un reporting ou un processus qui prend trop de temps ?"
        text="Décrivez simplement la tâche. On regarde si elle mérite un diagnostic, un audit ou un prototype."
        cta="Planifier un échange"
      />
    </>
  );
}

function ProblemGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li className="flex gap-3 rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 text-[#5F5A50]" key={item}>
          <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C75A2A]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CompactImplementationList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-4 rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-5 md:grid-cols-2 sm:p-6">
      {items.map((item) => (
        <li className="flex items-start gap-3" key={item}>
          <span
            aria-hidden="true"
            className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#C9D4FF] bg-[#E8EDFF] text-sm font-semibold text-[#3558D4]"
          >
            +
          </span>
          <span className="leading-7 text-[#5F5A50]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function UseCasePreview() {
  const featuredUseCases = useCases.slice(0, 6);

  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] shadow-[0_18px_50px_rgba(17,17,14,0.06)] md:block">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#EFEDE5]">
            <tr>
              {["Processus", "Avant", "Automatisation possible", "Résultat attendu"].map((heading) => (
                <th className="px-4 py-4 font-mono text-xs font-semibold uppercase text-[#8A857A]" key={heading}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD8CC]">
            {featuredUseCases.map((useCase) => (
              <tr key={useCase.title}>
                <th className="w-[22%] px-4 py-5 align-top text-sm font-semibold text-[#171713]">
                  {useCase.title}
                </th>
                <td className="w-[26%] px-4 py-5 align-top text-sm leading-6 text-[#5F5A50]">
                  {useCase.manualWork}
                </td>
                <td className="w-[26%] px-4 py-5 align-top text-sm leading-6 text-[#5F5A50]">
                  {useCase.automation}
                </td>
                <td className="w-[26%] px-4 py-5 align-top text-sm font-medium leading-6 text-[#0F7A4F]">
                  {useCase.expectedGain}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {featuredUseCases.map((useCase) => (
          <Card key={useCase.title}>
            <h3 className="font-semibold text-[#171713]">{useCase.title}</h3>
            <dl className="mt-4 grid gap-3 text-sm">
              <div>
                <dt className="font-mono text-xs font-semibold uppercase text-[#8A857A]">Avant</dt>
                <dd className="mt-1 leading-6 text-[#5F5A50]">{useCase.manualWork}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-semibold uppercase text-[#8A857A]">Automatisation possible</dt>
                <dd className="mt-1 leading-6 text-[#5F5A50]">{useCase.automation}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-semibold uppercase text-[#8A857A]">Résultat attendu</dt>
                <dd className="mt-1 font-medium leading-6 text-[#0F7A4F]">{useCase.expectedGain}</dd>
              </div>
            </dl>
          </Card>
        ))}
      </div>
    </>
  );
}
