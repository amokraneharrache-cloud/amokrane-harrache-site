import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { pages } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, personSchema, webpageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata(pages.about);

const profileCards = [
  {
    title: "Données & SQL",
    text: "Structurer les sources, comprendre les exports, contrôler la qualité et rendre les transformations traçables.",
  },
  {
    title: "Excel & reporting",
    text: "Fiabiliser les modèles, consolidations, contrôles et rapports que les équipes utilisent déjà.",
  },
  {
    title: "Workflows métier",
    text: "Relier fichiers, outils, emails, documents et validations sans créer une boîte noire.",
  },
  {
    title: "IA utile",
    text: "Utiliser l'IA pour résumer, extraire ou chercher quand elle apporte vraiment quelque chose.",
  },
];

const teams = [
  "Finance",
  "Opérations",
  "Administration",
  "Support",
  "Commercial",
  "Direction",
  "Équipes data légères",
];

const approach = [
  {
    title: "Comprendre le terrain",
    text: "Je pars des tâches que vos équipes font vraiment, pas d'une démo IA générique.",
  },
  {
    title: "Choisir l'outil après le problème",
    text: "Une automatisation classique suffit parfois. L'IA n'est utile que si elle traite une part d'ambiguïté réelle.",
  },
  {
    title: "Garder le contrôle",
    text: "Les workflows sensibles doivent rester compréhensibles, testables et validables par une personne.",
  },
  {
    title: "Documenter",
    text: "Un workflow non documenté devient vite une nouvelle dépendance. La reprise fait partie du travail.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: pages.about.path,
            name: pages.about.title,
            description: pages.about.description,
          }),
          personSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: pages.about.label, path: pages.about.path },
          ]),
        ]}
      />
      <Hero
        eyebrow="À PROPOS"
        title="Amokrane Harrache, data engineer orienté automatisation métier"
        subtitle="J'aide les PME et équipes métier à transformer leurs tâches répétitives en workflows fiables : données, SQL, Excel, reportings, emails, documents, contrôles et intégration IA quand elle est vraiment utile."
        primaryCta={{ label: "Me parler de votre besoin →", href: "/contact" }}
        reassurance={siteConfig.area}
        compactMobileTitle
      />

      <Section
        eyebrow="PROFIL DATA"
        title="Ce que mon profil data engineer apporte"
        intro="Avant de parler IA, je regarde la structure des données, les fichiers sources, les règles métier, les exceptions et les validations nécessaires."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {profileCards.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-[#171713]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#5F5A50]">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="APPROCHE" title="Pas d'outil IA vendu pour l'outil">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-lg leading-8 text-[#5F5A50]">
              Mon approche est volontairement terrain : comprendre comment vos données circulent, où les équipes perdent du temps, quelles validations sont nécessaires et ce qui doit rester humain.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#5F5A50]">
              L'objectif n'est pas d'ajouter une couche d'IA décorative. C'est de rendre un processus plus clair, plus fiable et plus facile à maintenir.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {approach.map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-semibold text-[#171713]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#5F5A50]">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="ÉQUIPES" title="Pour quelles équipes j'interviens">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((item) => (
            <div className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 text-[#5F5A50]" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#11110E]">
        <div className="grid gap-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">Positionnement</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-normal sm:text-[40px]">
              Ce que je ne vends pas
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#F7F5EF]">
            Je ne vends pas d'IA gadget, d'agent autonome magique ou de transformation abstraite.
          </p>
        </div>
      </Section>

      <Section eyebrow="CONTACT & REPÈRES" title="Me contacter et situer le périmètre">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <Badge>Contact</Badge>
            <h3 className="mt-4 text-lg font-semibold text-[#171713]">Contact via formulaire</h3>
            <p className="mt-3 leading-7 text-[#5F5A50]">
              Utilisez le formulaire pour me contacter et décrire le processus,
              le fichier ou le workflow à analyser.
            </p>
            <Button className="mt-4" href="/contact" variant="secondary">
              Aller au formulaire →
            </Button>
          </Card>
          <Card>
            <Badge>Zone</Badge>
            <h3 className="mt-4 text-lg font-semibold text-[#171713]">France / Île-de-France / à distance</h3>
            <p className="mt-3 leading-7 text-[#5F5A50]">
              Intervention à distance, avec échanges structurés autour des fichiers, processus et validations.
            </p>
          </Card>
          <Card>
            <Badge>Liens publics</Badge>
            <h3 className="mt-4 text-lg font-semibold text-[#171713]">LinkedIn / GitHub</h3>
            <div className="mt-3 grid gap-2">
              {siteConfig.socialLinks.linkedin ? (
                <a className="font-medium text-[#3558D4] underline-offset-4 hover:underline" href={siteConfig.socialLinks.linkedin}>
                  LinkedIn
                </a>
              ) : null}
              {siteConfig.socialLinks.github ? (
                <a className="font-medium text-[#3558D4] underline-offset-4 hover:underline" href={siteConfig.socialLinks.github}>
                  GitHub
                </a>
              ) : null}
              {!siteConfig.socialLinks.linkedin && !siteConfig.socialLinks.github ? (
                <p className="text-sm leading-6 text-[#8A857A]">Profils publics ajoutés prochainement.</p>
              ) : null}
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="PAGES UTILES" title="Pour comprendre l'approche">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/methode" variant="secondary">
            Voir la méthode →
          </Button>
          <Button href="/securite-donnees" variant="secondary">
            Sécurité & données →
          </Button>
          <Button href="/cas-usages" variant="secondary">
            Cas d'usage →
          </Button>
          <Button href="/contact" variant="secondary">
            Contact →
          </Button>
        </div>
      </Section>

      <CTASection
        title="Vous voulez cadrer un sujet d'automatisation ?"
        text="Partons d'un fichier, d'un reporting, d'un export, d'un email type ou d'une tâche qui revient trop souvent."
        cta="Me parler de votre besoin →"
      />
    </>
  );
}
