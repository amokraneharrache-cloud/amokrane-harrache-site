import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { Section } from "@/components/ui/Section";
import { pages } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";

export const metadata = createMetadata(pages.method);

const steps = [
  {
    title: "Comprendre",
    description: "Observer le processus réel : fichiers, outils, personnes, exceptions, validations et irritants.",
  },
  {
    title: "Prioriser",
    description: "Classer les sujets selon fréquence, risque, complexité, dépendances et valeur métier attendue.",
  },
  {
    title: "Prototyper",
    description: "Tester un périmètre réduit sur données réelles ou anonymisées pour voir les limites tôt.",
  },
  {
    title: "Déployer",
    description: "Intégrer le workflow à vos outils, avec contrôles, messages d'erreur et validation humaine.",
  },
  {
    title: "Documenter",
    description: "Rendre le fonctionnement compréhensible : entrées, sorties, règles, limites et reprise possible.",
  },
  {
    title: "Maintenir",
    description: "Adapter l'automatisation quand les fichiers, règles, volumes ou outils changent.",
  },
];

const clientProvides = [
  "Un exemple de fichier, export, email type, PDF ou capture du processus",
  "Les règles métier connues, même imparfaites",
  "Les exceptions qui font perdre du temps aujourd'hui",
  "Les personnes qui produisent, contrôlent ou utilisent le résultat",
  "Les contraintes de sécurité, accès et outils internes",
];

const afterFirstCall = [
  "On confirme si le sujet est automatisable ou trop flou",
  "On choisit le bon format : diagnostic, audit, prototype ou rien pour l'instant",
  "On liste les exemples nécessaires pour travailler proprement",
  "On identifie les validations humaines à conserver",
];

const startingPoints = [
  {
    title: "Diagnostic Express",
    text: "Pour analyser un fichier, reporting, email type ou irritant précis avant de décider.",
    cta: "Réserver un diagnostic →",
    href: "/contact",
  },
  {
    title: "Audit Automatisation IA",
    text: "Pour prioriser plusieurs tâches, risques, outils et prochaines étapes.",
    cta: "Demander un audit →",
    href: "/audit-automatisation-ia",
  },
  {
    title: "Prototype Workflow IA / Data",
    text: "Pour tester un cas réel sur un périmètre court avant d'élargir.",
    cta: "Parler d'un prototype →",
    href: "/contact",
  },
];

const documented = [
  "Données d'entrée",
  "Règles métier",
  "Sorties attendues",
  "Contrôles",
  "Limites connues",
  "Validations humaines",
  "Procédure de reprise",
];

const faq = [
  {
    question: "Faut-il déjà avoir un cahier des charges ?",
    answer:
      "Non. Un exemple de fichier, d'export, d'email type, de PDF ou une description du processus suffit souvent pour commencer à cadrer.",
  },
  {
    question: "Pourquoi ne pas automatiser directement ?",
    answer:
      "Parce qu'un processus flou produit vite une automatisation fragile. Le cadrage sert à rendre les règles, exceptions, contrôles et validations testables.",
  },
  {
    question: "Que reçoit-on à la fin ?",
    answer:
      "Selon le format : une décision, une priorisation, un prototype, un workflow documenté ou une liste claire des prérequis avant d'automatiser.",
  },
];

export default function MethodPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: pages.method.path,
            name: pages.method.title,
            description: pages.method.description,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: pages.method.label, path: pages.method.path },
          ]),
        ]}
      />
      <Hero
        eyebrow="MÉTHODE"
        title="Une méthode simple pour automatiser sans créer une usine à gaz"
        subtitle="Le travail commence par le processus réel : fichiers, outils, exceptions, validations. La solution technique vient ensuite, seulement si elle apporte quelque chose."
        benefits={["Périmètre court", "Validation humaine", "Documentation reprenable"]}
        primaryCta={{ label: "Planifier un échange →", href: "/contact" }}
        secondaryCta={{ label: "Comprendre le bon point de départ →", href: "#bon-point-de-depart" }}
      />

      <Section
        eyebrow="CADRAGE"
        title="Pourquoi cadrer avant d'automatiser"
        intro="Un bon projet d'automatisation ne commence pas par un outil. Il commence par un processus suffisamment clair pour être testé, contrôlé et repris par une équipe."
      >
        <Card>
          <p className="text-lg leading-8 text-[#5F5A50]">
            Le cadrage évite de construire une solution impressionnante sur des règles implicites. On clarifie les entrées, les sorties, les exceptions et les validations avant de choisir entre automatisation classique, IA, prototype ou simple amélioration de processus.
          </p>
        </Card>
      </Section>

      <Section id="bon-point-de-depart" className="scroll-mt-24 bg-[#EFEDE5]" eyebrow="DÉMARRER" title="Le bon point de départ">
        <div className="grid gap-4 md:grid-cols-3">
          {startingPoints.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-[#171713]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#5F5A50]">{item.text}</p>
              <Button className="mt-5 w-full" href={item.href} variant="secondary">
                {item.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="ÉTAPES" title="Comprendre, prioriser, prototyper, déployer, documenter, maintenir">
        <ProcessSteps steps={steps} />
      </Section>

      <Section eyebrow="CE QUE VOUS FOURNISSEZ" title="Le bon matériau pour avancer vite">
        <div className="grid gap-4 md:grid-cols-2">
          {clientProvides.map((item) => (
            <Card key={item}>
              <p className="leading-7 text-[#5F5A50]">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="DOCUMENTATION" title="Ce qui est documenté">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Card>
            <p className="text-lg leading-8 text-[#5F5A50]">
              Chaque automatisation doit rester compréhensible : données d'entrée, règles métier, sorties attendues, contrôles, limites connues, validations humaines et procédure de reprise.
            </p>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {documented.map((item) => (
              <div className="flex gap-3 rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 text-[#5F5A50]" key={item}>
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DDEFE7] text-sm font-semibold text-[#0F7A4F]">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#11110E]">
        <div className="grid gap-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">Périmètre</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-normal sm:text-[40px]">
              On évite l'usine à gaz
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#F7F5EF]">
              On évite l'usine à gaz en gardant un périmètre court, des règles explicites, des validations visibles et une première version testable avant d'élargir.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Un périmètre court",
                "Des règles métier écrites",
                "Des sorties vérifiables",
                "Une reprise possible par l'équipe",
              ].map((item) => (
                <li className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-[#F7F5EF]" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="APRÈS LE PREMIER ÉCHANGE" title="On ne force pas un projet si le sujet n'est pas mûr">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="self-start bg-[#11110E] text-white">
            <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">Décision</p>
            <p className="mt-4 text-lg leading-8 text-[#F7F5EF]">
              Le premier échange doit surtout éviter de partir trop vite dans un outil. Si le problème est mal défini, on le dit.
            </p>
          </Card>
          <div className="grid gap-3">
            {afterFirstCall.map((item) => (
              <div className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 text-[#5F5A50]" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="FAQ" title="Questions fréquentes">
        <FAQ items={faq} />
      </Section>

      <CTASection
        title="Vous avez un processus à cadrer ?"
        text="Décrivez-le simplement. On choisit ensuite le plus petit format utile pour avancer sans bruit."
        cta="Planifier un échange →"
      />
    </>
  );
}
