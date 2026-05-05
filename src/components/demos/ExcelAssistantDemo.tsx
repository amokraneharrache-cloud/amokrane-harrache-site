"use client";

import { useId, useMemo, useRef, useState, type ChangeEvent } from "react";

import { Badge } from "@/components/ui/Badge";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_ROWS = 500;
const MAX_COLUMNS = 30;
const PREVIEW_ROWS = 5;
const PREVIEW_COLUMNS = 5;
const OLD_FOLLOW_UP_DAYS = 21;

type CellInput = string | number | boolean | Date | null | undefined;

type ParsedDataset = {
  columns: string[];
  fileName: string;
  rows: string[][];
  source: "example" | "upload";
  truncatedColumns: boolean;
  truncatedRows: boolean;
};

type Finding = {
  count: number;
  details: string[];
  key: string;
  title: string;
};

type Analysis = {
  findings: Finding[];
  pointsToCheck: string[];
  summary: string;
  totalPoints: number;
};

const exampleMatrix: CellInput[][] = [
  ["Client", "Montant", "Statut", "Date dernière relance", "Commentaire"],
  ["Alpha BTP", 12400, "En retard", "2026-04-12", "Relance envoyée"],
  ["Nova Services", 8900, "À vérifier", "", "Date manquante"],
  ["Cobalt Conseil", -450, "Incohérent", "2026-04-20", "Montant négatif"],
  ["Horizon RH", 5200, "OK", "2026-04-18", ""],
  ["Atlas Immo", 15700, "En retard", "2026-04-03", "Relance ancienne"],
];

const allowedExtensions = new Set([".csv", ".xlsx"]);

function getFileExtension(fileName: string) {
  const dotIndex = fileName.lastIndexOf(".");

  if (dotIndex < 0) {
    return "";
  }

  return fileName.slice(dotIndex).toLowerCase();
}

function normalizeCell(value: CellInput) {
  if (value === null || value === undefined) {
    return "";
  }

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? "" : value.toISOString().slice(0, 10);
  }

  return String(value)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeForSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function createDatasetFromMatrix(
  matrix: CellInput[][],
  fileName: string,
  source: ParsedDataset["source"],
): ParsedDataset {
  const maxDetectedColumns = matrix.reduce(
    (max, row) => Math.max(max, row.length),
    0,
  );
  const columnCount = Math.min(Math.max(maxDetectedColumns, 1), MAX_COLUMNS);
  const limitedRows = matrix.slice(0, MAX_ROWS + 1);
  const normalizedRows = limitedRows.map((row) =>
    Array.from({ length: columnCount }, (_, index) => normalizeCell(row[index])),
  );

  const headerRow = normalizedRows[0] ?? [];
  const columns = Array.from({ length: columnCount }, (_, index) => {
    const header = headerRow[index]?.trim();
    return header || `Colonne ${index + 1}`;
  });

  const rows = normalizedRows
    .slice(1)
    .filter((row) => row.some((cell) => cell.length > 0))
    .slice(0, MAX_ROWS);

  return {
    columns,
    fileName,
    rows,
    source,
    truncatedColumns: maxDetectedColumns > MAX_COLUMNS,
    truncatedRows: Math.max(matrix.length - 1, 0) > MAX_ROWS,
  };
}

function detectCsvDelimiter(firstLine: string) {
  const candidates = [",", ";", "\t"];
  let selected = ",";
  let selectedCount = -1;

  for (const candidate of candidates) {
    const count = firstLine.split(candidate).length;

    if (count > selectedCount) {
      selected = candidate;
      selectedCount = count;
    }
  }

  return selected;
}

function parseCsv(text: string): string[][] {
  const cleanedText = text.replace(/^\uFEFF/, "");
  const firstLine = cleanedText.split(/\r?\n/, 1)[0] ?? "";
  const delimiter = detectCsvDelimiter(firstLine);
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < cleanedText.length; index += 1) {
    const char = cleanedText[index];
    const nextChar = cleanedText[index + 1];

    if (char === "\"") {
      if (inQuotes && nextChar === "\"") {
        cell += "\"";
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && char === delimiter) {
      row.push(cell);
      cell = "";
      continue;
    }

    if (!inQuotes && (char === "\n" || char === "\r")) {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";

      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }

      if (rows.length >= MAX_ROWS + 1) {
        break;
      }

      continue;
    }

    cell += char;
  }

  if (rows.length < MAX_ROWS + 1 && (cell.length > 0 || row.length > 0)) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

function parseAmount(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  let normalized = trimmed
    .replace(/\u00A0/g, " ")
    .replace(/[€$£]/g, "")
    .replace(/\s/g, "");

  const lastComma = normalized.lastIndexOf(",");
  const lastDot = normalized.lastIndexOf(".");

  if (lastComma > lastDot) {
    normalized = normalized.replace(/\./g, "").replace(",", ".");
  } else {
    normalized = normalized.replace(/,/g, "");
  }

  normalized = normalized.replace(/[^0-9.-]/g, "");

  if (!normalized || normalized === "-" || normalized === ".") {
    return null;
  }

  const amount = Number(normalized);
  return Number.isFinite(amount) ? amount : null;
}

function parseDateValue(value: string, header: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  const isoMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/);

  if (isoMatch) {
    return new Date(Date.UTC(Number(isoMatch[1]), Number(isoMatch[2]) - 1, Number(isoMatch[3])));
  }

  const frenchMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (frenchMatch) {
    return new Date(
      Date.UTC(Number(frenchMatch[3]), Number(frenchMatch[2]) - 1, Number(frenchMatch[1])),
    );
  }

  const numericValue = Number(trimmed);
  const headerLooksLikeDate = normalizeForSearch(header).includes("date");

  if (headerLooksLikeDate && Number.isFinite(numericValue) && numericValue > 20000 && numericValue < 60000) {
    return new Date(Date.UTC(1899, 11, 30 + numericValue));
  }

  const parsed = Date.parse(trimmed);

  if (!Number.isNaN(parsed)) {
    return new Date(parsed);
  }

  return null;
}

function daysBetween(firstDate: Date, secondDate: Date) {
  const first = Date.UTC(
    firstDate.getUTCFullYear(),
    firstDate.getUTCMonth(),
    firstDate.getUTCDate(),
  );
  const second = Date.UTC(
    secondDate.getUTCFullYear(),
    secondDate.getUTCMonth(),
    secondDate.getUTCDate(),
  );

  return Math.floor((first - second) / 86_400_000);
}

function shortRowLabel(row: string[], index: number) {
  const firstCell = row[0]?.trim();
  return firstCell ? `Ligne ${index + 2} · ${firstCell}` : `Ligne ${index + 2}`;
}

function createFinding(
  findings: Finding[],
  key: string,
  title: string,
  details: string[],
  count = details.length,
) {
  if (count > 0) {
    findings.push({ count, details: details.slice(0, 5), key, title });
  }
}

function analyzeDataset(dataset: ParsedDataset): Analysis {
  const findings: Finding[] = [];
  const normalizedColumns = dataset.columns.map(normalizeForSearch);
  const amountColumns = normalizedColumns
    .map((column, index) => ({ column, index }))
    .filter(({ column }) =>
      ["montant", "amount", "total", "solde", "prix", "ca"].some((keyword) =>
        column.includes(keyword),
      ),
    )
    .map(({ index }) => index);
  const dateColumns = normalizedColumns
    .map((column, index) => ({ column, index }))
    .filter(({ column }) => column.includes("date") || column.includes("relance"))
    .map(({ index }) => index);
  const followUpColumns = normalizedColumns
    .map((column, index) => ({ column, index }))
    .filter(({ column }) => column.includes("relance"))
    .map(({ index }) => index);
  const statusColumns = normalizedColumns
    .map((column, index) => ({ column, index }))
    .filter(({ column }) =>
      column.includes("statut") || column.includes("status") || column.includes("etat"),
    )
    .map(({ index }) => index);

  const emptyDetails: string[] = [];
  let emptyCellCount = 0;

  dataset.rows.forEach((row, rowIndex) => {
    dataset.columns.forEach((column, columnIndex) => {
      if (!row[columnIndex]?.trim()) {
        emptyCellCount += 1;

        if (emptyDetails.length < 5) {
          emptyDetails.push(`${shortRowLabel(row, rowIndex)} : cellule vide dans "${column}"`);
        }
      }
    });
  });

  createFinding(findings, "empty", "Cellules vides", emptyDetails, emptyCellCount);

  const negativeAmountDetails: string[] = [];
  const amountValues: Array<{ amount: number; label: string }> = [];

  dataset.rows.forEach((row, rowIndex) => {
    amountColumns.forEach((columnIndex) => {
      const amount = parseAmount(row[columnIndex] ?? "");

      if (amount === null) {
        return;
      }

      const label = `${shortRowLabel(row, rowIndex)} : ${dataset.columns[columnIndex]} ${row[columnIndex]}`;
      amountValues.push({ amount, label });

      if (amount < 0) {
        negativeAmountDetails.push(label);
      }
    });
  });

  createFinding(findings, "negative", "Montants négatifs", negativeAmountDetails);

  const missingDateDetails: string[] = [];

  dataset.rows.forEach((row, rowIndex) => {
    dateColumns.forEach((columnIndex) => {
      if (!row[columnIndex]?.trim()) {
        missingDateDetails.push(
          `${shortRowLabel(row, rowIndex)} : date manquante dans "${dataset.columns[columnIndex]}"`,
        );
      }
    });
  });

  createFinding(findings, "missing-date", "Dates manquantes", missingDateDetails);

  const suspiciousStatusDetails: string[] = [];
  const suspiciousStatusWords = [
    "a verifier",
    "anomalie",
    "bloque",
    "erreur",
    "incoherent",
    "litige",
  ];

  dataset.rows.forEach((row, rowIndex) => {
    statusColumns.forEach((columnIndex) => {
      const status = normalizeForSearch(row[columnIndex] ?? "");

      if (suspiciousStatusWords.some((word) => status.includes(word))) {
        suspiciousStatusDetails.push(
          `${shortRowLabel(row, rowIndex)} : statut "${row[columnIndex]}"`,
        );
      }
    });
  });

  createFinding(findings, "status", "Statuts à vérifier", suspiciousStatusDetails);

  const duplicateDetails: string[] = [];
  const firstColumnOccurrences = new Map<string, { count: number; label: string }>();

  dataset.rows.forEach((row) => {
    const value = row[0]?.trim();

    if (!value) {
      return;
    }

    const key = normalizeForSearch(value);
    const current = firstColumnOccurrences.get(key);

    firstColumnOccurrences.set(key, {
      count: (current?.count ?? 0) + 1,
      label: current?.label ?? value,
    });
  });

  firstColumnOccurrences.forEach(({ count, label }) => {
    if (count > 1) {
      duplicateDetails.push(`"${label}" apparaît ${count} fois dans la première colonne`);
    }
  });

  createFinding(
    findings,
    "duplicate",
    "Doublons sur la première colonne",
    duplicateDetails,
    duplicateDetails.reduce((total, detail) => {
      const countMatch = detail.match(/apparaît (\d+)/);
      return total + Math.max(Number(countMatch?.[1] ?? 1) - 1, 1);
    }, 0),
  );

  const positiveAmounts = amountValues
    .map(({ amount }) => amount)
    .filter((amount) => amount > 0)
    .sort((first, second) => first - second);
  const highAmountDetails: string[] = [];

  if (positiveAmounts.length >= 4) {
    const median = positiveAmounts[Math.floor(positiveAmounts.length / 2)] ?? 0;
    const average =
      positiveAmounts.reduce((total, amount) => total + amount, 0) / positiveAmounts.length;
    const variance =
      positiveAmounts.reduce((total, amount) => total + (amount - average) ** 2, 0) /
      positiveAmounts.length;
    const threshold = Math.max(median * 2, average + Math.sqrt(variance) * 2);

    amountValues.forEach(({ amount, label }) => {
      if (amount > threshold) {
        highAmountDetails.push(`${label} semble anormalement élevé`);
      }
    });
  }

  createFinding(findings, "high-amount", "Montants anormalement élevés", highAmountDetails);

  const oldFollowUpDetails: string[] = [];
  const referenceDate = new Date();
  const followUpIndexes = followUpColumns.length > 0 ? followUpColumns : dateColumns;

  dataset.rows.forEach((row, rowIndex) => {
    followUpIndexes.forEach((columnIndex) => {
      const parsedDate = parseDateValue(row[columnIndex] ?? "", dataset.columns[columnIndex]);

      if (!parsedDate) {
        return;
      }

      const age = daysBetween(referenceDate, parsedDate);

      if (age > OLD_FOLLOW_UP_DAYS) {
        oldFollowUpDetails.push(
          `${shortRowLabel(row, rowIndex)} : relance de ${age} jours (${row[columnIndex]})`,
        );
      }
    });
  });

  createFinding(findings, "old-follow-up", "Relances anciennes", oldFollowUpDetails);

  const sortedFindings = [...findings].sort((first, second) => second.count - first.count);
  const totalPoints = findings.reduce((total, finding) => total + finding.count, 0);
  const frequentLabels = sortedFindings
    .slice(0, 3)
    .map((finding) => finding.title.toLowerCase())
    .join(", ");
  const summary =
    totalPoints > 0
      ? `Le fichier contient ${dataset.rows.length} lignes analysées, ${dataset.columns.length} colonnes détectées et ${totalPoints} points à vérifier. Les anomalies les plus fréquentes concernent ${frequentLabels}.`
      : `Le fichier contient ${dataset.rows.length} lignes analysées et ${dataset.columns.length} colonnes détectées. Aucun point bloquant simple n'a été détecté par ces règles de démonstration.`;
  const pointsToCheck = sortedFindings.flatMap((finding) => finding.details).slice(0, 6);

  return {
    findings: sortedFindings,
    pointsToCheck:
      pointsToCheck.length > 0
        ? pointsToCheck
        : ["Relire le fichier avec les règles métier avant toute diffusion."],
    summary,
    totalPoints,
  };
}

function formatFileSize(size: number) {
  return `${(size / 1024 / 1024).toFixed(1)} Mo`;
}

export function ExcelAssistantDemo() {
  const fileInputId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dataset, setDataset] = useState<ParsedDataset>(() =>
    createDatasetFromMatrix(exampleMatrix, "reporting_clients_avril.xlsx", "example"),
  );
  const [error, setError] = useState<string | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const analysis = useMemo(() => analyzeDataset(dataset), [dataset]);
  const previewColumns = dataset.columns.slice(0, PREVIEW_COLUMNS);
  const previewRows = dataset.rows.slice(0, PREVIEW_ROWS);

  function loadExample() {
    setError(null);
    setDataset(createDatasetFromMatrix(exampleMatrix, "reporting_clients_avril.xlsx", "example"));
  }

  async function parseXlsxFile(file: File) {
    const { readSheet } = await import("read-excel-file/browser");
    const rows = await readSheet(file);
    return rows as unknown as CellInput[][];
  }

  async function handleFile(file: File) {
    const extension = getFileExtension(file.name);

    setError(null);

    if (!allowedExtensions.has(extension)) {
      setError("Format refusé. La démo accepte uniquement les fichiers .xlsx et .csv.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(`Fichier trop volumineux : ${formatFileSize(file.size)}. Limite maximale : 5 Mo.`);
      return;
    }

    setIsParsing(true);

    try {
      const matrix =
        extension === ".csv" ? parseCsv(await file.text()) : await parseXlsxFile(file);

      if (matrix.length === 0) {
        setError("Le fichier semble vide ou illisible.");
        return;
      }

      setDataset(createDatasetFromMatrix(matrix, file.name, "upload"));
    } catch {
      setError("Le fichier n'a pas pu être lu localement. Vérifiez son format puis réessayez.");
    } finally {
      setIsParsing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      void handleFile(file);
    }
  }

  return (
    <div
      className="overflow-hidden rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] shadow-[0_24px_80px_rgba(17,17,14,0.09)]"
      data-excel-demo
    >
      <div className="border-b border-[#DDD8CC] bg-[#F7F5EF] p-5 sm:p-6 lg:p-7">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>Analyse locale</Badge>
              <Badge className="border-[#D5E7DA] bg-[#F0FAF4] text-[#0F7A4F]">
                Données non envoyées
              </Badge>
            </div>
            <h3 className="mt-4 text-[26px] font-semibold leading-tight tracking-normal text-[#171713] sm:text-[32px]">
              Analyse d'un fichier Excel ou CSV métier
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#5F5A50]">
              Testez une pré-analyse rule-based avec un fichier fictif ou un
              export local. La démo repère les colonnes, les cellules vides,
              les anomalies simples et les points à valider.
            </p>
          </div>
          <div className="rounded-xl border border-[#D5E7DA] bg-[#F0FAF4] p-4 text-sm leading-6 text-[#0F6B47] lg:max-w-xs">
            <p className="font-semibold text-[#0F7A4F]">Votre fichier reste local.</p>
            <p className="mt-1">
              Il est analysé dans votre navigateur et n'est pas envoyé à un
              serveur.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#11110E] bg-[#11110E] px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-[#2A2A24] hover:bg-[#2A2A24] sm:text-base"
            onClick={loadExample}
            type="button"
          >
            Tester avec un fichier exemple
          </button>
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#DDD8CC] bg-[#FBFAF5] px-5 py-3 text-center text-sm font-semibold text-[#171713] transition hover:border-[#BEB7A8] hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
            disabled={isParsing}
            onClick={() => fileInputRef.current?.click()}
            type="button"
          >
            {isParsing ? "Analyse en cours..." : "Importer un fichier Excel ou CSV"}
          </button>
          <input
            aria-label="Importer un fichier Excel ou CSV"
            accept=".xlsx,.csv"
            className="sr-only"
            id={fileInputId}
            onChange={handleFileChange}
            ref={fileInputRef}
            type="file"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-[#5F5A50]">
          {[".xlsx ou .csv", "5 Mo max", "500 lignes", "30 colonnes", "formules non évaluées"].map(
            (limit) => (
              <span
                className="rounded-full border border-[#DDD8CC] bg-[#FBFAF5] px-3 py-1"
                key={limit}
              >
                {limit}
              </span>
            ),
          )}
        </div>

        {error ? (
          <p
            className="mt-5 rounded-xl border border-[#F0C7B2] bg-[#FFF3ED] p-4 text-sm font-semibold leading-6 text-[#9D3F1B]"
            role="alert"
          >
            {error}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:p-7">
        <section className="min-w-0 rounded-2xl border border-[#DDD8CC] bg-[#F7F5EF] p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
                Aperçu fichier
              </p>
              <h4 className="mt-2 text-lg font-semibold leading-tight text-[#171713]">
                {dataset.fileName}
              </h4>
            </div>
            <Badge
              className={
                dataset.source === "example"
                  ? "border-[#D5E7DA] bg-[#F0FAF4] text-[#0F7A4F]"
                  : "border-[#C9D4FF] bg-[#E8EDFF] text-[#3558D4]"
              }
            >
              {dataset.source === "example" ? "Fichier exemple" : "Fichier importé"}
            </Badge>
          </div>

          <dl className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["Lignes analysées", String(dataset.rows.length)],
              ["Colonnes détectées", String(dataset.columns.length)],
              ["Points à vérifier", String(analysis.totalPoints)],
            ].map(([label, value]) => (
              <div className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4" key={label}>
                <dt className="font-mono text-[11px] font-semibold uppercase text-[#8A857A]">
                  {label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-[#171713]">{value}</dd>
              </div>
            ))}
          </dl>

          {(dataset.truncatedRows || dataset.truncatedColumns) ? (
            <p className="mt-4 rounded-xl border border-[#C9D4FF] bg-[#E8EDFF] p-3 text-sm leading-6 text-[#3558D4]">
              Analyse limitée aux {MAX_ROWS} premières lignes et aux {MAX_COLUMNS} premières
              colonnes pour garder la démo rapide et lisible.
            </p>
          ) : null}

          <div className="mt-5 hidden overflow-hidden rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] md:block">
            <table className="w-full table-fixed border-collapse text-left">
              <caption className="sr-only">Aperçu des cinq premières lignes analysées</caption>
              <thead className="bg-[#EFEDE5]">
                <tr>
                  {previewColumns.map((column, columnIndex) => (
                    <th
                      className="border-b border-[#DDD8CC] px-3 py-3 text-[11px] font-semibold uppercase leading-4 text-[#5F5A50]"
                      key={`${column}-${columnIndex}`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {previewRows.map((row, rowIndex) => (
                  <tr className="border-b border-[#E6E1D6] last:border-b-0" key={`row-${rowIndex}`}>
                    {previewColumns.map((column, columnIndex) => (
                      <td
                        className="break-words px-3 py-3 text-sm leading-5 text-[#171713]"
                        key={`${column}-${columnIndex}`}
                      >
                        {row[columnIndex] || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-3 md:hidden">
            {previewRows.map((row, rowIndex) => (
              <article
                className="rounded-xl border border-[#DDD8CC] bg-[#FBFAF5] p-4"
                key={`mobile-row-${rowIndex}`}
              >
                <p className="font-mono text-[11px] font-semibold uppercase text-[#8A857A]">
                  Ligne {rowIndex + 2}
                </p>
                <dl className="mt-3 grid gap-3">
                  {previewColumns.map((column, columnIndex) => (
                    <div key={`${column}-${columnIndex}`}>
                      <dt className="font-mono text-[11px] font-semibold uppercase text-[#3558D4]">
                        {column}
                      </dt>
                      <dd className="mt-1 break-words text-sm leading-6 text-[#171713]">
                        {row[columnIndex] || "—"}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          {dataset.columns.length > PREVIEW_COLUMNS ? (
            <p className="mt-4 text-sm leading-6 text-[#5F5A50]">
              Aperçu limité aux {PREVIEW_COLUMNS} premières colonnes pour éviter
              tout défilement horizontal.
            </p>
          ) : null}
        </section>

        <section className="grid min-w-0 gap-4 rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-4 sm:p-5">
          <div className="rounded-xl border border-[#C9D4FF] bg-[#F4F6FF] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
              Colonnes détectées
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {dataset.columns.map((column, columnIndex) => (
                <span
                  className="break-words rounded-full border border-[#C9D4FF] bg-[#E8EDFF] px-3 py-1 text-sm font-semibold text-[#3558D4]"
                  key={`${column}-${columnIndex}`}
                >
                  {column}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#F0C7B2] bg-[#FFF3ED] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">
              Anomalies simples
            </p>
            {analysis.findings.length > 0 ? (
              <ul className="mt-3 grid gap-3">
                {analysis.findings.map((finding) => (
                  <li
                    className="rounded-lg border border-[#F0C7B2] bg-white/45 p-3"
                    key={finding.key}
                  >
                    <p className="font-semibold text-[#6D4938]">
                      {finding.title} · {finding.count}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#6D4938]">
                      {finding.details[0]}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm leading-6 text-[#6D4938]">
                Aucune anomalie simple détectée par les règles de démonstration.
              </p>
            )}
          </div>

          <div className="rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
              Synthèse métier automatique
            </p>
            <p className="mt-3 text-sm leading-7 text-[#5F5A50]">{analysis.summary}</p>
          </div>

          <div className="rounded-xl border border-[#DDD8CC] bg-[#F7F5EF] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">
              Points à vérifier
            </p>
            <ul className="mt-3 grid gap-2">
              {analysis.pointsToCheck.map((point) => (
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

          <div className="rounded-xl border border-[#D5E7DA] bg-[#F0FAF4] p-4">
            <p className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">
              Validation humaine
            </p>
            <p className="mt-3 text-sm font-semibold leading-7 text-[#0F6B47]">
              Cette pré-analyse prépare la lecture du fichier. Les décisions
              métier, corrections et diffusions restent validées par une personne.
            </p>
          </div>
        </section>
      </div>

      <div className="border-t border-[#DDD8CC] bg-[#F7F5EF] p-5 sm:p-6 lg:p-7">
        <div className="rounded-2xl border border-[#DDD8CC] bg-[#FBFAF5] p-5">
          <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
            Sécurité de la démo
          </p>
          <p className="mt-3 text-sm leading-7 text-[#5F5A50] sm:text-base">
            Cette démonstration fonctionne côté navigateur. Le fichier n'est pas
            transmis à Amokrane Harrache, ni stocké par le site. Pour un projet
            réel, les règles de traitement, les accès et les données sensibles
            doivent être cadrés avant automatisation.
          </p>
        </div>
      </div>
    </div>
  );
}
