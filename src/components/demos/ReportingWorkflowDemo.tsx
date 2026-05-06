"use client";

import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/Badge";

const steps = [
  {
    id: 1,
    title: "Exports reçus",
    text: "Trois exports fictifs sont prêts à être rapprochés.",
  },
  {
    id: 2,
    title: "Consolidation",
    text: "Les lignes client sont rapprochées entre CRM, facturation et relances.",
  },
  {
    id: 3,
    title: "Contrôles automatiques",
    text: "Les règles repèrent les champs manquants, montants atypiques et relances anciennes.",
  },
  {
    id: 4,
    title: "Rapport prêt à valider",
    text: "Une synthèse courte liste les points à relire avant diffusion.",
  },
];

const exportsReceived = [
  "export_crm_avril.csv",
  "export_facturation_avril.xlsx",
  "export_relances_avril.csv",
];

const exportTables = [
  {
    label: "CRM",
    columns: ["Client", "Responsable", "Statut"],
    rows: [
      ["Alpha BTP", "Sarah", "Actif"],
      ["Nova Services", "Karim", "À vérifier"],
      ["Cobalt Conseil", "Sarah", "Actif"],
      ["Atlas Immo", "Lina", "Actif"],
    ],
  },
  {
    label: "Facturation",
    columns: ["Client", "Montant facturé", "Échéance"],
    rows: [
      ["Alpha BTP", "12 400 €", "30/04/2026"],
      ["Nova Services", "8 900 €", "—"],
      ["Cobalt Conseil", "-450 €", "25/04/2026"],
      ["Atlas Immo", "15 700 €", "10/04/2026"],
    ],
  },
  {
    label: "Relances",
    columns: ["Client", "Dernière relance", "Commentaire"],
    rows: [
      ["Alpha BTP", "12/04/2026", "Relance envoyée"],
      ["Nova Services", "—", "Date manquante"],
      ["Cobalt Conseil", "20/04/2026", "Montant à vérifier"],
      ["Atlas Immo", "03/04/2026", "Relance ancienne"],
    ],
  },
];

const consolidationMetrics = [
  ["4", "clients consolidés"],
  ["3", "exports rapprochés"],
  ["1", "client avec date manquante"],
  ["1", "montant négatif"],
  ["1", "relance ancienne"],
];

const controls = [
  {
    label: "Colonnes obligatoires présentes",
    result: "OK",
    tone: "green",
  },
  {
    label: "Montants négatifs",
    result: "1 point à vérifier",
    tone: "orange",
  },
  {
    label: "Échéances manquantes",
    result: "1 point à vérifier",
    tone: "orange",
  },
  {
    label: "Relances anciennes",
    result: "1 point à vérifier",
    tone: "orange",
  },
  {
    label: "Clients rapprochés entre exports",
    result: "OK",
    tone: "green",
  },
] as const;

const validationPoints = [
  "Compléter l'échéance Nova Services",
  "Vérifier le montant Cobalt Conseil",
  "Revoir la relance Atlas Immo",
];

function getControlToneClasses(tone: (typeof controls)[number]["tone"]) {
  return tone === "green"
    ? "border-[#D5E7DA] bg-[#F0FAF4] text-[#0F7A4F]"
    : "border-[#F0C7B2] bg-[#FFF3ED] text-[#C75A2A]";
}

function isStepVisible(activeStep: number, step: number) {
  return activeStep >= step;
}

export function ReportingWorkflowDemo() {
  const [activeStep, setActiveStep] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    if (activeStep >= steps.length) {
      setIsRunning(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveStep((step) => Math.min(step + 1, steps.length));
    }, 850);

    return () => window.clearTimeout(timeout);
  }, [activeStep, isRunning]);

  function launchSimulation() {
    setActiveStep(1);
    setIsRunning(true);
  }

  function selectStep(step: number) {
    setActiveStep(step);
    setIsRunning(false);
  }

  return (
    <div
      className="overflow-hidden rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] shadow-[0_24px_80px_rgba(17,17,14,0.09)]"
      data-reporting-demo
    >
      <div className="border-b border-[#DDD8CC] bg-[#F7F5EF] p-5 sm:p-6 lg:p-7">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>Simulation locale</Badge>
              <Badge className="border-[#D5E7DA] bg-[#F0FAF4] text-[#0F7A4F]">
                Données fictives
              </Badge>
            </div>
            <h3 className="mt-4 text-[26px] font-semibold leading-tight tracking-normal text-[#171713] sm:text-[32px]">
              Workflow de reporting automatisé
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#5F5A50]">
              Une simulation montre comment trois exports peuvent être
              rapprochés, contrôlés puis transformés en rapport prêt à valider.
            </p>
          </div>
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#11110E] bg-[#11110E] px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-[#2A2A24] hover:bg-[#2A2A24] sm:text-base"
            onClick={launchSimulation}
            type="button"
          >
            Lancer la simulation
          </button>
        </div>

        <ol
          aria-label="Progression de la simulation reporting"
          className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => {
            const visible = isStepVisible(activeStep, step.id);
            const current = activeStep === step.id;

            return (
              <li key={step.id}>
                <button
                  className={`grid min-h-24 w-full grid-cols-[36px_1fr] gap-3 rounded-xl border p-3 text-left transition ${
                    visible
                      ? "border-[#C9D4FF] bg-[#E8EDFF]"
                      : "border-[#DDD8CC] bg-[#FBFAF5]"
                  } ${current ? "shadow-[0_10px_28px_rgba(53,88,212,0.16)]" : ""}`}
                  onClick={() => selectStep(step.id)}
                  type="button"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-mono text-sm font-semibold text-[#3558D4]">
                    0{step.id}
                  </span>
                  <span>
                    <span className="block font-semibold text-[#171713]">{step.title}</span>
                    <span className="mt-1 block text-sm leading-5 text-[#5F5A50]">
                      {step.text}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:p-7">
        <section className="min-w-0 rounded-2xl border border-[#DDD8CC] bg-[#F7F5EF] p-4 sm:p-5">
          <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
            1 · Exports reçus
          </p>
          <div className="mt-4 grid gap-2">
            {exportsReceived.map((fileName) => (
              <div
                className="flex min-w-0 items-center gap-3 rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] px-4 py-3"
                key={fileName}
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#3558D4]" />
                <span className="min-w-0 break-words font-mono text-sm font-semibold text-[#171713]">
                  {fileName}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4">
            {exportTables.map((table) => (
              <div
                className="overflow-hidden rounded-xl border border-[#DDD8CC] bg-[#FBFAF5]"
                key={table.label}
              >
                <div className="border-b border-[#DDD8CC] bg-[#EFEDE5] px-4 py-3">
                  <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
                    {table.label}
                  </p>
                </div>
                <div className="hidden md:block">
                  <table className="w-full table-fixed border-collapse text-left">
                    <caption className="sr-only">
                      Données fictives de l'export {table.label}
                    </caption>
                    <thead>
                      <tr>
                        {table.columns.map((column) => (
                          <th
                            className="border-b border-[#DDD8CC] px-3 py-3 text-[11px] font-semibold uppercase leading-4 text-[#5F5A50]"
                            key={column}
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row) => (
                        <tr
                          className="border-b border-[#E6E1D6] last:border-b-0"
                          key={`${table.label}-${row[0]}`}
                        >
                          {row.map((cell, index) => (
                            <td
                              className="break-words px-3 py-3 text-sm leading-5 text-[#171713]"
                              key={`${table.label}-${row[0]}-${table.columns[index]}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid gap-3 p-3 md:hidden">
                  {table.rows.map((row) => (
                    <article
                      className="rounded-lg border border-[#DDD8CC] bg-[#F7F5EF] p-3"
                      key={`${table.label}-mobile-${row[0]}`}
                    >
                      <p className="font-semibold text-[#171713]">{row[0]}</p>
                      <dl className="mt-3 grid gap-2">
                        {table.columns.slice(1).map((column, index) => (
                          <div key={`${table.label}-${row[0]}-${column}`}>
                            <dt className="font-mono text-[11px] font-semibold uppercase text-[#3558D4]">
                              {column}
                            </dt>
                            <dd className="mt-1 break-words text-sm text-[#5F5A50]">
                              {row[index + 1]}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid min-w-0 gap-4 rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 sm:p-5">
          {activeStep >= 2 ? (
            <div className="rounded-xl border border-[#C9D4FF] bg-[#F4F6FF] p-4">
              <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
                2 · Consolidation
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {consolidationMetrics.map(([value, label], index) => {
                  const isAnomaly = index >= 2;

                  return (
                    <div
                      className={`rounded-xl border p-4 ${
                        isAnomaly
                          ? "border-[#F0C7B2] bg-[#FFF3ED]"
                          : "border-[#C9D4FF] bg-[#E8EDFF]"
                      }`}
                      key={label}
                    >
                      <p
                        className={`font-mono text-2xl font-semibold ${
                          isAnomaly ? "text-[#C75A2A]" : "text-[#3558D4]"
                        }`}
                      >
                        {value}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#5F5A50]">{label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-[#C9D4FF] bg-[#F4F6FF] p-4 text-sm leading-6 text-[#3558D4]">
              Lancez la simulation ou cliquez sur l'étape 2 pour afficher la
              consolidation.
            </div>
          )}

          {activeStep >= 3 ? (
            <div className="rounded-xl border border-[#F0C7B2] bg-[#FFF3ED] p-4">
              <p className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">
                3 · Contrôles automatiques
              </p>
              <ul className="mt-3 grid gap-2">
                {controls.map((control) => (
                  <li
                    className="grid gap-2 rounded-lg border border-white/60 bg-white/50 p-3 sm:grid-cols-[1fr_auto] sm:items-center"
                    key={control.label}
                  >
                    <span className="text-sm font-semibold text-[#171713]">
                      {control.label}
                    </span>
                    <span
                      className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${getControlToneClasses(control.tone)}`}
                    >
                      {control.result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4 text-sm leading-6 text-[#5F5A50]">
              Lancez la simulation ou cliquez sur l'étape 3 pour afficher les
              contrôles automatiques.
            </div>
          )}

          {activeStep >= 4 ? (
            <>
              <div className="rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4">
                <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
                  4 · Rapport prêt à valider
                </p>
                <div className="mt-4 rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4">
                  <p className="text-lg font-semibold text-[#171713]">
                    Reporting avril — pré-analyse
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#5F5A50]">
                    Les exports ont été consolidés. Trois points doivent être
                    vérifiés avant diffusion : une échéance manquante, un
                    montant négatif et une relance ancienne.
                  </p>
                  <p className="mt-4 font-mono text-xs font-semibold uppercase text-[#C75A2A]">
                    Points à valider
                  </p>
                  <ul className="mt-3 grid gap-2">
                    {validationPoints.map((point) => (
                      <li className="flex gap-3 text-sm leading-6 text-[#5F5A50]" key={point}>
                        <span
                          aria-hidden="true"
                          className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#F0C7B2] bg-[#FFF3ED] font-mono text-[10px] font-semibold text-[#C75A2A]"
                        >
                          !
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-[#D5E7DA] bg-[#F0FAF4] p-4">
                <p className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">
                  Validation humaine
                </p>
                <p className="mt-3 text-sm font-semibold leading-7 text-[#0F6B47]">
                  Le workflow prépare le reporting et signale les anomalies. La
                  diffusion finale reste validée par une personne.
                </p>
              </div>
            </>
          ) : null}
        </section>
      </div>
    </div>
  );
}
