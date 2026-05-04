export type UseCase = {
  title: string;
  problem: string;
  manualWork: string;
  automation: string;
  expectedGain: string;
  service: string;
  serviceHref: string;
};

export const useCases: UseCase[] = [
  {
    title: "Reporting Excel mensuel",
    problem: "Un reporting récurrent doit être produit à partir de plusieurs exports.",
    manualWork:
      "Fusion de fichiers, copier-coller, formules fragiles et contrôles visuels.",
    automation:
      "Consolidation, contrôles d'écarts, génération du rapport et préparation de l'envoi.",
    expectedGain:
      "Un reporting plus régulier, moins dépendant d'une seule personne, avec anomalies visibles.",
    service: "Automatisation Excel & reporting",
    serviceHref: "/automatisation-reporting-excel",
  },
  {
    title: "Nettoyage et contrôle de données",
    problem: "Des fichiers Excel, CSV ou exports API doivent être préparés avant exploitation.",
    manualWork:
      "Renommage de colonnes, suppression de doublons, corrections de formats et vérifications manuelles.",
    automation:
      "Nettoyage, normalisation, détection d'anomalies simples et export exploitable.",
    expectedGain:
      "Des données plus homogènes et des erreurs repérées avant import ou partage.",
    service: "Traitement de données automatisé",
    serviceHref: "/traitement-donnees",
  },
  {
    title: "Relances clients ou fournisseurs",
    problem: "Des suivis réguliers sont nécessaires mais faciles à oublier.",
    manualWork:
      "Recherche des dossiers en attente, rédaction d'emails similaires et mise à jour du suivi.",
    automation:
      "Identification des relances, génération de brouillons et suivi des statuts.",
    expectedGain:
      "Des relances mieux suivies avec validation humaine avant envoi.",
    service: "Automatisation emails & documents",
    serviceHref: "/automatisation-emails-documents",
  },
  {
    title: "Traitement de documents PDF",
    problem: "Des informations doivent être extraites depuis des documents reçus régulièrement.",
    manualWork:
      "Lecture document par document, recopie d'informations et classement manuel.",
    automation:
      "Extraction encadrée, contrôle des champs attendus, signalement des cas incertains et export structuré.",
    expectedGain:
      "Moins de recopie manuelle et une meilleure traçabilité des informations extraites.",
    service: "Automatisation emails & documents",
    serviceHref: "/automatisation-emails-documents",
  },
  {
    title: "Tri et résumé d'emails entrants",
    problem: "Une boîte reçoit des demandes hétérogènes à qualifier.",
    manualWork:
      "Lecture, tri, synthèse, transfert à la bonne personne et suivi des demandes.",
    automation:
      "Classification, résumé, étiquetage et préparation d'une réponse ou d'une action de suivi.",
    expectedGain:
      "Des demandes plus faciles à orienter et moins de lecture répétitive.",
    service: "Automatisation emails & documents",
    serviceHref: "/automatisation-emails-documents",
  },
  {
    title: "Assistant interne sur procédures",
    problem: "Les équipes cherchent souvent les mêmes informations dans des documents dispersés.",
    manualWork:
      "Recherche dans des fichiers, questions répétées aux mêmes personnes et réponses variables.",
    automation:
      "Assistant documentaire sur un périmètre contrôlé, avec sources affichées quand c'est possible.",
    expectedGain:
      "Un accès plus simple aux procédures et un cadre de réponse plus homogène.",
    service: "Assistant IA interne",
    serviceHref: "/assistant-ia-interne",
  },
  {
    title: "Préparation de fichiers avant import",
    problem: "Un outil exige un format précis pour importer des données.",
    manualWork:
      "Adaptation manuelle des colonnes, vérification des champs obligatoires et correction des erreurs.",
    automation:
      "Transformation du fichier, contrôle des règles d'import et production d'un fichier prêt à charger.",
    expectedGain:
      "Des imports moins fragiles et des erreurs visibles avant intégration.",
    service: "Traitement de données automatisé",
    serviceHref: "/traitement-donnees",
  },
  {
    title: "Génération de documents internes",
    problem: "Des documents similaires doivent être produits à partir d'informations métier.",
    manualWork:
      "Copie d'un modèle, remplissage manuel, relecture et classement du document.",
    automation:
      "Préparation du document depuis un modèle, insertion des données utiles et validation avant diffusion.",
    expectedGain:
      "Une production plus régulière sans supprimer les étapes de relecture importantes.",
    service: "Automatisation emails & documents",
    serviceHref: "/automatisation-emails-documents",
  },
];
