import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  eyebrow,
  title,
  intro,
  id,
}: {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  id?: string;
}) {
  const hasCustomBackground = typeof className === "string" && /\bbg-/.test(className);

  return (
    <section className={cn(!hasCustomBackground && "bg-[#F7F5EF]", "py-16 sm:py-20", className)} id={id}>
      <Container>
        {(eyebrow || title || intro) && (
          <div className="mb-8 max-w-3xl sm:mb-10">
            {eyebrow ? (
              <p className="font-mono text-xs font-semibold uppercase text-[#3558D4]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-normal text-[#171713] sm:text-[38px]">
                {title}
              </h2>
            ) : null}
            {intro ? (
              <p className="mt-4 text-base leading-8 text-[#5F5A50] sm:text-lg">
                {intro}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
