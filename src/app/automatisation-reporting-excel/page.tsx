import { ServicePageTemplate } from "@/components/blocks/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { pages } from "@/content/pages";
import { servicesBySlug } from "@/content/services";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema, webpageSchema } from "@/lib/schema";

const page = pages.reporting;
const service = servicesBySlug.reporting;

export const metadata = createMetadata(page);

export default function ServicePage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: page.path,
            name: page.title,
            description: page.description,
          }),
          serviceSchema({
            path: page.path,
            name: service.title,
            description: service.description,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Services", path: "/services" },
            { name: page.label, path: page.path },
          ]),
        ]}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
