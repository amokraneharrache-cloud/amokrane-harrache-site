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
  demonstrators: {
    label: "Démonstrateurs",
    path: "/demonstrateurs",
    title: "Démonstrateurs IA, data et automatisation",
    description:
      "Exemples concrets de workflows IA, data et automatisation : fichier Excel, reporting automatisé et assistant documentaire interne.",
    priority: 0.78,
  },
  demonstratorExcel: {
    label: "Assistant IA pour fichier Excel",
    path: "/demonstrateurs/assistant-excel",
    title: "Démonstrateur assistant IA pour fichier Excel",
    description:
      "Démonstrateur d'assistant IA pour lire un fichier Excel métier, repérer des colonnes, détecter des anomalies simples et préparer une synthèse.",
    priority: 0.66,
  },
  demonstratorReporting: {
    label: "Workflow reporting automatisé",
    path: "/demonstrateurs/reporting-automatise",
    title: "Démonstrateur workflow de reporting automatisé",
    description:
      "Démonstrateur de workflow pour consolider plusieurs exports, contrôler les écarts et générer un reporting prêt à valider.",
    priority: 0.66,
  },
  demonstratorDocumentary: {
    label: "Assistant documentaire interne",
    path: "/demonstrateurs/assistant-documentaire",
    title: "Démonstrateur assistant documentaire interne",
    description:
      "Démonstrateur d'assistant IA interne qui répond à partir d'un périmètre documentaire défini avec sources, limites et validation humaine.",
    priority: 0.66,
  },
  resources: {
    label: "Ressources",
    path: "/ressources",
    title: "Ressources sur l'automatisation IA, data et workflows métier",
    description:
      "Articles courts et concrets pour automatiser reportings Excel, fichiers, emails, documents et processus répétitifs en PME.",
    priority: 0.74,
  },
  resourceReportingExcel: {
    label: "Automatiser un reporting Excel",
    path: "/ressources/automatiser-reporting-excel",
    title: "Comment automatiser un reporting Excel récurrent ?",
    description:
      "Symptômes, prérequis, étapes, limites et bons cas d'usage pour automatiser un reporting Excel récurrent sans perdre le contrôle.",
    priority: 0.64,
  },
  resourceAuditPme: {
    label: "Audit automatisation PME",
    path: "/ressources/audit-automatisation-pme",
    title: "Audit automatisation PME : identifier les bons processus",
    description:
      "Comment analyser et prioriser les processus à automatiser en PME selon gain, complexité, risque et livrables attendus.",
    priority: 0.64,
  },
  resourceAssistantIa: {
    label: "Assistant IA interne",
    path: "/ressources/assistant-ia-interne-entreprise",
    title: "Assistant IA interne : cadrer sans chatbot incontrôlable",
    description:
      "Sources, périmètre, accès, sécurité, hallucinations et pilote : comment cadrer un assistant IA interne utile et contrôlé.",
    priority: 0.64,
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
