import { Card } from "@/components/ui/Card";

type Step = string | { title: string; description?: string };

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => {
        const title = typeof step === "string" ? step : step.title;
        const description = typeof step === "string" ? undefined : step.description;

        return (
          <li key={title}>
            <Card className="h-full">
              <span className="font-mono text-sm font-semibold text-[#3558D4]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#171713]">{title}</h3>
              {description ? (
                <p className="mt-3 leading-7 text-[#5F5A50]">{description}</p>
              ) : null}
            </Card>
          </li>
        );
      })}
    </ol>
  );
}
