import { Card } from "@/components/ui/Card";
import type { QA } from "@/content/services";

export function FAQ({ items }: { items: QA[] }) {
  if (!items.length) return null;

  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <Card className="p-5 sm:p-6" key={item.question}>
          <h3 className="text-lg font-semibold text-[#171713]">{item.question}</h3>
          <p className="mt-3 leading-7 text-[#5F5A50]">{item.answer}</p>
        </Card>
      ))}
    </div>
  );
}
