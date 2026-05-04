import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { Section } from "@/components/ui/Section";
import { pages } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, webpageSchema } from "@/lib/schema";

export const metadata = createMetadata(pages.security);

const principles = [
  {
    label: "Accès",
    title: "Accès limités",
    text: "Connecter uniquement les outils, dossiers, boîtes ou fichiers nécessaires au workflow.",
  },
  {
    label: "Données",
    title: "Données minimisées",
    text: "Éviter de traiter plus de données que nécessaire, surtout sur les informations sensibles.",
  },
  {
    label: "Humain",
    title: "Validation humaine",
    text: "Garder une revue humaine sur les décisions, communications externes et données critiques.",
  },
  {
    label: "Outils",
    title: "Choix d'outils selon contexte",
    text: "Adapter l'architecture au niveau de confidentialité, budget, contraintes métier et outils existants.",
  },
  {
    label: "Limites",
    title: "Limites de l'IA visibles",
    text: "Prévoir les cas incertains, les erreurs possibles et les messages de limite plutôt qu'une réponse confiante.",
  },
  {
    label: "Reprise",
    title: "Documentation",
    text: "Documenter entrées, sorties, règles, accès, validations et procédure de reprise.",
  },
];

const sensitive = [
  "Données personnelles ou RH",
  "Informations financières ou contractuelles",
  "Emails clients, fournisseurs ou collaborateurs",
  "Documents internes confidentiels",
  "Données métier critiques avant import ou diffusion",
];

const beforeConnecting = [
  {
    title: "Données envoyées ou non à l'extérieur",
    text: "On identifie ce qui peut sortir, ce qui doit rester local et ce qui doit être anonymisé.",
  },
  {
    title: "Outils retenus",
    text: "Le choix dépend du niveau de confidentialité, des contraintes internes et des outils déjà utilisés.",
  },
  {
    title: "Niveau de sensibilité",
    text: "Données RH, financières, clients ou opérationnelles n'appellent pas les mêmes garde-fous.",
  },
  {
    title: "Accès limités",
    text: "Le workflow ne reçoit que les dossiers, boîtes ou fichiers nécessaires au cas traité.",
  },
  {
    title: "Validation humaine",
    text: "Les décisions sensibles, envois externes et corrections critiques restent relus par une personne.",
  },
  {
    title: "Erreur ou incertitude IA",
    text: "On prévoit refus, mise en attente, journal d'erreurs ou retour vers une validation humaine.",
  },
  {
    title: "Documentation et reprise",
    text: "Les règles, accès, validations et procédures de reprise sont écrits pour rester maintenables.",
  },
];

const notPromising = [
  "Je ne promets pas un système 100% RGPD sans audit juridique dédié.",
  "Je ne promets pas zéro erreur de l'IA.",
  "Je ne déploie pas d'actions autonomes sensibles sans validation humaine.",
  "Je ne branche pas un assistant sur tous les documents de l'entreprise par défaut.",
];

const securityCases = [
  {
    situation: "Un reporting finance doit être automatisé à partir d'exports sensibles.",
    safeguards:
      "Limiter les fichiers lus, garder la validation avant diffusion et documenter les contrôles bloquants.",
    result: "Le rapport peut être préparé sans diffusion automatique ni accès trop large aux données.",
  },
  {
    situation: "Des emails clients doivent être triés et résumés avec une aide IA.",
    safeguards:
      "Restreindre le périmètre à une boîte ou un libellé, générer des brouillons et laisser l'envoi à une personne.",
    result: "Le tri accélère le traitement, mais les messages sensibles ne partent pas seuls.",
  },
  {
    situation: "Un assistant interne doit consulter des procédures et documents confidentiels.",
    safeguards:
      "Commencer par un corpus choisi, séparer les accès par équipe et refuser les questions hors périmètre.",
    result: "Les réponses restent limitées au périmètre autorisé et les refus deviennent explicites.",
  },
];

const faq = [
  {
    question: "Est-ce que vous promettez une conformité RGPD complète ?",
    answer:
      "Non. Je cadre les données, accès, validations et limites techniques, mais une conformité juridique complète nécessite un audit dédié si le contexte l'exige.",
  },
  {
    question: "Peut-on éviter d'envoyer certaines données à un outil externe ?",
    answer:
      "Oui, le cadrage sert justement à décider ce qui peut sortir, ce qui doit rester local ou limité, et quel outil est acceptable selon le niveau de sensibilité.",
  },
  {
    question: "Que se passe-t-il si l'IA se trompe ?",
    answer:
      "Les cas sensibles doivent rester validés par une personne. On prévoit aussi des refus hors périmètre, des alertes, des journaux et des sorties d'erreur plutôt qu'une confiance aveugle.",
  },
  {
    question: "Comment limiter les accès aux données ?",
    answer:
      "On limite les connexions aux dossiers, boîtes, fichiers ou exports utiles au workflow, puis on définit les rôles, les validations et les données qui ne doivent pas sortir.",
  },
  {
    question: "Qu'est-ce qui est documenté à la fin ?",
    answer:
      "Les sources, accès, règles métier, contrôles, validations humaines, limites connues et procédures de reprise sont documentés pour pouvoir maintenir ou reprendre le workflow.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: pages.security.path,
            name: pages.security.title,
            description: pages.security.description,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: pages.security.label, path: pages.security.path },
          ]),
          faqPageSchema(faq),
        ]}
      />
      <Hero
        eyebrow="SÉCURITÉ & DONNÉES"
        title="Automatiser sans surexposer vos données"
        subtitle="Vous voulez automatiser des reportings, emails, documents ou contrôles sans ouvrir trop largement vos données. Le cadrage sert à décider ce qui peut être connecté, ce qui doit rester limité et où la validation humaine est obligatoire."
        primaryCta={{ label: "Parler sécurité et données →", href: "/contact" }}
        secondaryCta={{ label: "Voir la méthode →", href: "/methode" }}
      />

      <Section
        eyebrow="AVANT CONNEXION"
        title="Ce qu'on cadre avant de connecter un outil"
        intro="La sécurité se décide avant le prototype : données nécessaires, accès, limites d'usage, validations et reprise en cas d'erreur."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {beforeConnecting.map((item) => (
            <div className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4" key={item.title}>
              <h3 className="font-semibold text-[#171713]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5F5A50]">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="PRINCIPES" title="Des principes concrets avant les outils">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <Card key={item.title}>
              <Badge className="border-[#CDE6D8] bg-[#EEF8F2] text-[#0F7A4F]">{item.label}</Badge>
              <h3 className="mt-4 text-lg font-semibold text-[#171713]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#5F5A50]">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="DONNÉES SENSIBLES" title="Les sujets à cadrer avant de prototyper">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <p className="text-lg leading-8 text-[#5F5A50]">
              Le niveau de sécurité dépend du type de données, des accès nécessaires, des outils disponibles et de vos contraintes internes. C'est un sujet de cadrage, pas une note de bas de page.
            </p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-[#5F5A50]">
              <li>Identifier les données à exclure du périmètre.</li>
              <li>Choisir les accès minimaux nécessaires au test.</li>
              <li>Prévoir les validations avant diffusion ou import.</li>
            </ul>
          </Card>
          <ul className="grid gap-3 sm:grid-cols-2">
            {sensitive.map((item) => (
              <li className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 text-[#5F5A50]" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-[#11110E]">
        <div className="grid gap-8 text-white lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">Ce que je ne promets pas</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-normal sm:text-[40px]">
              Mieux vaut une limite claire qu'une promesse vague
            </h2>
          </div>
          <ul className="grid gap-3">
            {notPromising.map((item) => (
              <li className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 leading-7 text-[#F7F5EF]" key={item}>
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F0A077]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="CAS CONCRETS" title="Décisions de cadrage typiques">
        <div className="grid gap-4 lg:grid-cols-3">
          {securityCases.map((item) => (
            <Card key={item.situation}>
              <dl className="grid gap-4 text-sm">
                <div>
                  <dt className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">Situation</dt>
                  <dd className="mt-1 leading-6 text-[#5F5A50]">{item.situation}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs font-semibold uppercase text-[#3558D4]">Garde-fous</dt>
                  <dd className="mt-1 leading-6 text-[#5F5A50]">{item.safeguards}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">Résultat maîtrisé</dt>
                  <dd className="mt-1 font-medium leading-6 text-[#0F7A4F]">{item.result}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="FAQ" title="Questions fréquentes">
        <FAQ items={faq} />
      </Section>

      <CTASection
        title="Votre processus manipule des données sensibles ?"
        text="On commence par le périmètre, les accès, les validations humaines et le choix d'outils adapté à votre contexte."
        cta="Parler sécurité et données →"
      />
    </>
  );
}
