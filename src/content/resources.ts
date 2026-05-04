import { pages, type PageDefinition } from "@/content/pages";

export type ResourceArticle = {
  slug: string;
  page: PageDefinition;
  title: string;
  description: string;
  angle: string;
  publishedAt: string;
  cta: {
    label: string;
    href: string;
  };
  sections: Array<{
    title: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
};

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "automatiser-reporting-excel",
    page: pages.resourceReportingExcel,
    title: "Comment automatiser un reporting Excel récurrent ?",
    description:
      "Un guide court pour repérer les symptômes d'un reporting fragile, cadrer les prérequis et automatiser sans supprimer la validation métier.",
    angle:
      "Expliquer les symptômes, les prérequis, les étapes, les limites et les bons cas d'usage.",
    publishedAt: "2026-05-04",
    cta: {
      label: "Voir l'offre automatisation reporting Excel →",
      href: "/automatisation-reporting-excel",
    },
    sections: [
      {
        title: "Pourquoi automatiser un reporting Excel ?",
        paragraphs: [
          "Un reporting Excel récurrent devient vite coûteux quand il dépend de plusieurs exports, copier-coller, formules fragiles et contrôles visuels. L'automatisation sert d'abord à fiabiliser la préparation : même ordre d'étapes, mêmes contrôles, mêmes sorties.",
          "Le but n'est pas de supprimer Excel à tout prix. Dans beaucoup de PME, Excel reste l'interface de validation la plus pratique. Le bon sujet consiste souvent à automatiser la consolidation et à laisser la décision métier visible.",
        ],
      },
      {
        title: "Signes qu'un reporting devient fragile",
        bullets: [
          "Plusieurs fichiers doivent être récupérés et fusionnés à chaque période.",
          "Une seule personne connaît les exceptions et les formules à ne pas casser.",
          "Les erreurs apparaissent souvent au moment de diffuser le rapport.",
          "Les contrôles sont faits visuellement, sans journal clair.",
          "Le reporting prend du temps même quand les données sources changent peu.",
        ],
      },
      {
        title: "Ce qui peut être automatisé",
        bullets: [
          "Récupération ou dépôt des exports dans un dossier défini.",
          "Normalisation des colonnes, formats, dates et libellés.",
          "Contrôles de cohérence : champs manquants, doublons, totaux, écarts.",
          "Génération d'un fichier Excel, PDF ou tableau de synthèse prêt à relire.",
          "Préparation d'une liste d'anomalies et d'un brouillon de commentaire.",
        ],
      },
      {
        title: "Ce qui doit rester validé",
        paragraphs: [
          "Les arbitrages métier, corrections sensibles, envois externes et commentaires engageants doivent rester validés par une personne. Un workflow fiable signale les anomalies ; il ne les maquille pas.",
        ],
      },
      {
        title: "Exemple de workflow",
        bullets: [
          "Les exports sont placés dans un dossier ou récupérés depuis un outil stable.",
          "Le workflow vérifie les colonnes attendues et normalise les données.",
          "Les contrôles isolent les écarts et produisent un journal lisible.",
          "Le rapport est généré avec une synthèse des points à vérifier.",
          "Une validation humaine confirme la diffusion.",
        ],
      },
      {
        title: "Par quoi commencer",
        paragraphs: [
          "Commencez avec un rapport final attendu, deux ou trois exports récents, la liste des contrôles actuels et quelques exemples d'erreurs déjà rencontrées. Ce petit périmètre suffit souvent à décider si un diagnostic, un prototype ou une automatisation complète est pertinent.",
        ],
      },
    ],
  },
  {
    slug: "audit-automatisation-pme",
    page: pages.resourceAuditPme,
    title:
      "Audit automatisation PME : comment identifier les bons processus à automatiser ?",
    description:
      "Une méthode pragmatique pour analyser les processus répétitifs, prioriser les bons sujets et éviter de commencer par l'outil.",
    angle:
      "Identifier les bons processus à automatiser avant de choisir une stack ou un outil IA.",
    publishedAt: "2026-05-04",
    cta: {
      label: "Voir l'audit automatisation IA →",
      href: "/audit-automatisation-ia",
    },
    sections: [
      {
        title: "Pourquoi ne pas commencer directement par un outil ?",
        paragraphs: [
          "Commencer par un outil pousse souvent à automatiser ce qui est visible plutôt que ce qui bloque vraiment. Un audit part des tâches répétitives, des données sources, des règles métier et des risques avant de choisir la solution.",
          "Cette étape évite les prototypes séduisants mais impossibles à maintenir : chatbot trop large, automatisation sans reprise d'erreur, ou workflow qui dépend encore de manipulations manuelles mal documentées.",
        ],
      },
      {
        title: "Quels processus analyser ?",
        bullets: [
          "Reportings Excel ou CSV produits chaque semaine ou chaque mois.",
          "Retraitements de données avant import, analyse ou partage.",
          "Emails entrants à qualifier, résumer, classer ou préparer en réponse.",
          "Documents, PDF ou formulaires dont il faut extraire des informations.",
          "Procédures internes consultées souvent mais difficiles à retrouver.",
        ],
      },
      {
        title: "Comment prioriser gain / complexité / risque ?",
        paragraphs: [
          "Un bon candidat combine fréquence, irritant réel et règles suffisamment explicites. La priorité ne se résume pas au temps gagné : il faut aussi regarder la stabilité des sources, la sensibilité des données, le risque d'erreur et la facilité de reprise.",
        ],
        bullets: [
          "Gain : fréquence, temps passé, stress évité, meilleure transmission.",
          "Complexité : nombre d'outils, qualité des données, exceptions.",
          "Risque : données sensibles, impact client, besoin de validation.",
        ],
      },
      {
        title: "Livrables attendus",
        bullets: [
          "Cartographie courte des processus analysés.",
          "Priorisation des sujets selon gain, complexité et risque.",
          "Recommandation : ne rien faire, diagnostic, prototype ou projet complet.",
          "Liste des données, accès, règles et validations nécessaires.",
          "Feuille de route pragmatique, sans promesse de ROI garanti.",
        ],
      },
      {
        title: "Après l'audit",
        paragraphs: [
          "La suite peut être un prototype sur un périmètre limité, une automatisation complète, ou parfois une simplification du processus avant toute IA. Le bon résultat d'un audit peut aussi être de refuser un sujet trop risqué ou trop flou à ce stade.",
        ],
      },
    ],
  },
  {
    slug: "assistant-ia-interne-entreprise",
    page: pages.resourceAssistantIa,
    title:
      "Assistant IA interne : comment le cadrer sans créer un chatbot incontrôlable ?",
    description:
      "Sources, périmètre, accès, hallucinations et pilote : les points à cadrer avant de lancer un assistant IA interne.",
    angle:
      "Cadrer un assistant IA interne utile, sourcé et limité à un périmètre maîtrisé.",
    publishedAt: "2026-05-04",
    cta: {
      label: "Voir l'offre assistant IA interne →",
      href: "/assistant-ia-interne",
    },
    sections: [
      {
        title: "Ce qu'est un assistant IA interne",
        paragraphs: [
          "Un assistant IA interne aide les équipes à retrouver, comprendre ou synthétiser des informations à partir d'un périmètre documentaire défini : procédures, FAQ, guides, documentation métier ou base de connaissances.",
          "Il ne doit pas être pensé comme un chatbot généraliste. Sa valeur vient du cadrage : sources autorisées, réponses attendues, refus hors périmètre et validation humaine sur les sujets sensibles.",
        ],
      },
      {
        title: "Sources et périmètre",
        bullets: [
          "Définir les documents autorisés et ceux qui sont exclus.",
          "Identifier les versions à jour et les documents obsolètes.",
          "Prévoir une logique de mise à jour du périmètre.",
          "Tester des questions fréquentes, ambiguës et hors périmètre.",
        ],
      },
      {
        title: "Accès et sécurité",
        paragraphs: [
          "Un assistant interne doit respecter les droits d'accès. Tout le monde ne doit pas nécessairement interroger les mêmes documents, et certaines réponses doivent rester limitées à des profils précis.",
        ],
        bullets: [
          "Limiter les sources selon les utilisateurs ou équipes.",
          "Éviter de charger des documents sensibles sans besoin clair.",
          "Journaliser les usages si le contexte l'exige.",
          "Prévoir une revue humaine pour les informations sensibles.",
        ],
      },
      {
        title: "Hallucinations et réponses hors périmètre",
        paragraphs: [
          "Le point critique n'est pas seulement la qualité des réponses, mais la capacité à refuser. Un assistant fiable doit signaler quand l'information n'est pas trouvée, citer ses sources quand possible et éviter de compléter avec une réponse plausible mais non sourcée.",
        ],
      },
      {
        title: "Démarrer par un pilote",
        paragraphs: [
          "Le pilote doit être volontairement limité : quelques documents propres, un groupe d'utilisateurs, une liste de questions de test et des critères de validation. On élargit seulement quand les refus, sources et limites sont compris.",
        ],
      },
    ],
  },
];

export const resourceArticlesBySlug = Object.fromEntries(
  resourceArticles.map((article) => [article.slug, article]),
) as Record<string, ResourceArticle>;
