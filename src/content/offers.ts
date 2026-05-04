export type Offer = {
  title: string;
  price: string;
  badge?: string;
  description: string;
  idealFor: string;
  forWhom: string;
  situation: string;
  budget: string;
  nextStep: string;
  cta: string;
  href: string;
};

export const offers: Offer[] = [
  {
    title: "Diagnostic Express",
    price: "590 € HT",
    description:
      "Analyser rapidement une tâche précise, repérer les risques et savoir si une automatisation vaut le coup.",
    idealFor: "Un irritant clair, un fichier ou une tâche déjà identifiée.",
    forWhom: "Besoin ponctuel, périmètre limité, décision rapide.",
    situation:
      "Vous avez un irritant précis et vous voulez savoir s'il mérite une automatisation.",
    budget: "590 € HT",
    nextStep: "Envoyer un exemple de fichier, d'email, de PDF ou de processus.",
    cta: "Réserver un diagnostic →",
    href: "/contact",
  },
  {
    title: "Audit Automatisation IA",
    price: "À partir de 1 900 € HT",
    badge: "Point de départ recommandé",
    description:
      "Prioriser plusieurs processus, clarifier les gains possibles, les limites, les risques et la suite utile.",
    idealFor: "Plusieurs processus à analyser ou une feuille de route à construire.",
    forWhom: "PME ou équipe métier qui veut décider avant de développer.",
    situation:
      "Vous avez plusieurs tâches, fichiers, emails ou contrôles à arbitrer.",
    budget: "À partir de 1 900 € HT",
    nextStep: "Demander un audit pour prioriser gain, complexité et risque.",
    cta: "Demander un audit →",
    href: "/audit-automatisation-ia",
  },
  {
    title: "Prototype Workflow IA / Data",
    price: "À partir de 2 500 € HT",
    description:
      "Tester une automatisation sur un cas réel avant d'investir dans un déploiement complet.",
    idealFor: "Un cas d'usage identifié qui doit être validé sur données réelles.",
    forWhom: "Équipe qui veut voir le fonctionnement et les limites concrètes.",
    situation:
      "Le cas est identifié, mais vous voulez vérifier les sorties avant de déployer.",
    budget: "À partir de 2 500 € HT",
    nextStep: "Choisir un périmètre court et fournir des exemples représentatifs.",
    cta: "Lancer un prototype →",
    href: "/contact",
  },
  {
    title: "Automatisation Métier Complète",
    price: "Sur devis · dès 5 000 € HT",
    description:
      "Concevoir, déployer et documenter un workflow fiable, adapté à vos outils et à vos validations.",
    idealFor: "Un processus récurrent, utile, sensible ou partagé par plusieurs personnes.",
    forWhom: "Reporting, traitement de données, relances, documents ou contrôles.",
    situation:
      "Le workflow est prioritaire, testé ou suffisamment clair pour être intégré.",
    budget: "Sur devis · dès 5 000 € HT",
    nextStep: "Cadrer les outils, accès, contrôles et validations à conserver.",
    cta: "Étudier le projet →",
    href: "/contact",
  },
  {
    title: "Assistant IA Interne",
    price: "Sur devis · dès 9 000 € HT",
    description:
      "Créer un assistant interne basé sur vos documents, avec périmètre, sources, limites et accès cadrés.",
    idealFor: "Des équipes qui consultent souvent les mêmes procédures.",
    forWhom: "Support interne, RH, finance, opérations, documentation métier.",
    situation:
      "Vos équipes cherchent souvent les mêmes réponses dans des documents dispersés.",
    budget: "Sur devis · dès 9 000 € HT",
    nextStep: "Commencer par un périmètre documentaire réduit et vérifiable.",
    cta: "Parler d'un assistant interne →",
    href: "/assistant-ia-interne",
  },
  {
    title: "Maintenance & amélioration continue",
    price: "Dès 750 € HT/mois",
    description:
      "Suivre, corriger et améliorer vos automatisations quand vos fichiers, outils ou volumes évoluent.",
    idealFor: "Des workflows utiles qui doivent rester fiables dans le temps.",
    forWhom: "Automatisations déjà en production ou nouvellement déployées.",
    situation:
      "Une automatisation existe ou va être déployée et doit suivre l'évolution des fichiers.",
    budget: "Dès 750 € HT/mois",
    nextStep: "Définir les contrôles, incidents, améliorations et rythme de suivi.",
    cta: "Mettre en place un suivi →",
    href: "/contact",
  },
];
