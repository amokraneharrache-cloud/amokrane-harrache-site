import { pages, type PageDefinition } from "@/content/pages";

export type Demonstrator = {
  slug: string;
  page: PageDefinition;
  eyebrow: string;
  h1: string;
  subtitle: string;
  reassurance: string;
  card: {
    problem: string;
    shows: string;
    limits: string;
  };
  problem: string;
  before: string;
  workflow: string[];
  whatItShows: string[];
  aiDoes: string[];
  aiDoesNot: string[];
  limits: string[];
  realProject: string[];
  cta: {
    label: string;
    href: string;
  };
  visual: {
    input: string;
    control: string;
    output: string;
    validation: string;
  };
};

const commonReassurance =
  "Ces démonstrateurs ne sont pas présentés comme des missions client. Ils servent à montrer une approche : problème métier, données, règles, workflow, limites et validation humaine.";

export const demonstrators: Demonstrator[] = [
  {
    slug: "assistant-excel",
    page: pages.demonstratorExcel,
    eyebrow: "DÉMONSTRATEUR EXCEL",
    h1: "Démonstrateur : assistant IA pour fichier Excel",
    subtitle:
      "Un assistant qui aide à lire un fichier Excel métier, repérer les colonnes importantes, détecter des anomalies simples et produire une synthèse exploitable.",
    reassurance: commonReassurance,
    card: {
      problem:
        "Un fichier Excel récurrent doit être relu, contrôlé et résumé manuellement avant décision ou partage.",
      shows:
        "Lecture des colonnes, anomalies simples, synthèse métier et liste des points à vérifier.",
      limits:
        "La qualité du fichier et les règles métier restent déterminantes ; la validation humaine reste nécessaire.",
    },
    problem:
      "Un fichier Excel métier concentre souvent des règles implicites : colonnes attendues, formats, valeurs incohérentes, totaux à vérifier et exceptions connues d'une seule personne.",
    before:
      "Un responsable métier reçoit un fichier Excel récurrent, vérifie les colonnes à la main, cherche les incohérences et produit une synthèse manuelle.",
    workflow: [
      "Chargement du fichier exemple",
      "Lecture des colonnes",
      "Détection d'anomalies simples",
      "Synthèse métier",
      "Liste des points à vérifier",
      "Validation humaine",
    ],
    whatItShows: [
      "Comment cadrer la structure attendue d'un fichier avant d'automatiser.",
      "Comment rendre visibles les colonnes manquantes, valeurs atypiques ou incohérences simples.",
      "Comment produire une synthèse utile sans masquer les limites du contrôle.",
      "Comment séparer ce qui est signalé automatiquement de ce qui doit être validé.",
    ],
    aiDoes: [
      "Repère les colonnes importantes et reformule leur rôle probable.",
      "Signale des anomalies simples selon des règles définies.",
      "Produit une synthèse lisible pour une revue métier.",
      "Prépare une liste de points à vérifier au lieu de décider seule.",
    ],
    aiDoesNot: [
      "Ne remplace pas un contrôle métier.",
      "Ne corrige pas les données sources sans règle validée.",
      "Ne garantit pas que toutes les anomalies possibles sont couvertes.",
      "Ne transforme pas un fichier instable en processus fiable sans cadrage.",
    ],
    limits: [
      "Ne remplace pas un contrôle métier.",
      "Dépend de la qualité du fichier.",
      "Doit être testé sur des fichiers réels ou anonymisés.",
      "Les règles métier doivent être cadrées.",
    ],
    realProject: [
      "Un jeu de fichiers réels ou anonymisés représentatifs.",
      "La liste des colonnes attendues et des contrôles importants.",
      "Des exemples d'erreurs déjà rencontrées.",
      "Un format de synthèse utile pour les équipes.",
      "Des règles de validation et de reprise en cas d'anomalie.",
    ],
    cta: {
      label: "Faire cadrer un fichier Excel →",
      href: "/automatisation-reporting-excel",
    },
    visual: {
      input: "Fichier Excel",
      control: "Colonnes + anomalies",
      output: "Synthèse métier",
      validation: "Points à vérifier",
    },
  },
  {
    slug: "reporting-automatise",
    page: pages.demonstratorReporting,
    eyebrow: "DÉMONSTRATEUR REPORTING",
    h1: "Démonstrateur : workflow de reporting automatisé",
    subtitle:
      "Un workflow qui illustre comment plusieurs exports peuvent être consolidés, contrôlés et transformés en reporting prêt à valider.",
    reassurance: commonReassurance,
    card: {
      problem:
        "Un reporting récurrent dépend de plusieurs exports, copier-coller et vérifications manuelles.",
      shows:
        "Consolidation, normalisation, contrôles de cohérence, écarts et rapport prêt à valider.",
      limits:
        "Les sources, règles de contrôle, exceptions et étapes de documentation doivent être stabilisées.",
    },
    problem:
      "Un reporting mensuel ou hebdomadaire devient fragile quand il dépend de fichiers récupérés à la main, de modèles Excel, de contrôles visuels et d'une diffusion sous contrainte de temps.",
    before:
      "Chaque mois, plusieurs fichiers sont récupérés, copiés, collés et vérifiés manuellement avant diffusion.",
    workflow: [
      "Récupération des exports",
      "Normalisation des colonnes",
      "Contrôles de cohérence",
      "Détection des écarts",
      "Génération du rapport",
      "Validation avant envoi",
    ],
    whatItShows: [
      "Comment faire passer plusieurs exports dans une chaîne de contrôle lisible.",
      "Comment bloquer ou signaler les écarts avant la génération du rapport.",
      "Comment garder une validation avant diffusion.",
      "Comment documenter les règles plutôt que dépendre d'un copier-coller maîtrisé par une seule personne.",
    ],
    aiDoes: [
      "Explique les écarts ou anomalies dans une synthèse lisible.",
      "Aide à produire un commentaire de reporting à partir des contrôles.",
      "Prépare une liste d'exceptions à relire.",
      "Peut générer un brouillon de rapport, soumis à validation.",
    ],
    aiDoesNot: [
      "Ne décide pas si un écart est acceptable.",
      "Ne diffuse pas un rapport sensible sans validation.",
      "N'invente pas les valeurs manquantes.",
      "Ne compense pas des exports instables sans règles de reprise.",
    ],
    limits: [
      "Les sources doivent être stables.",
      "Les règles de contrôle doivent être définies.",
      "Les exceptions doivent être traitées.",
      "Le workflow doit être documenté.",
    ],
    realProject: [
      "Les exports sources et leur fréquence réelle.",
      "Le rapport final attendu ou un exemple de sortie.",
      "La liste des contrôles bloquants et non bloquants.",
      "Les exceptions connues et leur traitement.",
      "Un mode de validation avant envoi ou dépôt.",
    ],
    cta: {
      label: "Étudier un reporting récurrent →",
      href: "/automatisation-reporting-excel",
    },
    visual: {
      input: "Exports",
      control: "Cohérence + écarts",
      output: "Rapport prêt",
      validation: "Validation avant envoi",
    },
  },
  {
    slug: "assistant-documentaire",
    page: pages.demonstratorDocumentary,
    eyebrow: "DÉMONSTRATEUR DOCUMENTAIRE",
    h1: "Démonstrateur : assistant documentaire interne",
    subtitle:
      "Un assistant qui répond à partir d'un périmètre documentaire défini : procédures, FAQ, guides internes ou documentation métier.",
    reassurance: commonReassurance,
    card: {
      problem:
        "Les réponses métier sont dispersées entre procédures, documents, dossiers partagés et habitudes orales.",
      shows:
        "Périmètre documentaire, recherche de passages, réponse sourcée si possible et refus hors périmètre.",
      limits:
        "L'assistant dépend de documents propres, d'accès maîtrisés et d'une validation sur les sujets sensibles.",
    },
    problem:
      "Un assistant documentaire n'est utile que si son périmètre est clair : quelles sources sont autorisées, quelles réponses doivent citer un passage, et quand l'outil doit refuser de répondre.",
    before:
      "Les équipes cherchent des réponses dans plusieurs documents, procédures ou dossiers partagés, avec des réponses parfois différentes selon les personnes.",
    workflow: [
      "Sélection des documents autorisés",
      "Indexation du périmètre",
      "Question utilisateur",
      "Recherche des passages pertinents",
      "Réponse avec source si possible",
      "Refus ou signalement si hors périmètre",
    ],
    whatItShows: [
      "Comment limiter un assistant à des sources définies.",
      "Comment faire apparaître les passages utilisés quand c'est possible.",
      "Comment gérer une question hors périmètre sans réponse inventée.",
      "Comment garder une validation humaine sur les réponses sensibles.",
    ],
    aiDoes: [
      "Recherche les passages pertinents dans le périmètre autorisé.",
      "Synthétise une réponse à partir des sources disponibles.",
      "Cite la source quand le passage est identifiable.",
      "Signale quand l'information semble absente ou hors périmètre.",
    ],
    aiDoesNot: [
      "Ne répond pas volontairement hors sources.",
      "Ne contourne pas les règles d'accès.",
      "Ne transforme pas une documentation obsolète en vérité fiable.",
      "Ne remplace pas la validation humaine sur les sujets sensibles.",
    ],
    limits: [
      "Ne doit pas répondre hors sources.",
      "Doit citer ses sources quand possible.",
      "Nécessite des documents propres.",
      "Doit garder une validation humaine sur les sujets sensibles.",
    ],
    realProject: [
      "Un périmètre documentaire clair et maintenable.",
      "Des règles d'accès selon les profils utilisateurs.",
      "Une stratégie de mise à jour des documents.",
      "Des réponses attendues et refus attendus pour tester le pilote.",
      "Un processus de validation sur les sujets sensibles.",
    ],
    cta: {
      label: "Cadrer un assistant interne →",
      href: "/assistant-ia-interne",
    },
    visual: {
      input: "Documents autorisés",
      control: "Recherche sourcée",
      output: "Réponse cadrée",
      validation: "Refus si hors périmètre",
    },
  },
];

export const demonstratorsBySlug = Object.fromEntries(
  demonstrators.map((demonstrator) => [demonstrator.slug, demonstrator]),
) as Record<string, Demonstrator>;
