import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { UseCaseGrid } from "@/components/blocks/UseCaseGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { Section } from "@/components/ui/Section";
import { pages } from "@/content/pages";
import { useCases } from "@/content/useCases";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";

export const metadata = createMetadata(pages.useCases);

const faq = [
  {
    question: "Est-ce que tous ces cas sont automatisables ?",
    answer:
      "Non. Chaque cas dépend de vos données, outils, règles métier, exceptions et validations. Certains sujets doivent d'abord être simplifiés ou cadrés.",
  },
  {
    question: "Faut-il forcément utiliser de l'IA ?",
    answer:
      "Non. Beaucoup d'automatisations utiles reposent sur des règles, scripts ou workflows classiques. L'IA est pertinente quand il faut traiter du texte, des documents ou de l'ambiguïté.",
  },
  {
    question: "Quelle est la première étape ?",
    answer:
      "Partir d'un exemple concret : fichier, export, email type, PDF ou description des contrôles actuels. Ensuite on choisit diagnostic, audit ou prototype.",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: pages.useCases.path,
            name: pages.useCases.title,
            description: pages.useCases.description,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: pages.useCases.label, path: pages.useCases.path },
          ]),
        ]}
      />
      <Hero
        eyebrow="CAS D'USAGE"
        title="Cas d'usage concrets d'automatisation IA"
        subtitle="Des exemples pour PME et équipes métier où l'IA, la data et l'automatisation peuvent réduire le travail manuel sans remplacer la validation humaine ni promettre un ROI garanti."
        primaryCta={{ label: "Demander un audit →", href: "/audit-automatisation-ia" }}
        secondaryCta={{ label: "Planifier un échange →", href: "/contact" }}
        compactMobileTitle
      />

      <Section
        eyebrow="TABLEAU DE CADRAGE"
        title="Avant, automatisation possible, résultat attendu"
        intro="Chaque exemple doit être adapté à vos fichiers, outils, règles métier et validations. Le tableau sert à reconnaître un sujet, pas à vendre une promesse standard."
      >
        <UseCaseGrid useCases={useCases} />
      </Section>

      <Section className="bg-[#11110E]">
        <div className="grid gap-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">CADRAGE</p>
            <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-normal sm:text-[40px]">
              Des exemples, pas des promesses automatiques
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#F7F5EF]">
            Chaque automatisation dépend de vos données, de vos outils, des exceptions métier et du niveau de validation nécessaire. L'objectif n'est pas de supprimer le contrôle humain, mais de réduire les manipulations répétitives et de rendre les points à vérifier plus visibles.
          </p>
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="LECTURE" title="Comment choisir le bon point d'entrée">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-[#171713]">Repérer le symptôme</h3>
            <p className="mt-3 leading-7 text-[#5F5A50]">
              Le bon sujet commence souvent par une tâche fréquente, fragile ou difficile à transmettre.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-[#171713]">Cadrer les limites</h3>
            <p className="mt-3 leading-7 text-[#5F5A50]">
              Données sources, règles métier, exceptions et validations décident de ce qui est automatisable.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-[#171713]">Choisir la suite</h3>
            <p className="mt-3 leading-7 text-[#5F5A50]">
              Diagnostic, audit ou prototype : le format dépend du périmètre et du risque réel.
            </p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Questions fréquentes">
        <div className="max-w-4xl">
          <FAQ items={faq} />
        </div>
      </Section>

      <CTASection
        title="Vous reconnaissez un processus proche ?"
        text="Décrivez le fichier, l'export, l'email type ou la tâche. On regarde si un diagnostic ou un audit est pertinent."
        cta="Demander un audit →"
        href="/audit-automatisation-ia"
      />
    </>
  );
}
