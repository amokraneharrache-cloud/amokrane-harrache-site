import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection({
  title,
  text,
  cta = "Planifier un échange →",
  href = "/contact",
}: {
  title: string;
  text: string;
  cta?: string;
  href?: string;
}) {
  const label = cta.includes("→") ? cta : cta + " →";

  return (
    <section className="bg-[#11110E] py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#E8EDFF]">
              Prochaine étape
            </p>
            <h2 className="mt-3 max-w-3xl text-[30px] font-semibold leading-tight tracking-normal sm:text-[44px]">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#E9E4D8]">{text}</p>
          </div>
          <div className="lg:justify-self-end">
            <Button href={href} variant="dark">
              {label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
