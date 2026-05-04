import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { ServiceDetail } from "@/content/services";

export function ServiceGrid({ services }: { services: ServiceDetail[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {services.map((service) => (
        <Card key={service.path}>
          <Badge>{service.eyebrow}</Badge>
          <h3 className="mt-4 text-xl font-semibold text-[#171713]">{service.label}</h3>
          <p className="mt-3 leading-7 text-[#5F5A50]">{service.shortDescription}</p>
          <Button className="mt-6" href={service.path} variant="secondary">
            Voir le service →
          </Button>
        </Card>
      ))}
    </div>
  );
}
