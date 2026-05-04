import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CTA = {
  label: string;
  href: string;
};

export function Hero({
  eyebrow,
  title,
  highlight,
  subtitle,
  mobileSubtitle,
  benefits = [],
  differentiator,
  primaryCta,
  secondaryCta,
  reassurance,
  visual = false,
  sideContent,
  compactY = false,
  compactMobileTitle = false,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  mobileSubtitle?: string;
  benefits?: string[];
  differentiator?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  reassurance?: string;
  visual?: boolean;
  sideContent?: ReactNode;
  compactY?: boolean;
  compactMobileTitle?: boolean;
}) {
  const titleParts = highlight ? title.split(highlight) : [title];
  const hasSideContent = Boolean(sideContent) || visual;

  return (
    <section
      className={cn(
        "border-b border-[#DDD8CC] bg-[#F7F5EF] py-16 sm:py-20",
        compactY ? "lg:py-20" : "lg:py-24",
      )}
    >
      <Container>
        <div className={hasSideContent ? "grid min-w-0 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center" : "max-w-4xl"}>
          <div className="min-w-0">
            <Badge>{eyebrow}</Badge>
            <h1
              className={cn(
                "mt-6 max-w-4xl break-words font-semibold leading-[1.08] tracking-normal text-[#171713] hyphens-auto sm:text-[58px] lg:text-[70px]",
                compactMobileTitle ? "text-[36px]" : "text-[42px]",
              )}
            >
              {highlight && titleParts.length > 1 ? (
                <>
                  {titleParts[0]}
                  <span className="text-[#3558D4]">{highlight}</span>
                  {titleParts.slice(1).join(highlight)}
                </>
              ) : (
                title
              )}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5F5A50] sm:text-xl sm:leading-9">
              <span className="sm:hidden">{mobileSubtitle || subtitle}</span>
              <span className="hidden sm:inline">{subtitle}</span>
            </p>
            {benefits.length ? (
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <li className="flex items-center gap-2 text-sm font-medium text-[#5F5A50]" key={benefit}>
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#0F7A4F]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            ) : null}
            {differentiator ? (
              <p className="mt-6 max-w-2xl rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 font-medium leading-7 text-[#171713]">
                {differentiator}
              </p>
            ) : null}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {primaryCta ? <Button className="w-full sm:w-auto" href={primaryCta.href}>{primaryCta.label}</Button> : null}
                {secondaryCta ? (
                  <Button className="w-full sm:w-auto" href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            )}
            {reassurance ? (
              <p className="mt-5 max-w-2xl text-sm leading-6 text-[#8A857A]">{reassurance}</p>
            ) : null}
          </div>

          {sideContent ? <div className="min-w-0 max-w-full">{sideContent}</div> : null}
          {!sideContent && visual ? (
            <div className="min-w-0 max-w-full">
              <HeroVisual />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="hidden lg:block">
      <div className="rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-5 shadow-[0_24px_70px_rgba(17,17,14,0.08)]">
        <div className="rounded-xl bg-[#EFEDE5] p-5">
          <div className="flex items-center justify-between border-b border-[#D7D0C3] pb-4">
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">Workflow réel</p>
              <p className="mt-2 text-lg font-semibold text-[#171713]">Reporting mensuel</p>
            </div>
            <span className="rounded-full bg-[#DDEFE7] px-3 py-1 text-sm font-semibold text-[#0F7A4F]">
              contrôlé
            </span>
          </div>
          <div className="mt-5 grid gap-3">
            {[
              ["Exports", "3 fichiers reçus"],
              ["Contrôles", "2 écarts à vérifier"],
              ["Rapport", "brouillon prêt"],
            ].map(([label, value], index) => (
              <div className="grid grid-cols-[40px_1fr] gap-4 rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4" key={label}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8EDFF] font-mono text-sm font-semibold text-[#3558D4]">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-semibold text-[#171713]">{label}</p>
                  <p className="mt-1 text-sm text-[#5F5A50]">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-[#F0C7B2] bg-[#FFF3ED] p-4 text-sm leading-6 text-[#7A3B20]">
            Validation humaine avant diffusion. Les anomalies restent visibles, pas maquillées.
          </p>
        </div>
      </div>
    </div>
  );
}
