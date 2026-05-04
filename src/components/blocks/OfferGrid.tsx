import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Offer } from "@/content/offers";

export function OfferGrid({
  offers,
  compact = false,
}: {
  offers: Offer[];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3" : "grid gap-5 md:grid-cols-2 lg:grid-cols-3"}>
      {offers.map((offer) => (
        <Card className="flex flex-col" key={offer.title}>
          <Badge>{offer.badge || "OFFRE"}</Badge>
          <h3 className="mt-4 text-xl font-semibold text-[#171713]">{offer.title}</h3>
          <p className="mt-3 rounded-lg border border-[#D8E0FF] bg-[#F3F5FF] px-3 py-2 font-mono text-sm font-semibold text-[#3558D4]">
            {offer.price}
          </p>
          <p className="mt-4 leading-7 text-[#5F5A50]">{offer.description}</p>
          {!compact ? (
            <div className="mt-5 grid gap-3 text-sm leading-6 text-[#5F5A50]">
              <p>
                <span className="font-semibold text-[#171713]">Idéal pour : </span>
                {offer.idealFor}
              </p>
              <p>
                <span className="font-semibold text-[#171713]">Contexte : </span>
                {offer.forWhom}
              </p>
            </div>
          ) : null}
          <div className="mt-auto pt-6">
            <Button href={offer.href} variant="secondary" className="w-full">
              {offer.cta}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
