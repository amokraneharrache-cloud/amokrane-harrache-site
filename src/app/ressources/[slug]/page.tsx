import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { pages } from "@/content/pages";
import {
  resourceArticles,
  resourceArticlesBySlug,
  type ResourceArticle,
} from "@/content/resources";
import { createMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, webpageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourceArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = resourceArticlesBySlug[slug];

  if (!article) {
    return {};
  }

  return createMetadata(article.page, {
    openGraphType: "article",
    publishedTime: article.publishedAt,
  });
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = resourceArticlesBySlug[slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: article.page.path,
            name: article.page.title,
            description: article.page.description,
          }),
          articleSchema({
            path: article.page.path,
            headline: article.title,
            description: article.description,
            datePublished: article.publishedAt,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: pages.resources.label, path: pages.resources.path },
            { name: article.page.label, path: article.page.path },
          ]),
        ]}
      />
      <Hero
        eyebrow="RESSOURCE"
        title={article.title}
        subtitle={article.angle}
        primaryCta={{ label: article.cta.label, href: article.cta.href }}
        secondaryCta={{ label: "Toutes les ressources →", href: pages.resources.path }}
        sideContent={<ArticleSummary article={article} />}
        compactMobileTitle
      />

      <Section eyebrow="GUIDE" title="À retenir avant de lancer l'automatisation">
        <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <Card className="bg-[#11110E] text-white">
            <Badge className="border-white/10 bg-white/[0.08] text-[#E8EDFF]">
              Angle
            </Badge>
            <p className="mt-5 text-lg leading-8 text-[#F7F5EF]">{article.angle}</p>
          </Card>
          <div className="grid gap-4">
            {article.sections.map((section) => (
              <ArticleSection section={section} key={section.title} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="SUITE" title="Transformer la lecture en décision">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Réunir un exemple réel ou anonymisé.",
            "Lister les règles métier et les exceptions.",
            "Choisir entre diagnostic, audit ou prototype limité.",
          ].map((item) => (
            <Card key={item}>
              <p className="leading-7 text-[#5F5A50]">{item}</p>
            </Card>
          ))}
        </div>
        <Button className="mt-8" href={article.cta.href} variant="secondary">
          {article.cta.label}
        </Button>
      </Section>

      <CTASection
        title="Vous reconnaissez ce sujet dans votre équipe ?"
        text="On peut partir d'un exemple concret et cadrer les données, les règles, les limites et la validation humaine attendue."
        cta={article.cta.label}
        href={article.cta.href}
      />
    </>
  );
}

function ArticleSummary({ article }: { article: ResourceArticle }) {
  return (
    <div className="rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-5 shadow-[0_24px_70px_rgba(17,17,14,0.08)] sm:p-6">
      <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
        Résumé
      </p>
      <p className="mt-4 text-lg font-semibold leading-7 text-[#171713]">
        {article.description}
      </p>
      <dl className="mt-5 grid gap-3">
        <div className="rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4">
          <dt className="font-mono text-xs font-semibold uppercase text-[#8A857A]">
            Format
          </dt>
          <dd className="mt-1 text-sm leading-6 text-[#5F5A50]">
            Article court, concret, orienté cadrage.
          </dd>
        </div>
        <div className="rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4">
          <dt className="font-mono text-xs font-semibold uppercase text-[#8A857A]">
            Date
          </dt>
          <dd className="mt-1 text-sm leading-6 text-[#5F5A50]">
            {new Intl.DateTimeFormat("fr-FR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }).format(new Date(article.publishedAt))}
          </dd>
        </div>
      </dl>
    </div>
  );
}

function ArticleSection({
  section,
}: {
  section: ResourceArticle["sections"][number];
}) {
  return (
    <article className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-5 shadow-[0_18px_50px_rgba(17,17,14,0.05)] sm:p-6">
      <h2 className="text-2xl font-semibold leading-tight text-[#171713]">
        {section.title}
      </h2>
      {section.paragraphs?.map((paragraph) => (
        <p className="mt-4 leading-8 text-[#5F5A50]" key={paragraph}>
          {paragraph}
        </p>
      ))}
      {section.bullets?.length ? (
        <ul className="mt-5 grid gap-3">
          {section.bullets.map((bullet) => (
            <li className="flex gap-3 leading-7 text-[#5F5A50]" key={bullet}>
              <span aria-hidden="true" className="font-mono text-[#3558D4]">
                →
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
