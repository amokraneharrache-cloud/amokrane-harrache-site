export type QA = {
  question: string;
  answer: string;
};

export type MiniCase = {
  situation: string;
  automation: string;
  result: string;
};

export type ServiceSection = {
  eyebrow: string;
  title: string;
  intro?: string;
  text?: string;
  items?: string[];
  columns?: Array<{
    title: string;
    items: string[];
  }>;
};

export type ServiceHeroCard = {
  title: string;
  flow: string;
  items: Array<{
    label: string;
    text: string;
  }>;
  note?: string;
};

export type OfferFormat = {
  title: string;
  text: string;
};

export type ServiceDetail = {
  slug: string;
  path: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  shortDescription: string;
  primaryCta: string;
  secondaryCta?: string;
  secondaryHref?: string;
  symptoms: string[];
  automations: string[];
  outcomes: string[];
  examples: string[];
  miniCases?: MiniCase[];
  deliverables: string[];
  limits: string[];
  offers: string[];
  definition?: ServiceSection;
  focus?: ServiceSection;
  safety?: ServiceSection;
  gettingStarted?: ServiceSection;
  offersTitle?: string;
  offerFormats?: OfferFormat[];
  heroCard?: ServiceHeroCard;
  compactHero?: boolean;
  reassurance: string;
  ctaTitle: string;
  ctaText: string;
  faq: QA[];
};

export const reportingService: ServiceDetail = {
  slug: "reporting",
  path: "/automatisation-reporting-excel",
  label: "Automatisation Excel & reporting",
  eyebrow: "REPORTING EXCEL",
  title: "Automatiser un reporting Excel fragile sans perdre le contrôle",
  description:
    "Si votre reporting dépend de copier-coller, de multiples exports Excel/CSV, de formules fragiles et de contrôles manuels, il est souvent possible de fiabiliser la consolidation, détecter les écarts et générer un rapport prêt à valider.",
  shortDescription:
    "Transformer des fichiers Excel fragiles en workflows de consolidation, contrôle et génération de rapport.",
  primaryCta: "Faire analyser mon reporting →",
  secondaryCta: "Comprendre la méthode →",
  secondaryHref: "/methode",
  heroCard: {
    title: "Chaîne de reporting",
    flow: "Exports → Contrôles → Rapport → Validation humaine",
    items: [
      { label: "Exports", text: "Excel/CSV issus d'ERP, CRM ou outils comptables" },
      { label: "Contrôles", text: "Écarts, colonnes attendues, doublons et totaux" },
      { label: "Rapport", text: "Sortie PDF, Excel ou synthèse prête à relire" },
      { label: "Validation", text: "Contrôle métier avant diffusion importante" },
    ],
  },
  symptoms: [
    "Plusieurs fichiers Excel ou CSV à fusionner chaque semaine ou chaque mois",
    "Exports manuels depuis des outils métier puis copier-coller dans un modèle",
    "Formules fragiles, onglets cachés, macros anciennes ou versions concurrentes",
    "Contrôles d'écarts faits visuellement, souvent à la fin du processus",
    "Reporting dépendant d'une personne qui connaît les exceptions par cœur",
    "Envoi du rapport sous pression, avec peu de temps pour relire",
  ],
  automations: [
    "Consolidation de plusieurs exports dans une structure unique",
    "Contrôle d'écarts, champs manquants, doublons ou incohérences simples",
    "Génération d'un fichier Excel, PDF ou tableau de synthèse prêt à relire",
    "Préparation d'un email ou d'un dépôt dans un dossier partagé",
    "Journal d'exécution lisible pour comprendre ce qui a été traité",
  ],
  outcomes: [
    "Un reporting plus régulier, sans promettre un gain horaire universel",
    "Moins d'erreurs de manipulation et plus de contrôles visibles",
    "Un processus plus facile à transmettre à une autre personne",
    "Des anomalies isolées avant diffusion plutôt que découvertes après coup",
  ],
  examples: [
    "Reporting mensuel finance consolidé depuis plusieurs exports",
    "Suivi commercial avec contrôle des nouveaux contrats et écarts de statut",
    "Préparation d'un rapport de qualité de données avant comité métier",
    "Génération d'un fichier de synthèse puis brouillon d'email de diffusion",
  ],
  miniCases: [
    {
      situation: "Chaque mois, trois exports Excel sont copiés dans un modèle multi-onglets.",
      automation:
        "Le workflow consolide les exports, vérifie les colonnes attendues et signale les écarts de totaux.",
      result:
        "Le rapport est prêt à relire, avec une liste d'anomalies visibles avant diffusion.",
    },
    {
      situation: "Un suivi commercial mélange exports CRM, corrections manuelles et statuts incohérents.",
      automation:
        "Les doublons, statuts manquants, dates anormales et variations inhabituelles sont isolés.",
      result:
        "L'équipe valide les exceptions au lieu de relire tout le fichier ligne par ligne.",
    },
    {
      situation: "Un fichier partagé contient des formules cassées et des versions concurrentes.",
      automation:
        "La consolidation repart des exports sources et génère une synthèse contrôlée.",
      result:
        "Le reporting devient plus transmissible et moins dépendant d'une seule personne.",
    },
  ],
  deliverables: [
    "Cartographie du reporting actuel : sources, fichiers, règles, validations",
    "Prototype sur fichiers réels ou anonymisés",
    "Workflow de consolidation documenté",
    "Règles de contrôle et messages d'erreur compréhensibles",
    "Guide de reprise pour l'équipe métier",
  ],
  limits: [
    "Un reporting faux à la source ne devient pas fiable par magie",
    "Les règles métier doivent être explicites et testées sur des cas réels",
    "Les envois externes ou décisions sensibles gardent une validation humaine",
    "Les fichiers trop instables peuvent nécessiter un cadrage avant automatisation",
  ],
  offers: ["Diagnostic Express", "Prototype Workflow IA / Data", "Automatisation Métier Complète"],
  offersTitle: "Format de démarrage",
  offerFormats: [
    {
      title: "Diagnostic Express",
      text: "Vérifier si le reporting est automatisable.",
    },
    {
      title: "Prototype Workflow IA / Data",
      text: "Tester sur 2 ou 3 exports réels.",
    },
    {
      title: "Automatisation complète",
      text: "Industrialiser, documenter et transmettre.",
    },
  ],
  focus: {
    eyebrow: "FICHIERS & CONTRÔLES",
    title: "Fichiers, exports et contrôles concernés",
    intro:
      "Le point de départ est souvent une combinaison de fichiers, exports et vérifications qui se répète sous pression.",
    items: [
      "Exports Excel ou CSV",
      "Modèles multi-onglets",
      "Fichiers partagés",
      "Extractions ERP, CRM ou comptables",
      "Colonnes manquantes",
      "Doublons",
      "Écarts de totaux",
      "Statuts incohérents",
      "Dates anormales",
      "Formules cassées",
      "Variations inhabituelles",
    ],
  },
  safety: {
    eyebrow: "CONTRÔLE HUMAIN",
    title: "Ce qui reste sous contrôle humain",
    text:
      "Le workflow prépare, consolide et signale les anomalies. Les décisions métier, corrections sensibles et diffusions importantes restent validées par une personne.",
  },
  gettingStarted: {
    eyebrow: "DÉMARRER",
    title: "Comment démarrer",
    intro:
      "Pour analyser vite, il suffit souvent de partir d'un petit jeu d'exemples représentatifs.",
    items: [
      "Un fichier modèle ou rapport final attendu",
      "Deux ou trois exports récents",
      "Les contrôles faits aujourd'hui",
      "Les erreurs déjà rencontrées ou redoutées",
    ],
  },
  reassurance:
    "On automatise les manipulations répétitives, pas la responsabilité métier du reporting.",
  ctaTitle: "Vous voulez fiabiliser un reporting Excel ?",
  ctaText:
    "Envoyez la structure du fichier, le type d'exports et les contrôles actuels. On regarde si un diagnostic ou un prototype suffit.",
  faq: [
    {
      question: "Faut-il remplacer tous les fichiers Excel ?",
      answer:
        "Pas forcément. L'objectif est souvent de fiabiliser les fichiers existants, de réduire les manipulations manuelles et d'ajouter des contrôles utiles.",
    },
    {
      question: "Peut-on garder une validation avant envoi ?",
      answer:
        "Oui. Le workflow peut préparer le rapport, signaler les anomalies et laisser une personne valider avant diffusion.",
    },
    {
      question: "Que se passe-t-il si un export change ?",
      answer:
        "Le workflow doit produire une erreur lisible ou isoler le fichier concerné, plutôt que générer un résultat silencieusement faux.",
    },
    {
      question: "Quels fichiers faut-il fournir pour commencer ?",
      answer:
        "Un rapport final attendu, deux ou trois exports récents, les contrôles faits aujourd'hui et les erreurs déjà rencontrées suffisent souvent pour cadrer le premier diagnostic.",
    },
    {
      question: "Est-ce compatible avec des exports ERP, CRM ou outils comptables ?",
      answer:
        "Oui, si les exports sont accessibles et suffisamment stables. On peut commencer avec des fichiers Excel ou CSV extraits de ces outils avant d'envisager une connexion plus directe.",
    },
  ],
};

export const dataService: ServiceDetail = {
  slug: "data",
  path: "/traitement-donnees",
  label: "Traitement de données automatisé",
  eyebrow: "DONNÉES À RETRAITER",
  title: "Traitement de données automatisé",
  description:
    "Vos fichiers Excel, CSV, exports d'outils, bases ou API ne sont pas toujours exploitables tels quels. L'objectif est de nettoyer, normaliser, consolider et contrôler les données avant import, analyse ou partage.",
  shortDescription:
    "Automatiser le nettoyage, la consolidation, les contrôles et la préparation de fichiers exploitables.",
  primaryCta: "Étudier un traitement de données →",
  secondaryCta: "Voir la méthode →",
  secondaryHref: "/methode",
  symptoms: [
    "Données dispersées entre CSV, Excel, exports d'outils ou API",
    "Colonnes à renommer, formats à corriger, dates ou montants non homogènes",
    "Doublons, valeurs manquantes ou anomalies repérées trop tard",
    "Fichiers préparés à la main avant import dans un autre outil",
    "Règles métier connues oralement mais peu documentées",
    "Contrôles répétitifs que personne n'aime refaire",
  ],
  automations: [
    "Nettoyage de colonnes, formats, libellés et types de données",
    "Consolidation de plusieurs sources en un fichier structuré",
    "Détection de doublons, champs obligatoires manquants et anomalies simples",
    "Contrôles métier avant import ou partage",
    "Export final en CSV, Excel ou format attendu par votre outil",
    "Journal d'erreurs, lignes rejetées et contrôles bloquants avant import.",
  ],
  outcomes: [
    "Des données plus homogènes avant usage",
    "Des anomalies visibles et documentées",
    "Moins de retraitements manuels à chaque nouvelle extraction",
    "Une préparation plus facile à rejouer et à expliquer",
  ],
  examples: [
    "Préparation d'un fichier avant import comptable ou CRM",
    "Contrôle de doublons sur listes clients ou fournisseurs",
    "Normalisation de colonnes issues de plusieurs agences ou filiales",
    "Consolidation d'exports CSV et Excel avant analyse",
  ],
  miniCases: [
    {
      situation: "Un import comptable bloque à cause de colonnes manquantes et de formats incohérents.",
      automation:
        "Le traitement normalise les formats, vérifie les champs obligatoires et produit un fichier d'erreurs séparé.",
      result:
        "Le fichier importable est distinct des lignes à corriger, sans correction silencieuse.",
    },
    {
      situation: "Plusieurs agences envoient des exports CSV avec des libellés et structures différentes.",
      automation:
        "Les colonnes sont renommées, les valeurs harmonisées et les doublons signalés avant consolidation.",
      result:
        "L'analyse part d'un fichier homogène et les exceptions restent traçables.",
    },
    {
      situation: "Une base ou une API fournit des données utiles mais incomplètes selon les périodes.",
      automation:
        "Le workflow contrôle les valeurs attendues, isole les anomalies et documente les rejets.",
      result:
        "Les équipes savent ce qui peut être exploité et ce qui doit être revu.",
    },
  ],
  deliverables: [
    "Liste des sources, règles de transformation et exceptions connues",
    "Workflow de nettoyage et consolidation",
    "Contrôles de qualité avec sorties d'erreurs séparées",
    "Fichier final prêt à importer ou exploiter",
    "Documentation des règles métier appliquées",
  ],
  limits: [
    "Les données sources restent déterminantes : une source trop incohérente doit être cadrée",
    "Les règles métier ambiguës doivent être validées par vos équipes",
    "Les cas douteux doivent être isolés plutôt que corrigés automatiquement",
    "Les données sensibles exigent un choix d'outils et d'accès adapté",
  ],
  offers: ["Diagnostic Express", "Prototype Workflow IA / Data", "Automatisation Métier Complète"],
  offersTitle: "Format de démarrage",
  offerFormats: [
    {
      title: "Diagnostic Express",
      text:
        "Identifier sources, règles, anomalies fréquentes et décider si un prototype est pertinent.",
    },
    {
      title: "Prototype Workflow IA / Data",
      text:
        "Tester nettoyage, normalisation et contrôles sur un périmètre réel ou anonymisé.",
    },
    {
      title: "Automatisation complète",
      text:
        "Déployer un traitement récurrent avec documentation, contrôle des erreurs et reprise possible.",
    },
  ],
  focus: {
    eyebrow: "SOURCES & CONTRÔLES",
    title: "Sources, formats et contrôles concernés",
    intro:
      "Le traitement peut partir de sources simples ou plus techniques, tant que les règles attendues sont explicites.",
    items: [
      "Fichiers Excel et CSV",
      "Exports d'outils métier",
      "Bases de données",
      "API",
      "Fichiers avant import CRM, ERP ou comptable",
      "Listes clients, fournisseurs ou produits",
      "Contrôles de formats, dates, montants et champs obligatoires",
      "Anomalies, rejets et fichiers à corriger",
    ],
  },
  safety: {
    eyebrow: "SÉCURISER",
    title: "Sécuriser les transformations avant de les rejouer",
    text:
      "Un traitement de données fiable ne corrige pas tout en silence. Les règles sont explicites, les anomalies sont isolées, les fichiers rejetés sont visibles et les transformations sensibles restent validées par une personne.",
    items: [
      "Règles de transformation documentées",
      "Fichiers rejetés séparés des fichiers exploitables",
      "Validation humaine sur les corrections sensibles",
    ],
  },
  reassurance:
    "Le traitement est utile quand il rend les règles explicites, pas quand il cache les anomalies.",
  ctaTitle: "Vous avez des données à nettoyer ou consolider ?",
  ctaText:
    "Partons d'un fichier réel, d'un export ou d'une règle de contrôle pour cadrer le traitement le plus utile.",
  faq: [
    {
      question: "Peut-on traiter des données issues d'une base ou d'une API ?",
      answer:
        "Oui, si l'accès, le format, le volume et les règles de contrôle sont cadrés. On peut aussi commencer avec un export extrait de la base ou de l'API.",
    },
    {
      question: "Que se passe-t-il si les données source sont mauvaises ?",
      answer:
        "Le workflow doit rendre le problème visible : lignes rejetées, champs manquants, formats invalides ou anomalies à revoir. Il ne doit pas transformer une source mauvaise en sortie fausse mais propre en apparence.",
    },
    {
      question: "Comment éviter de propager une erreur ?",
      answer:
        "On définit des contrôles bloquants, des fichiers de rejet, un journal d'exécution et une validation humaine sur les transformations sensibles.",
    },
    {
      question: "Peut-on travailler sur des données anonymisées ?",
      answer:
        "Oui. Un prototype peut partir d'exemples anonymisés ou de fichiers représentatifs si les formats, règles et anomalies restent proches du contexte réel.",
    },
  ],
};

export const emailsDocumentsService: ServiceDetail = {
  slug: "emails-documents",
  path: "/automatisation-emails-documents",
  label: "Automatisation emails & documents",
  eyebrow: "EMAILS · PDF · DOCUMENTS",
  title: "Automatiser les emails, PDF et documents sans perdre le contrôle",
  description:
    "Emails entrants à trier, PDF à lire, informations à recopier, relances à suivre : on automatise ce qui est répétitif, tout en gardant une validation humaine sur les réponses, les cas sensibles et les extractions incertaines.",
  shortDescription:
    "Trier, résumer, extraire, générer des brouillons, classer et suivre les relances.",
  primaryCta: "Automatiser mes emails ou documents →",
  secondaryCta: "Voir les cas d'usage →",
  secondaryHref: "/cas-usages",
  compactHero: true,
  symptoms: [
    "Emails entrants à trier ou qualifier plusieurs fois par jour",
    "PDF ou documents reçus régulièrement et lus un par un",
    "Informations recopiées dans un tableau, un CRM ou un dossier",
    "Réponses répétitives à préparer sans envoyer automatiquement",
    "Relances clients ou fournisseurs faciles à oublier",
    "Classement documentaire dépendant de règles implicites",
  ],
  automations: [
    "Classification d'emails selon des critères métier",
    "Résumé de messages ou de pièces jointes pour accélérer la lecture",
    "Extraction de champs depuis PDF ou documents semi-structurés",
    "Préparation de brouillons et relances avec validation avant envoi",
    "Classement dans le bon dossier ou génération d'un fichier de suivi",
  ],
  outcomes: [
    "Moins de lecture répétitive sur les demandes simples",
    "Des informations extraites plus faciles à contrôler",
    "Des relances mieux suivies sans automatiser l'envoi sensible",
    "Des cas incertains signalés au lieu d'être traités comme certains",
  ],
  examples: [
    "Qualification de demandes entrantes et orientation vers la bonne personne",
    "Extraction d'informations depuis PDF fournisseurs ou clients",
    "Préparation de brouillons de réponse sur des demandes récurrentes",
    "Suivi des relances fournisseurs, clients ou administratives",
  ],
  miniCases: [
    {
      situation: "Une boîte partagée reçoit des demandes hétérogènes à qualifier chaque jour.",
      automation:
        "Les emails sont triés, résumés et orientés selon des règles métier explicites.",
      result:
        "Les demandes simples avancent plus vite et les cas incertains restent visibles.",
    },
    {
      situation: "Des PDF fournisseurs sont lus un par un pour recopier des références et montants.",
      automation:
        "Les champs attendus sont extraits, contrôlés et signalés quand la confiance est insuffisante.",
      result:
        "La recopie diminue sans supprimer la vérification sur les documents sensibles.",
    },
    {
      situation: "Les relances clients ou administratives sont faciles à oublier.",
      automation:
        "Le workflow repère les dossiers en attente et prépare des brouillons de relance.",
      result:
        "Le suivi devient plus régulier, avec validation avant tout envoi.",
    },
  ],
  deliverables: [
    "Cartographie des boîtes, dossiers, types de documents et règles de tri",
    "Prototype sur exemples réels ou anonymisés",
    "Workflow de traitement avec statuts et cas incertains",
    "Modèles de brouillons ou formats d'export",
    "Documentation des validations humaines nécessaires",
  ],
  limits: [
    "Les envois externes sensibles doivent rester validés par une personne",
    "Les extractions incertaines doivent être signalées ou mises en attente",
    "Les accès mail et documents doivent être limités au périmètre utile",
    "Les données personnelles ou confidentielles nécessitent un cadrage spécifique",
  ],
  offers: ["Diagnostic Express", "Prototype Workflow IA / Data", "Automatisation Métier Complète"],
  offersTitle: "Par quoi commencer ?",
  offerFormats: [
    {
      title: "Diagnostic Express",
      text: "Cadrer les emails/documents et repérer les quick wins.",
    },
    {
      title: "Prototype Workflow IA / Data",
      text: "Tester sur quelques exemples réels ou anonymisés.",
    },
    {
      title: "Automatisation complète",
      text: "Déployer le workflow avec règles, validations et documentation.",
    },
  ],
  focus: {
    eyebrow: "VALIDATION",
    title: "Préparer, valider ou mettre en attente",
    intro:
      "La matrice distingue ce que le workflow peut préparer, ce qui doit être relu et ce qui mérite une attente explicite.",
    columns: [
      {
        title: "Préparé automatiquement",
        items: [
          "Tri des emails",
          "Résumé des messages",
          "Extraction de champs PDF",
          "Classement dans les bons dossiers",
        ],
      },
      {
        title: "Validé par une personne",
        items: [
          "Brouillons de réponse",
          "Relances sensibles",
          "Informations critiques",
          "Décisions métier",
        ],
      },
      {
        title: "Mis en attente",
        items: [
          "Documents incomplets",
          "Extraction incertaine",
          "Demande ambiguë",
          "Niveau de confiance insuffisant",
        ],
      },
    ],
  },
  safety: {
    eyebrow: "TRANSPARENCE",
    title: "Automatiser sans boîte noire",
    text:
      "Les règles, les accès et les cas incertains restent visibles. L'objectif n'est pas de laisser l'IA décider seule, mais de réduire le travail répétitif sans perdre la capacité de vérifier.",
  },
  reassurance:
    "L'automatisation prépare, classe et signale ; elle ne doit pas envoyer n'importe quoi en votre nom.",
  ctaTitle: "Vous traitez trop d'emails ou de documents à la main ?",
  ctaText:
    "On identifie ce qui peut être trié, extrait, préparé ou relancé, avec validation humaine sur les étapes sensibles.",
  faq: [
    {
      question: "Faut-il donner accès à toute la boîte mail ?",
      answer:
        "Non. Le périmètre peut être limité à une adresse, un dossier, un libellé ou des messages répondant à des critères précis.",
    },
    {
      question: "Les réponses peuvent-elles partir automatiquement ?",
      answer:
        "Sur les sujets sensibles, il est préférable de générer des brouillons ou propositions de réponse avec validation humaine.",
    },
    {
      question: "Que faire des cas incertains ?",
      answer:
        "Ils doivent être signalés, mis en attente ou transmis à une personne plutôt que traités comme certains.",
    },
    {
      question: "Comment démarrer sans risque ?",
      answer:
        "On limite le périmètre à une boîte, un dossier, quelques documents types ou des exemples anonymisés. Le workflow prépare, signale et classe avant d'automatiser des étapes plus sensibles.",
    },
  ],
};

export const assistantService: ServiceDetail = {
  slug: "assistant",
  path: "/assistant-ia-interne",
  label: "Assistant IA interne",
  eyebrow: "ASSISTANT IA INTERNE",
  title: "Assistant IA interne pour retrouver vos procédures sans perdre le contrôle",
  description:
    "Un assistant IA interne répond à partir d'un périmètre documentaire défini : procédures, FAQ, guides métier, règles RH, finance ou support interne. Il cite ses sources quand c'est possible, signale ses limites et garde une validation humaine sur les sujets sensibles.",
  shortDescription:
    "Créer un assistant interne sur un périmètre documentaire contrôlé, sans vendre un ChatGPT magique.",
  primaryCta: "Étudier un assistant interne →",
  secondaryCta: "Parler sécurité & données →",
  secondaryHref: "/securite-donnees",
  heroCard: {
    title: "Fonctionnement cadré",
    flow: "Sources autorisées → Assistant → Réponse sourcée / refus hors périmètre",
    items: [
      { label: "Sources validées", text: "Procédures, FAQ, guides métier" },
      { label: "Accès cadrés", text: "Par rôle, équipe ou dossier" },
      { label: "Réponses vérifiables", text: "Source citée ou refus clair" },
    ],
  },
  symptoms: [
    "Procédures dispersées dans des dossiers, outils ou documents difficiles à retrouver",
    "Questions répétitives posées aux mêmes personnes",
    "Réponses différentes selon l'interlocuteur ou la version du document",
    "Support interne, RH, finance ou opérations saturés par des demandes simples",
    "Besoin de synthèse ou d'aide à la rédaction sur un périmètre connu",
    "Crainte de créer une boîte noire qui répond sans source",
  ],
  automations: [
    "Assistant sur base documentaire cadrée",
    "Recherche et synthèse dans procédures, FAQ ou documentation métier",
    "Réponses avec sources ou références quand l'architecture le permet",
    "Règles d'accès selon utilisateurs, documents et sensibilité",
    "Messages de limite quand la réponse sort du périmètre",
    "Jeu de questions tests pour valider les réponses, les sources et les refus",
  ],
  outcomes: [
    "Un accès plus simple aux procédures internes",
    "Des réponses plus homogènes sur les questions fréquentes",
    "Un cadre clair sur ce que l'assistant peut et ne peut pas faire",
    "Une validation humaine maintenue sur les sujets sensibles",
  ],
  examples: [
    "Assistant procédures RH pour questions fréquentes internes",
    "Assistant support sur guides de résolution et documentation produit",
    "Assistant finance pour procédures, règles de contrôle et calendriers internes",
    "Aide à la réponse client ou interne sur un périmètre documentaire validé",
  ],
  miniCases: [
    {
      situation: "Les équipes RH répondent souvent aux mêmes questions sur des procédures internes.",
      automation:
        "L'assistant recherche dans un périmètre documentaire choisi et cite les sources quand c'est possible.",
      result:
        "Les réponses fréquentes sont plus rapides à retrouver, avec une limite visible hors périmètre.",
    },
    {
      situation: "Le support interne dépend de guides dispersés et de réponses transmises oralement.",
      automation:
        "Les documents validés sont indexés et les questions incertaines sont signalées au lieu d'être inventées.",
      result:
        "L'équipe gagne un point d'entrée commun sans perdre le contrôle des cas sensibles.",
    },
    {
      situation: "La finance veut retrouver des règles de contrôle et calendriers internes sans chercher partout.",
      automation:
        "L'assistant synthétise les procédures autorisées et renvoie vers les documents de référence.",
      result:
        "La recherche est plus simple, tout en gardant une vérification possible.",
    },
  ],
  deliverables: [
    "Cadrage du périmètre documentaire et des cas d'usage autorisés",
    "Règles d'accès et de confidentialité selon contexte",
    "Prototype d'assistant avec sources et limites visibles",
    "Jeu de tests métier pour vérifier les réponses",
    "Documentation d'usage et de maintenance",
  ],
  limits: [
    "Ce n'est pas un ChatGPT magique branché sur toute l'entreprise",
    "Un document faux, obsolète ou contradictoire produit de mauvaises réponses",
    "Les actions sensibles doivent rester proposées ou préparées, pas exécutées seules",
    "Les accès aux documents doivent respecter votre organisation et la sensibilité des données",
  ],
  offers: ["Audit Automatisation IA", "Assistant IA Interne", "Maintenance & amélioration continue"],
  definition: {
    eyebrow: "DÉFINITION",
    title: "Ce qu'est un assistant IA interne",
    text:
      "Un assistant IA interne n'est pas un ChatGPT branché sur toute l'entreprise. C'est une interface de recherche et de synthèse construite sur des sources choisies, avec des règles d'accès, des limites visibles et des réponses vérifiables quand les sources le permettent.",
  },
  focus: {
    eyebrow: "PÉRIMÈTRE",
    title: "Sources, accès et limites",
    intro:
      "Le cadrage décide ce que l'assistant peut consulter, ce qu'il doit refuser et comment les équipes vérifient les réponses.",
    items: [
      "Périmètre documentaire",
      "Sources citées si possible",
      "Refus des questions hors périmètre",
      "Signalement des cas incertains",
      "Accès par équipe, rôle, dossier ou niveau de sensibilité",
      "Validation humaine sur les sujets sensibles",
    ],
  },
  safety: {
    eyebrow: "ANTI-HALLUCINATION",
    title: "Limiter les réponses inventées",
    text:
      "Pour limiter les réponses inventées, l'assistant doit travailler sur des documents identifiés, citer ses sources quand c'est possible, refuser les questions hors périmètre et signaler les cas incertains au lieu de répondre avec assurance.",
  },
  gettingStarted: {
    eyebrow: "PILOTE",
    title: "Commencer par un plan pilote",
    intro:
      "Un assistant fiable se teste d'abord sur un périmètre court, avec des questions réelles et des refus assumés.",
    items: [
      "Choisir une équipe ou un service pilote",
      "Sélectionner les documents autorisés",
      "Tester 20 à 50 questions réelles",
      "Valider les réponses, refus et cas incertains",
    ],
  },
  offersTitle: "Suite possible après le pilote",
  reassurance:
    "Le bon assistant commence par un périmètre documentaire, des sources et des limites, pas par une démonstration spectaculaire.",
  ctaTitle: "Vous envisagez un assistant IA interne ?",
  ctaText:
    "On commence par le périmètre documentaire, les usages autorisés, les limites et les validations humaines nécessaires.",
  faq: [
    {
      question: "Quels documents peut-on utiliser ?",
      answer:
        "Procédures, guides, politiques internes, bases de connaissances ou documents métier, si leur périmètre est clair et leur qualité suffisante.",
    },
    {
      question: "Comment éviter les hallucinations ?",
      answer:
        "On limite le périmètre documentaire, on teste des questions réelles, on demande des sources quand l'architecture le permet et on prévoit un refus clair hors périmètre.",
    },
    {
      question: "Comment sont gérés les accès ?",
      answer:
        "Les accès sont cadrés selon les documents, rôles, équipes, dossiers ou niveaux de sensibilité. L'assistant ne doit pas consulter tout le corpus par défaut.",
    },
    {
      question: "Peut-on commencer avec un petit périmètre ?",
      answer:
        "Oui. C'est même recommandé : une équipe pilote, quelques documents autorisés et un jeu de questions réelles permettent de valider les réponses et les limites.",
    },
    {
      question: "Que se passe-t-il si la question sort du périmètre ?",
      answer:
        "L'assistant doit refuser, signaler la limite ou orienter vers une validation humaine, plutôt que produire une réponse inventée.",
    },
  ],
};

export const servicePages = [
  reportingService,
  dataService,
  emailsDocumentsService,
  assistantService,
];

export const servicesBySlug = {
  reporting: reportingService,
  data: dataService,
  emailsDocuments: emailsDocumentsService,
  assistant: assistantService,
};
