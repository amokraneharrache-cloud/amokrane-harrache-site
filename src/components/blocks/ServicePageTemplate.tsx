import { CTASection } from "@/components/blocks/CTASection";
import { Hero } from "@/components/blocks/Hero";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { Section } from "@/components/ui/Section";
import type { ServiceDetail, ServiceHeroCard } from "@/content/services";

const methodSteps = [
  { title: "Cadrer", description: "Comprendre les fichiers, outils, règles, exceptions et validations." },
  { title: "Prototyper", description: "Tester sur un périmètre réduit avec des données réelles ou anonymisées." },
  { title: "Valider", description: "Comparer les sorties, isoler les erreurs et confirmer les règles métier." },
  { title: "Déployer", description: "Brancher le workflow à vos usages sans supprimer les points de contrôle utiles." },
  { title: "Documenter", description: "Laisser une trace claire du fonctionnement, des limites et des reprises possibles." },
];

export function ServicePageTemplate({ service }: { service: ServiceDetail }) {
  return (
    <>
      <Hero
        eyebrow={service.eyebrow}
        title={service.title}
        subtitle={service.description}
        primaryCta={{ label: service.primaryCta, href: "/contact" }}
        secondaryCta={
          service.secondaryCta && service.secondaryHref
            ? { label: service.secondaryCta, href: service.secondaryHref }
            : undefined
        }
        reassurance={service.reassurance}
        sideContent={service.heroCard ? <HeroOperationalCard card={service.heroCard} /> : undefined}
        compactY={service.compactHero}
      />

      {service.definition ? (
        <Section
          eyebrow={service.definition.eyebrow}
          title={service.definition.title}
          intro={service.definition.intro}
        >
          <Card>
            <p className="text-lg leading-8 text-[#5F5A50]">{service.definition.text}</p>
          </Card>
        </Section>
      ) : null}

      <Section
        eyebrow="SYMPTÔMES"
        title="Les signaux que le processus mérite d'être cadré"
        intro="On ne cherche pas un cas d'usage spectaculaire. On cherche un processus fréquent, fragile ou difficile à transmettre."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.symptoms.map((item) => (
              <li className="flex gap-3 rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 text-[#5F5A50]" key={item}>
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C75A2A]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Card className="bg-[#11110E] text-white">
            <Badge className="border-white/10 bg-white/[0.08] text-[#E8EDFF]">Anti-bullshit</Badge>
            <p className="mt-5 text-lg leading-8 text-[#F7F5EF]">{service.reassurance}</p>
          </Card>
        </div>
      </Section>

      {service.focus ? (
        <Section
          className="bg-[#EFEDE5]"
          eyebrow={service.focus.eyebrow}
          title={service.focus.title}
          intro={service.focus.intro}
        >
          {service.focus.text ? (
            <Card className="mb-5">
              <p className="text-lg leading-8 text-[#5F5A50]">{service.focus.text}</p>
            </Card>
          ) : null}
          {service.focus.columns?.length ? (
            <div className="grid gap-4 lg:grid-cols-3">
              {service.focus.columns.map((column) => (
                <Card className="p-5" key={column.title}>
                  <h3 className="text-lg font-semibold text-[#171713]">{column.title}</h3>
                  <ul className="mt-4 grid gap-3">
                    {column.items.map((item) => (
                      <li className="flex gap-3 text-sm leading-6 text-[#5F5A50]" key={item}>
                        <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3558D4]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          ) : service.focus.items?.length ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.focus.items.map((item) => (
                <div className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 text-[#5F5A50]" key={item}>
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </Section>
      ) : null}

      <Section
        eyebrow="AUTOMATISATION POSSIBLE"
        title="Ce qui peut être fiabilisé concrètement"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.automations.map((item) => (
            <Card key={item}>
              <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8EDFF] font-mono font-semibold text-[#3558D4]">
                +
              </span>
              <p className="mt-4 leading-7 text-[#5F5A50]">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      {service.safety ? (
        <Section className="bg-[#11110E]">
          <div className="grid gap-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">
                {service.safety.eyebrow}
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-normal sm:text-[40px]">
                {service.safety.title}
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-[#F7F5EF]">{service.safety.text}</p>
              {service.safety.items?.length ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {service.safety.items.map((item) => (
                    <li className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-[#F7F5EF]" key={item}>
                      <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DDEFE7] text-xs font-semibold text-[#0F7A4F]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </Section>
      ) : null}

      <Section
        eyebrow="RÉSULTATS ATTENDUS"
        title="Des résultats maîtrisés, pas une promesse de ROI magique"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {service.outcomes.map((item) => (
            <Card key={item}>
              <p className="flex gap-3 leading-7 text-[#5F5A50]">
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DDEFE7] text-sm font-semibold text-[#0F7A4F]">
                  ✓
                </span>
                <span>{item}</span>
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="LIVRABLES & LIMITES" title="Ce qui est livré, et ce qui reste à cadrer">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-[#171713]">Livrables spécifiques</h3>
            <ul className="mt-5 grid gap-3">
              {service.deliverables.map((item) => (
                <li className="flex gap-3 leading-7 text-[#5F5A50]" key={item}>
                  <span aria-hidden="true" className="font-mono text-[#3558D4]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-[#171713]">Limites et précautions</h3>
            <ul className="mt-5 grid gap-3">
              {service.limits.map((item) => (
                <li className="flex gap-3 leading-7 text-[#5F5A50]" key={item}>
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C75A2A]" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section eyebrow="EXEMPLES" title={service.miniCases ? "Mini-cas concrets" : "Exemples de situations proches"}>
        {service.miniCases ? (
          <div className="grid gap-4 lg:grid-cols-3">
            {service.miniCases.map((item) => (
              <Card className="p-5" key={item.situation}>
                <dl className="grid gap-4 text-sm">
                  <div>
                    <dt className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">Situation</dt>
                    <dd className="mt-1 leading-6 text-[#5F5A50]">{item.situation}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs font-semibold uppercase text-[#3558D4]">Automatisation</dt>
                    <dd className="mt-1 leading-6 text-[#5F5A50]">{item.automation}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">Résultat</dt>
                    <dd className="mt-1 font-medium leading-6 text-[#0F7A4F]">{item.result}</dd>
                  </div>
                </dl>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.examples.map((item) => (
              <Card className="p-5" key={item}>
                <p className="leading-7 text-[#5F5A50]">{item}</p>
              </Card>
            ))}
          </div>
        )}
      </Section>

      {service.gettingStarted ? (
        <Section
          className="bg-[#EFEDE5]"
          eyebrow={service.gettingStarted.eyebrow}
          title={service.gettingStarted.title}
          intro={service.gettingStarted.intro}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.gettingStarted.items?.map((item) => (
              <Card key={item}>
                <p className="leading-7 text-[#5F5A50]">{item}</p>
              </Card>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="bg-[#EFEDE5]" eyebrow="FORMAT" title={service.offersTitle || "Offres généralement adaptées"}>
        <div className="grid gap-4 md:grid-cols-3">
          {(service.offerFormats || service.offers.map((offer) => ({
            title: offer,
            text: "Format à confirmer après un premier échange et l'analyse du processus réel.",
          }))).map((offer) => (
            <Card key={offer.title}>
              <h3 className="text-lg font-semibold text-[#171713]">{offer.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5F5A50]">
                {offer.text}
              </p>
            </Card>
          ))}
        </div>
        <Button className="mt-8" href="/contact" variant="secondary">
          Planifier un échange →
        </Button>
      </Section>

      <Section eyebrow="MÉTHODE COURTE" title="Un déroulé simple pour éviter l'usine à gaz">
        <ProcessSteps steps={methodSteps} />
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="FAQ" title="Questions fréquentes">
        <FAQ items={service.faq} />
      </Section>

      <CTASection title={service.ctaTitle} text={service.ctaText} cta={service.primaryCta} />
    </>
  );
}

function HeroOperationalCard({ card }: { card: ServiceHeroCard }) {
  return (
    <div className="min-w-0 max-w-full rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-5 shadow-[0_24px_70px_rgba(17,17,14,0.08)] sm:p-6">
      <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">{card.title}</p>
      <p className="mt-4 max-w-full break-words rounded-xl border border-[#D8E0FF] bg-[#F3F5FF] p-4 text-lg font-semibold leading-7 text-[#171713]">
        {card.flow}
      </p>
      <dl className="mt-5 grid gap-3">
        {card.items.map((item) => (
          <div className="rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4" key={item.label}>
            <dt className="font-semibold text-[#171713]">{item.label}</dt>
            <dd className="mt-1 text-sm leading-6 text-[#5F5A50]">{item.text}</dd>
          </div>
        ))}
      </dl>
      {card.note ? (
        <p className="mt-5 rounded-xl border border-[#F0C7B2] bg-[#FFF3ED] p-4 text-sm leading-6 text-[#7A3B20]">
          {card.note}
        </p>
      ) : null}
    </div>
  );
}
