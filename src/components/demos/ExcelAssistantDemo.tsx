import { Badge } from "@/components/ui/Badge";

const fileRows = [
  {
    client: "Alpha BTP",
    amount: "12 400 €",
    status: "En retard",
    followUpDate: "12/04/2026",
    comment: "Relance envoyée",
  },
  {
    client: "Nova Services",
    amount: "8 900 €",
    status: "À vérifier",
    followUpDate: "—",
    comment: "Date manquante",
  },
  {
    client: "Cobalt Conseil",
    amount: "-450 €",
    status: "Incohérent",
    followUpDate: "20/04/2026",
    comment: "Montant négatif",
  },
  {
    client: "Horizon RH",
    amount: "5 200 €",
    status: "OK",
    followUpDate: "18/04/2026",
    comment: "—",
  },
  {
    client: "Atlas Immo",
    amount: "15 700 €",
    status: "En retard",
    followUpDate: "03/04/2026",
    comment: "Relance ancienne",
  },
] as const;

const detectedColumns = [
  "Client",
  "Montant",
  "Statut",
  "Date de relance",
  "Commentaire",
];

const anomalies = [
  "1 date de relance manquante",
  "1 montant négatif à vérifier",
  "2 relances anciennes",
  "1 statut incohérent",
];

const checks = [
  "Confirmer le montant négatif Cobalt Conseil",
  "Compléter la date Nova Services",
  "Revoir les relances Alpha BTP et Atlas Immo",
  "Valider les statuts avant envoi",
];

const progress = [
  ["1", "Fichier"],
  ["2", "Analyse"],
  ["3", "Synthèse"],
  ["4", "Validation"],
];

function statusClass(status: (typeof fileRows)[number]["status"]) {
  switch (status) {
    case "OK":
      return "border-[#D5E7DA] bg-[#F0FAF4] text-[#0F7A4F]";
    case "En retard":
      return "border-[#F0C7B2] bg-[#FFF3ED] text-[#C75A2A]";
    case "Incohérent":
      return "border-[#F0C7B2] bg-[#FFF3ED] text-[#9D3F1B]";
    default:
      return "border-[#C9D4FF] bg-[#E8EDFF] text-[#3558D4]";
  }
}

export function ExcelAssistantDemo() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] shadow-[0_24px_80px_rgba(17,17,14,0.09)]"
      data-excel-demo
    >
      <style>{`
        @keyframes excelDemoStep {
          0%, 18%, 100% { transform: translateY(0); border-color: #DDD8CC; background: #FBFAF5; }
          8% { transform: translateY(-2px); border-color: #3558D4; background: #E8EDFF; }
        }

        @keyframes excelDemoSignal {
          0%, 24%, 100% { box-shadow: 0 0 0 rgba(199, 90, 42, 0); }
          12% { box-shadow: 0 0 0 4px rgba(199, 90, 42, 0.12); }
        }

        [data-excel-demo] [data-demo-step] {
          animation: excelDemoStep 14s ease-in-out infinite;
        }

        [data-excel-demo] [data-demo-step="2"] { animation-delay: 2s; }
        [data-excel-demo] [data-demo-step="3"] { animation-delay: 4s; }
        [data-excel-demo] [data-demo-step="4"] { animation-delay: 6s; }
        [data-excel-demo] [data-demo-alert] {
          animation: excelDemoSignal 9s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-excel-demo] [data-demo-step],
          [data-excel-demo] [data-demo-alert] {
            animation: none;
          }
        }
      `}</style>

      <div className="border-b border-[#DDD8CC] bg-[#F7F5EF] p-5 sm:p-6 lg:p-7">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
              Démo assistant Excel
            </p>
            <h3 className="mt-3 text-[26px] font-semibold leading-tight tracking-normal text-[#171713] sm:text-[32px]">
              Analyse d'un fichier Excel métier
            </h3>
          </div>
          <Badge className="border-[#D5E7DA] bg-[#F0FAF4] text-[#0F7A4F]">
            Données fictives
          </Badge>
        </div>

        <ol
          aria-label="Progression de la démonstration"
          className="mt-6 grid gap-2 sm:grid-cols-4"
        >
          {progress.map(([number, label]) => (
            <li
              className="flex min-h-12 items-center gap-3 rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] px-3 py-2"
              data-demo-step={number}
              key={label}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EDFF] font-mono text-sm font-semibold text-[#3558D4]">
                {number}
              </span>
              <span className="text-sm font-semibold text-[#171713]">{label}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:p-7">
        <section
          aria-labelledby="excel-demo-file"
          className="min-w-0 rounded-2xl border border-[#DDD8CC] bg-[#F7F5EF] p-4 sm:p-5"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
                Étape 1
              </p>
              <h4
                className="mt-2 text-lg font-semibold leading-tight text-[#171713]"
                id="excel-demo-file"
              >
                Fichier chargé
              </h4>
            </div>
            <span className="rounded-lg border border-[#DDD8CC] bg-[#FBFAF5] px-3 py-2 font-mono text-[11px] font-semibold text-[#5F5A50] sm:text-xs">
              reporting_clients_avril.xlsx
            </span>
          </div>

          <div className="mt-5 hidden overflow-hidden rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] lg:block">
            <table className="w-full table-fixed border-collapse text-left">
              <caption className="sr-only">
                Mini-tableau fictif extrait du fichier Excel chargé
              </caption>
              <colgroup>
                <col className="w-[20%]" />
                <col className="w-[15%]" />
                <col className="w-[17%]" />
                <col className="w-[22%]" />
                <col className="w-[26%]" />
              </colgroup>
              <thead className="bg-[#EFEDE5]">
                <tr>
                  {[
                    "Client",
                    "Montant",
                    "Statut",
                    "Date dernière relance",
                    "Commentaire",
                  ].map((column) => (
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
                {fileRows.map((row) => (
                  <tr className="border-b border-[#E6E1D6] last:border-b-0" key={row.client}>
                    <td className="break-words px-3 py-3 text-sm font-semibold leading-5 text-[#171713]">
                      {row.client}
                    </td>
                    <td className="break-words px-3 py-3 font-mono text-sm text-[#171713]">
                      {row.amount}
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex rounded-full border px-2 py-1 text-[11px] font-semibold leading-none ${statusClass(row.status)}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="break-words px-3 py-3 font-mono text-xs text-[#5F5A50]">
                      {row.followUpDate}
                    </td>
                    <td className="break-words px-3 py-3 text-xs leading-5 text-[#5F5A50]">
                      {row.comment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-3 lg:hidden">
            {fileRows.map((row) => (
              <article
                className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4"
                data-demo-alert={row.status === "OK" ? undefined : true}
                key={row.client}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-semibold text-[#171713]">{row.client}</p>
                  <span className="font-mono text-sm font-semibold text-[#171713]">
                    {row.amount}
                  </span>
                </div>
                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[11px] font-semibold uppercase text-[#8A857A]">
                      Statut
                    </dt>
                    <dd className="mt-1">
                      <span
                        className={`inline-flex rounded-full border px-2 py-1 text-[11px] font-semibold leading-none ${statusClass(row.status)}`}
                      >
                        {row.status}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] font-semibold uppercase text-[#8A857A]">
                      Date dernière relance
                    </dt>
                    <dd className="mt-1 font-mono text-[#5F5A50]">{row.followUpDate}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-mono text-[11px] font-semibold uppercase text-[#8A857A]">
                      Commentaire
                    </dt>
                    <dd className="mt-1 text-[#5F5A50]">{row.comment}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="excel-demo-analysis"
          className="grid min-w-0 gap-4 rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 sm:p-5"
        >
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
              Assistant
            </p>
            <h4
              className="mt-2 text-lg font-semibold leading-tight text-[#171713]"
              id="excel-demo-analysis"
            >
              Lecture préparée pour revue métier
            </h4>
          </div>

          <div className="rounded-xl border border-[#C9D4FF] bg-[#F4F6FF] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
              Étape 2 · Colonnes détectées
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {detectedColumns.map((column) => (
                <span
                  className="rounded-full border border-[#C9D4FF] bg-[#E8EDFF] px-3 py-1 text-sm font-semibold text-[#3558D4]"
                  key={column}
                >
                  {column}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#F0C7B2] bg-[#FFF3ED] p-4" data-demo-alert>
            <p className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">
              Étape 3 · Anomalies repérées
            </p>
            <ul className="mt-3 grid gap-2">
              {anomalies.map((anomaly) => (
                <li className="flex gap-3 text-sm leading-6 text-[#6D4938]" key={anomaly}>
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C75A2A]"
                  />
                  <span>{anomaly}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
              Étape 4 · Synthèse métier
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5F5A50]">
              Le fichier contient plusieurs comptes à suivre en priorité. Les
              relances anciennes et les champs manquants doivent être validés
              avant diffusion du reporting.
            </p>
          </div>

          <div className="rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">
              Étape 5 · Points à vérifier
            </p>
            <ul className="mt-3 grid gap-2">
              {checks.map((check) => (
                <li className="flex gap-3 text-sm leading-6 text-[#5F5A50]" key={check}>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#F0C7B2] bg-[#FFF3ED] font-mono text-[10px] font-semibold text-[#C75A2A]"
                  >
                    !
                  </span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[#D5E7DA] bg-[#F0FAF4] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">
              Étape 6 · Validation humaine
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-[#0F6B47]">
              L'assistant prépare la lecture, mais la décision finale reste
              validée par une personne.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
