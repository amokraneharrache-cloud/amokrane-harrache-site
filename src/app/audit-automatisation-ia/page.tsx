import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { Section } from "@/components/ui/Section";
import { pages } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, webpageSchema } from "@/lib/schema";

export const metadata = createMetadata(pages.audit);

const forWho = [
  "Plusieurs idées d'automatisation existent, mais aucun ordre de priorité n'est clair.",
  "L'équipe hésite entre IA, workflow, script ou simple amélioration de process.",
  "Vous voulez éviter d'acheter une solution avant d'avoir cadré le besoin réel.",
  "Les processus mélangent fichiers, emails, exports, documents et validations.",
];

const analysed = [
  "Tâches répétitives",
  "Fichiers Excel, CSV, documents et emails",
  "Volumes, fréquence et exceptions",
  "Règles métier",
  "Validations humaines",
  "Risques données, outils, sécurité et adoption",
  "Niveau de solution adapté : règle simple, script, workflow, IA ou assistant",
];

const clarifies = [
  "Ce qui mérite vraiment d'être automatisé",
  "Ce qui doit rester manuel ou être simplifié avant automatisation",
  "Le niveau de solution nécessaire : règle simple, script, workflow, IA ou assistant",
  "Les risques données, sécurité, adoption et maintenance",
  "Le bon ordre de priorité et la prochaine étape concrète",
];

const deliverables = [
  "Cartographie des tâches répétitives, fichiers, outils, règles et validations",
  "Priorisation gain / complexité / risque",
  "Recommandations outils et niveau de solution adapté",
  "Roadmap 30 / 60 / 90 jours",
  "Proposition de prochaine étape : rien, diagnostic, prototype ou déploiement",
];

const steps = [
  { title: "Cadrage", description: "Objectifs, périmètre, interlocuteurs, outils et contraintes." },
  { title: "Analyse terrain", description: "Fichiers, exports, emails, documents, règles métier et exceptions." },
  { title: "Priorisation", description: "Classement selon gain potentiel, complexité, risque et dépendances." },
  { title: "Recommandations", description: "Solutions réalistes, limites, prérequis et premier périmètre testable." },
  { title: "Restitution", description: "Décisions à prendre, roadmap et prochaine étape claire." },
];

const afterAudit = [
  "Ne rien automatiser si le sujet n'est pas mûr",
  "Lancer un Diagnostic Express sur un processus prioritaire",
  "Construire un prototype workflow IA / data",
  "Déployer une automatisation complète sur un périmètre validé",
  "Cadrer un assistant IA interne si le besoin est documentaire",
];

const auditCases = [
  {
    situation: "Une équipe consolide plusieurs fichiers et relance par email sans savoir quel sujet traiter d'abord.",
    analysis:
      "L'audit compare fréquence, erreurs, dépendances outils et validations nécessaires.",
    decision:
      "Le reporting est priorisé en prototype, les relances restent en cadrage plus léger.",
  },
  {
    situation: "La direction veut utiliser l'IA mais les données sources sont dispersées et peu fiables.",
    analysis:
      "On distingue nettoyage de données, contrôles à documenter et cas où l'IA n'apporte rien.",
    decision:
      "La première étape devient un traitement de données contrôlé, pas un assistant IA.",
  },
  {
    situation: "Un assistant interne est envisagé sur beaucoup de documents métiers.",
    analysis:
      "L'audit regarde les sources, accès, questions fréquentes, risques et limites de réponse.",
    decision:
      "Le projet démarre sur un périmètre documentaire réduit avant tout déploiement large.",
  },
];

const faq = [
  {
    question: "Suis-je obligé de lancer un développement après l'audit ?",
    answer:
      "Non. L'audit sert à décider. La bonne conclusion peut être un prototype, un diagnostic ciblé, une automatisation plus tard, ou aucun développement si le sujet n'est pas mûr.",
  },
  {
    question: "En quoi ce n'est pas un PDF bullshit ?",
    answer:
      "Parce qu'on part de vos tâches, fichiers, emails, documents, règles, exceptions et validations. La restitution doit aider à décider quoi faire, quoi éviter, et dans quel ordre.",
  },
  {
    question: "Quelle différence avec le Diagnostic Express ?",
    answer:
      "Le diagnostic analyse un sujet précis. L'audit compare plusieurs processus et produit une priorisation actionnable.",
  },
  {
    question: "Pourquoi à partir de 1 900 € HT ?",
    answer:
      "Le prix dépend du nombre de processus à analyser, des interlocuteurs impliqués, des outils concernés et du niveau de restitution attendu.",
  },
  {
    question: "Faut-il donner accès à toutes les données ?",
    answer:
      "Non. On peut commencer avec des exemples anonymisés, des fichiers de test ou une description du processus avant d'ouvrir un accès plus cadré.",
  },
];

export default function AuditPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: pages.audit.path,
            name: pages.audit.title,
            description: pages.audit.description,
          }),
          serviceSchema({
            path: pages.audit.path,
            name: "Audit automatisation IA",
            description: pages.audit.description,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Services", path: "/services" },
            { name: pages.audit.label, path: pages.audit.path },
          ]),
        ]}
      />
      <Hero
        eyebrow="AUDIT AUTOMATISATION IA"
        title="Prioriser vos automatisations IA quand tout semble urgent"
        subtitle="Vous avez plusieurs tâches répétitives, fichiers, emails, documents ou contrôles à automatiser, mais aucune priorité claire. L'audit sert à décider quoi traiter d'abord, quoi éviter et quelle solution suffit vraiment."
        primaryCta={{ label: "Demander un audit →", href: "/contact" }}
        secondaryCta={{ label: "Comprendre la méthode →", href: "/methode" }}
        reassurance="À partir de 1 900 € HT · aucune obligation de développement après l'audit"
        sideContent={<AuditHeroCard />}
      />

      <Section eyebrow="POUR QUI" title="Quand l'audit est le bon point de départ">
        <div className="grid gap-4 md:grid-cols-2">
          {forWho.map((item) => (
            <Card key={item}>
              <p className="leading-7 text-[#5F5A50]">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="ANALYSE" title="Ce qui est analysé pendant l'audit">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {analysed.map((item) => (
            <div className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 text-[#5F5A50]" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="DÉCIDER" title="Ce que l'audit clarifie">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-[#11110E] text-white">
            <Badge className="border-white/10 bg-white/[0.08] text-[#E8EDFF]">Anti-bullshit</Badge>
            <p className="mt-5 text-lg leading-8 text-[#F7F5EF]">
              L'audit ne vend pas une transformation IA abstraite. Il sert à décider quoi faire, quoi éviter, et par où commencer avec le moins de friction possible.
            </p>
          </Card>
          <ul className="grid gap-3">
            {clarifies.map((item) => (
              <li className="flex gap-3 rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 text-[#5F5A50]" key={item}>
                <span aria-hidden="true" className="font-mono text-[#3558D4]">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-[#11110E]">
        <div className="grid gap-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">Anti-bullshit</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-normal sm:text-[40px]">
              Pas un PDF théorique sur l'IA dans votre entreprise
            </h2>
          </div>
          <div className="grid gap-4">
            <p className="text-lg leading-8 text-[#F7F5EF]">
              La restitution doit relier des tâches réelles à des décisions concrètes : automatiser, simplifier, prototyper, reporter ou ne rien lancer. Vous gardez la liberté de ne pas développer après l'audit.
            </p>
            <Button href="/contact" variant="dark">
              Demander un audit →
            </Button>
          </div>
        </div>
      </Section>

      <Section eyebrow="DÉROULÉ" title="Un déroulé court, orienté terrain">
        <ProcessSteps steps={steps} />
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="LIVRABLES" title="Ce que vous récupérez à la fin">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
            <Card key={item}>
              <p className="leading-7 text-[#5F5A50]">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="CAS CONCRETS" title="Situation, analyse, décision">
        <div className="grid gap-4 lg:grid-cols-3">
          {auditCases.map((item) => (
            <Card key={item.situation}>
              <dl className="grid gap-4 text-sm">
                <div>
                  <dt className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">Situation</dt>
                  <dd className="mt-1 leading-6 text-[#5F5A50]">{item.situation}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs font-semibold uppercase text-[#3558D4]">Analyse</dt>
                  <dd className="mt-1 leading-6 text-[#5F5A50]">{item.analysis}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">Décision</dt>
                  <dd className="mt-1 font-medium leading-6 text-[#0F7A4F]">{item.decision}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
        <Button className="mt-8" href="/cas-usages" variant="secondary">
          Voir les cas d'usage →
        </Button>
      </Section>

      <Section eyebrow="PRIX" title="Prix à partir de 1 900 € HT">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Card>
            <p className="font-mono text-sm font-semibold uppercase text-[#3558D4]">Audit automatisation IA</p>
            <p className="mt-4 text-4xl font-semibold text-[#171713]">À partir de 1 900 € HT</p>
            <p className="mt-4 leading-7 text-[#5F5A50]">
              Le prix final dépend du nombre de processus, des interlocuteurs, des données à examiner et du niveau de restitution attendu.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-[#171713]">Si le besoin est plus étroit</h3>
            <p className="mt-4 leading-7 text-[#5F5A50]">
              Un Diagnostic Express à 590 € HT peut suffire pour analyser un seul fichier, reporting ou processus précis avant d'envisager un sujet plus large.
            </p>
            <Button className="mt-6" href="/contact" variant="secondary">
              Planifier un échange →
            </Button>
          </Card>
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="APRÈS L'AUDIT" title="Les suites possibles restent ouvertes">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {afterAudit.map((item) => (
            <Card key={item}>
              <p className="leading-7 text-[#5F5A50]">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Questions fréquentes">
        <FAQ items={faq} />
      </Section>

      <CTASection
        title="Prêt à prioriser les bons sujets ?"
        text="Décrivez les processus qui prennent du temps. On vérifie si l'audit est le bon format ou si un diagnostic suffit."
        cta="Demander un audit →"
      />
    </>
  );
}

function AuditHeroCard() {
  const items = [
    "Cartographie des tâches répétitives",
    "Priorisation gain / complexité / risque",
    "Recommandations outils",
    "Roadmap 30 / 60 / 90 jours",
  ];

  return (
    <Card className="bg-[#FBFAF5]">
      <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">Ce que vous obtenez</p>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="flex gap-3 rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4 leading-7 text-[#5F5A50]" key={item}>
            <span aria-hidden="true" className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DDEFE7] text-sm font-semibold text-[#0F7A4F]">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
