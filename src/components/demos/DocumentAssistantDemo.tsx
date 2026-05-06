"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/Badge";

const authorizedDocuments = [
  {
    id: "support",
    title: "Procédure support — demandes incomplètes",
    excerpt:
      "Quand une demande client est incomplète, l'équipe doit demander les informations manquantes, indiquer le délai de réponse attendu et classer la demande en statut À compléter.",
  },
  {
    id: "finance",
    title: "Guide finance — validation des montants",
    excerpt:
      "Tout montant négatif ou incohérent doit être vérifié avant diffusion d'un reporting. Les corrections doivent être tracées et validées par un responsable.",
  },
  {
    id: "hr",
    title: "FAQ RH non sensible — télétravail",
    excerpt:
      "Les demandes de télétravail ponctuel doivent être formulées au moins 48h à l'avance, sauf exception validée par le manager.",
  },
] as const;

const exampleQuestions = [
  {
    id: "support-incomplete",
    question: "Que faire si une demande client est incomplète ?",
    answer:
      "Il faut demander les informations manquantes, préciser le délai attendu et classer la demande en statut À compléter.",
    source: "Procédure support — demandes incomplètes",
    badge: "Réponse sourcée",
    tone: "green",
  },
  {
    id: "negative-amount",
    question: "Comment traiter un montant négatif dans un reporting ?",
    answer:
      "Le montant doit être vérifié avant diffusion. La correction doit être tracée et validée par un responsable.",
    source: "Guide finance — validation des montants",
    badge: "Réponse sourcée",
    tone: "green",
  },
  {
    id: "salary",
    question: "Quel est le salaire de Sarah ?",
    answer:
      "Je ne peux pas répondre : cette question sort du périmètre documentaire autorisé.",
    source: null,
    badge: "Hors périmètre",
    tone: "orange",
  },
  {
    id: "auto-approval",
    question: "Puis-je valider automatiquement une correction de montant ?",
    answer:
      "Non. La démo prévoit une validation humaine sur ce type de décision sensible.",
    source: "Guide finance — validation des montants",
    badge: "Validation humaine",
    tone: "orange",
  },
] as const;

const demoShows = [
  "Un assistant limité à des documents autorisés.",
  "Une réponse courte avec source quand l'information est dans le périmètre.",
  "Un refus clair quand la question sort des sources disponibles.",
  "Un signalement de validation humaine sur les décisions sensibles.",
];

const demoDoesNotDo = [
  "Aucun upload de document.",
  "Aucun appel API IA.",
  "Aucun stockage de contenu.",
  "Aucune réponse présentée comme un conseil RH, juridique ou financier complet.",
];

type QuestionId = (typeof exampleQuestions)[number]["id"];

function getToneClasses(tone: (typeof exampleQuestions)[number]["tone"]) {
  return tone === "green"
    ? "border-[#D5E7DA] bg-[#F0FAF4] text-[#0F7A4F]"
    : "border-[#F0C7B2] bg-[#FFF3ED] text-[#C75A2A]";
}

export function DocumentAssistantDemo() {
  const [selectedQuestionId, setSelectedQuestionId] = useState<QuestionId>(
    exampleQuestions[0].id,
  );
  const selectedQuestion =
    exampleQuestions.find((question) => question.id === selectedQuestionId) ??
    exampleQuestions[0];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] shadow-[0_24px_80px_rgba(17,17,14,0.09)]"
      data-document-assistant-demo
    >
      <div className="border-b border-[#DDD8CC] bg-[#F7F5EF] p-5 sm:p-6 lg:p-7">
        <div className="flex flex-wrap gap-2">
          <Badge>Données fictives</Badge>
          <Badge className="border-[#C9D4FF] bg-[#E8EDFF] text-[#3558D4]">
            Périmètre documentaire cadré
          </Badge>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <h3 className="text-[26px] font-semibold leading-tight tracking-normal text-[#171713] sm:text-[32px]">
              Assistant documentaire interne cadré
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#5F5A50]">
              La simulation interroge seulement des sources fictives autorisées :
              elle répond avec source, refuse hors périmètre et rappelle les
              validations humaines.
            </p>
          </div>
          <div className="rounded-xl border border-[#D5E7DA] bg-[#F0FAF4] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">
              Fonctionnement local
            </p>
            <p className="mt-2 text-sm leading-6 text-[#0F6B47]">
              Aucun upload, aucun appel API IA et aucun stockage : les réponses
              sont des scénarios fictifs intégrés à la page.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:p-7">
        <section className="min-w-0 rounded-2xl border border-[#DDD8CC] bg-[#F7F5EF] p-4 sm:p-5">
          <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
            Sources autorisées
          </p>
          <div className="mt-4 grid gap-3">
            {authorizedDocuments.map((document) => (
              <article
                className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4"
                key={document.id}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="max-w-full break-words font-semibold leading-6 text-[#171713]">
                    {document.title}
                  </h4>
                  <Badge className="border-[#C9D4FF] bg-[#E8EDFF] text-[#3558D4]">
                    Source autorisée
                  </Badge>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#5F5A50]">
                  “{document.excerpt}”
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid min-w-0 gap-4 rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 sm:p-5">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
              Question utilisateur
            </p>
            <div className="mt-4 grid gap-2">
              {exampleQuestions.map((question) => {
                const isSelected = selectedQuestion.id === question.id;

                return (
                  <button
                    aria-pressed={isSelected}
                    className={`w-full rounded-xl border p-4 text-left text-sm font-semibold leading-6 transition ${
                      isSelected
                        ? "border-[#C9D4FF] bg-[#E8EDFF] text-[#171713] shadow-[0_10px_28px_rgba(53,88,212,0.14)]"
                        : "border-[#DDD8CC] bg-[#F7F5EF] text-[#5F5A50] hover:border-[#C9D4FF] hover:bg-[#F4F6FF]"
                    }`}
                    key={question.id}
                    onClick={() => setSelectedQuestionId(question.id)}
                    type="button"
                  >
                    {question.question}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            aria-live="polite"
            className={`rounded-2xl border p-4 sm:p-5 ${getToneClasses(selectedQuestion.tone)}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge className={getToneClasses(selectedQuestion.tone)}>
                {selectedQuestion.badge}
              </Badge>
              <span className="font-mono text-xs font-semibold uppercase">
                Réponse de l'assistant
              </span>
            </div>
            <p className="mt-4 text-base font-semibold leading-7 text-[#171713]">
              {selectedQuestion.answer}
            </p>
            {selectedQuestion.source ? (
              <div className="mt-4 rounded-xl border border-white/70 bg-white/60 p-4">
                <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
                  Source utilisée
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#171713]">
                  {selectedQuestion.source}
                </p>
              </div>
            ) : (
              <div className="mt-4 rounded-xl border border-white/70 bg-white/60 p-4">
                <p className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">
                  Règle appliquée
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#171713]">
                  L'assistant refuse de répondre quand aucune source autorisée
                  ne couvre la question.
                </p>
              </div>
            )}
          </div>

          <div className="rounded-xl border border-[#D5E7DA] bg-[#F0FAF4] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">
              Rappel de cadrage
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-[#0F6B47]">
              L'assistant ne remplace pas les règles d'accès ni la validation
              métier.
            </p>
          </div>
        </section>
      </div>

      <div className="grid gap-4 border-t border-[#DDD8CC] bg-[#EFEDE5] p-4 sm:p-6 lg:grid-cols-2 lg:p-7">
        <section className="rounded-2xl border border-[#D5E7DA] bg-[#F0FAF4] p-4 sm:p-5">
          <p className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">
            Ce que cette démo montre
          </p>
          <ul className="mt-4 grid gap-3">
            {demoShows.map((item) => (
              <li className="flex gap-3 text-sm leading-6 text-[#0F6B47]" key={item}>
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D5E7DA] bg-white font-mono text-xs font-semibold text-[#0F7A4F]"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-[#F0C7B2] bg-[#FFF3ED] p-4 sm:p-5">
          <p className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">
            Ce qu'elle ne fait pas
          </p>
          <ul className="mt-4 grid gap-3">
            {demoDoesNotDo.map((item) => (
              <li className="flex gap-3 text-sm leading-6 text-[#8F3F20]" key={item}>
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#F0C7B2] bg-white font-mono text-xs font-semibold text-[#C75A2A]"
                >
                  !
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
