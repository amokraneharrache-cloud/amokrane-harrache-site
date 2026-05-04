import Link from "next/link";

import { Card } from "@/components/ui/Card";
import type { UseCase } from "@/content/useCases";

const headings = ["Processus", "Avant", "Automatisation possible", "Résultat attendu", "Service associé"];

function headingClass(heading: string) {
  if (heading === "Avant") return "text-[#C75A2A]";
  if (heading === "Automatisation possible") return "text-[#3558D4]";
  if (heading === "Résultat attendu") return "text-[#0F7A4F]";
  return "text-[#5F5A50]";
}

export function UseCaseGrid({ useCases }: { useCases: UseCase[] }) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-[#CFC7B8] bg-[#FBFAF5] shadow-[0_24px_70px_rgba(17,17,14,0.08)] md:block">
        <table className="w-full border-collapse text-left">
          <thead className="border-b border-[#D7D0C3] bg-[#EFEDE5]">
            <tr>
              {headings.map((heading) => (
                <th className={`px-4 py-4 font-mono text-xs font-semibold uppercase ${headingClass(heading)}`} key={heading}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD8CC]">
            {useCases.map((useCase) => (
              <tr className="transition hover:bg-[#F7F5EF]" key={useCase.title}>
                <th className="w-[20%] px-4 py-5 align-top text-sm font-semibold text-[#171713]">
                  {useCase.title}
                  <span className="mt-2 block text-xs font-normal leading-5 text-[#6F6A60]">
                    {useCase.problem}
                  </span>
                </th>
                <td className="w-[22%] px-4 py-5 align-top text-sm leading-6 text-[#4F4A43]">
                  {useCase.manualWork}
                </td>
                <td className="w-[22%] px-4 py-5 align-top text-sm leading-6 text-[#4F4A43]">
                  {useCase.automation}
                </td>
                <td className="w-[22%] px-4 py-5 align-top text-sm font-medium leading-6 text-[#0F7A4F]">
                  {useCase.expectedGain}
                </td>
                <td className="w-[14%] px-4 py-5 align-top text-sm leading-6">
                  <Link className="inline-flex rounded-full border border-[#D8E0FF] bg-[#F3F5FF] px-3 py-1.5 text-xs font-semibold leading-5 text-[#3558D4] hover:border-[#B7C5FF]" href={useCase.serviceHref}>
                    {useCase.service}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid min-w-0 gap-4 md:hidden">
        {useCases.map((useCase) => (
          <Card className="min-w-0" key={useCase.title}>
            <h3 className="break-words text-lg font-semibold text-[#171713] hyphens-auto">{useCase.title}</h3>
            <p className="mt-2 break-words text-sm leading-6 text-[#6F6A60]">{useCase.problem}</p>
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="font-mono text-xs font-semibold uppercase text-[#C75A2A]">Avant</dt>
                <dd className="mt-1 leading-6 text-[#5F5A50]">{useCase.manualWork}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
                  Automatisation possible
                </dt>
                <dd className="mt-1 leading-6 text-[#5F5A50]">{useCase.automation}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-semibold uppercase text-[#0F7A4F]">
                  Résultat attendu
                </dt>
                <dd className="mt-1 font-medium leading-6 text-[#0F7A4F]">{useCase.expectedGain}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
                  Service associé
                </dt>
                <dd className="mt-1 leading-6">
                  <Link className="inline-flex max-w-full whitespace-normal break-words rounded-full border border-[#D8E0FF] bg-[#F3F5FF] px-3 py-1.5 text-xs font-semibold leading-5 text-[#3558D4] hover:border-[#B7C5FF]" href={useCase.serviceHref}>
                    {useCase.service}
                  </Link>
                </dd>
              </div>
            </dl>
          </Card>
        ))}
      </div>
    </>
  );
}
