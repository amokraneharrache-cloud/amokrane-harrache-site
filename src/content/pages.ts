export type PageDefinition = {
  label: string;
  path: string;
  title: string;
  description: string;
  priority?: number;
};

export const pages = {
  home: {
    label: "Accueil",
    path: "/",
    title: "Consultant automatisation IA pour PME | Amokrane Harrache",
    description:
      "Automatisez vos tâches répétitives avec l'IA : reportings Excel, données, emails, documents, relances et workflows métier fiables.",
    priority: 1,
  },
  services: {
    label: "Services",
    path: "/services",
    title: "Services d'automatisation IA, data et workflows",
    description:
      "Services d'automatisation IA pour PME : audit, reporting Excel, traitement de données, emails, documents et assistants internes.",
    priority: 0.9,
  },
  audit: {
    label: "Audit automatisation IA",
    path: "/audit-automatisation-ia",
    title: "Audit automatisation IA pour PME",
    description:
      "Audit automatisation IA à partir de 1 900 € HT pour prioriser les processus, clarifier les livrables et décider des prochaines étapes.",
    priority: 0.85,
  },
  reporting: {
    label: "Automatisation Excel & reporting",
    path: "/automatisation-reporting-excel",
    title: "Automatiser un reporting Excel fragile sans perdre le contrôle",
    description:
      "Automatisation de reportings Excel fragiles : exports CSV, copier-coller, formules, contrôles d'écarts et rapport prêt à valider.",
    priority: 0.75,
  },
  data: {
    label: "Traitement de données",
    path: "/traitement-donnees",
    title: "Traitement de données automatisé",
    description:
      "Nettoyage, normalisation, consolidation et contrôle de fichiers Excel, CSV, bases, exports d'outils ou API avant import ou partage.",
    priority: 0.75,
  },
  emailsDocuments: {
    label: "Emails & documents",
    path: "/automatisation-emails-documents",
    title: "Automatiser les emails, PDF et documents sans perdre le contrôle",
    description:
      "Automatisez le tri, le résumé, l'extraction, les brouillons, le classement et les relances avec validation humaine.",
    priority: 0.75,
  },
  assistant: {
    label: "Assistant IA interne",
    path: "/assistant-ia-interne",
    title: "Assistant IA interne pour équipes métier",
    description:
      "Assistant IA interne sur périmètre documentaire cadré, sources, limites, règles d'accès et validation humaine.",
    priority: 0.75,
  },
  useCases: {
    label: "Cas d'usage",
    path: "/cas-usages",
    title: "Cas d'usage automatisation IA et data",
    description:
      "Exemples concrets de processus automatisables, sans promesse de ROI garanti : avant, automatisation possible, résultat attendu.",
    priority: 0.75,
  },
  method: {
    label: "Méthode",
    path: "/methode",
    title: "Méthode projet automatisation IA",
    description:
      "Une méthode pragmatique pour comprendre, prioriser, prototyper, déployer, documenter et maintenir vos automatisations.",
    priority: 0.75,
  },
  security: {
    label: "Sécurité & données",
    path: "/securite-donnees",
    title: "Automatiser sans surexposer vos données",
    description:
      "Cadrage des données, accès, outils, validations humaines et limites IA avant d'automatiser reportings, emails, documents ou contrôles.",
    priority: 0.75,
  },
  about: {
    label: "À propos",
    path: "/a-propos",
    title: "À propos d'Amokrane Harrache",
    description:
      "Amokrane Harrache, data engineer spécialisé en automatisation métier, intégration IA, SQL, Excel, workflows et processus.",
    priority: 0.75,
  },
  contact: {
    label: "Contact",
    path: "/contact",
    title: "Contact | Planifier un diagnostic automatisation IA",
    description:
      "Contactez Amokrane Harrache pour décrire un fichier Excel, export CSV, email type, PDF ou processus à automatiser.",
    priority: 0.85,
  },
} satisfies Record<string, PageDefinition>;

export const allPages = Object.values(pages);
