import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import {
  demonstrators,
  demonstratorsBySlug,
  type Demonstrator,
} from "@/content/demonstrators";
import { pages } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return demonstrators.map((demonstrator) => ({
    slug: demonstrator.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const demonstrator = demonstratorsBySlug[slug];

  if (!demonstrator) {
    return {};
  }

  return createMetadata(demonstrator.page);
}

export default async function DemonstratorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const demonstrator = demonstratorsBySlug[slug];

  if (!demonstrator) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: demonstrator.page.path,
            name: demonstrator.page.title,
            description: demonstrator.page.description,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: pages.demonstrators.label, path: pages.demonstrators.path },
            { name: demonstrator.page.label, path: demonstrator.page.path },
          ]),
        ]}
      />
      <Hero
        eyebrow={demonstrator.eyebrow}
        title={demonstrator.h1}
        subtitle={demonstrator.subtitle}
        differentiator={demonstrator.reassurance}
        primaryCta={{ label: demonstrator.cta.label, href: demonstrator.cta.href }}
        secondaryCta={{ label: "Retour aux démonstrateurs →", href: pages.demonstrators.path }}
        sideContent={<DemoWorkflowVisual demonstrator={demonstrator} />}
        compactMobileTitle
      />

      <Section eyebrow="PROBLÈME MÉTIER" title="Le problème métier">
        <Card>
          <p className="text-lg leading-8 text-[#5F5A50]">{demonstrator.problem}</p>
        </Card>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="SITUATION AVANT" title="Situation avant">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Card>
            <p className="text-lg leading-8 text-[#5F5A50]">{demonstrator.before}</p>
          </Card>
          <BeforeAfterBlock />
        </div>
      </Section>

      <Section
        eyebrow="WORKFLOW PROPOSÉ"
        title="Workflow proposé"
        intro="Le démonstrateur déroule les étapes dans un ordre lisible, avec des points de contrôle explicites."
      >
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {demonstrator.workflow.map((step, index) => (
            <li
              className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-5 shadow-[0_18px_50px_rgba(17,17,14,0.05)]"
              key={step}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8EDFF] font-mono text-sm font-semibold text-[#3558D4]">
                {index + 1}
              </span>
              <p className="mt-4 font-semibold leading-7 text-[#171713]">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        className="bg-[#EFEDE5]"
        eyebrow="DÉMONSTRATION"
        title="Ce que le démonstrateur montre"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {demonstrator.whatItShows.map((item) => (
            <Card key={item}>
              <p className="flex gap-3 leading-7 text-[#5F5A50]">
                <span aria-hidden="true" className="font-mono text-[#3558D4]">
                  →
                </span>
                <span>{item}</span>
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="RÔLE DE L'IA" title="Ce que l'IA fait, et ce qu'elle ne fait pas">
        <div className="grid gap-6 lg:grid-cols-2">
          <CapabilityList
            badge="IA utile"
            items={demonstrator.aiDoes}
            title="Ce que l'IA fait"
            tone="green"
          />
          <CapabilityList
            badge="Garde-fous"
            items={demonstrator.aiDoesNot}
            title="Ce que l'IA ne fait pas"
            tone="orange"
          />
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="LIMITES" title="Limites">
        <div className="grid gap-4 md:grid-cols-2">
          {demonstrator.limits.map((item) => (
            <Card key={item}>
              <p className="flex gap-3 leading-7 text-[#5F5A50]">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C75A2A]" />
                <span>{item}</span>
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="PROJET RÉEL"
        title="Ce qu'il faudrait pour le transformer en projet réel"
        intro="Le passage d'un démonstrateur à un projet dépend du périmètre, des données, des règles métier, des accès et des validations."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {demonstrator.realProject.map((item) => (
            <Card key={item}>
              <p className="leading-7 text-[#5F5A50]">{item}</p>
            </Card>
          ))}
        </div>
        <Button className="mt-8" href="/contact" variant="secondary">
          Discuter d'un projet réel →
        </Button>
      </Section>

      <CTASection
        title="Vous avez un cas proche à cadrer ?"
        text="On peut partir d'un exemple concret, vérifier les limites et décider si un diagnostic ou un prototype est pertinent."
        cta={demonstrator.cta.label}
        href={demonstrator.cta.href}
      />
    </>
  );
}

function DemoWorkflowVisual({ demonstrator }: { demonstrator: Demonstrator }) {
  const items = [
    ["Entrée", demonstrator.visual.input],
    ["Contrôle", demonstrator.visual.control],
    ["Sortie", demonstrator.visual.output],
    ["Validation", demonstrator.visual.validation],
  ];

  return (
    <div className="rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-5 shadow-[0_24px_70px_rgba(17,17,14,0.08)] sm:p-6">
      <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
        Entrée / contrôle / sortie
      </p>
      <div className="mt-5 grid gap-3">
        {items.map(([label, text], index) => (
          <div
            className="grid grid-cols-[42px_1fr] gap-4 rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4"
            key={label}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EDFF] font-mono text-sm font-semibold text-[#3558D4]">
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
        Validation humaine conservée sur les points sensibles.
      </p>
    </div>
  );
}

function BeforeAfterBlock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] shadow-[0_18px_50px_rgba(17,17,14,0.06)]">
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-[#DDD8CC] p-5 sm:border-b-0 sm:border-r">
          <p className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">
            Avant
          </p>
          <p className="mt-3 text-sm leading-6 text-[#5F5A50]">
            Contrôles dispersés, étapes implicites et synthèse produite sous
            contrainte.
          </p>
        </div>
        <div className="p-5">
          <p className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">
            Après
          </p>
          <p className="mt-3 text-sm leading-6 text-[#5F5A50]">
            Workflow lisible, anomalies visibles et validation humaine mieux
            préparée.
          </p>
        </div>
      </div>
    </div>
  );
}

function CapabilityList({
  badge,
  title,
  items,
  tone,
}: {
  badge: string;
  title: string;
  items: string[];
  tone: "green" | "orange";
}) {
  const markerClass = tone === "green" ? "bg-[#DDEFE7] text-[#0F7A4F]" : "bg-[#FFF3ED] text-[#C75A2A]";

  return (
    <Card>
      <Badge
        className={
          tone === "green"
            ? "border-[#D5E7DA] bg-[#F0FAF4] text-[#0F7A4F]"
            : "border-[#F0C7B2] bg-[#FFF3ED] text-[#C75A2A]"
        }
      >
        {badge}
      </Badge>
      <h2 className="mt-4 text-xl font-semibold text-[#171713]">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="flex gap-3 leading-7 text-[#5F5A50]" key={item}>
            <span
              aria-hidden="true"
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${markerClass}`}
            >
              {tone === "green" ? "✓" : "!"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
