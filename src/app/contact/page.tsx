import { ContactForm } from "@/components/forms/ContactForm";
import { Hero } from "@/components/blocks/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { pages } from "@/content/pages";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, webpageSchema } from "@/lib/schema";

export const metadata = createMetadata(pages.contact);

const sendExamples = [
  "Fichier Excel ou modèle de reporting",
  "Export CSV ou exemple de données anonymisées",
  "Capture d'un processus ou liste d'étapes",
  "Email type, PDF ou document récurrent",
  "Description d'une tâche répétitive et de sa fréquence",
];

const nextSteps = [
  "Je lis votre demande et vérifie si le sujet est assez clair pour un premier échange.",
  "On distingue un premier échange gratuit d'un diagnostic payant si une analyse détaillée est nécessaire.",
  "Si le sujet est pertinent, je propose le bon format : diagnostic, audit, prototype ou déploiement.",
  "Si le sujet n'est pas mûr ou pas automatisable, je vous le dis simplement.",
];

const needTemplate = [
  "Aujourd'hui, nous faisons...",
  "Cela arrive chaque semaine, chaque mois ou à chaque export...",
  "Nous partons de...",
  "Nous voulons obtenir...",
  "Le point à contrôler est...",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webpageSchema({
            path: pages.contact.path,
            name: pages.contact.title,
            description: pages.contact.description,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: pages.contact.label, path: pages.contact.path },
          ]),
        ]}
      />
      <Hero
        eyebrow="CONTACT"
        title="Parlons de votre processus à automatiser"
        subtitle="Décrivez simplement ce qui prend du temps aujourd'hui : reporting, fichier Excel, export CSV, emails, documents, relances, contrôles ou workflow manuel. Pas besoin de cahier des charges."
        primaryCta={{ label: "Envoyer ma demande →", href: "#formulaire" }}
        secondaryCta={{ label: "Contact via formulaire sécurisé", href: "#formulaire" }}
        reassurance="Je reviens vers vous avec une première lecture du besoin et une proposition de prochaine étape."
      />

      <Section eyebrow="QUOI ENVOYER" title="Un exemple concret vaut mieux qu'une longue présentation">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {sendExamples.map((item) => (
            <Card className="p-5" key={item}>
              <p className="text-sm leading-6 text-[#5F5A50]">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[#EFEDE5]" eyebrow="5 LIGNES" title="Comment décrire votre besoin en 5 lignes">
        <div className="grid gap-3 md:grid-cols-5">
          {needTemplate.map((item) => (
            <Card className="p-5" key={item}>
              <p className="text-sm leading-6 text-[#5F5A50]">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="formulaire" eyebrow="FORMULAIRE" title="Décrire le besoin">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="grid gap-4">
            <Card>
              <Badge>Contact</Badge>
              <h3 className="mt-4 text-xl font-semibold text-[#171713]">Contact via formulaire sécurisé</h3>
              <p className="mt-4 leading-7 text-[#5F5A50]">
                Utilisez le formulaire pour me contacter. Décrivez le fichier,
                l'export, la capture ou l'exemple de document : je réponds après
                première lecture de votre besoin.
              </p>
            </Card>
            <Card>
              <Badge>Cadre</Badge>
              <h3 className="mt-4 text-xl font-semibold text-[#171713]">Premier échange vs diagnostic</h3>
              <p className="mt-3 leading-7 text-[#5F5A50]">
                Le premier échange sert à comprendre le contexte. Une analyse détaillée de fichiers, règles ou workflows relève ensuite d'un diagnostic ou d'un audit.
              </p>
            </Card>
          </div>
          <Card>
            <ContactForm />
          </Card>
        </div>
      </Section>

      <Section eyebrow="ENSUITE" title="Ce qui se passe après votre message">
        <div className="grid gap-4 md:grid-cols-2">
          {nextSteps.map((item) => (
            <Card key={item}>
              <p className="leading-7 text-[#5F5A50]">{item}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
